import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGamesStudioComponent } from './list-games-studio.component';

describe('ListGamesStudioComponent', () => {
  let component: ListGamesStudioComponent;
  let fixture: ComponentFixture<ListGamesStudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGamesStudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGamesStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
