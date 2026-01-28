import {
  deleteClienteData,
  updateClienteData,
} from "@/lib/services/cliente-service";
import { clienteSchema } from "@/lib/zod";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const clienteElim = await deleteClienteData(id);

    return NextResponse.json(
      { message: "Cliente eliminado ", clienteElim },
      { status: 200 },
    );
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "El cliente no existe." },
        { status: 404 },
      );
    }
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const cliente = clienteSchema.safeParse(body);

    if (!cliente.success) {
      return NextResponse.json(
        {
          message: "Campos no válidos",
          errors: cliente.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const clienteActualizado = await updateClienteData(id, cliente.data);

    return NextResponse.json(
      { message: "Cliente actualizado.", clienteActualizado },
      { status: 200 },
    );
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "El cliente no existe." },
        { status: 404 },
      );
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return Response.json(
          { error: "El mail no es válido" },
          { status: 400 },
        );
      }
    }
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 },
    );
  }
}
