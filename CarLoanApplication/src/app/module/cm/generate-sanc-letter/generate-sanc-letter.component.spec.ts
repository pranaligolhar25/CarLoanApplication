import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateSancLetterComponent } from './generate-sanc-letter.component';

describe('GenerateSancLetterComponent', () => {
  let component: GenerateSancLetterComponent;
  let fixture: ComponentFixture<GenerateSancLetterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateSancLetterComponent]
    });
    fixture = TestBed.createComponent(GenerateSancLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
