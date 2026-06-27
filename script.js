const letra = document.querySelector(".area-letra");
const mp3 = document.querySelector(".mp3");
const audio = document.getElementById("audio");
const vinil = document.getElementById("vinil");
const barra = document.getElementById("barra");
const capa = document.querySelector(".capa");
const nome = document.getElementById("nome");
const artista = document.getElementById("artista");
const botaoPlay = document.querySelector(".play");
const itensMusica = document.querySelectorAll(".musica");


const musicas = [



{
nome:"Ter o coração no chão",
artista:"Ana Vitória",
capa:"imagens/anavitoria.jpg",
audio:"musicas/anavitoria.m4a",

letra:`

Você me mostrou que o amor pode ser fácil <p>
E eu desconfiei <p>
Nunca tinha visto a paz tão perto do meu nariz <p>
Eu pensei que pra ser feliz, o chão precisava tremer <p>
E a realidade parecer mentira, que coisa boba<p>
Encontrei, nas besteiras da rotina, a maior beleza<p>
<p>
Você me falou o seu amor no meu ouvido<p>
Sem pedir de volta uma resposta, garantia ou coisa assim<p>
Tão diferente de mim, tão longe das explosões<p>
Sem preocupar com os dias que virão<p>
<p>
Que coisa boa ter o coração no chão<p>
E ter coragem pra dizer<p>
Eu te amo<p>
E eu te amo<p>
<p>
Do jeito mais simples e bonito<p>
Não sei o que vem depois, nem os riscos<p>
Tô deixando o corpo escolher o caminho da vontade<p>
E a vontade tem sido você, tem sido você toda hora<p>
Só você<p>
<p>
Que venham as surpresas, os atrasos, os abismos, os desencontros<p>
Desafios, canastras, perigos<p>
Que sinalizem astros, profecias, as intuições e os guias espirituais<p>
As intuições e os guias espirituais<p>
As intuições e os guias<p>
<p>
Eu quero estar contigo<p>
E nada mais<p>
E nada mais<p>
Eu quero estar contigo<p>
E nada mais<p>

`

},

{
nome:"Ternura",
artista:"Anitta, Melly",
capa:"imagens/anitta.jpg",
audio:"./musicas/ternura.mp3",
letra:`

Tive que chamar Oxum, no rio me banhar<p>
Dona das águas que guarda o tesouro<p>
Ora yê yê yê ô<p>
E a minha pele refletindo ouro<p>
Ora yê yê yê ô<p>
<p>
A sua doçura me cura<p>
Só a sua ternura pra me salvar<p>
A sua doçura me cura<p>
Só a sua ternura pra me salvar<p>
Pra me salvar<p>
<p>
Meu coração amoleceu de um jeito que<p>
Não tenho mais vontade de sair daqui<p>
É tão inédito<p>
Nem quero mérito<p>
Só quero teu sorriso<p>
<p>
Bora desbravar o mundo enquanto o tempo passa<p>
Se tu vem comigo, a sorte me acha<p>
Nem me lembro quando me entreguei assim<p>
Sabe que a resposta é sim<p>
Bora, meu porto seguro, meu lugar de calma<p>
Amor que consagra a beleza da alma<p>
Tenho tanta coisa pra agradecer<p>
Eu só quero saber<p>
<p>
Ora yê yê yê ô<p>
<p>
A sua doçura me cura<p>
Só a sua ternura pra me salvar<p>
A sua doçura me cura<p>
Só a sua ternura pra me salvar (só a sua ternura pra me salvar)<p>
<p>
A sua doçura me cura<p>
Só a sua ternura pra me salvar (só a sua ternura pra me salvar)<p>
A sua doçura me cura<p>
Só a sua ternura pra me salvar (só a sua ternura pra me salvar)<p>
<p>
Ora yê yê, Mãe Oxum (ora yê yê yê ô)<p>
Ora yê yê, Mãe Oxum<p>
Ora yê yê, Mãe Oxum (ora yê yê yê ô)<p>
Ora yê yê, Mãe Oxum (ora yê yê yê ô)<p>
Ora yê yê, Mãe Oxum<p>
Ora yê yê, Mãe Oxum (ora yê yê yê ô)<p>
<p>
Ora yê yê, Mãe Oxum<p>
Ora yê yê, Mãe Oxum<p>
Ora yê yê, Mãe Oxum<p>
<p>
Tiver que chamar Oxum<p>

`
},


{
nome:"Tú",
artista:"Maye",
capa:"imagens/TU.jpg",
audio:"musicas/tu.mp3",
letra:`
Tudo que vem eu peço<p>
Em cada momento infinito<p>
Estou procurando o que você está escondendo<p>
Você me diz onde<p>
Tudo o que acontece é relativo<p>
Mas, toda vez que estou com você<p>
O tempo para<p>
E você desaparece<p>
E você me dá todo o resto<p>
Quero estar onde você está<p>
O amor é você<p>
Só você<p>
E você me dá todo o resto<p>
Quero estar onde você está<p>
O amor é você<p>
Nenhum como você<p>
Tudo isso diz um beijo único<p>
Faz o universo se render<p>
Como os deuses fazem<p>
Ao anoitecer<p>
Por que correr se não há pressa<p>
Se toda vez que estivermos juntos<p>
O tempo para<p>
E você desaparece<p>
E você me dá todo o resto<p>
Quero estar onde você está<p>
O amor é você<p>
Só você<p>
E você me dá todo o resto<p>
Quero estar onde você está<p>
O amor é você<p>
Nenhum como você<p>
Não preciso de mais nada<p>
Se for a mais difícil de encontrar<p>
Eu encontrei com você<p>
Uh-uh<p>
Uh-uh-uh-ah<p>
Uh-uh-uh<p>
Uah-uh-uh-uh<p>
Não preciso de mais nada<p>
Se for a mais difícil de encontrar<p>
Eu encontrei com você<p>
E mais ninguém<p>
`


},


{
nome:"Disritmia",
artista:"Martinho da Vila",
capa:"imagens/disritmia.jpg",
audio:"musicas/disritmia.mp3",
letra: `

Eu quero me esconder debaixo dessa sua saia<p>
Pra fugir do mundo<p>
Pretendo também me embrenhar<p>
No emaranhado desses seus cabelos<p>
Preciso transfundir seu sangue<p>
Pro meu coração que é tão vagabundo<p>
<p>
Me deixe te trazer num dengo<p>
Pra num cafuné, fazer os meus apelos<p>
Me deixe te trazer num dengo<p>
Pra num cafuné, fazer os meus apelos<p>
<p>
Eu quero ser exorcizado<p>
Pela água benta desse olhar infindo<p>
Que bom é ser fotografado<p>
Mas pelas retinas desses olhos lindos<p>
Me deixe hipnotizado pra acabar de vez<p>
Com essa disritmia<p>
<p>
Vem logo, vem curar seu nego<p>
Que chegou de porre lá da boemia<p>
Vem logo, vem curar seu nego<p>
Que chegou de porre lá da boemia<p>
<p>
Eu quero ser exorcizado<p>
Pela água benta desse olhar infindo<p>
Que bom é ser fotografado<p>
Mas pelas retinas desses olhos lindos<p>
Me deixe hipnotizado pra acabar de vez<p>
Com essa disritmia<p>
<p>
Vem logo, vem curar seu nego<p>
Que chegou de porre lá da boemia<p>
Vem logo, vem curar seu nego<p>
Que chegou de porre lá da boemia<p>
<p>
Vem logo, vem curar seu nego<p>
Que chegou de porre lá da boemia<p>
Vem logo, vem curar seu nego<p>
Que chegou de porre lá da boemia<p>
<p>
Vem logo, vem curar seu nego<p>
Que chegou de porre lá da boemia<p>
Vem logo, vem curar seu nego<p>
Que chegou de porre lá da boemia<p>



`
},


{
nome:"AMAReSÓ",
artista:"Carol Biazin",
capa:"imagens/carol.jpg",
audio:"musicas/carol.mp3",
letra: `
Tem tanta poesia na minha mente<p>
Plenitude nesse entardecer<p>
Ainda mais com você na minha frente<p>
Sua roupa combinando com o céu rosa buquê<p>
Você tem minha sede, minha pele te escolheu<p>
<p>
Cada traço dos meus versos, eu não<p>
Não contesto sentimentos, hm<p>
Me faz crer sem nem ver, meu Deus<p>
Me desmonto na tua boca, ô-uô-uô<p>
<p>
Teu olhar marrom, meu lar<p>
Mal vi, já quis morar<p>
Tão leve te amar, amor<p>
Amar e só, ô-uô-uô<p>
<p>
Teu olhar marrom, meu lar<p>
Mal vi, já quis morar<p>
Tão leve te amar, amor<p>
Amar e só<p>
<p>
Você só vai encontrar<p>
Entender um amor tranquilo, vivendo, uô<p>
Você só vai encontrar<p>
Entender um amor tranquilo, vivendo<p>
<p>
Cada traço dos meus versos, eu não<p>
Não contesto sentimentos, hm<p>
Me faz crer sem nem ver, meu Deus<p>
Me desmancho na tua boca, ô-uô-uô<p>
<p>
Teu olhar marrom, meu lar<p>
Mal vi, já quis morar<p>
Tão leve te amar, amor<p>
Amar e só, ô-uô-uô<p>
<p>
Teu olhar marrom, meu lar<p>
Mal vi, já quis morar<p>
Tão leve te amar, amor<p>
Amar e só<p>
<p>
Ah, como é bom se apaixonar<p>
Como é bom se apaixonar<p>
Como é bom se apaixonar<p>

`
},


{
nome:"Olha",
artista:"Maria Bethania",
capa:"imagens/olha.jpg",
audio:"musicas/olha.wma",
letra:`
Olha, você tem todas as coisas<p>
Que um dia eu sonhei pra mim<p>
A cabeça cheia de problemas<p>
Não me importo, eu gosto mesmo assim<p>
<p>
Tem os olhos cheios de esperança<p>
De uma cor que ninguém mais possui<p>
Me traz meu passado e as lembranças<p>
Coisas que eu quis ser e não fui<p>
<p>
Olha, você vive tão distante<p>
Muito além do que eu posso ter<p>
Eu que sempre fui tão inconstante<p>
Te juro, meu amor, agora é pra valer<p>
<p>
Olha, vem comigo onde eu for<p>
Seja meu amante e meu amor<p>
Vem seguir comigo o meu caminho<p>
E viver a vida só de amor<p>
<p>
Olha, você vive tão distante<p>
Muito além do que eu posso ter<p>
Eu que sempre fui tão inconstante<p>
Te juro, meu amor, agora é pra valer<p>
<p>
Olha, vem comigo onde eu for<p>
Seja meu amante, meu amor<p>
Vem seguir comigo o meu caminho<p>
E viver a vida só de amor<p>
<p>
Olha, vem comigo<p>

`
},


{
nome:"Flor de Flamboyant",
artista:"João Gomes, Jota Pê e Mestrinho",
capa:"imagens/flor.jpg",
audio:"musicas/flor.mp3",
letra: `


Oi<p>
Nosso saudoso Kara Véia<p>
É canção de vaqueiro<p>
<p>
Você entrou na minha vida<p>
Como uma estrela da manhã<p>
Como uma joia preferida<p>
Minha flor de flamboyant<p>
<p>
É como chuva passageira<p>
No inverno da ilusão<p>
Choveu apagando a poeira<p>
E, de repente, fez verão<p>
<p>
É como chuva passageira<p>
No inverno da ilusão<p>
Choveu apagando a poeira<p>
E, de repente, fez verão<p>
<p>
Pura como a natureza<p>
Linda como a cor do mar<p>
Tem um encanto de sereia<p>
Tem um brilho no olhar<p>
<p>
É como a noite enluarada<p>
É como estrelas, lá no céu<p>
Como o cantar da passarada<p>
Meu gostoso pão de mel<p>
<p>
É como a noite enluarada<p>
É como estrelas, lá no céu<p>
Como o cantar da passarada<p>
Meu gostoso pão de mel<p>
<p>
Tô num beco sem saída<p>
Já não sei pra onde vou<p>
Entreguei a minha vida<p>
Me perdi de tanto amor<p>
<p>
Já não sei mais o que fazer<p>
Pra você poder me amar<p>
Abre os braços, vem correndo<p>
Eu estou a te esperar<p>
<p>
Já não sei mais o que fazer<p>
Pra você poder me amar<p><p>
Abre os braços, vem correndo<p>
Eu estou a te esperar<p>
<p>
Cê é de São Paulo, né?<p>
Eu sou de São Paulo<p>
Aqui em Alagoas tem o rei, véio<p>
Se chama Kara Véia (bom demais)<p>
É o rei das vaquejadas<p>
<p>
Tô num beco sem saída<p>
Já não sei pra onde vou<p>
Lhe entreguei a minha vida<p>
Me perdi de tanto amor<p>
<p>
Eu já não sei o que fazer<p>
Pra você poder me amar<p>
Abre os braços, vem correndo<p>
Eu estou a te esperar<p>
<p>
Já não sei mais o que fazer<p>
Pra você poder me amar<p>
Abre os braços, vem correndo<p>
Que eu estou a te esperar<p>
<p>
Vai, mestrinho!<p>
Ele vai!<p>
E sabe, viu?<p>
<p>
Ê, negocio bom!<p>


`
},


];



