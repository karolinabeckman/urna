"use client";
import { createContext, useState } from "react";
import { loginUsuario, Usuario } from "@urna/auth";
import { useRouter } from "next/navigation";
import { useAPI } from "../hooks/useAPI";

interface ContextoAutenticacaoProps {
	usuario: Partial<Usuario> | null;
	cadastrar: (usuario: Partial<Usuario>) => Promise<void>;
	login: (email: string, senha: string) => Promise<void>;
	logout: () => void;
	// alterarUsuario: (usuario: Partial<Usuario>) => void;
}

const ContextoAutenticacao = createContext<ContextoAutenticacaoProps>(
	{} as any
);

export function ProvedorAutenticacao(props: any) {
	const [usuario, setUsuario] = useState<Partial<Usuario> | null>(null);
	const router = useRouter();

	const { httpGet } = useAPI();

	async function cadastrar(usuario: Partial<Usuario>) {
		const resultado = await httpGet("");
		console.log(resultado);
		alert(resultado);
		console.log(usuario);
	}
	async function login(email: string, senha: string) {
		// Chamar a API via backend
		try {
			const usuario = loginUsuario(email, senha);
			setUsuario(usuario);

			router.push("/");
		} catch (e: any) {
			alert(e.message);
		}
	}

	function logout() {
		setUsuario(null);
	}

	return (
		<ContextoAutenticacao.Provider
			value={{
				usuario,
				login,
				logout,
				cadastrar,
			}}
		>
			{props.children}
		</ContextoAutenticacao.Provider>
	);
}
export default ContextoAutenticacao;
