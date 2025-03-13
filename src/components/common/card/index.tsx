"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { CardProps } from "./types";

const Card: FC<CardProps> = ({
  user,
  title,
  readTime,
  description,
  link,
  className,
}) => {
  return (
    <Link
      href={link}
      className={`max-w-xs w-full group/card ${className}`}
    >
      <div
        className={
          "cursor-pointer overflow-hidden relative h-fit rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between gap-y-2 p-4"
        }
      >
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src="/test.png"
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="relative z-10 font-Habibi">{user.name}</p>
            <p className="text-sm">{readTime} min read</p>
          </div>
        </div>
        <Image
          height="100"
          width="100"
          alt=""
          src={"/test.png"}
          className="w-full h-full"
        />
        <div className="text content font-Cinzel">
          <h1 className="text-xl md:text-2xl relative z-10 line-clamp-1">
            {title}
          </h1>
          <p className="font-Habibi text-sm relative z-10 my-4 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
