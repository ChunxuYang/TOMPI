import { UserBehaviorCategorized } from "./user-behavior";

/**
 * Mind State
 * - Planning:    The writer is planning the next sentence.
 * - Translating: The writer is translating the plan into words.
 * - Reviewing:   The writer is reviewing the sentence.
 * - Distracted:  The writer is distracted.
 */
export enum MindStateCategory {
  Planning = "Planning",
  Translating = "Translating",
  Reviewing = "Reviewing",
  Distracted = "Distracted",
}

type MindStateItem = {
  likelihood: number;
};

/**
 * Mind State
 * - planning:    The likelihood of the writer being in the planning state.
 * - translating: The likelihood of the writer being in the translating state.
 * - reviewing:   The likelihood of the writer being in the reviewing state.
 * - distracted:  The likelihood of the writer being in the distracted state.
 */
export type MindState = {
  planning: MindStateItem;
  translating: MindStateItem;
  reviewing: MindStateItem;
  distracted: MindStateItem;
};

/**
 * User State
 * - mind_state:    The current mind state of the writer.
 * - user_behavior: The user behavior metrics.
 */
export type UserState = {
  mind_state: MindState;
  user_behavior: UserBehaviorCategorized;
};
