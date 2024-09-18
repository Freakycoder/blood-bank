import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

interface Data {
    text: string,
    createdAt: Date,
    sender : string
}

const storeMessageHandler = async(req: NextApiRequest, res: NextApiResponse<Data | {message:string}>) => {

    if (req.method == "POST") {
        const { content } = req.body;

        if(!content || content.trim() == ""){
            res.status(400).json({message : "text cannot be empty"})
            return;
        }

        try{
            const newMessage = await prisma.messages.create({
                data:{
                    text: content.text,
                    createdAt: content.createdAt,
                    sender: content.sender
                }
            })
            res.status(200).json({message: "Saved Succesfully."})
        }
        catch(error){
            res.status(400).json({message : "failed to save message."});
            console.log(error);
        }
    }
}

export default storeMessageHandler;