import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsbarComponent } from './optionsbar.component';

describe('OptionsbarComponent', () => {
  let component: OptionsbarComponent;
  let fixture: ComponentFixture<OptionsbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
