import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublierOffre } from './publier-offre';

describe('PublierOffre', () => {
  let component: PublierOffre;
  let fixture: ComponentFixture<PublierOffre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublierOffre],
    }).compileComponents();

    fixture = TestBed.createComponent(PublierOffre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
