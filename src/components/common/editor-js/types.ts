type EditorJSBlocksDataType = {
  text: string;
  level?: number;
};

export type EditorJSBlocksType = {
  id: string;
  type: "header" | "paragraph" | "list";
  data: EditorJSBlocksDataType;
};
