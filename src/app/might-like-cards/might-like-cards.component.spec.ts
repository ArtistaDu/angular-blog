import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MightLikeCardsComponent } from './might-like-cards.component';

describe('MightLikeCardsComponent', () => {
  let component: MightLikeCardsComponent;
  let fixture: ComponentFixture<MightLikeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MightLikeCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MightLikeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
