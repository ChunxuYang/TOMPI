import { useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";

import { Button } from "./ui/button";
import { Toggle } from "./ui/toggle";

export interface GridSelectProps {
  label?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  leftIndication?: string;
  rightIndication?: string;
}

export default function GridSelect({
  label,
  options,
  value,
  onChange,
  leftIndication,
  rightIndication,
}: GridSelectProps) {
  const [selected, setSelected] = useState<string>(value);

  return (
    <div className="flex flex-col space-y-3">
      {label && (
        <TooltipProvider>
          <div className="flex flex-row items-center">
            <Label>{label}</Label>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <Button size={"icon"} variant={"link"}>
                  <InfoCircledIcon className="w-4 h-4" />
                </Button>
              </TooltipTrigger>

              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      )}

      <div className="space-y-1">
        <div className={`flex flex-row divide-solid divide-x border rounded`}>
          {options.map((option, index) => (
            <Toggle
              key={index}
              variant={"outline"}
              className={`rounded-none flex flex-1 justify-center items-center`}
              pressed={selected === option}
              onPressedChange={(pressed) => {
                if (pressed) {
                  setSelected(option);
                  onChange(option);
                }
              }}
            >
              {option}
            </Toggle>
          ))}
        </div>
        <div className="flex flex-row justify-between">
          <Label className="text-xs text-muted-foreground">
            {leftIndication}
          </Label>
          <Label className="text-xs text-muted-foreground">
            {rightIndication}
          </Label>
        </div>
      </div>
    </div>
  );
}
