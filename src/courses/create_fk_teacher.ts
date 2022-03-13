import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Javascript",
      description: "Curso excelente de Javascript",
      duration: 500,
      fk_id_teacher: "75842eb8-5cf4-41fa-88e6-340a66ec2d36",
    },
  });

  console.log(result);
}

main();
