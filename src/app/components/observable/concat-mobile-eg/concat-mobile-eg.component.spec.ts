import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMobileEgComponent } from './concat-mobile-eg.component';

describe('ConcatMobileEgComponent', () => {
  let component: ConcatMobileEgComponent;
  let fixture: ComponentFixture<ConcatMobileEgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatMobileEgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatMobileEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
