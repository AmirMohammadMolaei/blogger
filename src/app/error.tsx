"use client";

import { BackgroundBeamsWithCollision } from "@/components/common/background-beams-with-collision";
import Button from "@/components/common/button";
import { FC } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage: FC<ErrorPageProps> = ({ error, reset }) => {
  return (
    <BackgroundBeamsWithCollision className="bg-transparent !h-fit flex items-center flex-col gap-y-3 py-48 font-Habibi">
      <h6 className="text-sm font-Cinzel">Something went wrong</h6>
      <h1 className="font-Cinzel text-7xl text-[#797979]">OOPS!</h1>
      <h1 className="text-3xl font-Cinzel text-center">{error.name}</h1>
      <p className="sm:w-[700px] text-center">{error.message}</p>
      <Button onPress={reset} color="danger" radius="full" className="font-Cinzel">Try again</Button>
    </BackgroundBeamsWithCollision>
  );
};

export default ErrorPage;
