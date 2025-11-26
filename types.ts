export type ActivityType = 'transport' | 'food' | 'sightseeing' | 'hotel' | 'shopping' | 'relax';

export interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
  location: string;
  type: ActivityType;
  details?: string; // Content for the modal (e.g., ticket info)
  imageUrl?: string;
}

export interface DaySchedule {
  date: string;
  dayLabel: string; // e.g., "Day 1"
  activities: Activity[];
}

export interface WeatherData {
  temp: string;
  condition: string;
  location: string;
}
