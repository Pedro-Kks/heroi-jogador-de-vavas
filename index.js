//Usei npm install prompt-sync para simular o prompt do navegador para inserir os valores

const prompt = require('prompt-sync')();

let nome = prompt("Digite o nome do Herói: ");
let xp = Number(prompt("Digite a quantidade de XP do Herói: "));

//Validador de XP:
if (isNaN(xp) || xp < 0) {
  console.log("❌ Valor de XP inválido! Digite um número positivo.");
  return;
}

//Criei um objeto para armazenar os elos/ranks
const elosRanks = {
    eloBaixo: "Ferro",
    eloBaixo2: "Bronze",
    eloBaixo3: "Prata",
    eloMedio: "Ouro",
    eloMedio2: "Platina e Diamante",
    eloMedio3: "Ascendente",
    eloAlto: "Imortal",
    eloAlto2: "Radiante",
}

//Estrutura de condição para avalir em qual Elo o nosso herói está

console.log("🎮 =============================================================================== 🎮")

    if (xp <= 1000) {
    console.log(`>>> O herói ${nome} está no Elo ${elosRanks.eloBaixo} do Valorant.`);
    }
    else if (xp <= 2000) {
    console.log(`>>> O herói ${nome} está no Elo ${elosRanks.eloBaixo2} do Valorant.`);
    }
    else if (xp <= 5000) {
    console.log(`>>> O herói ${nome} está no Elo ${elosRanks.eloBaixo3} do Valorant.`);
    }
    else if (xp <= 7000) {
    console.log(`>>> O herói ${nome} está no Elo ${elosRanks.eloMedio} do Valorant.`);
    }
    else if (xp <= 8000) {
    console.log(`>>> O herói ${nome} está no Elo ${elosRanks.eloMedio2} do Valorant.`);
    }
    else if (xp <= 9000) {
    console.log(`>>> O herói ${nome} está no Elo ${elosRanks.eloMedio3} do Valorant.`);
    }
    else if (xp <= 10000) {
    console.log(`>>> O herói ${nome} está no Elo ${elosRanks.eloAlto} no Valorant.`);
    }
    else {
    console.log(`>>> O herói ${nome} está no Elo ${elosRanks.eloAlto2} no Valorant.`);
    }

console.log("🎮 =============================================================================== 🎮")
console.log("ÉÉÉÉÉ O VAVAS! BORA VAVAS? KKKKKK")
