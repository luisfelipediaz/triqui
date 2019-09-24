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

  it('debe "send" arrojar un error cuando trato de enviar un movimiento duplicado', () => {
    const juego = new Triqui();

    juego.send(1, 2);

    expect(() => juego.send(1, 2)).toThrow(new Error('Celda no disponible 1, 2'));
  });

  it('debe "send" retornar "X" cuando el primer jugador complete el triqui horizontalmente', () => {
    horizontalCase1(new Triqui());
    horizontalCase2(new Triqui());
    horizontalCase3(new Triqui());
  });

  it('debe "send" retornar "O" cuando el segundo jugador complete el triqui verticalmente', () => {
    verticalCase1(new Triqui());
    verticalCase2(new Triqui());
    verticalCase3(new Triqui());
  });
});

function horizontalCase1(juego: Triqui) {
  juego.send(0, 0);
  juego.send(1, 2);
  juego.send(0, 1);
  juego.send(2, 1);

  const actual = juego.send(0, 2);
  expect(actual).toEqual('X');
}

function horizontalCase2(juego: Triqui) {
  juego.send(1, 0);
  juego.send(0, 0);
  juego.send(1, 1);
  juego.send(2, 1);

  const actual = juego.send(1, 2);
  expect(actual).toEqual('X');
}

function horizontalCase3(juego: Triqui) {
  juego.send(2, 0);
  juego.send(0, 0);
  juego.send(2, 1);
  juego.send(0, 1);

  const actual = juego.send(2, 2);
  expect(actual).toEqual('X');
}

function verticalCase1(juego: Triqui) {
  juego.send(0, 1);
  juego.send(0, 0);
  juego.send(0, 2);
  juego.send(1, 0);
  juego.send(2, 1);

  const actual = juego.send(2, 0);
  expect(actual).toEqual('O');
}


function verticalCase2(juego: Triqui) {
  juego.send(0, 0);
  juego.send(0, 1);
  juego.send(0, 2);
  juego.send(1, 1);
  juego.send(2, 0);

  const actual = juego.send(2, 1);
  expect(actual).toEqual('O');
}

function verticalCase3(juego: Triqui) {
  juego.send(0, 1);
  juego.send(0, 0);
  juego.send(0, 2);
  juego.send(1, 2);
  juego.send(2, 0);

  const actual = juego.send(2, 2);
  expect(actual).toEqual('O');
}

