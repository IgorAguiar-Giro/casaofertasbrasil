import React from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="border-2 rounded-lg shadow-md p-6 bg-white w-full max-w-md">
          <form className="flex flex-col space-y-4">
            <label className="flex flex-col">
              Email de Cadastro:
              <input
                type="text"
                name="email"
                placeholder="exemplo@email.com.br"
                className="border rounded-lg p-2 mt-1"
              />
            </label>
            <label className="flex flex-col">
              Senha:
              <input
                type="password"
                name="password"
                placeholder="Digite sua senha"
                className="border rounded-lg p-2 mt-1"
              />
            </label>
            <input
              type="submit"
              value="Submit"
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
    </>
  );
}
