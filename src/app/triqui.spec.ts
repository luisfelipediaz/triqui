import { Triqui } from './triqui';

describe('Triqui', () => {
  it('should create an instance', () => {
    expect(new Triqui()).toBeTruthy();
  });

  it('debe "send" asignar "X" en la posición 1, 2 y cambiar el turno', () => {
    const juego = new Triqui();

    juego.send(1, 2);

    expect(juego.getGame()[1][2]).toEqual('X');
    expect(juego.getTurn()).toEqual('O');
  });

  it('debe "send" asignar "O" en la posición 1, 0 cuando "X" ya envío su jugada y cambiar el turno', () => {
    const juego = new Triqui();

    juego.send(1, 2);
    juego.send(1, 0);

    expect(juego.getGame()[1][0]).toEqual('O');
    expect(juego.getTurn()).toEqual('X');
  });

  it('debería "send" arrojar un error cuando trato de enviar un movimiento duplicado', () => {
    const juego = new Triqui();

    juego.send(1, 2);

    expect(() => juego.send(1, 2)).toThrow(new Error('Celda no disponible'));
  });
});
