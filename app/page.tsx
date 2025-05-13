import Image from "next/image";
import styles from "./page.module.css";
import {VideoCard} from './ui/components/video-card';


export default function Home() {
  return (
    <div className="flex bg-blue-500 text-white p-4">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  )
};
