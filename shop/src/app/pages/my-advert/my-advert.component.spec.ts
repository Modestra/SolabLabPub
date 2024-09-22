import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdvertComponent } from './my-advert.component';

describe('MyAdvertComponent', () => {
  let component: MyAdvertComponent;
  let fixture: ComponentFixture<MyAdvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAdvertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
