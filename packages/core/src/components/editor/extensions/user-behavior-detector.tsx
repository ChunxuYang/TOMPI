import { UserBehavior } from "@/stores/user-behavior";
import { Extension, Editor } from "@tiptap/core";

export interface UserBehaviorDetectorOptions {}

export interface UserBehaviorDetectorStorage {
  user_behavior: () => UserBehavior;

  // for typing speed
  start_time: number;
  character_count: number;

  // for distraction
  distraction_count: number;
}

const UserBehaviorDetector = Extension.create<
  UserBehaviorDetectorOptions,
  UserBehaviorDetectorStorage
>({
  name: "userBehaviorDetector",

  addOptions() {
    return {};
  },

  addStorage() {
    return {
      user_behavior: () => ({
        duration_block: 0,
        typing_speed: 0,
        sentence_complete: 0,
        revision_frequency: 0,
        prob_distraction: 0, // finished
      }),

      start_time: Date.now(),
      character_count: 0,

      distraction_count: 0,
    };
  },

  onBeforeCreate() {
    this.storage.start_time = Date.now();
    this.storage.character_count = 0;

    this.storage.distraction_count = 0;

    this.storage.user_behavior = () => ({
      duration_block: 0,
      typing_speed:
        (this.storage.character_count /
          (Date.now() - this.storage.start_time)) *
        1000,
      sentence_complete: 0,
      revision_frequency: 0,
      prob_distraction: this.storage.distraction_count, // finished
    });
  },

  onUpdate() {
    this.storage.distraction_count = 0;
  },

  onTransaction({ transaction }) {
    // if more than 20 second from start_time, reset start_time and typing_speed
    if (Date.now() - this.storage.start_time > 20000) {
      this.storage.start_time = Date.now();
      this.storage.character_count = 0;
      // this.storage.user_behavior.typing_speed = 0;
    }

    if (transaction.docChanged) {
      transaction.steps.forEach((step) => {
        if (step.toJSON().from === step.toJSON().to) {
          this.storage.character_count += 1;
        }
      });
    }
  },

  onBlur() {
    this.storage.distraction_count += 1;
  },

  onFocus() {
    this.storage.start_time = Date.now();
    this.storage.character_count = 0;
  },
});

export default UserBehaviorDetector;
