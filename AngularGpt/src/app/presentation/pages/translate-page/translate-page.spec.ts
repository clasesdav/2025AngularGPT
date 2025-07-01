import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatePage } from './translate-page';

describe('TranslatePage', () => {
  let component: TranslatePage;
  let fixture: ComponentFixture<TranslatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslatePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
