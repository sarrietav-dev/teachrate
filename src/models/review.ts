import { Teacher } from './teacher';

export type Review = {
  id: string;
  rating: number;
  content: string;
  teacher: Omit<Teacher, 'subjects'>;
  subject: string;
};
