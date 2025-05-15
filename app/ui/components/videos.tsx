import { VideoCard } from "./video-card";

export default function Videos() {
  return (
    <div className="flex bg-blue-500 text-white p-4">
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  )
}