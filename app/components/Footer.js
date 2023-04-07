import React from "react";
import Image from "next/image";
import song from "../assets/song.svg";
import likedSong from "../assets/liked-line.svg";
import pictureSong from "../assets/picture-in-picture-line.svg";
import playSong from "../assets/play-circle-fill.svg";
import skipLeft from "../assets/skip-back-fill.svg";
import skipRight from "../assets/skip-forward-fill.svg";
import shuffle from "../assets/shuffle-line.svg";
import repeat from "../assets/repeat-line.svg";
import mic from "../assets/mic-line.svg";
import device from "../assets/device-line.svg";
import volume from "../assets/volume-up-line.svg";

const Footer = () => {
  return (
    <div className="bg-neutral-900 w-full py-6 px-4 absolute z-9999 bottom-0 flex justify-between items-center">
      <div className=" flex items-center gap-2">
        <Image src={song} alt="" width={80} height={80} />
        <div className="flex flex-col">
          <span className="text-white font-semibold text-md mb-1 mr-4">
            Locked Away (feat. Adam Levine)
          </span>
          <span className="text-neutral-300 text-xs">R. City, Adam Levine</span>
        </div>
        <div className="flex gap-4">
          <Image
            src={likedSong}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src={pictureSong}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex-col">
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-4">
            <Image
              src={shuffle}
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src={skipLeft}
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src={playSong}
              alt=""
              width={40}
              height={40}
              className="cursor-pointer"
            />
            <Image
              src={skipRight}
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src={repeat}
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white text-xs">0.00</span>
            <div className="flex border-b-2 w-96 h-1 bg-neutral-500"></div>
            <span className="text-white text-xs">3.48</span>
          </div>
        </div>
      </div>

      <div className="flex pl-10 gap-4">
        <Image
          src={mic}
          alt=""
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <Image
          src={device}
          alt=""
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <div className="flex items-center gap-2">
          <Image
            src={volume}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <div className="border-b-2 bg-white w-11"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
