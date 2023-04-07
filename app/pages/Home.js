import Image from "next/image";
import React from "react";
import song from "../assets/song.svg";

const Home = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid-cols-3 flex flex-wrap gap-6">
        <div className="bg-neutral-600 w-96 rounded-lg flex items-center gap-4">
          <Image src={song} alt="" width={100} height={100} />
          <span className="font-bold text-white">Favorite</span>
        </div>
        <div className="bg-neutral-600 w-96 rounded-lg flex items-center gap-4">
          <Image src={song} alt="" width={100} height={100} />
          <span className="font-bold text-white">My Playlist</span>
        </div>
        <div className="bg-neutral-600 w-96 rounded-lg flex items-center gap-4">
          <Image src={song} alt="" width={100} height={100} />
          <span className="font-bold text-white">Hits Song</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
