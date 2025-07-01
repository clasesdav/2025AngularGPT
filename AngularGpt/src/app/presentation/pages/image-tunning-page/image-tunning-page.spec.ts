import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTunningPage } from './image-tunning-page';

describe('ImageTunningPage', () => {
  let component: ImageTunningPage;
  let fixture: ComponentFixture<ImageTunningPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTunningPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTunningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
