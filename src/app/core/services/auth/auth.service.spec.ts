import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { FirebaseAuthService } from '../firebase/firebase-auth.service';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let fbAuthService: jasmine.SpyObj<FirebaseAuthService>;

  beforeEach(() => {
    const fbAuthServiceSpy = jasmine.createSpyObj('FirebaseAuthService', {
      loginWithGoogle: of({
        id: '123',
        name: 'John Doe',
        email: '',
      }),
    });

    TestBed.configureTestingModule({
      providers: [
        {
          provide: FirebaseAuthService,
          useValue: fbAuthServiceSpy,
        },
      ],
    });

    service = TestBed.inject(AuthService);
    fbAuthService = TestBed.inject(
      FirebaseAuthService
    ) as jasmine.SpyObj<FirebaseAuthService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user after login', (done) => {
    service.login().subscribe((user) => {
      expect(user).toEqual({
        id: '123',
        name: 'John Doe',
        email: '',
      });
      done();
    });
  });
});
