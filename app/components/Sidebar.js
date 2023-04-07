import React from "react";
import homeIcon from "../assets/home.svg";
import searchIcon from "../assets/search.svg";
import libraryIcon from "../assets/library.svg";
import playlistIcon from "../assets/playlist.svg";
import likedIcon from "../assets/liked.svg";
import Image from "next/image";

const menu = [
  {
    id: 1,
    name: "Home",
    icon: homeIcon,
  },
  {
    id: 2,
    name: "Search",
    icon: searchIcon,
  },
  {
    id: 3,
    name: "Your Library",
    icon: libraryIcon,
  },
  {
    id: 4,
    name: "Create Playlist",
    icon: playlistIcon,
  },
  {
    id: 5,
    name: "Liked Song",
    icon: likedIcon,
  },
];

const Sidebar = () => {
  return (
    <div className="bg-black h-screen w-1/5 p-5">
      <div className="text-white flex flex-col items-center mb-8">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="54"
            height="54"
          >
            <path
              d="M12.001 2C6.50098 2 2.00098 6.5 2.00098 12C2.00098 17.5 6.50098 22 12.001 22C17.501 22 22.001 17.5 22.001 12C22.001 6.5 17.551 2 12.001 2ZM15.751 16.65C13.401 15.2 10.451 14.8992 6.95014 15.6992C6.60181 15.8008 6.30098 15.55 6.20098 15.25C6.10098 14.8992 6.35098 14.6 6.65098 14.5C10.451 13.6492 13.751 14 16.351 15.6C16.701 15.75 16.7501 16.1492 16.6018 16.45C16.4018 16.7492 16.0518 16.85 15.751 16.65ZM16.7501 13.95C14.051 12.3 9.95098 11.8 6.80098 12.8C6.40181 12.9 5.95098 12.7 5.85098 12.3C5.75098 11.9 5.95098 11.4492 6.35098 11.3492C10.001 10.25 14.501 10.8008 17.601 12.7C17.9018 12.8508 18.051 13.35 17.8018 13.7C17.551 14.05 17.101 14.2 16.7501 13.95ZM6.30098 9.75083C5.80098 9.9 5.30098 9.6 5.15098 9.15C5.00098 8.64917 5.30098 8.15 5.75098 7.99917C9.30098 6.94917 15.151 7.14917 18.8518 9.35C19.301 9.6 19.451 10.2 19.201 10.65C18.9518 11.0008 18.351 11.1492 17.9018 10.9C14.701 9 9.35098 8.8 6.30098 9.75083Z"
              fill="rgba(255,255,255,1)"
            ></path>
          </svg>
          <span className="text-xl font-bold">Spotify Clone</span>
        </div>
      </div>
      <div className="flex flex-col  gap-6">
        {menu.map((item) => (
          <div key={item.id} className="flex items-center gap-2 cursor-pointer">
            <Image src={item.icon} alt="" width={24} height={24} />
            <span className="font-semibold text-md text-neutral-300 hover:text-white transition duration-300 ease-in-out">
              {item.name}
            </span>
          </div>
        ))}
        <div className="border-b-2 w-full border-neutral-300"></div>
        <span className="font-semibold text-neutral-300 hover:text-white transition duration-300 ease-in-out cursor-pointer">
          My Favorite
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
