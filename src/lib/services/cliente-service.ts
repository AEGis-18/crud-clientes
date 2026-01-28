import prisma from "@/lib/prisma";

//TODO editar tipos de datos
export async function createClienteData(data: any) {
  return await prisma.cliente.create({ data });
}

export async function deleteClienteData(id: string) {
  return await prisma.cliente.delete({ where: { id } });
}

export async function updateClienteData(id: string, data: any) {
  return await prisma.cliente.update({ where: { id }, data });
}

export async function getAllClientes() {
  return await prisma.cliente.findMany();
}

//TODO mail, nombres
export async function getClientes() {
  return await prisma.cliente.findMany();
}
