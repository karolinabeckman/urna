export default function Rodape() {
	return (
		<footer className="bg-zinc-900">
			<div className="flex justify-end items-center container h-20">
				<p>Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
			</div>
		</footer>
	);
}
