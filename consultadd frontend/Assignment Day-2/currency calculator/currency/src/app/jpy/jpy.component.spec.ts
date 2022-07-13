import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JPYComponent } from './jpy.component';

describe('JPYComponent', () => {
  let component: JPYComponent;
  let fixture: ComponentFixture<JPYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JPYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JPYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
