import { crearCliente } from "@/actions/cliente-actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function CrearForm() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Agregar Cliente</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={crearCliente}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="nombre">Nombre*</Label>
              <Input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Nombre del cliente"
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
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email*</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="cliente@mail.com"
                required
              />
            </div>
            <div className="flex justify-start">
              <Label htmlFor="estado">Estado:</Label>
              <Input id="estado" name="estado" type="checkbox" />
            </div>
            <Button className="bg-green-500 text-white">Guardar</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
