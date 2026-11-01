import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailTalent } from './detail-talent';

describe('DetailTalent', () => {
  let component: DetailTalent;
  let fixture: ComponentFixture<DetailTalent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailTalent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailTalent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
