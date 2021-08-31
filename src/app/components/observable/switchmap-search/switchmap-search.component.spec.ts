import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchmapSearchComponent } from './switchmap-search.component';

describe('SwitchmapSearchComponent', () => {
  let component: SwitchmapSearchComponent;
  let fixture: ComponentFixture<SwitchmapSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchmapSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchmapSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
