import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 300,
      name: "Curso de React Native",
      description: "Curso excelente de React Native com Gabriel Castro",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Daniele Leão",
          },
          create: {
            name: "Daniele Leão",
          },
        },
      },
    },
  });

  console.log(result);
}

main();
