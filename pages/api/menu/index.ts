import type { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from "@/lib/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();
  const menus = db.collection("menus");

  if (req.method === "GET") {
    const list = await menus.find({}).project({ _id: 0 }).toArray();

    return res
      .status(200)
      .json({ status: 200, message: "Success", data: list });
  }
};

export default handler;
