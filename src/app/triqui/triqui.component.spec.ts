import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriquiComponent } from './triqui.component';
import { By } from '@angular/platform-browser';

describe('TriquiComponent', () => {
  let component: TriquiComponent;
  let fixture: ComponentFixture<TriquiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TriquiComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deben las celdas disparar el evento "send" al darse click en ellas y cambiar el valor de playerWin', () => {
    spyOn(component.game, 'send').and.returnValue('X');
    const celda = fixture.debugElement.query(By.css('.column'));

    celda.triggerEventHandler('click', null);

    expect(component.game).toHaveBeenCalledWith(0, 0);
    expect(component.playerWin).toEqual('X');
  });

  it('debe la celda 1, 2 contener la clase "X"', () => {
    component.game.send(1, 2);
    fixture.detectChanges();

    const [, fila] = fixture.debugElement.queryAll(By.css('.row'));
    const [, , celda] = fila.queryAll(By.css('.column'));

    expect(celda.classes.X).toBeTruthy();
  });

  it('debe motrar el div "playerWin" cuando algún jugador haya ganado', () => {
    let playerWin = fixture.debugElement.query(By.css('.player-win'));
    expect(playerWin).toBeFalsy();

    component.playerWin = 'X';
    fixture.detectChanges();

    playerWin = fixture.debugElement.query(By.css('.player-win'));

    expect(playerWin.nativeElement.textContent).toBe('¡Player X win!');

    component.playerWin = 'Y';
    fixture.detectChanges();

    playerWin = fixture.debugElement.query(By.css('.player-win'));

    expect(playerWin.nativeElement.textContent).toBe('¡Player X win!');
  });
});
