import Link from "next/link";

export default function Cabecalho() {
	return (
		<header className="bg-zinc-900">
			<div className="flex justify-between items-center container h-24">
				<h1 className="text-white text-2xl font-bold">Eleições 2025</h1>
				<nav className="flex gap-5 mr-5">
					<Link href="/">Início</Link>
					<Link href="/candidato">Candidatos</Link>
					<Link href="/eleitor">Eleitor</Link>
				</nav>
			</div>
		</header>
	);
}
