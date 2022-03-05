import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // SELECT * FROM COURSES LIMIT 1
  // find the first created
  const course = await prisma.courses.findFirst();

  // SELECT * FROM COURSES ORDER BY ID DESC LIMIT 1
  const lastCourseCreated = await prisma.courses.findFirst({
    take: -1,
  });
  console.log(course);
  console.log(lastCourseCreated);
}

main();
