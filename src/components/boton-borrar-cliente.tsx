import { eliminarCliente } from "@/actions/cliente-actions";
import { Button } from "./ui/button";

export function BotonBorrarCliente({ idCliente }: { idCliente: string }) {
  return (
    <form action={eliminarCliente}>
      <input type="hidden" name="id-cliente" value={idCliente} />
      <Button className="bg-red-500 text-white hover:bg-red-400">
        Eliminar
      </Button>
    </form>
  );
}
