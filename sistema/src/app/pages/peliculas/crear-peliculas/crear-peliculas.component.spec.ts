import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPeliculasComponent } from './crear-peliculas.component';

describe('CrearPeliculasComponent', () => {
  let component: CrearPeliculasComponent;
  let fixture: ComponentFixture<CrearPeliculasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPeliculasComponent]
    });
    fixture = TestBed.createComponent(CrearPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
