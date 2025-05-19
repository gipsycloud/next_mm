import { db } from "@/lib/db";
import { video } from "framer-motion/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {  // data types
  const videos = await db.video.findMany();
  return NextResponse.json({ message: "Show All Videos !!", videos });
}
export async function POST(req: NextRequest, res: NextResponse) {
  // return NextResponse.json({message: "Hello, Next.js!"});
  const data = await req.json();

  // Validate the data
  const toCreate = await db.video.create({
    data: {
      title: data.title,
      description: data.description,
      videoId: data.videoId
    },
  });
  return NextResponse.json({ message: "Video created", toCreate });
}