import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrtografiPage } from './ortografi-page';

describe('OrtografiPage', () => {
  let component: OrtografiPage;
  let fixture: ComponentFixture<OrtografiPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrtografiPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrtografiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
