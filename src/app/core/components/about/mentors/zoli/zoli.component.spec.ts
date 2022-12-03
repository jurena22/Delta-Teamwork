import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoliComponent } from './zoli.component';

describe('ZoliComponent', () => {
  let component: ZoliComponent;
  let fixture: ComponentFixture<ZoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
