import { actualizarCliente, crearCliente } from "@/actions/cliente-actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Cliente } from "@prisma/client";
import { Label } from "@radix-ui/react-label";

export default function FormularioCliente({ cliente }: { cliente?: Cliente }) {
  const ejecutarFuncion = cliente?.id ? actualizarCliente : crearCliente;

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Agregar Cliente</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={ejecutarFuncion}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="nombre">Nombre*</Label>
              <Input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Nombre del cliente"
                defaultValue={cliente?.nombre}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="apellido">Apellido*</Label>
              <Input
                id="apellido"
                name="apellido"
                type="text"
                placeholder="Apellido del cliente"
                defaultValue={cliente?.apellido}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="segundo-apellido">Segundo Apellido</Label>
              <Input
                id="segundo-apellido"
                name="segundo-apellido"
                type="text"
                placeholder="Segundo apellido (opcional)"
                defaultValue={cliente?.segundo_apellido || ""}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email*</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="cliente@mail.com"
                defaultValue={cliente?.email}
                required
              />
            </div>
            <div className="flex justify-start">
              <Label htmlFor="estado">Estado:</Label>
              <Input
                id="estado"
                name="estado"
                type="checkbox"
                defaultChecked={cliente ? cliente.estado : true}
                // className="h-4 w-4"
              />
            </div>
            <input type="hidden" name="id-cliente" value={cliente?.id}></input>
            <Button className="bg-green-500 text-white">Guardar</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
