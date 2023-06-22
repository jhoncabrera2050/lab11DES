import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPeliculasComponent } from './editar-peliculas.component';

describe('EditarPeliculasComponent', () => {
  let component: EditarPeliculasComponent;
  let fixture: ComponentFixture<EditarPeliculasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPeliculasComponent]
    });
    fixture = TestBed.createComponent(EditarPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
