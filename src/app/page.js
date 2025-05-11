import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex w-[350px] flex-col gap-4 rounded-lg border p-4 shadow-md">
        <img
          src="https://avatars.githubusercontent.com/u/113961961?v=4"
          className="size-16 rounded-full transition-all ease-in-out hover:scale-105 hover:animate-spin"
        />
        <div>
          <h1 className="text-lg font-bold">Achmad Ilmi Al Akbar</h1>
          <p className="text-sm text-gray-500">Pembisnis Digital Handal</p>
        </div>
        <p className="text-gray-600">
          "Halo, perkenalkan nama saya Achmad Ilmi Al Akbar Saya Seorang
          Penggiat Bisnis Digital Yang Katanya Handal"
        </p>
        <Link href="https://www.instagram.com/iilmii._/" className="w-full">
          <button className="flex w-full items-center justify-center rounded-md bg-black py-1.5 text-sm text-white transition-all ease-in-out hover:scale-105 hover:cursor-pointer">
            <Instagram className="mr-2 size-4" />
            Instagram Guwe
          </button>
        </Link>
      </div>
    </div>
  );
}
