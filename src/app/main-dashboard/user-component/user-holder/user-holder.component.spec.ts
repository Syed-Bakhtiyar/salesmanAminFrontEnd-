import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHolderComponent } from './user-holder.component';

describe('UserHolderComponent', () => {
  let component: UserHolderComponent;
  let fixture: ComponentFixture<UserHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
