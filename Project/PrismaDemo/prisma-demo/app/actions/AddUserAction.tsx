"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function AddUserAction(formData: FormData) {

    const UserName = formData.get("UserName") as string;
    const Password = formData.get("Password") as string;

    const TaskTitle = formData.get("TaskTitle") as string;
    const TaskDescription = formData.get("TaskDescription") as string;
    const IsCompleted = formData.get("IsCompleted") === "true";

    const user = await prisma.users.create({
        data: {
            UserName,
            Password,
        }
    });

    if (TaskTitle && TaskTitle.trim() !== "") {
        await prisma.task.create({
            data: {
                TaskTitle,
                TaskDescription,
                IsCompleted,
                UserID: user.UserID
            }
        });
    }

    revalidatePath("/users");
    redirect(`/users/${user.UserID}`);
}

export { AddUserAction };
