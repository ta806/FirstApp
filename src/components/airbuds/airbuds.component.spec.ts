import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirbudsComponent } from './airbuds.component';

describe('AirbudsComponent', () => {
  let component: AirbudsComponent;
  let fixture: ComponentFixture<AirbudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirbudsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirbudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
