import TimeTravel from "@/components/time-travel";
import {
  TimeTravelSaveLogItem,
  TimeTravelSaveLogListType,
} from "@/stores/time-travel";

export interface TimeTravelConfiguration {
  enabled: boolean;
  logsList: TimeTravelSaveLogListType;
  onAddLog: (log: TimeTravelSaveLogItem) => void;
  onUpdateLog: (id: string, log: TimeTravelSaveLogItem) => void;
  onDeleteLog: (id: string) => void;
}

export default function TimeTravelPlugin({
  configuration,
}: {
  configuration: TimeTravelConfiguration;
}) {
  if (!configuration.enabled) {
    return null;
  }
  return (
    <div className="absolute bottom-0 left-0 z-20 m-4">
      <TimeTravel configuration={configuration} />
    </div>
  );
}
