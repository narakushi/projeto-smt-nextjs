const sumMult = (cpf, count, limit) => {
  let soma = 0;
  for (let i = 0; i <= limit; i++) {
    soma += cpf[i] * count;
    count--;
  }

  return soma;
};

const IsValidCPF = (cpf) => {
  let soma = 0;
  let invalido;
  cpf = cpf.replace(/\.|-/g, "");

  for (let i = 0; i <= 9; i++) {
   if(i < 9){ invalido = false;
    if (cpf[i] == cpf[i + 1]) {
      invalido = true;
    }}
  }

  if(invalido){
    return false;
  }

  //verificando o primeiro digito depois do "-"
  soma = sumMult(cpf, 10, 8);
  soma = (soma * 10) % 11;
  if (soma == 10 || soma == 11) {
    soma = 0;
  }

  if (soma != cpf[9]) {
    return false;
  }

  //vericando o segundo digito depois do "-"
  soma = sumMult(cpf, 11, 9);
  soma = (soma * 10) % 11;
  if (soma == 10 || soma == 11) {
    soma = 0;
  }

  if (soma != cpf[10]) {
    return false;
  }

  return true;
};

export default IsValidCPF;
