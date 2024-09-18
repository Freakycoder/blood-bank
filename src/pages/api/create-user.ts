import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

type Data = {
  name: string,
  email: string
};

const getMessage = async(req: NextApiRequest,res: NextApiResponse<Data>) => {
   
  
};

export default getMessage;