"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// async function EditUserAction(id:number){
// await prisma.users.update({ where: { UserID: id },
// data: { UserName: "Magan" },});
// revalidatePath("/users");
// redirect("/users");
// }
async function EditUserAction(formData: FormData) {
    const id = Number(formData.get("id"));
    const userName = formData.get("UserName") as string;
    const password = formData.get("Password") as string;
    await prisma.users.update({
        where: {
            UserID: id,
        },
        data: {
            UserName: userName,
            Password: password,
        },
    });
    revalidatePath("/users");
    redirect("/users");
}
export { EditUserAction };