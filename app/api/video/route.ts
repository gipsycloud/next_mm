import { db } from "@/lib/db";
import { video } from "framer-motion/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const videos = await db.video.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });
  return NextResponse.json({ message: "Hello, Next.js!", videos });
}
export async function POST(req: NextRequest, res: NextResponse) {
  // return NextResponse.json({message: "Hello, Next.js!"});
  const data = await req.json();

  // Validate the data
  const toCreate = await db.video.create({
    data: {
      title: data.title,
      description: data.description,
      thumbnail: data.thumbnail,
      videoUrl: data.videoUrl,
      userId: data.userId,
    },
  });
  return NextResponse.json({ message: "Video created", toCreate });
}