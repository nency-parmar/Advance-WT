import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../app/generated/prisma/client";
const adapter = new PrismaMariaDb({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Nency@0707"
    ,
    database: "demo",
    connectionLimit: 5
})
export const prisma = new PrismaClient({ adapter });