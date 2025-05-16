import { useQuery } from "@tanstack/react-query";
import { VideoCard } from "./video-card";

export default function Videos() {
  const { isPending, error, data } = useQuery({
    queryKey: ['videoData'],
    queryFn: () =>
      fetch("/api/video").then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  console.log(data);
  return (
    <div className="flex bg-blue-500 text-white p-4">
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  )
}