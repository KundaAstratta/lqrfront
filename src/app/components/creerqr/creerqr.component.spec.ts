import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerqrComponent } from './creerqr.component';

describe('CreerqrComponent', () => {
  let component: CreerqrComponent;
  let fixture: ComponentFixture<CreerqrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerqrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
