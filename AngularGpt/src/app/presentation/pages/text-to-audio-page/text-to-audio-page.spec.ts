import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToAudioPage } from './text-to-audio-page';

describe('TextToAudioPage', () => {
  let component: TextToAudioPage;
  let fixture: ComponentFixture<TextToAudioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextToAudioPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextToAudioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
