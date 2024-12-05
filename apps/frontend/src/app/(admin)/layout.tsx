import Pagina from "@/components/shared/Pagina";
import React from "react";

export interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
	return <Pagina>{props.children}</Pagina>;
}
