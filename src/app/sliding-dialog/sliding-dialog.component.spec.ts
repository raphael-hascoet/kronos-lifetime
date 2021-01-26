import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingDialogComponent } from './sliding-dialog.component';

describe('SlidingDialogComponent', () => {
  let component: SlidingDialogComponent;
  let fixture: ComponentFixture<SlidingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
