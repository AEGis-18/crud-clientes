import { BotonBorrarCliente } from "@/components/boton-borrar-cliente";
import { BotonEditarCliente } from "@/components/boton-editar-cliente";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/lib/prisma";

export default async function Home() {
  const clientes = await prisma?.cliente.findMany();

  return (
    <div className="">
      Home Page
      <div className="grid grid-cols-3">
        {clientes?.map((cliente) => (
          <Card className="w-full max-w-sm" key={cliente.id}>
            <CardHeader>
              <CardTitle>
                {cliente.nombre +
                  " " +
                  cliente.apellido +
                  " " +
                  cliente.segundo_apellido}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h2>{cliente.email}</h2>
              <p>{cliente.estado ? "Activo" : "No activo"}</p>
              <p>{new Date(cliente.fechaCreacion).toLocaleDateString()}</p>
            </CardContent>
            <CardFooter className="flex justify-end items-center">
              <BotonEditarCliente idCliente={cliente.id} />
              <BotonBorrarCliente idCliente={cliente.id} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
