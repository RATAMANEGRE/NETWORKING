import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NosOffres } from './nos-offres';

describe('NosOffres', () => {
  let component: NosOffres;
  let fixture: ComponentFixture<NosOffres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosOffres],
    }).compileComponents();

    fixture = TestBed.createComponent(NosOffres);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
