import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-[350px] p-4 rounded-lg flex flex-col gap-4 border shadow-md">
        <img
          src="https://avatars.githubusercontent.com/u/113961961?v=4"
          className="size-16 rounded-full hover:animate-spin hover:scale-105 transition-all ease-in-out"
        />
        <div>
          <h1 className="font-bold text-lg">Achmad Ilmi Al Akbar</h1>
          <p className="text-sm text-gray-500">Pembisnis Digital Handal</p>
        </div>
        <p className="text-gray-600">
          "Halo, perkenalkan nama saya Achmad Ilmi Al Akbar Saya Seorang
          Penggiat Bisnis Digital Yang Katanya Handal"
        </p>
        <Link href="https://www.instagram.com/iilmii._/" className="w-full">
          <button className="w-full bg-black text-white py-1.5 rounded-md flex items-center justify-center hover:cursor-pointer text-sm hover:scale-105 transition-all ease-in-out">
            <Instagram className="size-4 mr-2" />
            Instagram Guwe
          </button>
        </Link>
      </div>
    </div>
  );
}
