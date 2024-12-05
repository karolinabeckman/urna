import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Aplicação de Votação",
	description: "Aplicação de Votação com Next",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body>{children}</body>
		</html>
	);
}
