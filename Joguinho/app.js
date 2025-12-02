
let adivinha = prompt('Eu cresço apesar de não estar vivo. Não tenho pulmões, mas para viver preciso de ar. A água, mesmo que eu não tenha boca, me mata. O que eu sou?')
let resposta_v1 = "Fogo"
let resposta_v2 = "O Fogo"
let resposta_v3 = "O fogo"
let resposta_v4 = "fogo"
let resposta_v5 = "o fogo"

if (adivinha === resposta_v1 || adivinha === resposta_v2 || adivinha === resposta_v3 || adivinha === resposta_v4 || adivinha === resposta_v5) {
    alert('YAY! Ganhaste!!')
} else {
    while (adivinha !== resposta_v1 || adivinha !== resposta_v2 || adivinha !== resposta_v3 || adivinha !== resposta_v4 || adivinha !== resposta_v5) {
        alert('Dica: estas mais quente!')
        adivinha = prompt('Eu cresço apesar de não estar vivo. Não tenho pulmões, mas para viver preciso de ar. A água, mesmo que eu não tenha boca, me mata. O que eu sou?')
    }
}