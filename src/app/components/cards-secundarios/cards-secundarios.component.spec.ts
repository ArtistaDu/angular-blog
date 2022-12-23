import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSecundariosComponent } from './cards-secundarios.component';

describe('CardsSecundariosComponent', () => {
  let component: CardsSecundariosComponent;
  let fixture: ComponentFixture<CardsSecundariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsSecundariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsSecundariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
