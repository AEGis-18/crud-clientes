"use server";

import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { clienteSchema } from "@/lib/zod";
import {
  createClienteData,
  deleteClienteData,
} from "@/lib/services/cliente-service";

export async function crearCliente(formData: FormData) {
  const nombre = formData.get("nombre")?.toString();
  const apellido = formData.get("apellido")?.toString();
  const segundoApellido = formData.get("segundo-apellido")?.toString();
  const email = formData.get("email")?.toString();
  const estado = formData.get("estado") === "on";

  const cliente = clienteSchema.safeParse({
    nombre,
    apellido,
    segundoApellido,
    email,
    estado,
  });

  if (!cliente.success) return;

  await createClienteData(cliente.data);

  redirect("/");
}

export async function eliminarCliente(formData: FormData) {
  const idCliente = formData.get("id-cliente")?.toString();

  if (!idCliente) return;

  console.log(idCliente);
  await deleteClienteData(idCliente);
  revalidatePath("/");
}

export async function actualizarCliente(formData: FormData) {
  const idCliente = formData.get("id-cliente")?.toString();
  const nombre = formData.get("nombre")?.toString();
  const apellido = formData.get("apellido")?.toString();
  const segundoApellido = formData.get("segundo-apellido")?.toString();
  const email = formData.get("email")?.toString();
  const estado = formData.get("estado") === "on";
  // const fechaActualizacion = Date.now();

  if (!nombre || !email || !apellido || !idCliente) return;

  const newCliente = await prisma.cliente.update({
    where: { id: idCliente },
    data: {
      nombre: nombre,
      email: email,
      apellido: apellido,
      segundo_apellido: segundoApellido,
      estado: estado,
      //fechaActualizacion:fechaActualizacion
    },
  });

  console.log(newCliente);
  redirect("/");
}
