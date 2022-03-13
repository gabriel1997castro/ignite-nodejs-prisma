import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "33ddab35-7c05-46ab-a1c0-2fb5c17b415d",
    },
    data: {
      duration: 280,
    },
  });

  console.log(result);
}

main();
