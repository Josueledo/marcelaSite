import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicializeComponent } from './inicialize.component';

describe('InicializeComponent', () => {
  let component: InicializeComponent;
  let fixture: ComponentFixture<InicializeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicializeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicializeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
