// Realiza leitura através do terminal
const prompt = require('prompt-sync')();
  
  let nomeHeroi = ''; 
  let xpHeroi = '';
  let nivelHeroi = '';
  let opcao = '';

do {
  console.log('\n\n\n\n');
  nomeHeroi = prompt('Digite o nome do herói: ');
  xpHeroi = prompt('Informe a experiência (XP) do herói: ');
  
  if (xpHeroi < 1001) {
    nivelHeroi = 'Ferro';
  } else if (xpHeroi < 2001) {
    nivelHeroi = 'Bronze';
  } else if (xpHeroi < 5001) {
    nivelHeroi = 'Prata';
  } else if (xpHeroi < 7001) {
    nivelHeroi = 'Ouro';
  } else if (xpHeroi < 8001) {
    nivelHeroi = 'Platina';
  } else if (xpHeroi < 9001) {
    nivelHeroi = 'Ascendente';
  } else if (xpHeroi < 10001) {
    nivelHeroi = 'Imortal';
  } else {
    nivelHeroi = 'Radiante';
  }

  console.log(`O Herói de nome ${nomeHeroi.toUpperCase()} está no nível de ${nivelHeroi.toUpperCase()}\n\n`);

  opcao = prompt('Continuar nivelamento de Herói? s-sim | n-não: ');
} while (opcao === 'S' || opcao === 's')

console.log('\nNivelamento Encerrado!');
