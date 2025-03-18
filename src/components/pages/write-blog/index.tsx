"use client";
import Button from "@/components/common/button";
import MiniCard from "@/components/common/cards/mini-card";
import { TextGenerateEffect } from "@/components/common/text-generate-effect";
import { OutputData } from "@editorjs/editorjs";
import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(() => import("../../common/editor-js"), {
  loading: () => (
    <p className="!w-full min-w-[850px] min-h-96">Create Editor...</p>
  ),
  ssr: false,
});

const WriteBlogWrapper = () => {
  const [content, setContent] = useState<null | OutputData>(null);
  const SidebarItemsStyle =
    "max-md:w-full max-lg:w-1/2 flex max-md:flex-col md:flex-wrap gap-4 max-md:items-center";

  const onSaveContent = () => {
    if (!content) return;
    else if (content.blocks.length == 0) return;
    else {
      console.log(content);
    }
  };

  return (
    <div className="w-full flex flex-wrap justify-center">
      <div className="w-full relative max-sm:flex flex-col items-center">
        <TextGenerateEffect
          words={"Write your story..."}
          className="font-Cinzel text-4xl font-light max-sm:text-2xl"
        />
        <span className="font-Habibi max-sm:text-sm">
          Draft by AmirMohammad-Molaei
        </span>
        <Button
          size="md"
          color="success"
          radius="full"
          className="font-Cinzel sm:py-0.5 sm:h-fit absolute top-6 right-0 max-sm:static max-sm:mt-5 max-sm:w-40"
          onPress={onSaveContent}
        >
          Publish
        </Button>
      </div>
      <div className="w-full flex my-8 gap-x-4 max-lg:flex-col">
        <Editor
          className="lg:border-r max-sm:min-h-96"
          setContent={setContent}
        />
        <div className="w-full lg:w-[300px] h-fit flex lg:flex-wrap max-md:flex-wrap gap-10 max-lg:my-10">
          <div className={SidebarItemsStyle}>
            <h4>You may like</h4>
            <MiniCard
              href="/blogs"
              picture="/test.png"
              title="The best historical movies of all time"
            />
            <MiniCard
              href="/blogs"
              picture="/test.png"
              title="The best historical movies of all time"
            />
          </div>
          <div className={SidebarItemsStyle}>
            <h4>Latest</h4>
            <MiniCard
              href="/blogs"
              picture="/test.png"
              title="The best historical movies of all time"
            />
            <MiniCard
              href="/blogs"
              picture="/test.png"
              title="The best historical movies of all time"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteBlogWrapper;
