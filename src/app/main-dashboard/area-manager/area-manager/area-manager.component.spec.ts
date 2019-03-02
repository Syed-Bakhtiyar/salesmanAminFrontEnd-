import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaManagerComponent } from './area-manager.component';

describe('AreaManagerComponent', () => {
  let component: AreaManagerComponent;
  let fixture: ComponentFixture<AreaManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
