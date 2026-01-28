import {
  createClienteData,
  obtenerClientes,
} from "@/lib/services/cliente-service";
import { NextResponse } from "next/server";

//TODO: definir tipo de request
export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.nombre || !body.email || !body.apellido) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const newCliente = await createClienteData({
      nombre: body.nombre,
      apellido: body.apellido,
      segundo_apellido: body.segundo_apellido,
      email: body.email,
      estado: body.estado ?? true,
    });

    return NextResponse.json(newCliente, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();

    if (!body.nombre || !body.email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const newCliente = await createClienteData({
      nombre: body.nombre,
      apellido: body.apellido,
      segundo_apellido: body.segundo_apellido,
      email: body.email,
      estado: body.estado ?? true,
    });

    return NextResponse.json(newCliente, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const clientes = await obtenerClientes();

    return NextResponse.json(clientes, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
