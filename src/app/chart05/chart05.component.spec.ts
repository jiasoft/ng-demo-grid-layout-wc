import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart05Component } from './chart05.component';

describe('Chart05Component', () => {
  let component: Chart05Component;
  let fixture: ComponentFixture<Chart05Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chart05Component]
    });
    fixture = TestBed.createComponent(Chart05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
