import { Component } from '@angular/core';
import { Review } from 'src/models/review';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  reviews: Review[] = [
    {
      id: '1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl eu nunc. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl eu nunc.',
      rating: 5,
      teacher: {
        id: '1',
        name: 'John Doe',
      },
      subject: 'Math',
    },
    {
      id: '2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      rating: 2,
      teacher: {
        id: '2',
        name: 'Jane Doe',
      },
      subject: 'English',
    },
  ];
}
