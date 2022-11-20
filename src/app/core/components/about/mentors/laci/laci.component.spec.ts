import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaciComponent } from './laci.component';

describe('LaciComponent', () => {
  let component: LaciComponent;
  let fixture: ComponentFixture<LaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
