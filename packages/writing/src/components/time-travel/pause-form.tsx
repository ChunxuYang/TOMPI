import React from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

interface PauseFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PauseForm({ open, onOpenChange }: PauseFormProps) {
  return (
    <Sheet
      defaultOpen={false}
      open={open}
      onOpenChange={onOpenChange}
      modal={false}
    >
      {/* <SheetTrigger asChild>{trigger}</SheetTrigger> */}
      <SheetContent className="flex flex-col text-left h-screen">
        <SheetHeader>
          <SheetTitle>
            What was your mental state when you were blocked?
          </SheetTitle>
          <SheetDescription>Click on the possibilites below.</SheetDescription>
        </SheetHeader>
        <Tabs defaultValue="step-1" className="w-full flex-1 flex flex-col">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="step-1">Step 1</TabsTrigger>
            <TabsTrigger value="step-2">Step 2</TabsTrigger>
          </TabsList>

          <ScrollArea className="flex-1 max-h-[600px] pr-4">
            <TabsContent value="step-1" className="flex-1 flex flex-col">
              <div className="flex flex-col space-y-4 mt-4 mb-4">
                <Label className="text-xl">Planning</Label>
                <ul className="space-y-4 list-disc">
                  {[
                    "Generating ideas to write about",
                    "Organizing ideas to write about",
                    "Setting the writing goal",
                  ].map((item, index) => (
                    <li key={index}>
                      <GridSelect
                        label={item}
                        options={["1", "2", "3", "4", "5", "6", "7"]}
                        value={"1"}
                        onChange={(value) => {}}
                        leftIndication="Highly unlikely"
                        rightIndication="Highly likely"
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col space-y-4 mt-4 mb-4">
                <Label className="text-xl">Translating</Label>
                <ul className="space-y-4">
                  <GridSelect
                    options={["1", "2", "3", "4", "5", "6", "7"]}
                    value={"1"}
                    onChange={(value) => {}}
                    leftIndication="Highly unlikely"
                    rightIndication="Highly likely"
                  />
                </ul>
              </div>

              <div className="flex flex-col space-y-4 mt-4 mb-4">
                <Label className="text-xl">Reviewing</Label>
                <ul className="space-y-4 list-disc">
                  {["Evaluating written text", "Revising written text"].map(
                    (item, index) => (
                      <li key={index}>
                        <GridSelect
                          label={item}
                          options={["1", "2", "3", "4", "5", "6", "7"]}
                          value={"1"}
                          onChange={(value) => {}}
                          leftIndication="Highly unlikely"
                          rightIndication="Highly likely"
                        />
                      </li>
                    )
                  )}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="step-2">
              <ScrollArea className="flex-1 pr-4">
                <div className="flex flex-col space-y-4 mt-4 mb-4">
                  <Label className="text-xl">
                    What kinds of AI assistance can help with this block?
                  </Label>

                  <ul className="space-y-4 list-disc">
                    {[
                      "AI suggests ideas to write about, e.g., “<response from AI>”",
                      "AI helps complete the sentence you are writing, e.g., “<response from AI>”",
                      "AI provides feedback to the sentence you are writing, e.g., “<response from AI>”",
                    ].map((item, index) => (
                      <li key={index}>
                        <GridSelect
                          label={item}
                          options={["1", "2", "3", "4", "5", "6", "7"]}
                          value={"1"}
                          onChange={(value) => {}}
                          leftIndication="Highly unlikely"
                          rightIndication="Highly likely"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollArea>
            </TabsContent>
          </ScrollArea>
        </Tabs>

        <SheetFooter>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
