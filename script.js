
contadorPassar = 0

function voltar() {


        if (contadorPassar >= 3 ){

        document.querySelector("#divHub").style.transform = "translateX(-35%)";
        contadorPassar = 2;

        } else if (contadorPassar == 2) {
                
        document.querySelector("#divHub").style.transform = "translateX(-15%)";
        contadorPassar = 1;

        } else if (contadorPassar == 1){
        
        document.querySelector("#divHub").style.transform = "translateX(0%)";
        contadorPassar = 0;

        }

}

function passar() {

        contadorPassar++

        if (contadorPassar == 1 ){

        document.querySelector("#divHub").style.transform = "translateX(-15%)";

        } else if (contadorPassar == 2) {
                
        document.querySelector("#divHub").style.transform = "translateX(-35%)";

        } else if (contadorPassar == 3){
        
        document.querySelector("#divHub").style.transform = "translateX(-50%)";

        }
}


contadorPassarInt = 0

function voltarInt() {


        if (contadorPassarInt >= 3 ){

        document.querySelector("#divInt").style.transform = "translateX(-35%)";
        contadorPassarInt = 2;

        } else if (contadorPassarInt == 2) {
                
        document.querySelector("#divInt").style.transform = "translateX(-15%)";
        contadorPassarInt = 1;

        } else if (contadorPassarInt == 1){
        
        document.querySelector("#divInt").style.transform = "translateX(0%)";
        contadorPassarInt = 0;

        }

}

function passarInt() {

        contadorPassarInt++

        if (contadorPassarInt == 1 ){

        document.querySelector("#divInt").style.transform = "translateX(-15%)";

        } else if (contadorPassarInt == 2) {
                
        document.querySelector("#divInt").style.transform = "translateX(-35%)";

        } else if (contadorPassarInt == 3){
        
        document.querySelector("#divInt").style.transform = "translateX(-50%)";

        }
}



contadorPassarCopy = 0

function voltarCopy() {


        if (contadorPassarCopy >= 3 ){

        document.querySelector("#divCopy").style.transform = "translateX(-35%)";
        contadorPassarCopy = 2;

        } else if (contadorPassarCopy == 2) {
                
        document.querySelector("#divCopy").style.transform = "translateX(-15%)";
        contadorPassarCopy = 1;

        } else if (contadorPassarCopy == 1){
        
        document.querySelector("#divCopy").style.transform = "translateX(0%)";
        contadorPassarCopy = 0;

        }

}

function passarCopy() {

        contadorPassarCopy++

        if (contadorPassarCopy == 1 ){

        document.querySelector("#divCopy").style.transform = "translateX(-15%)";

        } else if (contadorPassarCopy == 2) {
                
        document.querySelector("#divCopy").style.transform = "translateX(-35%)";

        } else if (contadorPassarCopy == 3){
        
        document.querySelector("#divCopy").style.transform = "translateX(-50%)";

        }
}




contadorPassarPosi = 0

function voltarPosi() {


        if (contadorPassarPosi >= 3 ){

        document.querySelector("#divPosi").style.transform = "translateX(-35%)";
        contadorPassarPosi = 2;

        } else if (contadorPassarPosi == 2) {
                
        document.querySelector("#divPosi").style.transform = "translateX(-15%)";
        contadorPassarPosi = 1;

        } else if (contadorPassarPosi == 1){
        
        document.querySelector("#divPosi").style.transform = "translateX(0%)";
        contadorPassarPosi = 0;

        }

}

function passarPosi() {

        contadorPassarPosi++

        if (contadorPassarPosi == 1 ){

        document.querySelector("#divPosi").style.transform = "translateX(-15%)";

        } else if (contadorPassarPosi == 2) {
                
        document.querySelector("#divPosi").style.transform = "translateX(-35%)";

        } else if (contadorPassarPosi == 3){
        
        document.querySelector("#divPosi").style.transform = "translateX(-50%)";

        }
}




contadorPassarFlow = 0

function voltarFlow() {


        if (contadorPassarFlow >= 3 ){

        document.querySelector("#divFlow").style.transform = "translateX(-35%)";
        contadorPassarFlow = 2;

        } else if (contadorPassarFlow == 2) {
                
        document.querySelector("#divFlow").style.transform = "translateX(-15%)";
        contadorPassarFlow = 1;

        } else if (contadorPassarFlow == 1){
        
        document.querySelector("#divFlow").style.transform = "translateX(0%)";
        contadorPassarFlow = 0;

        }

}

function passarFlow() {

        contadorPassarFlow++

        if (contadorPassarFlow == 1 ){

        document.querySelector("#divFlow").style.transform = "translateX(-15%)";

        } else if (contadorPassarFlow == 2) {
                
        document.querySelector("#divFlow").style.transform = "translateX(-35%)";

        } else if (contadorPassarFlow == 3){
        
        document.querySelector("#divFlow").style.transform = "translateX(-50%)";

        }
}



