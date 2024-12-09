"use client";
import ContextoAutenticacao from "@/data/contexts/ContextoAutenticacao";
import Link from "next/link";
import { useContext } from "react";

export default function Cabecalho() {
	const { usuario, logout } = useContext(ContextoAutenticacao);
	return (
		<header className="bg-zinc-900">
			<div className="flex justify-between items-center container h-24">
				<h1 className="text-white text-2xl font-bold">Eleições 2025</h1>
				<nav className="flex gap-5 mr-5 items-center">
					<Link href="/">Início</Link>
					{usuario !== null && (
						<>
							<Link href="/candidato">Candidatos</Link>
							<Link href="/eleitor">Eleitor</Link>
						</>
					)}
					{usuario === null ? (
						<>
							<Link href="/auth" className="botao azul">
								Login
							</Link>
						</>
					) : (
						<button onClick={logout} className="botao vermelho">
							{" "}
							Sair
						</button>
					)}
				</nav>
			</div>
		</header>
	);
}
