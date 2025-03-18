import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface MiniCardProps {
  picture: string;
  title: string;
  href: string;
}

const MiniCard: FC<MiniCardProps> = (props) => {
  return (
    <Link href={props.href} className="w-[300px] h-fit border flex gap-x-5">
      <Image
        width={100}
        height={100}
        alt=""
        src={props.picture}
        className="w-[93px] h-[62px]"
      />
      <h4 className="line-clamp-3 text-lg">{props.title}</h4>
    </Link>
  );
};

export default MiniCard;
