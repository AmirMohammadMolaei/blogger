"use client";
import EditorJSConfig from "@/core/configs/editorjs";
import EditorJS, { EditorConfig, OutputData } from "@editorjs/editorjs";
import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";

interface EditorProps {
  className?: string;
  configs?: EditorConfig;
  setContent: Dispatch<SetStateAction<OutputData | null>>;
}

const Editor: FC<EditorProps> = ({ className, configs, setContent }) => {
  const holderRef = useRef<null | HTMLDivElement>(null);
  const editorInstance = useRef<null | EditorJS>(null);

  useEffect(() => {
    if (!holderRef.current) return;

    editorInstance.current = new EditorJS({
      holder: holderRef.current,
      onChange: () => {
        HandleSaveContent();
      },
      ...EditorJSConfig,
      ...configs,
    });

    return () => {
      if (editorInstance.current && editorInstance.current.destroy) {
        editorInstance.current.destroy();
      }
    };
  }, []);

  const HandleSaveContent = () => {
    if (!editorInstance.current) return;

    editorInstance.current
      .save()
      .then((outputData) => {
        setContent(outputData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      ref={holderRef}
      className={`editor-js-holder w-full py-8 ${className}`}
    />
  );
};

export default Editor;
