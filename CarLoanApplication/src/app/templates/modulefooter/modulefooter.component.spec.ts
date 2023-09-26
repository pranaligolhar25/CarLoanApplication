import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulefooterComponent } from './modulefooter.component';

describe('ModulefooterComponent', () => {
  let component: ModulefooterComponent;
  let fixture: ComponentFixture<ModulefooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModulefooterComponent]
    });
    fixture = TestBed.createComponent(ModulefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
