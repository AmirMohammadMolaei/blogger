import { FooterLinks } from "@/core/constants/footer";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="px-40 py-5 border-t flex items-center justify-center gap-x-4 text-sm text-[#363636]">
      {FooterLinks.map((item, index) => (
        <Link key={index} href={item.href}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
