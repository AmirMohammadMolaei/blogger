import { FC } from "react";

interface CardProps {
  name: string;
  //   caption: string;
  //   profile: string;
}

const Card: FC<CardProps> = ({ name }) => {
  return (
    <div className="w-80 h-60 flex flex-col gap-y-8 border-1">
      <div className="w-full min-h-24 bg-blue-400 border-b-1 relative">
        <div className="w-16 h-16 rounded-full bg-gray-500 absolute left-[50%] translate-x-[-50%] -bottom-8"></div>
      </div>
      <div className="w-full h-full px-4 flex flex-col items-center">
        <h4>{name}</h4>
        <p className="font-Habibi text-sm text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores,
          eveniet.
        </p>
      </div>
    </div>
  );
};

export default Card;
