import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addEmployee = async (req, res) => {
  const { id, firstName, lastName, email, role, department, dateOfJoining } =
    req.body;
  let user = await prisma.employee.findUnique({
    where: { id },
  });
  if (user) {
    return res.status(203).json({ message: "User already exists" });
  }
  try {
    await prisma.employee.create({
      data: {
        id,
        firstName,
        lastName,
        email,
        role,
        department,
        dateOfJoining: new Date(dateOfJoining),
      },
    });
    return res.status(200).json({ message: "user created successfully" });
  } catch (e) {
    return res.status(500).json(e);
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employess = await prisma.employee.findMany();
    return res.status(200).json(employess);
  } catch (e) {
    return res.status(500).json({ message: "error in getting all employees" });
  }
};

export { getAllEmployees, addEmployee };
