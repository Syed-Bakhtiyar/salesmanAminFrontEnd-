import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAreaManagerComponent } from './new-area-manager.component';

describe('NewAreaManagerComponent', () => {
  let component: NewAreaManagerComponent;
  let fixture: ComponentFixture<NewAreaManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAreaManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAreaManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
