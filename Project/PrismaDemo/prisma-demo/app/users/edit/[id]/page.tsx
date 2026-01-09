import { prisma } from '@/lib/prisma'
import { EditUserAction } from '@/app/actions/EditUserAction'
import React from 'react'
async function EditUser({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const data = await prisma.users.findFirst({
        where: { UserID: Number(id) },
        include: {
            task: true
        }
    })
    return (
        <div>
            <form action={EditUserAction}>
                <input type='hidden' defaultValue={data?.UserID as number} name="id" />
                <input type='text' defaultValue={data?.UserName as string}
                    name="UserName" />
                <input type='text' defaultValue={data?.Password as string}
                    name="Password" />
                <input type='submit' />
            </form>
        </div>
    )
}
export default EditUser