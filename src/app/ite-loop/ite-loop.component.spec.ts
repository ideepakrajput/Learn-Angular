import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteLoopComponent } from './ite-loop.component';

describe('IteLoopComponent', () => {
  let component: IteLoopComponent;
  let fixture: ComponentFixture<IteLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteLoopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IteLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
