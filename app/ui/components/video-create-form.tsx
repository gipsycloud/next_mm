'use client'
import { Button, Input } from "@nextui-org/react";

export function VideoCreateForm() {
    return (
        <div className="border p-3 rounded-2x1 max-w-xl">
            <h2 className="text-xl fond-bold ">Create Video</h2>
            <form action="" className="grid gap-3">
                <Input type="text" label="title" />
                <Input type="text" label="description" />
                <Input type="text" label="video id" />
                <Button size="md" type="submit">Create</Button>
            </form>
        </div>
    );
}