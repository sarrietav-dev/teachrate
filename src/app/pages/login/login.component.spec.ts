import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { IconModule } from '@visurel/iconify-angular';
import { provideRouter } from '@angular/router';
import { FeedComponent } from '../feed/feed.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userService: AuthService;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', [
      'loginWithGoogle',
    ]);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [IconModule],
      providers: [
        provideRouter([{ path: '', component: FeedComponent }]),
        { provide: AuthService, useValue: authServiceSpy },
      ],
    }).compileComponents();
    userService = TestBed.inject(AuthService);

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a login button', () => {
    const buttonDe = fixture.debugElement;
    const children = buttonDe.queryAll(By.css('button > span'));
    const textSpan = children[1].nativeElement as HTMLSpanElement;
    expect(textSpan.textContent).toContain('Log in with Google');
  });

  it('should call loginWithGoogle when login button is clicked', () => {
    const buttonDe = fixture.debugElement;
    const button = buttonDe.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(userService.loginWithGoogle).toHaveBeenCalled();
  });
});
