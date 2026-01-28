import { deleteClienteData } from "@/lib/services/cliente-service";
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
      { status: 201 },
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
