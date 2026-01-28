CRUD de clientes realizado en NexJS

Fronted:

- Vista de Clientes(incluye búsqueda por nombre o email)
- Formulario de creación y edición de clientes

Backend:

- CREATE: http://localhost:3000/api/clientes/
- READ: http://localhost:3000/api/clientes
- UPDATE: http://localhost:3000/api/clientes/{{id_cliente}}
- DELETE: http://localhost:3000/api/clientes/{{id_cliente}}
- BUSCAR:http://localhost:3000/api/clientes?nombre={nombre_cliente}&email={email_cliente}

Instrucciones:

1. Clonar repositorio: https://github.com/AEGis-18/crud-clientes.git
2. Crear .env y agregar:
3. DATABASE_URL="file:./dev.db"
4. npx prisma generate
5. npx prisma migrate dev --name init

Ejecutar la carpeta de postman:

1. POST requests
2. GET requests
3. PUT requests
4. DELETE requests
