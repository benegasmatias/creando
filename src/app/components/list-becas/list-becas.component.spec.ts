import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBecasComponent } from './list-becas.component';

describe('ListBecasComponent', () => {
  let component: ListBecasComponent;
  let fixture: ComponentFixture<ListBecasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBecasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