function mexerUm() {
        div1.style.background = "url(noticia/default_2020-10-20_feae8614-b127-4c1f-8893-4f0a86fef2d4.jpeg)";
        textAparecer.innerHTML = `Funcionaria do MacDonalds relata que <br> "Deus tem tocado o Cora????o das Pessoas". <br> Ela tem orado pelas pessoas que passam pelo estabelecimento <br> do MacDonalds...
        <a href="https://noticias.gospelmais.com.br/mcdonalds-atendente-clientes-deus-toca-coracoes-155884.html" target="_blank"> Saber mais... </a> </b>`

        setTimeout(() => {
                mexerDois()
        }, 100000);
}

function mexerDois() {
        div1.style.background = "url(noticia/Claudio.jfif)";
        textAparecer.innerHTML = ` "Nada pode parar o povo de Deus" <br> diz pastor Claudio Duarte em <br> evento com Bolsonaro...
        <a href="https://noticias.gospelmais.com.br/nada-parar-povo-deus-diz-pastor-claudio-duarte-155778.html" target="_blank"> Saiba mais... </a> `

        setTimeout(() => {
                mexerTres()
        }, 100000);
}

function mexerTres() {

        div1.style.background = `url(noticia/Tecno.jpg)`
        textAparecer.innerHTML = `Persegui????o Religiosa atraves da internet aumenta, <br> diz organiza????o...
        <a href="" target="_blank"> Saiba mais... </a> </div>`

        setTimeout(() => {
                mexerQuatro()
        }, 100000);
}


function mexerQuatro() {


        div1.style.background = `url(noticia/biblia.jfif)`
        textAparecer.innerHTML = `Estudo: crist??os com f?? teologicamente fundamentada <br> s??o mais dispostos a evangelizar...
                                 <a href="https://noticias.gospelmais.com.br/evangelizar-cristaos-fe-embasada-iniciativa-155869.html" target="_blank"> Saiba mais... </a> `

        setTimeout(() => {
                mexerUm()
        }, 100000);

}

function conteudoAbraao() {

        abraao.innerHTML = `Abra??o <br><br> (em hebraico: ??????????; romaniz.: Avraham ou ???Abhr??h??m) ?? um personagem b??blico citado 
        no G??nesis a partir do qual teriam se desenvolvido as religi??es abra??micas, as principais vertentes do monote??smo: 
        o juda??smo, o cristianismo e o islamismo.[1] At?? hoje, os arque??logos n??o encontraram nenhuma prova da exist??ncia de Abra??o,[2] 
        embora tenham sido, recentemente, encontradas as aldeias com nomes dos familiares de Abra??o (seu av?? e seu bisav??, Naor e Serugue) 
        numa ??rea da atual Turquia, identificada como a regi??o de Har??.[3] ?? o primeiro dos patriarcas b??blicos e 
        fundador do monote??smo dos hebreus.[4] Acredita-se que Abra??o teria vivido mais provavelmente entre os s??culos XXI e XVIII a.C.
        Segundo o livro G??nesis, que comp??e o Pentateuco do Antigo Testamento, Deus disse a Abra??o para deixar Ur com a sua fam??lia em
        dire????o ?? "terra que eu te indicar".[5] Nesta terra, os seus descendentes formariam uma grande na????o e herdariam uma terra
        "onde corre leite e mel". Sendo o povo escolhido de Deus, os hebreus conquistariam a terra prometida de Cana??, uma terra de fartura,
        em compara????o com as que Abra??o deixara para tr??s. Foi assim que Abra??o deixou a sua vida sedent??ria para viajar para Cana??.
        Esta migra????o ?? de significado hist??rico compar??vel ?? epop??ia de Mois??s, mais tarde, trazendo os hebreus de regresso do Egito,
        atrav??s do Mar Vermelho. FONTE (WIKIPEDIA)`

}


function abraaoAparecer() {

        setTimeout(() => {
                conteudoAbraao()
        }, 1000);
}

function abraaoSumir() {

        abraao.innerHTML = ` <h2> Abra??o </h2> `
}




