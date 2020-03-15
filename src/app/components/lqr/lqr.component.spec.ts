import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LqrComponent } from './lqr.component';

describe('LqrComponent', () => {
  let component: LqrComponent;
  let fixture: ComponentFixture<LqrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LqrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
