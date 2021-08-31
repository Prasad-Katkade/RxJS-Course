import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipforkjoinComponent } from './zipforkjoin.component';

describe('ZipforkjoinComponent', () => {
  let component: ZipforkjoinComponent;
  let fixture: ComponentFixture<ZipforkjoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipforkjoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipforkjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
