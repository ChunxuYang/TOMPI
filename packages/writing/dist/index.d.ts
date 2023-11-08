import { ExternalToast } from 'sonner';

/**
 * User Behavior Metrics
 *
 * - duration_block:      How long has the writer been blocked?
 * - typing_speed:        Has the writer been typing faster or slower than usual?
 * - sentence_complete:   What is the level of completeness of the most recent sentence?
 * - revision_frequency:  How frequently has the writer been using deletion or backspaces?
 * - prob_distraction:    How likely the writer has been distracted, e.g., gazing out of the writing area or switching to a different application?
 */
type UserBehavior = {
    duration_block: number;
    typing_speed: number;
    sentence_complete: number;
    revision_frequency: number;
    prob_distraction: number;
};
declare enum DurationBlock {
    SHORT = -1,
    NORMAL = 0,
    LONG = 1
}
declare enum TypingSpeed {
    SLOW = -1,
    NORMAL = 0,
    FAST = 1
}
declare enum SentenceComplete {
    INCOMPLETE = -1,
    NORMAL = 0,
    COMPLETE = 1
}
declare enum RevisionFrequency {
    FREQUENT = -1,
    NORMAL = 0,
    RARE = 1
}
declare enum ProbDistraction {
    LIKELY = -1,
    NORMAL = 0,
    UNLIKELY = 1
}
type UserBehaviorCategorized = {
    duration_block: DurationBlock;
    typing_speed: TypingSpeed;
    sentence_complete: SentenceComplete;
    revision_frequency: RevisionFrequency;
    prob_distraction: ProbDistraction;
};

interface EditorProps {
    debugMode?: boolean;
    onUserBehaviorChange?: (behavior: UserBehavior) => void;
}
declare function Editor({ debugMode, onUserBehaviorChange, }: EditorProps): JSX.Element;

declare function useTompiUI(): {
    notification: (message: string, data?: ExternalToast) => string | number;
    highlight: (editor: any, text: string, highlight: string) => string;
    comment: (paragraphIndex: number, comment: string) => void;
};

export { Editor, UserBehavior, UserBehaviorCategorized, useTompiUI };
