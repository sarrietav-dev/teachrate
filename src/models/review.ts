import { Teacher } from './teacher';
import { faker } from '@faker-js/faker';

export type Review = {
  id: string;
  rating: number;
  content: string;
  teacher: Omit<Teacher, 'subjects'>;
  subject: string;
  createdAt: Date;
};

function createFakeReview(): Review {
  return {
    id: faker.datatype.uuid(),
    content: faker.lorem.paragraph(),
    rating: faker.datatype.number({ min: 1, max: 5 }),
    teacher: {
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
    },
    subject: faker.word.noun(),
    createdAt: faker.date.past(),
  };
}

export function createFakeReviews(count: number = 1): Review[] {
  return Array(count)
    .fill(null)
    .map(() => createFakeReview());
}
