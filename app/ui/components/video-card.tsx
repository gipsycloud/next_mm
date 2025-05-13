'use client';
import { Avatar, Button } from "@nextui-org/react";
import Link from "next/link";

export function VideoCard() {
    return (
        <div className="border w-96 rounded-lg shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 m-5">
            <div className="flex items-center justify-between p-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4HwcX2OcyBY?si=UAqb3jdq_WK8b1zz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="relative inline-block">
                {/* <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-10 h-10 rounded-sm rounded-full"/> */}
                {/* <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 rounded-full ring-2 ring-white"></span> */}
                <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Video Title</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Channel Name</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">100K views • 1 day ago</p>
                </div>

                <div className="ml-3">
                    <Button as={Link} href={`/watch/2`}>Watch</Button>
                </div>
            </div>
        </div>
    )

}