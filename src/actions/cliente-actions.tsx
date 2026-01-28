"use server";

import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function crearCliente(formData: FormData) {
  const nombre = formData.get("nombre")?.toString();
  const apellido = formData.get("apellido")?.toString();
  const segundoApellido = formData.get("segundo-apellido")?.toString();
  const email = formData.get("email")?.toString();
  const estado = formData.get("estado") === "on";

  console.log({ nombre, email, apellido, segundoApellido, estado });

  if (!nombre || !email || !apellido) return;

  const newCliente = await prisma.cliente.create({
    data: {
      nombre: nombre,
      email: email,
      apellido: apellido,
      segundo_apellido: segundoApellido,
      estado: estado,
    },
  });

  console.log(newCliente);
  redirect("/");
}

export async function eliminarCliente(formData: FormData) {
  const idCliente = formData.get("id-cliente")?.toString();

  if (!idCliente) return;

  console.log(idCliente);
  await prisma.cliente.delete({ where: { id: idCliente } });
  revalidatePath("/");
}
