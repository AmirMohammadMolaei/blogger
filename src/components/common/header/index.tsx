import { MenuLinks, MenuLinksType } from "@/core/constants/header";
import Link from "next/link";
import Button from "../button";

export default function Header() {
  const MenuLinksButtonItems = ({ item }: { item: MenuLinksType }) => {
    return (
      <li>
        <Button radius="full" className="bg-black text-white">
          {item.name}
        </Button>
      </li>
    );
  };

  const MenuLinksLinkItems = ({ item }: { item: MenuLinksType }) => {
    return (
      <li>
        <Link href={item.href}>{item.name}</Link>
      </li>
    );
  };

  return (
    <div className="max-sm:px-10 max-lg:px-20 px-40 py-5 border-b flex items-center justify-between">
      <Link href={"/"} className="font-Cinzel text-4xl max-sm:text-3xl">
        Medium
      </Link>
      <ul className="flex gap-x-4 items-center max-md:hidden">
        {MenuLinks.map((item, index) =>
          item.type == "button" ? (
            <MenuLinksButtonItems key={index} item={item} />
          ) : (
            <MenuLinksLinkItems key={index} item={item} />
          )
        )}
      </ul>
    </div>
  );
}