let atual = 0;



function carregarMusica(){

console.log(musicas[atual].audio);
audio.src = musicas[atual].audio;


capa.src = musicas[atual].capa;


nome.innerHTML = musicas[atual].nome;


artista.innerHTML = musicas[atual].artista;


letra.innerHTML = musicas[atual].letra;


barra.value = 0;

atualizarSelecionada();
}


function playPause(){


if(audio.paused){


audio.play();


botaoPlay.innerHTML = "⏸";


vinil.classList.add("rodando");


}


else{


audio.pause();


botaoPlay.innerHTML = "▶";


vinil.classList.remove("rodando");


}


}





function proxima(){


atual++;


if(atual >= musicas.length){

atual = 0;

}


carregarMusica();


audio.play();


vinil.classList.add("rodando");


}




function voltar(){


atual--;


if(atual < 0){

atual = musicas.length -1;

}


carregarMusica();


audio.play();


vinil.classList.add("rodando");


}





audio.addEventListener("timeupdate", ()=>{


if(audio.duration){


barra.value =
(audio.currentTime / audio.duration) * 100;


document.getElementById("inicio").innerHTML =
formatar(audio.currentTime);


document.getElementById("fim").innerHTML =
formatar(audio.duration);


}


});





barra.oninput = ()=>{


audio.currentTime =
(barra.value / 100) * audio.duration;


};






function formatar(seg){


let minutos = Math.floor(seg / 60);


let segundos = Math.floor(seg % 60);



if(segundos < 10){

segundos = "0" + segundos;

}


return minutos + ":" + segundos;


}



audio.addEventListener("ended", ()=>{

proxima();

});



// começa carregando a primeira música

carregarMusica();



function mostrarLetra(){

    mp3.classList.toggle("virado");

}
function atualizarSelecionada(){

    itensMusica.forEach((item)=>{

        item.classList.remove("ativa");

    });


    itensMusica[atual].classList.add("ativa");

}

