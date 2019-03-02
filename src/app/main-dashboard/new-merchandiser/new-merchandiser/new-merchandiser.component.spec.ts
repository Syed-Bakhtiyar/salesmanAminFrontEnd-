import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMerchandiserComponent } from './new-merchandiser.component';

describe('NewMerchandiserComponent', () => {
  let component: NewMerchandiserComponent;
  let fixture: ComponentFixture<NewMerchandiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMerchandiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMerchandiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
