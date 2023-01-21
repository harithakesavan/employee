import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitdetailsComponent } from './submitdetails.component';

describe('SubmitdetailsComponent', () => {
  let component: SubmitdetailsComponent;
  let fixture: ComponentFixture<SubmitdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
