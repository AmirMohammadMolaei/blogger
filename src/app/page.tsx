import { BackgroundBeamsWithCollision } from "@/components/common/background-beams-with-collision";
import Button from "@/components/common/button";
import { TextGenerateEffect } from "@/components/common/text-generate-effect";

export default function Home() {
  return (
    <BackgroundBeamsWithCollision className="bg-transparent !h-fit">
      <div className="w-full h-fit font-Cinzel text-8xl flex flex-wrap gap-y-8 *:w-full pt-32 pb-16">
        <TextGenerateEffect words={"Human"} className="w-full" />
        <TextGenerateEffect
          words={"Stories & Ideas"}
          className="w-full -mt-20"
        />
        <p className="font-sans text-2xl w-full">
          A place to read, write, and deepen your understanding
        </p>
        <Button
          types="fill"
          radius="full"
          className="bg-black text-white !w-fit"
        >
          Start reading
        </Button>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
