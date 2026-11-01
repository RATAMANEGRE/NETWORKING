import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConditionsUtilisation } from './conditions-utilisation';

describe('ConditionsUtilisation', () => {
  let component: ConditionsUtilisation;
  let fixture: ComponentFixture<ConditionsUtilisation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionsUtilisation],
    }).compileComponents();

    fixture = TestBed.createComponent(ConditionsUtilisation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
