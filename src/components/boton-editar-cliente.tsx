import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function BotonEditarCliente({ idCliente }: { idCliente: string }) {
  return (
    <Link
      href={`/clientes/${idCliente}/editar`}
      className={buttonVariants({ variant: "secondary" })}
    >
      Editar
    </Link>
  );
}
