export type AchievementMetric = {
  label: string;
  value: string;
};

export type Achievement = {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  metrics?: AchievementMetric[];
  category: "ACADEMIC" | "PROFESSIONAL" | "CERTIFICATION";
};