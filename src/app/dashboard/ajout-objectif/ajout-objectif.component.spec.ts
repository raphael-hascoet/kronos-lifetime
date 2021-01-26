import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutObjectifComponent } from './ajout-objectif.component';

describe('AjoutObjectifComponent', () => {
  let component: AjoutObjectifComponent;
  let fixture: ComponentFixture<AjoutObjectifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutObjectifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutObjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
