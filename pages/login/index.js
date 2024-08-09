import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "components/users/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        // Substitua pelo endpoint real
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(error.message || "Falha no login");
        return;
      }

      const userData = await response.json();
      login(userData); // Definir o usuário no contexto
      router.push("/"); // Redirecionar para a página inicial ou outra página
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="border-2 rounded-lg shadow-md p-6 bg-white w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="flex flex-col">
            Email de Cadastro:
            <input
              type="text"
              name="email"
              placeholder="exemplo@email.com.br"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg p-2 mt-1"
            />
          </label>
          <label className="flex flex-col">
            Senha:
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-lg p-2 mt-1"
            />
          </label>
          <input
            type="submit"
            value="Entrar"
            className="bg-black rounded-lg text-white p-2 mt-4 cursor-pointer"
          />
        </form>

        <div className="flex justify-end mt-4">
          <button onClick={() => router.push("/")} className="px-4 py-2">
            Não Possui conta? Cadastre-se!
          </button>
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={() => router.push("/")} className="px-4 py-2">
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
