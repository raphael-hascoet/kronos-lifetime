import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectifItemComponent } from './objectif-item.component';

describe('ObjectifItemComponent', () => {
  let component: ObjectifItemComponent;
  let fixture: ComponentFixture<ObjectifItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectifItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectifItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
