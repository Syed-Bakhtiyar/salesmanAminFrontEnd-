import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandiserComponent } from './merchandiser.component';

describe('MerchandiserComponent', () => {
  let component: MerchandiserComponent;
  let fixture: ComponentFixture<MerchandiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchandiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchandiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
