import { BackgroundBeamsWithCollision } from "@/components/common/background-beams-with-collision";
import Button from "@/components/common/button";
import { TextGenerateEffect } from "@/components/common/text-generate-effect";

export default function Home() {
  return (
    <BackgroundBeamsWithCollision className="bg-transparent !h-fit">
      <div className="w-full h-fit font-Cinzel max-sm:text-4xl max-md:text-6xl max-xl:text-7xl text-8xl flex flex-wrap max-md:justify-center gap-y-8 *:w-full max-lg:pt-16 pt-32 pb-16">
        <div>
          <TextGenerateEffect
            words={"Human"}
            className="w-full max-md:text-center"
          />
          <TextGenerateEffect
            words={"Stories & Ideas"}
            className="w-full max-md:text-center"
          />
        </div>
        <p className="font-sans max-xl:text-xl text-2xl w-full max-md:text-center">
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
