import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBecasComponent } from './form-becas.component';

describe('FormBecasComponent', () => {
  let component: FormBecasComponent;
  let fixture: ComponentFixture<FormBecasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBecasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
