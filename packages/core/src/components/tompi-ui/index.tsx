import { ExternalToast, toast } from "sonner";

import { Editor } from "@tiptap/react";

// extend toast
function notification(message: string, data?: ExternalToast) {
  return toast(message, data);
}

function highlight(editor: Editor, text: string, highlight: string) {
  const regex = new RegExp(highlight, "gi");
  return text.replace(regex, (match) => `<mark>${match}</mark>`);
}

const UI = {
  notification,
  highlight,
};

export default UI;
