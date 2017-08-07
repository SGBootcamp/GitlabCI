import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture;
  let component;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`check title is shown properly'`, async(() => {
    expect(element.querySelector('h1').textContent).toContain('What is essential is invisible to the eye');
  }));

  it(`check button is shown properly'`, async(() => {
    expect(element.querySelector('button').textContent).toContain('PUSH ME!');
  }));

  it(`check hidden text is not shown by default'`, async(() => {
    expect(element.querySelector('#hiddenText')).toBe(null);
  }));

  it(`check hidden text is shown after clicking button'`, async(() => {
    element.querySelector('button').click();
    fixture.detectChanges();
    expect(element.querySelector('#hiddenText')).not.toBe(null);
  }));
});
