"use client";
import FormularioCandidato from "@/components/candidato/FormularioCandidato";
import ListaCandidatos from "@/components/candidato/ListaCandidatos";
import candidatosIniciais from "@/data/constants/candidatos";
import Candidato from "@/data/model/Candidato";
import { useState } from "react";

export default function PaginaCandidato() {
	const [candidatoSelecionado, setCandidatoSelecionado] =
		useState<Partial<Candidato> | null>(null);

	const [candidatos, setCandidatos] = useState(candidatosIniciais);

	function excluirCandidato(candidato: Candidato) {
		setCandidatos(candidatos.filter((c) => c.id !== candidato.id));
	}

	function salvarCandidato(candidato: Partial<Candidato>) {
		if (candidato.id) {
			setCandidatos(
				candidatos.map((c) =>
					c.id === candidato.id ? (candidato as Candidato) : c
				)
			);
		} else {
			const id = Math.random();
			setCandidatos([...candidatos, { ...candidato, id } as Candidato]);
		}
		setCandidatoSelecionado(null);
	}
	// function excluirPrimeiroCandidato() {
	// 	const candidatosRestantes = candidatos.slice(1);
	// 	setCandidatos(candidatosRestantes);
	// }

	return (
		<div>
			{/* <div className="flex justify-between mb-4">
				<button className="botao azul">Novo Candidato</button>
				<button className="botao vermelho" onClick={excluirPrimeiroCandidato}>
					Excluir Primeiro Candidato
				</button> 
			</div> */}
			{candidatoSelecionado ? (
				<FormularioCandidato
					candidato={candidatoSelecionado}
					cancelar={() => setCandidatoSelecionado(null)}
					salvarCandidato={salvarCandidato}
				/>
			) : (
				<div className="flex flex-col gap-5">
					<button
						className="botao azul self-end"
						onClick={() => setCandidatoSelecionado({})}
					>
						Novo Candidato
					</button>
					<ListaCandidatos
						candidatos={candidatos}
						selecionarCandidato={setCandidatoSelecionado}
						excluirCandidato={excluirCandidato}
					/>
				</div>
			)}
		</div>
	);
}
