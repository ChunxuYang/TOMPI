import { EditorConfig, ParagraphNode } from "lexical";

export class CustomParagraphNode extends ParagraphNode {
  __id: string;
  __comment: boolean;
  __active: boolean;

  static getType() {
    return "customParagraph";
  }

  constructor(id: string, comment?: boolean, active?: boolean, key?: string) {
    super(key);
    this.__comment = comment ?? false;
    this.__active = active ?? false;
    this.__id = id;
  }

  static clone(node: CustomParagraphNode) {
    return new CustomParagraphNode(
      node.__id,
      node.__comment,
      node.__active,
      node.__key
    );
  }

  createDOM(config: EditorConfig): HTMLElement {
    const element = super.createDOM(config);
    return element;
  }

  updateDOM(
    prevNode: ParagraphNode,
    dom: HTMLElement,
    config: EditorConfig
  ): boolean {
    const updated = super.updateDOM(prevNode, dom, config);
    if (prevNode.__comment !== this.__comment) {
      if (this.__comment) {
        dom.classList.add("bg-yellow-200", "dark:bg-yellow-700");
      } else {
        dom.classList.remove("bg-yellow-200", "dark:bg-yellow-700");
      }
    }

    if (prevNode.__active !== this.__active) {
      if (this.__active) {
        dom.classList.add("bg-yellow-400", "dark:bg-yellow-600");
      } else {
        dom.classList.remove("bg-yellow-400", "dark:bg-yellow-600");
      }
    }
    return updated;
  }
}

export function $createCustomParagraphNode(
  id: string,
  comment?: boolean,
  active?: boolean
) {
  return new CustomParagraphNode(id, comment, active);
}
