import { useAtom } from "jotai";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  blockAiAssistanceFeedbackAnnotationAtom,
  blockAiAssistanceIdeasAnnotationAtom,
  blockAiAssistanceOtherAnnotationAtom,
  blockPlanningGeneratingStageAnnotationAtom,
  blockPlanningOrganizingStageAnnotationAtom,
  blockPlanningSettingStageAnnotationAtom,
  blockReviewingEvaluatingStageAnnotationAtom,
  blockReviewingRevisingStageAnnotationAtom,
  blockTranslatingStageAnnotationAtom,
} from "@/stores/block";
import { InfoCircledIcon } from "@radix-ui/react-icons";

import GridSelect from "../grid-select";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { Textarea } from "../ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface PauseFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
}

export default function PauseForm({
  open,
  onOpenChange,
  onClose,
}: PauseFormProps) {
  const [other, setOther] = useAtom(blockAiAssistanceOtherAnnotationAtom);
  return (
    <Sheet
      defaultOpen={false}
      open={open}
      onOpenChange={onOpenChange}
      modal={false}
    >
      {/* <SheetTrigger asChild>{trigger}</SheetTrigger> */}
      <SheetContent className="text-left overflow-auto">
        <Tabs defaultValue="step-1" className="w-full flex flex-col">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="step-1">Step 1</TabsTrigger>
            <TabsTrigger value="step-2">Step 2</TabsTrigger>
          </TabsList>

          <TabsContent value="step-1" className="flex-1 flex flex-col">
            <div className="flex flex-col space-y-4 mt-4 mb-4">
              <Label className="text-xl">Planning</Label>
              <ul className="space-y-4">
                <li>
                  <GridSelect
                    atom={blockPlanningGeneratingStageAnnotationAtom}
                    label="Generating ideas to write about"
                  />
                </li>
                <li>
                  <GridSelect
                    atom={blockPlanningOrganizingStageAnnotationAtom}
                    label="Organizing ideas to write about"
                  />
                </li>
                <li>
                  <GridSelect
                    atom={blockPlanningSettingStageAnnotationAtom}
                    label="Setting the writing goal"
                  />
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-4 mt-4 mb-4">
              <div className="flex flex-row items-center space-x-2">
                <Label className="text-xl">Translating</Label>
                <TooltipProvider>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Button size={"icon"} variant={"link"}>
                        <InfoCircledIcon className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>

                    <TooltipContent>
                      <span className="italic">Translating</span> ideas and
                      goals into written words and sentences;
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <ul className="space-y-4">
                <GridSelect atom={blockTranslatingStageAnnotationAtom} />
              </ul>
            </div>

            <div className="flex flex-col space-y-4 mt-4 mb-4">
              <Label className="text-xl">Reviewing</Label>
              <ul className="space-y-4">
                <li>
                  <GridSelect
                    label="Evaluating written text"
                    atom={blockReviewingEvaluatingStageAnnotationAtom}
                  />
                </li>
                <li>
                  <GridSelect
                    label="Revising written text"
                    atom={blockReviewingRevisingStageAnnotationAtom}
                  />
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="step-2">
            <div className="flex flex-col space-y-4 mt-4 mb-4">
              <Label className="text-xl">
                What kinds of AI assistance can help with this block?
              </Label>

              <ul className="space-y-4">
                <li>
                  <GridSelect
                    label="AI suggests ideas to write about, e.g., “<response from AI>”"
                    atom={blockAiAssistanceIdeasAnnotationAtom}
                  />
                </li>
                <li>
                  <GridSelect
                    label="AI helps complete the sentence you are writing, e.g., “<response from AI>”"
                    atom={blockAiAssistanceIdeasAnnotationAtom}
                  />
                </li>
                <li>
                  <GridSelect
                    label="AI provides feedback to the sentence you are writing, e.g., “<response from AI>”"
                    atom={blockAiAssistanceFeedbackAnnotationAtom}
                  />
                </li>
                <li>
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="custom-ai-support">
                      Others, please specify
                    </Label>
                    <Textarea
                      id="custom-ai-support"
                      value={other}
                      onChange={(e) => {
                        setOther(e.currentTarget.value);
                      }}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>

        <SheetFooter>
          <Button type="submit" onClick={onClose}>
            Save changes
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
