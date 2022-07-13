import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AUDComponent } from './aud.component';

describe('AUDComponent', () => {
  let component: AUDComponent;
  let fixture: ComponentFixture<AUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AUDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
