import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaibaComponent } from './saiba.component';

describe('SaibaComponent', () => {
  let component: SaibaComponent;
  let fixture: ComponentFixture<SaibaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaibaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaibaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