function conteudojaco() {

        jaco.innerHTML = ` Jac?? <br><br> era filho de Isaac (ou Isaque) e Rebeca, irm??o g??meo de Esa?? e neto de Abra??o. Sua hist??ria ocupa vinte e 
cinco cap??tulos do livro de G??nesis.[2][3]

        Feita a profecia de Deus a Rebeca sobre as duas na????es que nasceriam do seu ventre[4] ?? que nascem Esa?? e Jac??.
        Seus descendentes seriam os edomitas e os israelitas, respectivamente. Jac??, com suas esposas e primas Leia e Raquel,
        e suas duas concubinas, Bila e Zilpa, teria doze filhos ??? os futuros l??deres das famosas Doze Tribos de Israel: 
        R??ben, Sime??o, Levi, Jud??, D??, Naftali, Gade, Aser, Issacar, Zebulom, Jos?? e Benjamim[nota 1] ??? 
        e uma ??nica filha, Din??. Jos?? n??o entra na composi????o direta do futuro Estado de Israel, mas sim seus dois filhos ??? 
        Manasses e Efraim ???, que seriam adotados por Jac??. Levi ?? outro filho de Jac?? que n??o recebe heran??a na Terra Prometida, 
        porque o Senhor ?? a sua heran??a.
        
        Esa?? era bom ca??ador, enquanto Jac?? cuidava da casa. Um dia, Esa?? voltou de uma ca??ada cansado e com fome.
        Ent??o Jac?? oferece um prato de comida em troca do direito de governar o reino depois que o pai deles morresse, Esa?? aceitou.
        
        Ap??s se passar pelo irm??o para obter a b??n????o do pai, Isaque (j?? em leito de morte),
        Jac?? entra em p?? de guerra com Esa??. Sua m??e aconselha-o a sair de casa, prometendo-o chamar de volta quando o irm??o se acalmasse.
        Neste ponto a idade de Jac?? ?? de 40 anos. Isso pode ser atestado pelo casamento de Esa??, aos 40 anos, com mulheres que trouxeram
        problemas para a fam??lia (G??nesis 26:34,35). FONTE (WIKIPEDIA) `

}


function jacoAparecer() {

        setTimeout(() => {
                conteudojaco()
        }, 1000);
}

function jacoSumir() {

        jaco.innerHTML = ` <h2> Jac?? </h2>`
}

function conteudojose() {

        jose.innerHTML = ` Jos?? <br><br> Jos?? (em hebraico ????????????, significando "[ Yahweh ] acrescentar??";[2] em hebraico padr??o,
        Yosef; em hebraico tiberiano; Y??s??p??; em ??rabe: ???????? , transl. Y??suf ou Y??sif; em grego antigo: ??????????? I??s??ph; posteriormente 
        designado como ???????? ????????, transl. Tz??fnat pan??ach, em hebraico padr??o, ou ?????p????na??? pa????n???????, em hebraico tiberiano, que significaria 
        "descobridor das coisas ocultas"), tamb??m chamado de Zafenate-Paneia, foi o d??cimo primeiro filho de Jac??, nascido de Raquel, 
        citado no Antigo Testamento, em G??nesis 37:, e considerado o fundador da tribo de Jos??, constitu??da, por sua vez, da tribo de Efraim e 
        da tribo de Manass??s (seus filhos). Quando foi nomeado homem de confian??a do Fara??, foi-lhe concedida a m??o de Azenate,
        filha de Pot??fera, sacerdote de Om.[3] Jos?? tamb??m ?? tio-av?? de Mois??s.FONTE (WIKIPEDIA) `

}


function joseAparecer() {

        setTimeout(() => {
                conteudojose()
        }, 1000);
}

function joseSumir() {

        jose.innerHTML = ` <h2> Jos?? </h2> `
}



function conteudomoises() {

        moises.innerHTML = ` Mois??s <br><br> Mois??s (em hebraico: ????????????; romaniz.: Moshe tiberiano: M??????; em grego cl??ssico:
        M???????????; romaniz.: M????s??s; em ??rabe: ??????????; romaniz.: M??sa: "tirado das ??guas" ou "filho") foi um l??der religioso, juiz,
        legislador e profeta reconhecido no Juda??smo, Cristianismo e Islamismo. A Mois??s ?? atribu??da a autoria da Tor??.

        Segundo a tradi????o judaico-crist??, Mois??s foi um instrumento de Deus para libertar os Hebreus, que o consideravam seu principal
        legislador e um dos mais importantes l??deres religiosos.
        
        De acordo com a B??blia e a tradi????o judaico-crist??-isl??mica, Deus realizou diversos milagres atrav??s de Mois??s ap??s uma Teofania. 
        Libertou o povo de Israel da escravid??o no Antigo Egito, instituindo assim a P??scoa Judaica. Depois guiou o seu povo em um ??xodo pelo
        deserto durante quarenta anos, que se iniciou com a famosa passagem em que Deus, atrav??s de seu servo Mois??s, abre o Mar Vermelho para
        possibilitar a travessia segura dos filhos de Israel. Ainda segundo a B??blia, recebeu no alto do Monte Sinai as T??buas da Lei de Deus,
        contendo os Dez Mandamentos.
        
        Alguns historiadores afirmam que, durante a sua perman??ncia entre os eg??pcios, Mois??s aprendeu o conceito do monote??smo
        criado pelo fara?? Aquen??ton (r. 1352???1338 a.C.), possivelmente levando tal conceito ao povo hebreu. FONTE (WIKIPEDIA) `

}


function moisesAparecer() {

        setTimeout(() => {
                conteudomoises()
        }, 1000);
}

function moisesSumir() {

        moises.innerHTML = ` <h2> Mois??s </h2> `
}



