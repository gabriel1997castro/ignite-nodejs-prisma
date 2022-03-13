import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Java",
      description: "Curso excelente",
      duration: 500,
      teacher: {
        connect: {
          id: "e98128c3-b9da-44a9-843b-79213b7c82bd",
        },
      },
    },
  });

  console.log(result);
}

main();
