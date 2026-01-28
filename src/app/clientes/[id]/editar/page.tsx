import prisma from "@/lib/prisma";
import FormularioCliente from "../../crear/formulario-cliente";
import { redirect } from "next/navigation";

export default async function EditarCliente({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  console.log({ id });

  const cliente = await prisma.cliente.findUnique({
    where: { id: id },
  });

  if (!cliente) {
    redirect("/404");
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <FormularioCliente cliente={cliente} />
      </div>
    </>
  );
}