function conteudojosue() {

        josue.innerHTML = ` Jos??e <br><br> No c??non hebraico, o livro de Josu?? ?? o primeiro rolo dos ???Livros dos Profetas???;
        de acordo com a tradi????o judaico-crist??, ?? o nome do l??der de Israel, sucessor do profeta Mois??s.[9] Filho de Num,
        da Tribo de Efraim, Josu?? foi ajudante de Mois??s durante o ??xodo dos israelitas do Egito e os 40 anos pelo deserto do Sinai. 
        Quando Eldade e Medade estavam cheios do Esp??rito de Deus e profetizando, Josu?? rogou a Mois??s que os proibisse,
        mas Mois??s n??o o atendeu dizendo: "Quem dera todo o povo do Senhor fosse profeta e que o Senhor pusesse o seu Esp??rito sobre eles!".
        [10] Depois da morte de Mois??s, Josu?? liderou o povo de Israel na conquista das cidades-estado da terra de Cana?? e foi respons??vel
        por conduzir os israelitas ?? Terra Prometida. A narrativa b??blica deixa claro que Josu?? foi um dos maiores estrategistas da Hist??ria 
        da Humanidade, tendo liderado o povo de Israel num conflito com cerca de trinta cidades da terra de Cana??, durante a campanha militar 
        de invas??o do seu povo. Nota-se sua intelig??ncia como estrategista de guerra, vendo como comandava o numeroso ex??rcito, obedecendo a 
        Deus que lhe mandou fazer ju??zo contra os povos de Cana??, que dentre outras barbaridades faziam sacrif??cios humanos 
        (inclusive de crian??as) ??s suas divindades de barro. Josu?? teve uma abordagem diferente de outros povos que invadiam e
        dominavam territ??rios na Antiguidade, escravizando parte daqueles que eram derrotados e/ou exigindo o pagamento peri??dico de tributos.
        FONTE (WIKIPEDIA) `

}


function josueAparecer() {

        setTimeout(() => {
                conteudojosue()
        }, 1000);
}

function josueSumir() {

        josue.innerHTML = ` <h2> Josu?? </h2> `
}

function conteudojesus() {

        jesus.innerHTML = ` Jesus <br><br> Quase todas as linhas crist??s acreditam que Jesus foi concebido pelo Esp??rito Santo,
        nasceu de uma virgem, praticou milagres, fundou a Igreja, morreu crucificado como forma de expia????o, ressuscitou dos mortos
        e ascendeu ao C??u, do qual regressar??.[21] A grande maioria dos crist??os adoram Jesus como a encarna????o de Deus, o Filho,
        a segunda das tr??s pessoas na Sant??ssima Trindade. Alguns grupos crist??os rejeitam a Trindade, no todo ou em parte.
        Em 3 anos de minist??rio prof??tico - ensinando e pregando o Reino de Deus - Jesus realizou milagres e maravilhas por onde passou.
        O primeiro milagre de Jesus foi num casamento. Segundo a passagem no Evangelho de Jo??o, Jesus transformou a ??gua em vinho,
        mas depois disso continuou a fazer muitas maravilhas e sinais. FONTE (BIBLIAON) `

}


function jesusAparecer() {

        setTimeout(() => {
                conteudojesus()
        }, 1000);
}

function jesusSumir() {

        jesus.innerHTML = ` <h2> Jesus </h2> `
}

function conteudopedro() {

        pedro.innerHTML = ` Pedro <br><br> Pedro foi um dos doze ap??stolos de Jesus, conhecido por sua grande ousadia e
        influ??ncia no princ??pio do cristianismo. Escreveu dois livros b??blicos: 1?? e 2?? Pedro. Al??m disso, tamb??m ficou
        conhecido na hist??ria como o disc??pulo que negou Jesus por tr??s vezes.

        Teve seu nome mudado de Sim??o para Pedro, por Jesus, tornando-se num dos disc??pulos mais pr??ximos do Senhor.
        N??o s?? o nome, mas toda a vida de Pedro foi transformada na sua trajet??ria como seguidor de Jesus.
        
        De um simples pescador, com temperamento forte e impulsivo, Pedro foi transformado numa rocha firme,
        num dos l??deres crist??os mais influentes na igreja primitiva. Como ap??stolo, depois da ressurrei????o de Jesus,
        foi exemplo na prega????o ousada da Palavra e no cuidado para com a Igreja de Cristo. 
        
        A B??blia n??o relata, mas segundo a hist??ria, Pedro morreu martirizado numa cruz invertida, por se considerar indigno de ser morto da
        mesma forma que Jesus Cristo. 
        FONTE (BIBLIAON) `

}


function pedroAparecer() {

        setTimeout(() => {
                conteudopedro()
        }, 1000);
}

function pedroSumir() {

        pedro.innerHTML = ` <h2> Pedro </h2> `
}

