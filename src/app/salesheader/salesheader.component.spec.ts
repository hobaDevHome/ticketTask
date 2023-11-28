import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesheaderComponent } from './salesheader.component';

describe('SalesheaderComponent', () => {
  let component: SalesheaderComponent;
  let fixture: ComponentFixture<SalesheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
