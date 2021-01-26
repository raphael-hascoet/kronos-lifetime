import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectifRemplirModalComponent } from './objectif-remplir-modal.component';

describe('ObjectifRemplirModalComponent', () => {
  let component: ObjectifRemplirModalComponent;
  let fixture: ComponentFixture<ObjectifRemplirModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectifRemplirModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectifRemplirModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
