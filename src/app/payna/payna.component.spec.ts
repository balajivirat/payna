import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaynaComponent } from './payna.component';

describe('PaynaComponent', () => {
  let component: PaynaComponent;
  let fixture: ComponentFixture<PaynaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaynaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaynaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
