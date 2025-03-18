import { EditorConfig } from "@editorjs/editorjs";
import Quote from "@editorjs/quote";
import EditorjsList from "@editorjs/list";
import ImageTool from "@editorjs/image";
import LinkTool from "@editorjs/link";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";

const EditorJSConfig: EditorConfig = {
  placeholder: "Write...",
  tools: {
    paragraph: Paragraph,
    header: Header,
    list: EditorjsList,
    linkTool: LinkTool,
    image: ImageTool,
    quote: Quote,
  },
};

export default EditorJSConfig;
