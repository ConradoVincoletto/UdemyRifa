const usuario = [
    { nome: "CONRADO VINCOLETTO", email: "conrado@gmail.com" },
    { nome: "JOÃO GUILHERME", email: "joao@gmail.com" },
    { nome: "PEDRO PAULO", email: "pedro@gmail.com" },
    { nome: "THIAGO KORNOVISK", email: "thiago@gmail.com" },
    { nome: "IVAN BARBARO", email: "ivan@gmail.com" },
    { nome: "ISABEL DE OLIVEIRA", email: "isabel@gmail.com" },
    { nome: "PEDRO MANOEL", email: "pedro@gmail.com" },
    { nome: "THALES ARSECA", email: "thales@gmail.com" },
    { nome: "DENIS MANSUR", email: "denis@gmail.com" },
    { nome: "DENISE PAIVA", email: "denise@gmail.com" },
    { nome: "MAXUEL GUIMALHAES", email: "maxuel@gmail.com" },
    { nome: "PAULO ANTUNES", email: "paulo@gmail.com" },
    { nome: "RAFAEL COSTA", email: "rafael@gmail.com" },
    { nome: "OSMAR FILHO", email: "osmar@gmail.com" },
    { nome: "GABRIEL INOCENCIO", email: "gabriel@gmail.com" },
    { nome: "URSULA BUENDIA", email: "ursula@gmail.com" },
    { nome: "AURELIANO BUENDIA", email: "aureliano@gmail.com" },
    { nome: "REMEDIOS MILAGRE", email: "remedios@gmail.com" },
    { nome: "GABRIELE SILVA", email: "gabriele@gmail.com" },
    { nome: "JAQUELINE PASSARO", email: "jaqueline@gmail.com" },
    { nome: "TOBIAS AGUIAR", email: "tobias@gmail.com" },
    { nome: "SUASSUNA RAMOS", email: "suassuna@gmail.com" },
    { nome: "GUILHERME MEDEIROS", email: "guilherme@gmail.com" },
    { nome: "PLACIDO DOMINGUES", email: "placido@gmail.com" },
    { nome: "JOSE ARCADIO", email: "jose@gmail.com" },
    { nome: "DRIELLE VINCOLETTO", email: "drielle@gmail.com" },
    { nome: "LUCAS SILVA E SILVA", email: "lucas@gmail.com" },
    { nome: "JOSEVALDO SILVEIRA", email: "josevaldo@gmail.com" }
]

const sort = document.getElementById("sort");
const nomeGanhador = document.getElementById("nomeGanhador");
const emailGanhador = document.getElementById("emailGanhador");
const spanSort = document.getElementById("spanSort");

function rodarRifa() {

    var sorteio = Math.floor(Math.random() * usuario.length)

    const resultadoFinal = usuario[sorteio];

    nomeGanhador.style.display = "block";
    emailGanhador.style.display = "block";
    nomeGanhador.textContent = resultadoFinal.nome;
    emailGanhador.textContent = resultadoFinal.email;
    sort.textContent = "RESULTADO DO SORTEIO"
    spanSort.textContent = "SORTEAR NOVAMENTE"    
}
