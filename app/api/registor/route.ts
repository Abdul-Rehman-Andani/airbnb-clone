import { NextResponse } from "next/server";
import { User } from "@/models/user";
import { connectDB } from "@/utils/connection";
import bcrypt from "bcryptjs";

export const POST = async (request: Request) => {
  try {
    await connectDB();

    const { name, email, password } = await request.json();

    const user = await User.findOne({ email });

    if (user) {
      throw new Error("user already exist with this email");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashPassword });
    await newUser.save();

    return NextResponse.json({ message: "user created" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
