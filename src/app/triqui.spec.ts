import { Triqui } from './triqui';

describe('Triqui', () => {
  it('should create an instance', () => {
    expect(new Triqui()).toBeTruthy();
  });

  it('debe "marcar" asignar "X" en la posición enviada por parametro y cambiar el turno', () => {
    const juego = new Triqui();

    juego.marcar(1, 2);

    expect(juego.getGame()[1][2]).toEqual('X');
  });
});
