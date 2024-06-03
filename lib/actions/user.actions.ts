"use server"

import dbConnect from "../database/dbConnect"
import User from "../database/models/user.model"
import {CreateUserParams} from "@/types"



export async function CreateUser(user:CreateUserParams){

    try {

        await dbConnect();

        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser))
        
    } catch (error) {
        console.log(error);
        throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
        
    }
}


export async function getUserById(userId:string){

    try {

        await dbConnect()

        const user = await User.findById(userId)

        if (!user) throw new Error('User not found')
        return JSON.parse(JSON.stringify(user))
        
    } catch (error) {
        console.log(error);
        throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
        
    }

}