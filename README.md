# 🧙 Classificador de Rank de Heróis — XP, Elos do Valorant 🎮

Este projeto é um pequeno script em **JavaScript**, executado via **Node.js**, que simula a classificação de um herói em diferentes **elos/ranks** com base em sua experiência (`XP`). O objetivo é treinar o uso de **variáveis**, **objetos**, **estrutura condicional** e a **entrada de dados no terminal** com o pacote `prompt-sync`.

---

## 📌 Tecnologias e Conceitos Utilizados

- 🟨 JavaScript (Node.js)
- 📦 [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) para entrada de dados via terminal
- 🧠 Lógica condicional (`if`, `else if`, `else`)
- 📁 Objetos em JavaScript
- 💬 Interação com o usuário via console

---

## 🚀 Como Funciona

1. O programa solicita ao usuário que insira:
   - O **nome do herói**
   - A **quantidade de XP** do herói

2. Com base no XP informado, o sistema identifica e imprime na tela o **Elo do herói**, usando uma estrutura de **condicionais encadeadas**.

3. Os elos são armazenados dentro de um **objeto chamado `elosRanks`**, que simula os ranks do jogo **Valorant**, desde Ferro até Radiante.

4. Ao final, uma mensagem temática é exibida:  
   _"ÉÉÉÉÉ O VAVAS! BORA VAVAS? KKKKKK"_ 🎮😆

---

## 💻 Como Executar

> Você precisa ter o **Node.js** instalado.

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```
2. Instale as dependências:
```bash
npm install prompt-sync
```
3. Execute o programa:
```bash
node index.js
```
