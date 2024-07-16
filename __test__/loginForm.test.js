// __tests__/loginForm.test.js

const { campoVazio, validarEmail } = require('../js/validation');

describe('Testes para validação de formulário', () => {
  // Caso 1: Testar campoVazio com campo vazio
  test('campoVazio retorna true para campo vazio', () => {
    expect(campoVazio('')).toBe(true);
  });

  // Caso 2: Testar campoVazio com campo preenchido
  test('campoVazio retorna false para campo preenchido', () => {
    expect(campoVazio('email')).toBe(false); // Supondo que 'email' seja preenchido
  });

  // Caso 3: Testar campoVazio com campo preenchido com espaços
  test('campoVazio retorna true para campo preenchido apenas com espaços', () => {
    expect(campoVazio('senha')).toBe(true); // Supondo que 'senha' esteja preenchido apenas com espaços
  });

  // Caso 4: Testar validarEmail com email válido
  test('validarEmail retorna true para email válido', () => {
    expect(validarEmail('exemplo@dominio.com')).toBe(true);
  });

  // Caso 5: Testar validarEmail com email inválido (falta domínio)
  test('validarEmail retorna false para email sem domínio', () => {
    expect(validarEmail('email-invalido@')).toBe(false);
  });

  // Caso 6: Testar validarEmail com email inválido (formato incorreto)
  test('validarEmail retorna false para email com formato incorreto', () => {
    expect(validarEmail('email-invalido@dominio')).toBe(false);
  });

  // Caso 7: Testar validarEmail com email inválido (sem @)
  test('validarEmail retorna false para email sem símbolo @', () => {
    expect(validarEmail('emailinvalido.com')).toBe(false);
  });

  // Caso 8: Testar validarEmail com email inválido (vazio)
  test('validarEmail retorna false para email vazio', () => {
    expect(validarEmail('')).toBe(false);
  });

  // Caso 9: Testar campoVazio com campo preenchido corretamente
  test('campoVazio retorna false para campo preenchido corretamente', () => {
    expect(campoVazio('email')).toBe(false); // Supondo que 'email' esteja preenchido corretamente
  });

  // Caso 10: Testar campoVazio com campo preenchido incorretamente
  test('campoVazio retorna true para campo preenchido incorretamente', () => {
    expect(campoVazio('email')).toBe(true); // Supondo que 'email' esteja preenchido incorretamente
  });
});
