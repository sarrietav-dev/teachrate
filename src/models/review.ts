import { Teacher } from './teacher';

export type Review = {
  id: string;
  rating: number;
  content: string;
  teacher: Exclude<Teacher, 'subjects'>;
  subject: string;
};
