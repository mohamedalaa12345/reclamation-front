import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementSComponent } from './equipement-s.component';

describe('EquipementSComponent', () => {
  let component: EquipementSComponent;
  let fixture: ComponentFixture<EquipementSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipementSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipementSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
