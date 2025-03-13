import { BackgroundBeamsWithCollision } from "@/components/common/background-beams-with-collision";
import Link from "next/link";

export default function NotFound() {
  return (
    <BackgroundBeamsWithCollision className="bg-transparent !h-fit flex items-center flex-col gap-y-3 py-48 font-Habibi">
      <h6 className="text-sm font-Cinzel">PAGE NOT FOUND</h6>
      <h1 className="font-Cinzel text-7xl text-[#797979]">404</h1>
      <h1 className="text-3xl font-Cinzel text-center">Out of nothing, something.</h1>
      <p className="w-[700px] text-center">
        You can find <span className="text-red-600">(just about)</span> anything on Medium — apparently even a page
        that doesn’t exist. Maybe these stories will take you somewhere new?
      </p>
      <Link className="underline" href="/">
        Home
      </Link>
    </BackgroundBeamsWithCollision>
  );
}
