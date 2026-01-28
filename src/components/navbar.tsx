import Link from "next/link";
import { buttonVariants } from "./ui/button";

function NavBar() {
  return (
    <nav className="flex justify-between">
      <h1>Prueba</h1>
      <div className="flex gap-x-2 items-center">
        <Link
          href="/clientes/crear"
          className={buttonVariants({ variant: "secondary" })}
        >
          Crear cliente
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
