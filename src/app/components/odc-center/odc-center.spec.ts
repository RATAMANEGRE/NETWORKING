import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OdcCenter } from './odc-center';

describe('OdcCenter', () => {
  let component: OdcCenter;
  let fixture: ComponentFixture<OdcCenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OdcCenter],
    }).compileComponents();

    fixture = TestBed.createComponent(OdcCenter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
