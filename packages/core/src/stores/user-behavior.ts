import { atom } from "jotai";

/**
 * User Behavior Metrics
 *
 * - duration_block:      How long has the writer been blocked?
 * - typing_speed:        Has the writer been typing faster or slower than usual?
 * - sentence_complete:   What is the level of completeness of the most recent sentence?
 * - revision_frequency:  How frequently has the writer been using deletion or backspaces?
 * - prob_distraction:    How likely the writer has been distracted, e.g., gazing out of the writing area or switching to a different application?
 */
export type UserBehavior = {
  duration_block: number;
  typing_speed: number;
  sentence_complete: number;
  revision_frequency: number;
  prob_distraction: number;
};

export enum DurationBlock {
  SHORT = -1,
  NORMAL = 0,
  LONG = 1,
}

export enum TypingSpeed {
  SLOW = -1,
  NORMAL = 0,
  FAST = 1,
}

export enum SentenceComplete {
  INCOMPLETE = -1,
  NORMAL = 0,
  COMPLETE = 1,
}

export enum RevisionFrequency {
  FREQUENT = -1,
  NORMAL = 0,
  RARE = 1,
}

export enum ProbDistraction {
  LIKELY = -1,
  NORMAL = 0,
  UNLIKELY = 1,
}

export type UserBehaviorCategorized = {
  duration_block: DurationBlock;
  typing_speed: TypingSpeed;
  sentence_complete: SentenceComplete;
  revision_frequency: RevisionFrequency;
  prob_distraction: ProbDistraction;
};

const duration_block = atom<Number>(0);
const typing_speed = atom<Number>(0);
const sentence_complete = atom<Number>(0);
const revision_frequency = atom<Number>(0);
const prob_distraction = atom<Number>(0);

export {
  duration_block,
  typing_speed,
  sentence_complete,
  revision_frequency,
  prob_distraction,
};
