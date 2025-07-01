import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGenerationPage } from './image-generation-page';

describe('ImageGenerationPage', () => {
  let component: ImageGenerationPage;
  let fixture: ComponentFixture<ImageGenerationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageGenerationPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageGenerationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
