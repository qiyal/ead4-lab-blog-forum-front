import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSavedComponent } from './edit-saved.component';

describe('EditSavedComponent', () => {
  let component: EditSavedComponent;
  let fixture: ComponentFixture<EditSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSavedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
