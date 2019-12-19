/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DotsgraphComponent } from './dotsgraph.component';

describe('DotsgraphComponent', () => {
  let component: DotsgraphComponent;
  let fixture: ComponentFixture<DotsgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotsgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotsgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
