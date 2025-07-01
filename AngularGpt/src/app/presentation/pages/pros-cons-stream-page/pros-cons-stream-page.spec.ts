import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsConsStreamPage } from './pros-cons-stream-page';

describe('ProsConsStreamPage', () => {
  let component: ProsConsStreamPage;
  let fixture: ComponentFixture<ProsConsStreamPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProsConsStreamPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProsConsStreamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
