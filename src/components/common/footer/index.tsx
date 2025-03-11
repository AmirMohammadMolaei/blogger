import { FooterLinks } from "@/core/constants/footer";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="max-sm:px-10 max-lg:px-20 px-40 max-md:flex-wrap py-5 border-t flex items-center justify-center gap-4 text-sm text-[#363636]">
      {FooterLinks.map((item, index) => (
        <Link key={index} href={item.href}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
