import prisma from "@/lib/prisma";

//TODO editar tipos de datos
export async function createClienteData(data: any) {
  return await prisma.cliente.create({ data });
}

export async function eliminarClienteData(data: any) {
  return await prisma.cliente.create({ data });
}

export async function updateClienteData(id: string, data: any) {
  return await prisma.cliente.update({ where: { id }, data });
}

export async function obtenerClientes() {
  return await prisma.cliente.findMany();
}
