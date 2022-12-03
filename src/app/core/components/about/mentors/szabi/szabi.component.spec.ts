import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzabiComponent } from './szabi.component';

describe('SzabiComponent', () => {
  let component: SzabiComponent;
  let fixture: ComponentFixture<SzabiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzabiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