function conteudoPaulo() {

        paulo.innerHTML = ` Paulo <br><br> ap??stolo Paulo foi o autor de 13 dos livros do Novo Testamento,
        que fundou v??rias igrejas no in??cio do Cristianismo. Ele n??o seguiu Jesus durante seu minist??rio,
        mas teve uma vis??o de Jesus mais tarde. O minist??rio de Paulo se concentrou em todos que n??o eram judeus.
        Era s??bio e foi ensinadom aos p??s de Gamaliel, um mestre e doutor da escrituras sagradas, isso fez de at?? ent??o Saulo
        um perseguidor de crist??os, at?? um dia em que se deparou com um jovem chamado estev??o, que p??s a sua f?? a prova
        morrendo por cristo, desde aquele momento paulo come??a a ser citado na biblia, tem sua convers??o quando o propio
        cristo aparece a ele. Depois desse evento ele come??a a trazer a pratica o evangelho do arrependimento e salva????o
        como cristo ensinava, autor de 40% das escrituras da biblia, Paulo morreu decapitado a mando do ent??o comandante Nero... `

}


function pauloAparecer() {

        setTimeout(() => {
                conteudoPaulo()
        }, 1000);
}

function pauloSumir() {

       paulo.innerHTML = ` <h2>Paulo </h2> `
}


function conteudojoao() {

        joao.innerHTML = ` Joao <br><br> Jo??o foi escrito provavelmente perto de ??feso,
        provavelmente em meados dos anos 90, com edi????o posterior (talvez por outro lado) na primeira d??cada do s??culo II.
        Estilo e a teologia est??o entrela??adas.

        Autoria:
        Este evangelho ?? atribu??do a Jo??o, filho de Zebedeu. O conte??do do
        A autoria ??, portanto, frequentemente atribu??da ao ???livro joanino???.
        
        Muitas pessoas atribuem este Evangelho a um homem chamado Jo??o, ??? o [disc??pulo] a quem Jesus amava ??? (Jo??o 13:23), mas o autor real ?? desconhecido.
        Muitos acreditam que o autor era membro de uma comunidade crist?? fundada pelo disc??pulo amado.
        Sua tradi????o e ensinamentos representam toda a comunidade joanina, e n??o apenas um indiv??duo.
        
        Data Aproximada de Autoria: AD 90 - 100. FONTE(ESTUDOSBIBLICOSONLINE)`

}


function joaoAparecer() {

        setTimeout(() => {
                conteudojoao()
        }, 1000);
}

