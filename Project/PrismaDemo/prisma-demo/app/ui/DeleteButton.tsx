"use client"
import React from 'react'
import { DeleteUserAction } from '../actions/DeleteUserAction'
function DeleteButton(paramas: any) {
    const { id } = paramas;
    return (
        <button onClick={() => {
            DeleteUserAction(id)
        }}>Delete</button>
    )
}
export default DeleteButton