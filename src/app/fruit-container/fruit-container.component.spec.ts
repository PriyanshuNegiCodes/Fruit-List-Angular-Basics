import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitContainerComponent } from './fruit-container.component';

describe('FruitContainerComponent', () => {
  let component: FruitContainerComponent;
  let fixture: ComponentFixture<FruitContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
