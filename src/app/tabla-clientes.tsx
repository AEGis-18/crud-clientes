import { DataTable } from "@/components/data-table";
import { Cliente } from "@prisma/client";
import { columns } from "./clientes/columnas";
import { getAllClientes } from "@/lib/services/cliente-service";

export default async function TablaClientes() {
  const data = await getAllClientes();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Lista de Clientes</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