function joaoSumir() {

       joao.innerHTML = ` <h2> Jo??o </h2> `
}



    var contador = 0

    var nome_externo = ''

    var segundos = 0

    function timer() {

        segundos ++
        console.log(segundos)

        if (segundos >= 11){
            segundos = 0
        }

        if (segundos == 10){

        contadorA.innerHTML = `00:${segundos}`
        
        } else if (segundos == 15) {

        contadorA.innerHTML = `00:00`

        } else {

        contadorA.innerHTML = `00:0${segundos}`

        }

    }

    function jogar() {

         var nome = inpNome.value

         nome_externo = nome

         
         
         if (nome == '' || nome == ' ' || nome.length < 3) {

            Incorreto.innerHTML = `<i style="color: red;"> Nome Incorreto. Necessita ter 3 caracteres, n??o pode ser vazio ou nulo.<i>`

         } else {

            Incorreto.innerHTML = `<i style="color: blue;"> Nome correto, Bom Jogo!! </i> <br>`

            contadorA.style.display = "block"

            var tempo = setInterval(() => { timer()
                                            
                                        }, 1000);

            setTimeout(() => LimparJogo(), 100);

         }

         
         if (segundos == 5) {

           setTimeout(() => LimparJogo(), 100);

         }



         

         var pontos = 0

         var temp_externo = 0

         function LimparJogo() {

            ContentGameText.innerHTML = ``

            console.log(contador + " Antes do jogo")

            var perguntas = ['Com quantos anos Jesus come??ou o seu ministerio?', 'Quantos dias de Jejum Daniel entregou?',
                             'De quanto e quanto anos acontece o Shemitah?', 'Qual o nome do Apostolo que era perseguidor de Crist??os?',
                             'Quantos livros cont??m na Biblia?']


            ContentGameText.innerHTML = `${perguntas[contador]} <br><br> Resposta: <input type="text" class="inputResposta" id="Resposta1"> <br><br>
                                         voc?? tem 10 segundos para responder
                                         `


                                         console.log(contador + " Ap??s a pergunta do jogo")


            setTimeout(() => verificar(), 10000);
    
         }

         function verificar() {

           var respotaUM = Resposta1.value

           if (contador == 0 && respotaUM == 30) {

            ContentGameText.innerHTML = `Parabens Resposta Correta!!`
            contador ++
            pontos +=3
            setTimeout(() => LimparJogo(), 500);
            console.log(contador + " Apos a resposta 1")
           
           } else if (contador == 1 && respotaUM == 40) {

            ContentGameText.innerHTML = `Parabens Resposta Correta!!`
            contador ++
            pontos +=3
            setTimeout(() => LimparJogo(), 500);
            console.log(contador + " Apos a resposta 2")

           } else if ( contador == 2 && respotaUM == 7) {

            ContentGameText.innerHTML = `Parabens Resposta Correta!!`
            contador ++
            pontos +=3
            setTimeout(() => LimparJogo(), 500);
            console.log(contador + " Apos a resposta 3")

           } else if ( contador == 3 && respotaUM == "paulo") {

            ContentGameText.innerHTML = `Parabens Resposta Correta!!`
            contador ++
            pontos +=3
            setTimeout(() => LimparJogo(), 500);
            console.log(contador + " Apos a resposta 4")

           } else if ( contador == 4 && respotaUM == 66) {

            ContentGameText.innerHTML = `Parabens ${nome_externo} Resposta Correta, Voc?? Finalizou o game com ${pontos} pontos!!`
            pontos +=3
            contador = 0
            segundos = 15
            Ttempo.innerHTML = `Jogo finalizado`
            contadorA.style.display = "none"
            console.log(contador + " Apos a resposta 4")

           } else {

            if (contador >= 4) {

            ContentGameText.innerHTML = `<i style='color: red;'> Resposta Errada... </i> ${nome_externo}, Voc?? Finalizou o game com ${pontos} pontos!!`
            contador = 0
            segundos = 15
            Ttempo.innerHTML = `Jogo Finalizado`
            contadorA.style.display = "none"

            } else {

            ContentGameText.innerHTML = `<i style='color: red;'> Resposta Errada!! </i>`
            contador ++
            setTimeout(() => LimparJogo(), 500);

           }

           }

           

         }

         sessionStorage.setItem(`Nome`, nome);
         console.log(sessionStorage.getItem('Nome'))

         //  sessionStorage.clear()

        }


    function mudarImg1 () {

            ImgUm.style.display = `block`
            ImgDois.style.display = `none`
            ImgTres.style.display = `none`
            ImgQuatro.style.display = `none`
            ImgCinco.style.display = `none`
            desc.innerHTML = `Al??m da qualidade cinematogr??fica, a s??rie se destaca pelo fato de Jesus e
             seus disc??pulos serem retratados de maneira profundamente humana, permitindo que o espectador se 
             identifique com as personagens e compreenda, com riqueza de detalhes, o significado dos 
             acontecimentos narrados pelos evangelhos.
 
             Maria Madalena, por exemplo, ?? uma personagem cujo passado ?? envolto em muitos mist??rios e 
             especula????es.
             Os textos b??blicos, de fato, apenas confirmam que ela era aquela da qual Jesus expulsou sete dem??nios.
             ?? sobre essa informa????o que os roteiristas desenvolveram a narrativa e ajudam a entender o quando foi 
             forte e transformador para ela o encontro com Cristo.

             Nesse mesmo contexto, Nicodemos, o chefe dos fariseus que simpatizava com Jesus 
             e o encontrava em segredo para n??o ser descoberto pelos membros de sua seita,
              ?? retratado com ??nfase na sua curiosidade em conhecer aquele homem que atra??a multid??es e 
              realizava milagres. Os gestos de Jesus provocavam nesse mestre da Lei uma inquieta????o que fazia com que 
              questionasse tudo aquilo que tinha por verdade.

              Sim??o Pedro, por sua vez, ?? mostrado como quem, de fato, era: um pescador, simples, mas, 
              ao mesmo tempo, impulsivo e perspicaz. A narrativa tamb??m ajuda o espectador a 
              compreender como o pregador de Nazar?? tocou o jovem pescador a ponto de ele deixar 
              tudo aquilo que tinha de mais essencial em sua vida para segui-lo aonde fosse. <br><br>
               FONTE (https://pazebem.org.br/a-impactante-serie-the-chosen)`

    }

    function mudarImg2() {

            ImgUm.style.display = `none`
            ImgDois.style.display = `block`
            ImgTres.style.display = `none`
            ImgQuatro.style.display = `none`
            ImgCinco.style.display = `none`
            desc.innerHTML = `O filme conta a hist??ria de Mack Phillips, interpretado pelo ator Sam Worthington,
             que tinha uma vida super corrida: casado e com 3 filhos, 1 menino e 2 meninas e seu xod?? ?? a ca??ula,
             chamada de Missy.

             Ele n??o tinha muito tempo para se dedicar ?? fam??lia, pois na sociedade que vivemos hoje,
              em alguns casos, trabalhar tem sido mais importante que dar aten????o ?? fam??lia. Um dia,
               Mack Phillips tem a ideia de levar a fam??lia para curtir um piquenique perto de um lago.

             Todos est??o tranquilos e alegres mas, de repente por um descuido, Missy desaparece.
              Todos come??am a procurar desesperados mas n??o a encontram. A pol??cia ?? acionada mas sem sucesso de encontr??-la.

             Mack muito abalado, entra em uma profunda depress??o, se fecha interiormente, se torna rude,
              n??o sai mais de casa e agora vive em conflito com os 2 filhos e sua esposa.

             Ap??s 3 anos e meio sem nenhuma not??cia sobre Missy, Mack recebe um bilhete estranho,e
             ele ?? levado a uma casa bem ao lado da cabana onde supostamente sua filha foi violentada e morta. Ali est?? uma mulher,
             uma mo??a e um rapaz, representando Pai, Filho e Esp??rito Santo. ???Papai???, 

             Mack chega e pergunta ainda revoltado e com o cora????o dolorido porque Deus n??o impediu que sua filha morresse ??
             partir da??, Deus come??a a mostrar a Mack que todos tem o livre arb??trio e que h?? quest??es a serem consideradas.

             No decorrer da trama, em uma caverna,
             ele ?? confrontado com a quest??o do perd??o. Uma mulher faz perguntas complexas em rela????o ?? justi??a, 
             amor e perd??o de Deus pela humanidade.

             Mack j?? est?? quebrantado e vendo a situa????o de outra forma. Agora ?? o Esp??rito Santo de Deus,
             representado por uma mo??a asi??tica que tem uma conversa reveladora e dolorida mas libertadora com Mack.

             Chega o momento em que Deus, transfigurado agora em um homem pede para Mack perdoar seu pai 
             que o fez sofrer quando pequeno e tamb??m o bandido que matou sua filha.

             Em uma cena forte, Mack pega o corpo da sua filha e a enterra com Deus estando ao seu lado. 
             Todo este processo fez Mack curar seu cora????o e entender tudo que aconteceu. FONTE (https://quizlandia.club/resumo-do-filme-a-cabana/)`

    }

    function mudarImg3 () {

            ImgUm.style.display = `none`
            ImgDois.style.display = `none`
            ImgTres.style.display = `block`
            ImgQuatro.style.display = `none`
            ImgCinco.style.display = `none`
            desc.innerHTML = `Em resumo, Supera????o - O Milagre da F?? ?? uma grande surpresa para o g??nero 
            e pro ano. ?? um drama crist??o que n??o ?? totalmente um filme religioso, mas tamb??m um filme sobre 
            como ?? importante ter f?? nas tribula????es de nossa rotina, n??o desistir quando vier os pesares e 
            amar ao pr??ximo e a vida. Realmente uma obra que merece ser vista.

            Em resumo, Supera????o - O Milagre da F?? ?? uma grande surpresa para o g??nero e pro ano. 
            ?? um drama crist??o que n??o ?? totalmente um filme religioso, mas tamb??m um filme sobre como ?? 
            importante ter f?? nas tribula????es de nossa rotina, n??o desistir quando vier os pesares e amar ao 
            pr??ximo e a vida. Realmente uma obra que merece ser vista.
            
            Quando assisti o trailer deste drama com teor crist??o, de in??cio, torci o nariz, 
            justamente por acreditar que a obra n??o cumpriria com nada no qual estava prometendo em sua 
            divulga????o. Me mantendo teimoso, ignorei as recomenda????es de amigos e at?? de cr??ticos, 
            n??o estava nem um pouco interessado na pel??cula. Por??m, eis que por um verdadeiro milagre, 
            decidi deixar para tr??s o que meu c??rebro dizia e parei para ouvir mais o cora????o e me aventurei em 
            dar uma conferida e surpreso fiquei, n??o s?? ap??s a proje????o, como tamb??m durante ela toda. Supera????o 
            - O Milagre da F?? ?? um drama que, com certeza, far?? voc?? se emocionar.

            Durante um passeio com a fam??lia em uma manh?? de inverno no Lago St Louis, no Missouri, 
            o menino John Smith, de apenas 14 anos, sofre uma queda e se afoga por mais de 15 minutos. 
            Chegando ao hospital, John ?? considerado morto por mais de uma hora at?? que sua m??e, Joyce Smith, 
            ao lado do pai e de um pastor, junta todas as suas for??as e pede a Deus para que seu filho 
            sobreviva. Sua prece poderosa ?? respons??vel por um milagre in??dito. <br><br> 
            FONTE (https://aminoapps.com/c/cinemafs/page/blog/resenha-superacao-o-milagre-da-fe-2019/vdm4_1x8inu1dGPBEPQaLrNv4K2q7EVeQ61)`

    }

    function mudarImg4 () {

            ImgUm.style.display = `none`
            ImgDois.style.display = `none`
            ImgTres.style.display = `none`
            ImgQuatro.style.display = `block`
            ImgCinco.style.display = `none`
            desc.innerHTML = `Desafiando Gigantes ?? um filme gospel que conta a hist??ria de Grant Taylor, 
            um treinador escolar de futebol americano, onde tenta levar a equipe estudantil a 
            uma gl??ria a seis anos, mas sem sucesso n??o consegue levar a equipe a uma coloca????o muito boa.
            
            Com os resultados a n??o aparecer os pais come??am a criticar seu m??todo de trabalho e assim pedem a 
            dire????o da escola que demitam Grant Taylor.

            Com os diversos problemas em que Taylor se encontra ele acaba por descobrir por uma conversa entre 
            seus colegas e se sente tra??do ao saber que os superiores est??o pensando em demiti-lo devido aos 
            m??os resultados. Taylor ao dirigir para casa com seu carro cheio de problemas e velho, acaba por 
            parar de funcionar e assim seu problemas aumentam. Para piorar ainda mais a situa????o, Taylor acaba 
            por descobrir que o encanamento est?? entupido e o cheiro ruim toma conta da casa. Ao tentarem 
            almo??ar seu fog??o quebra e acaba por ter somente uma salada para o almo??o. Taylor e sua esposa 
            desejam um filho e n??o consegue a um bom tempo e com alguns exames acabam por descobrir que o 
            problema ?? com Taylor. Sendo assim o filho acaba por ser deixado de lado devido aos altos custos de 
            um tratamento de fertilidade e assim Taylor come??a a ficar cada vez mais triste com a situa????o.

            Com tantos fatos a acontecer em sua vida Taylor toma por decis??o abandonar tudo. Desistindo assim do 
            esporte e dos meninos a qual ele aprendeu a ter uma afei????o pro eles.

            Ao tomar sua decis??o Taylor tem uma visita inesperada em que est?? o desafia a acreditar em sua f?? e 
            no poder dela. Sendo assim Taylor passa a jogar suas for??as na ora????o e na leitura da B??blia e assim 
            descobrindo for??as para a solu????o de seus problemas. Taylor passa a utilizar a B??blia em seus treinos 
            com os meninos e assim contagiando os jovens, mudando a vida de seus meninos tamb??m.

            Assim os meninos come??am a ter uma postura diferente, contagiados pelas ora????es e com a presen??a de 
            todos a sua volta come??am a se tornar vencedores e assim seus pais come??am a mudar suas vidas tamb??m. 
            E essa parceria de Taylor com a B??blia passa a mudar completamente sua vida e trazendo a ele uma nova 
            vida. <br> <br>
            FONTE (https://www.muitotudo.com/desafiando-gigantes-resumo/)`

    }

    function mudarImg5 () {

            ImgUm.style.display = `none`
            ImgDois.style.display = `none`
            ImgTres.style.display = `none`
            ImgQuatro.style.display = `none`
            ImgCinco.style.display = `block`
            desc.innerHTML = `O filme ???Deus n??o est?? Morto??? conta a hist??ria do confronto entre o aluno 
            universit??rio Josh Wheaton e seu professor de filosofia, conhecido por seu ate??smo radical. 
            O confronto inicia-se quando seu professor pede aos alunos que escrevam em uma folha de papel, 
            a fim de encurtar discuss??es, ???Deus est?? morto???. Josh ?? o ??nico da turma que tem crise de 
            consci??ncia e n??o realiza o pedido. Em contra partida seu professor lhe diz que ent??o ter?? que 
            defender sua cren??a perante os alunos, e que se n??o conseguir, ter?? pontos descontados para passar 
            na mat??ria. Conclus??o, Josh torna-se um defensor de Deus, enquanto seu professor torna-se o acusador 
            e o pequeno p??blico de alunos, o j??ri.
            
            O filme ?? extremamente desonesto, pois ao apresentar o professor de filosofia e seus colegas de 
            profiss??o como pessoas arrogantes, com sentimento de superioridade, cheios de si, e os crist??os 
            como pessoas humildes, calmas e s??bias, acaba por demonizar os ateus, como pessoas maldosas e 
            desagrad??veis e os crist??os como pessoas que sempre gostar??amos de ter por perto. ?? desonesto 
            tamb??m com o pensamento defendido pelo professor de filosofia, pois pr??ximo ao final do filme 
            descobrimos que o tal professor ?? ateu n??o porque seu ate??smo ?? a conclus??o de sua experi??ncia, 
            de seu racioc??nio e de seu conhecimento, mas ?? o resultado de um trauma de inf??ncia, quando sua m??e
            adoeceu de c??ncer e Deus n??o a livrou da morte. Ou seja, ele n??o ?? algu??m que n??o acredita na exist??ncia 
            de Deus, mas apenas algu??m que odeia Deus por pura ignor??ncia de n??o saber como Deus age. Isto tamb??m passa 
            para aqueles que acompanham o filme, a ideia de que ateus s??o ateus apenas por n??o aceitarem e ignorarem os 
            planos de Deus. <br> <br>

            FONTE (https://bornalcerebrau.blogspot.com/2016/09/resenha-do-filme-deus-nao-esta-morto.html)  `

}
