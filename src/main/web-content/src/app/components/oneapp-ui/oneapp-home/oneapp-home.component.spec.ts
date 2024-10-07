import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneappHomeComponent } from './oneapp-home.component';

describe('OneappHomeComponent', () => {
  let component: OneappHomeComponent;
  let fixture: ComponentFixture<OneappHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneappHomeComponent]
    });
    fixture = TestBed.createComponent(OneappHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
