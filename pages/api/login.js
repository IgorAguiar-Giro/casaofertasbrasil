import { Client } from "pg";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email e senha são obrigatórios" });
    }

    const client = new Client({
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      user: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
    });

    try {
      await client.connect();
      const result = await client.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );

      if (result.rows.length === 0) {
        return res.status(401).json({ message: "Usuário não encontrado" });
      }

      const user = result.rows[0];

      // Comparar a senha fornecida com a senha armazenada
      if (user.password_hash !== password) {
        return res.status(401).json({ message: "Senha incorreta" });
      }

      // Retornar dados do usuário (ajuste conforme necessário)
      res
        .status(200)
        .json({ id: user.id, email: user.email, username: user.username });
    } catch (error) {
      console.error("Erro ao conectar com o banco de dados:", error);
      res.status(500).json({ message: "Erro interno do servidor" });
    } finally {
      await client.end();
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
