"use client";

import { BotonBorrarCliente } from "@/components/boton-borrar-cliente";
import { BotonEditarCliente } from "@/components/boton-editar-cliente";
import { Cliente } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export type Clientes = {
  nombre: string;
  apellido: string;
  segundo_apellido: string;
  email: string;
  estado: boolean;
  fechaCreacion: Date;
};

export const columns: ColumnDef<Cliente>[] = [
  {
    accessorKey: "nombre",
    header: "Nombre",
  },
  {
    accessorKey: "apellido",
    header: "Apellido",
  },
  {
    accessorKey: "segundo_apellido",
    header: "Segundo Apellido",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) => (
      <span>{row.original.estado ? "Activo" : "Inactivo"}</span>
    ),
  },
  {
    accessorKey: "fechaCreacion",
    header: "Creación",
    cell: ({ row }) => {
      return (
        <div className="lowercase">
          {format(new Date(row.getValue("fechaCreacion")), "dd/MM/yyyy HH:mm", {
            locale: es,
          })}
        </div>
      );
    },
  },
  {
    accessorKey: "fechaActualizacion",
    header: "Actualización",
    cell: ({ row }) => {
      return (
        <div className="lowercase">
          {format(new Date(row.getValue("fechaCreacion")), "dd/MM/yyyy HH:mm", {
            locale: es,
          })}
        </div>
      );
    },
  },
  {
    id: "acciones",
    header: "Acciones",
    cell: ({ row }) => {
      const id = row.original.id;

      return (
        <div className="flex items-center gap-2">
          <BotonEditarCliente idCliente={id} />
          <BotonBorrarCliente idCliente={id} />
        </div>
      );
    },
  },
];
