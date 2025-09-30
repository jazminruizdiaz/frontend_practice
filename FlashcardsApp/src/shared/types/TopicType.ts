import { TOPIC_COLORS } from "../data/Topics";

export type TopicType = keyof typeof TOPIC_COLORS;

export const getAvailableTopics = (): TopicType[] => {
  return Object.keys(TOPIC_COLORS) as TopicType[];
};
