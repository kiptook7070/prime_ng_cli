import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingnOutComponent } from './singn-out.component';

describe('SingnOutComponent', () => {
  let component: SingnOutComponent;
  let fixture: ComponentFixture<SingnOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingnOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingnOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
