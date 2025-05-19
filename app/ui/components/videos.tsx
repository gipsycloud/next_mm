'use client';
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

  if (error) return 'An error has occurred: ' + error.message;
  console.log(data);
  return (
    <>
      {
        data.map((video: any) => {
          <VideoCard key={video.videoId} video={video} />
        })
      }
    </>
  )
}