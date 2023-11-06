import { ExternalToast, toast } from "sonner";

// extend toast
function notification(message: string, data?: ExternalToast) {
  return toast(message, data);
}

function highlight(editor: any, text: string, highlight: string) {
  const regex = new RegExp(highlight, "gi");
  return text.replace(regex, (match) => `<mark>${match}</mark>`);
}

const UI = {
  notification,
  highlight,
};

export default UI;
