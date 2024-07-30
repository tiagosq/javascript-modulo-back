# Countdown Vanilla
*Atividade criada por Tiago Quadros*

## Objetivo
Aqui iremos criar um contador que poderá servir como uma ferramenta de pomodoro ou similar.

![Um exemplo do nosso contador](countdown.png)

## Habilidades Esperadas
- Assimilar os conceitos básicos de JS e TS
- Manipular timers
- Gerenciar eventos

## Como entregar a atividade?
As atividade devem ser enviadas em um arquivo zip, apenas com os seus códigos (as dependências podem ser reinstaladas apenas com o `package.json`).

[FORMULÁRIO PARA ENVIO](https://forms.gle/iJKx4yrXPouE5KpU8)

## Requisitos

### 1 - Criar a estrutura inicial.
Você irá precisar criar uma estrutura que contenha um arquivo index.html e um arquivo script.js que deve ser vinculado ao arquivo HTML.

### 2 - Crie os elementos básicos do HTML.
De forma básica, o contador deve conter 3 inputs para registrar as horas, minutos e segundos do contador. Além de um botão para iniciar o contador.

### 3 - Crie uma função para armazenar o tempo salvo.
O tempo deve ser considerado em horas, minutos e segundos. O tempo pode ser armazenado ao mesmo tempo em que o contador é iniciado.

### 4 - Ao clicar no botão de iniciar faça com que um contador seja iniciado.
Aqui você deve garantir que nenhum outro contador tenha sido iniciado para evitar a duplicidade na contagem do tempo (2 segundos a cada segundo).

### 5 - Ao terminar o contador, execute algum aviso visual e/ou sonoro para o usuário.
Aqui você pode criar um aviso que seja, trocar a cor do fundo, disparar um alerta ou tocar algum efeito sonoro.
O contador não deve prosseguir após atingir zero.