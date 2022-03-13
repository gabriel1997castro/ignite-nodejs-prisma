import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Elixir",
      description: "Curso excelente de Elixir",
      duration: 500,
      teacher: {
        create: {
          name: "Maria",
        },
      },
    },
  });

  console.log(result);
}

main();
