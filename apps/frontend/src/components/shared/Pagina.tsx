import React from "react";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

export interface PaginaProps {
	children: React.ReactNode;
}
// export default function Pagina(props: any) {
export default function Pagina(props: PaginaProps) {
	return (
		<div className="flex flex-col h-screen">
			<Cabecalho />
			<main className="flex-1 py-10 container w-full">{props.children}</main>
			<Rodape />
		</div>
	);
}
