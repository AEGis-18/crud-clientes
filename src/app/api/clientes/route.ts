import {
  createClienteData,
  deleteClienteData,
  getAllClientes,
  getClientes,
} from "@/lib/services/cliente-service";
import { clienteSchema } from "@/lib/zod";
import { Prisma } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

//TODO: definir tipo de request
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const cliente = clienteSchema.safeParse(body);

    if (!cliente.success) {
      return NextResponse.json(
        {
          message: "Campos no válidos.",
          errors: cliente.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const newCliente = await createClienteData(cliente.data);

    return NextResponse.json(newCliente, { status: 201 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return Response.json(
          { error: "El mail no es válido" },
          { status: 400 },
        );
      }
    }

    return Response.json(
      { error: "Error interno del servidor" },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const nombre = searchParams.get("nombre");
    const email = searchParams.get("email");

    const clientes = await getClientes({ nombre, email });

    return NextResponse.json(clientes, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 },
    );
  }
}

// export async function PATCH(request: Request) {
//   try {
//     const body = await request.json();

//     if (!body.nombre || !body.email || !body.apellido) {
//       return NextResponse.json(
//         { error: "Faltan campos obligatorios." },
//         { status: 400 },
//       );
//     }

//     const newCliente = await createClienteData({
//       nombre: body.nombre,
//       apellido: body.apellido,
//       segundo_apellido: body.segundo_apellido,
//       email: body.email,
//       estado: body.estado ?? true,
//     });

//     return NextResponse.json(newCliente, { status: 201 });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Error interno del servidor." },
//       { status: 500 },
//     );
//   }
// }
