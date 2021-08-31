import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternallibComponent } from './externallib.component';

describe('ExternallibComponent', () => {
  let component: ExternallibComponent;
  let fixture: ComponentFixture<ExternallibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternallibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternallibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
