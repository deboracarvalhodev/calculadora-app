export function soma(a, b) {
  return Number(a) + Number(b);
}

export function subtracao(a, b) {
  return Number(a) - Number(b);
}

export function multiplicacao(a, b) {
  return Number(a) * Number(b);
}

export function divisao(a, b) {
  if (Number(b) === 0) {
    return "Erro: divisão por zero";
  }

  return Number((Number(a) / Number(b)).toFixed(5));
}