import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EROComponent } from './ero.component';

describe('EROComponent', () => {
  let component: EROComponent;
  let fixture: ComponentFixture<EROComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EROComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EROComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
