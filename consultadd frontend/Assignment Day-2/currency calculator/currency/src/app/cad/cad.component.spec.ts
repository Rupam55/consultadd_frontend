import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CADComponent } from './cad.component';

describe('CADComponent', () => {
  let component: CADComponent;
  let fixture: ComponentFixture<CADComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CADComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
