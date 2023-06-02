import { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from "@/lib/mongodb";
import { IUser } from "@/apis/interface/user";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();
  const users = db.collection("users");

  // Read
  if (req.method === "GET") {
    const list = await users.find({}).project({ _id: 0 }).toArray();

    return res.json({ ok: true, message: "Success", data: list });
  }
  // Create
  if (req.method === "POST") {
    const newUser = req.body as IUser;

    await users.insertOne(newUser);
    res.status(200).json({ ok: true, message: "성공적으로 가입되었습니다 😊" });

    // await tasks.insertOne(newTask, (err, data) => {
    //   if (err) return console.log("err", err);

    //   return res.status(200).json({ status: 200, message: "Success" });
    // });

    // const duplicateUser = await client.user.findFirst({
    //   where: {
    //     userId: req.body.userId,
    //   },
    // });
    // if (duplicateUser) {
    //   res.status(400).json({
    //     ok: false,
    //     code: "duplicate-id",
    //     message: "이미 사용중인 아이디 입니다",
    //   });
    // }

    // await client.user.create({
    //   data: req.body,
    // });
    // res.json({ ok: true, message: "성공적으로 가입되었습니다 😊" });
  }
  // Update
  if (req.method === "PUT") {
    res.json({ ok: true });
  }
  // Delete
  if (req.method === "DELETE") {
    res.json({ ok: true });
  }
};

export default handler;
