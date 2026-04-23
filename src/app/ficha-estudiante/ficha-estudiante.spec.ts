import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaEstudiante } from './ficha-estudiante';

describe('FichaEstudiante', () => {
  let component: FichaEstudiante;
  let fixture: ComponentFixture<FichaEstudiante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaEstudiante],
    }).compileComponents();

    fixture = TestBed.createComponent(FichaEstudiante);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
