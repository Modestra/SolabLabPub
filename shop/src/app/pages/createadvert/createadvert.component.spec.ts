import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateadvertComponent } from './createadvert.component';

describe('CreateadvertComponent', () => {
  let component: CreateadvertComponent;
  let fixture: ComponentFixture<CreateadvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateadvertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateadvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
