
contadorPassar = 0

function ContPassar() {

        contadorPassar++
        console.log(`Aqui ${contadorPassar}`);
}


function passar() {

        setInterval(() => {
           ContPassar()     
        }, 5000);

        console.log("Passei e somei");

        console.log(`Valor do ${contadorPassar}`);


        if (contadorPassar == 50) {

        contadorPassar = 0

        } else if (contadorPassar >= 10) {

        // frame.style.transform = `translateX(-200px)`;
        console.log("Passei");

        } else if (contadorPassar >=2 && contadorPassar < 10){

        document.querySelector("#frame, #frame, #frame, #frame").style.transform = "translateX(-300px)";

        console.log("Olha eu aqui");

        }
}


function mexerUm() {
        div1.style.background = "url(noticia/default_2020-10-20_feae8614-b127-4c1f-8893-4f0a86fef2d4.jpeg)";
        textAparecer.innerHTML = `Funcionaria do MacDonalds relata que <br> "Deus tem tocado o Coração das Pessoas". <br> Ela tem orado pelas pessoas que passam pelo estabelecimento <br> do MacDonalds...
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
        textAparecer.innerHTML = `Perseguição Religiosa atraves da internet aumenta, <br> diz organização...
        <a href="" target="_blank"> Saiba mais... </a> </div>`

        setTimeout(() => {
                mexerQuatro()
        }, 100000);
}


function mexerQuatro() {


        div1.style.background = `url(noticia/biblia.jfif)`
        textAparecer.innerHTML = `Estudo: cristãos com fé teologicamente fundamentada <br> são mais dispostos a evangelizar...
                                 <a href="https://noticias.gospelmais.com.br/evangelizar-cristaos-fe-embasada-iniciativa-155869.html" target="_blank"> Saiba mais... </a> `

        setTimeout(() => {
                mexerUm()
        }, 100000);

}

function conteudoAbraao() {

        abraao.innerHTML = `Abraão <br><br> (em hebraico: אברהם; romaniz.: Avraham ou ’Abhrāhām) é um personagem bíblico citado 
        no Gênesis a partir do qual teriam se desenvolvido as religiões abraâmicas, as principais vertentes do monoteísmo: 
        o judaísmo, o cristianismo e o islamismo.[1] Até hoje, os arqueólogos não encontraram nenhuma prova da existência de Abraão,[2] 
        embora tenham sido, recentemente, encontradas as aldeias com nomes dos familiares de Abraão (seu avô e seu bisavô, Naor e Serugue) 
        numa área da atual Turquia, identificada como a região de Harã.[3] É o primeiro dos patriarcas bíblicos e 
        fundador do monoteísmo dos hebreus.[4] Acredita-se que Abraão teria vivido mais provavelmente entre os séculos XXI e XVIII a.C.
        Segundo o livro Génesis, que compõe o Pentateuco do Antigo Testamento, Deus disse a Abraão para deixar Ur com a sua família em
        direção à "terra que eu te indicar".[5] Nesta terra, os seus descendentes formariam uma grande nação e herdariam uma terra
        "onde corre leite e mel". Sendo o povo escolhido de Deus, os hebreus conquistariam a terra prometida de Canaã, uma terra de fartura,
        em comparação com as que Abraão deixara para trás. Foi assim que Abraão deixou a sua vida sedentária para viajar para Canaã.
        Esta migração é de significado histórico comparável à epopéia de Moisés, mais tarde, trazendo os hebreus de regresso do Egito,
        através do Mar Vermelho. FONTE (WIKIPEDIA)`

}


function abraaoAparecer() {

        setTimeout(() => {
                conteudoAbraao()
        }, 1000);
}

function abraaoSumir() {

        abraao.innerHTML = ` <h2> Abraão </h2> `
}




function conteudojaco() {

        jaco.innerHTML = ` Jacó <br><br> era filho de Isaac (ou Isaque) e Rebeca, irmão gêmeo de Esaú e neto de Abraão. Sua história ocupa vinte e 
cinco capítulos do livro de Gênesis.[2][3]

        Feita a profecia de Deus a Rebeca sobre as duas nações que nasceriam do seu ventre[4] é que nascem Esaú e Jacó.
        Seus descendentes seriam os edomitas e os israelitas, respectivamente. Jacó, com suas esposas e primas Leia e Raquel,
        e suas duas concubinas, Bila e Zilpa, teria doze filhos – os futuros líderes das famosas Doze Tribos de Israel: 
        Rúben, Simeão, Levi, Judá, Dã, Naftali, Gade, Aser, Issacar, Zebulom, José e Benjamim[nota 1] – 
        e uma única filha, Diná. José não entra na composição direta do futuro Estado de Israel, mas sim seus dois filhos – 
        Manasses e Efraim –, que seriam adotados por Jacó. Levi é outro filho de Jacó que não recebe herança na Terra Prometida, 
        porque o Senhor é a sua herança.
        
        Esaú era bom caçador, enquanto Jacó cuidava da casa. Um dia, Esaú voltou de uma caçada cansado e com fome.
        Então Jacó oferece um prato de comida em troca do direito de governar o reino depois que o pai deles morresse, Esaú aceitou.
        
        Após se passar pelo irmão para obter a bênção do pai, Isaque (já em leito de morte),
        Jacó entra em pé de guerra com Esaú. Sua mãe aconselha-o a sair de casa, prometendo-o chamar de volta quando o irmão se acalmasse.
        Neste ponto a idade de Jacó é de 40 anos. Isso pode ser atestado pelo casamento de Esaú, aos 40 anos, com mulheres que trouxeram
        problemas para a família (Gênesis 26:34,35). FONTE (WIKIPEDIA) `

}


function jacoAparecer() {

        setTimeout(() => {
                conteudojaco()
        }, 1000);
}

function jacoSumir() {

        jaco.innerHTML = ` <h2> Jacó </h2>`
}

function conteudojose() {

        jose.innerHTML = ` José <br><br> José (em hebraico יוֹסֵף, significando "[ Yahweh ] acrescentará";[2] em hebraico padrão,
        Yosef; em hebraico tiberiano; Yôsēp̄; em árabe: يوسف , transl. Yūsuf ou Yūsif; em grego antigo: Ἰωσήφ Iōsēph; posteriormente 
        designado como צפנת פענח, transl. Tzáfnat panéach, em hebraico padrão, ou Ṣāp̄ənaṯ paʿănēªḥ, em hebraico tiberiano, que significaria 
        "descobridor das coisas ocultas"), também chamado de Zafenate-Paneia, foi o décimo primeiro filho de Jacó, nascido de Raquel, 
        citado no Antigo Testamento, em Gênesis 37:, e considerado o fundador da tribo de José, constituída, por sua vez, da tribo de Efraim e 
        da tribo de Manassés (seus filhos). Quando foi nomeado homem de confiança do Faraó, foi-lhe concedida a mão de Azenate,
        filha de Potífera, sacerdote de Om.[3] José também é tio-avô de Moisés.FONTE (WIKIPEDIA) `

}


function joseAparecer() {

        setTimeout(() => {
                conteudojose()
        }, 1000);
}

function joseSumir() {

        jose.innerHTML = ` <h2> José </h2> `
}



function conteudomoises() {

        moises.innerHTML = ` Moisés <br><br> Moisés (em hebraico: מֹשֶׁה; romaniz.: Moshe tiberiano: Mōšé; em grego clássico:
        Mωϋσῆς; romaniz.: Mōüsēs; em árabe: موسىٰ; romaniz.: Mūsa: "tirado das águas" ou "filho") foi um líder religioso, juiz,
        legislador e profeta reconhecido no Judaísmo, Cristianismo e Islamismo. A Moisés é atribuída a autoria da Torá.

        Segundo a tradição judaico-cristã, Moisés foi um instrumento de Deus para libertar os Hebreus, que o consideravam seu principal
        legislador e um dos mais importantes líderes religiosos.
        
        De acordo com a Bíblia e a tradição judaico-cristã-islâmica, Deus realizou diversos milagres através de Moisés após uma Teofania. 
        Libertou o povo de Israel da escravidão no Antigo Egito, instituindo assim a Páscoa Judaica. Depois guiou o seu povo em um êxodo pelo
        deserto durante quarenta anos, que se iniciou com a famosa passagem em que Deus, através de seu servo Moisés, abre o Mar Vermelho para
        possibilitar a travessia segura dos filhos de Israel. Ainda segundo a Bíblia, recebeu no alto do Monte Sinai as Tábuas da Lei de Deus,
        contendo os Dez Mandamentos.
        
        Alguns historiadores afirmam que, durante a sua permanência entre os egípcios, Moisés aprendeu o conceito do monoteísmo
        criado pelo faraó Aquenáton (r. 1352–1338 a.C.), possivelmente levando tal conceito ao povo hebreu. FONTE (WIKIPEDIA) `

}


function moisesAparecer() {

        setTimeout(() => {
                conteudomoises()
        }, 1000);
}

function moisesSumir() {

        moises.innerHTML = ` <h2> Moisés </h2> `
}



function conteudojosue() {

        josue.innerHTML = ` Josúe <br><br> No cânon hebraico, o livro de Josué é o primeiro rolo dos “Livros dos Profetas”;
        de acordo com a tradição judaico-cristã, é o nome do líder de Israel, sucessor do profeta Moisés.[9] Filho de Num,
        da Tribo de Efraim, Josué foi ajudante de Moisés durante o êxodo dos israelitas do Egito e os 40 anos pelo deserto do Sinai. 
        Quando Eldade e Medade estavam cheios do Espírito de Deus e profetizando, Josué rogou a Moisés que os proibisse,
        mas Moisés não o atendeu dizendo: "Quem dera todo o povo do Senhor fosse profeta e que o Senhor pusesse o seu Espírito sobre eles!".
        [10] Depois da morte de Moisés, Josué liderou o povo de Israel na conquista das cidades-estado da terra de Canaã e foi responsável
        por conduzir os israelitas à Terra Prometida. A narrativa bíblica deixa claro que Josué foi um dos maiores estrategistas da História 
        da Humanidade, tendo liderado o povo de Israel num conflito com cerca de trinta cidades da terra de Canaã, durante a campanha militar 
        de invasão do seu povo. Nota-se sua inteligência como estrategista de guerra, vendo como comandava o numeroso exército, obedecendo a 
        Deus que lhe mandou fazer juízo contra os povos de Canaã, que dentre outras barbaridades faziam sacrifícios humanos 
        (inclusive de crianças) às suas divindades de barro. Josué teve uma abordagem diferente de outros povos que invadiam e
        dominavam territórios na Antiguidade, escravizando parte daqueles que eram derrotados e/ou exigindo o pagamento periódico de tributos.
        FONTE (WIKIPEDIA) `

}


function josueAparecer() {

        setTimeout(() => {
                conteudojosue()
        }, 1000);
}

function josueSumir() {

        josue.innerHTML = ` <h2> Josué </h2> `
}

function conteudojesus() {

        jesus.innerHTML = ` Jesus <br><br> Quase todas as linhas cristãs acreditam que Jesus foi concebido pelo Espírito Santo,
        nasceu de uma virgem, praticou milagres, fundou a Igreja, morreu crucificado como forma de expiação, ressuscitou dos mortos
        e ascendeu ao Céu, do qual regressará.[21] A grande maioria dos cristãos adoram Jesus como a encarnação de Deus, o Filho,
        a segunda das três pessoas na Santíssima Trindade. Alguns grupos cristãos rejeitam a Trindade, no todo ou em parte.
        Em 3 anos de ministério profético - ensinando e pregando o Reino de Deus - Jesus realizou milagres e maravilhas por onde passou.
        O primeiro milagre de Jesus foi num casamento. Segundo a passagem no Evangelho de João, Jesus transformou a água em vinho,
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

        pedro.innerHTML = ` Pedro <br><br> Pedro foi um dos doze apóstolos de Jesus, conhecido por sua grande ousadia e
        influência no princípio do cristianismo. Escreveu dois livros bíblicos: 1ª e 2ª Pedro. Além disso, também ficou
        conhecido na história como o discípulo que negou Jesus por três vezes.

        Teve seu nome mudado de Simão para Pedro, por Jesus, tornando-se num dos discípulos mais próximos do Senhor.
        Não só o nome, mas toda a vida de Pedro foi transformada na sua trajetória como seguidor de Jesus.
        
        De um simples pescador, com temperamento forte e impulsivo, Pedro foi transformado numa rocha firme,
        num dos líderes cristãos mais influentes na igreja primitiva. Como apóstolo, depois da ressurreição de Jesus,
        foi exemplo na pregação ousada da Palavra e no cuidado para com a Igreja de Cristo. 
        
        A Bíblia não relata, mas segundo a história, Pedro morreu martirizado numa cruz invertida, por se considerar indigno de ser morto da
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

        paulo.innerHTML = ` Paulo <br><br> apóstolo Paulo foi o autor de 13 dos livros do Novo Testamento,
        que fundou várias igrejas no início do Cristianismo. Ele não seguiu Jesus durante seu ministério,
        mas teve uma visão de Jesus mais tarde. O ministério de Paulo se concentrou em todos que não eram judeus.
        Era sábio e foi ensinadom aos pés de Gamaliel, um mestre e doutor da escrituras sagradas, isso fez de até então Saulo
        um perseguidor de cristãos, até um dia em que se deparou com um jovem chamado estevão, que pós a sua fé a prova
        morrendo por cristo, desde aquele momento paulo começa a ser citado na biblia, tem sua conversão quando o propio
        cristo aparece a ele. Depois desse evento ele começa a trazer a pratica o evangelho do arrependimento e salvação
        como cristo ensinava, autor de 40% das escrituras da biblia, Paulo morreu decapitado a mando do então comandante Nero... `

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

        joao.innerHTML = ` Joao <br><br> João foi escrito provavelmente perto de Éfeso,
        provavelmente em meados dos anos 90, com edição posterior (talvez por outro lado) na primeira década do século II.
        Estilo e a teologia estão entrelaçadas.

        Autoria:
        Este evangelho é atribuído a João, filho de Zebedeu. O conteúdo do
        A autoria é, portanto, frequentemente atribuída ao “livro joanino”.
        
        Muitas pessoas atribuem este Evangelho a um homem chamado João, “ o [discípulo] a quem Jesus amava ” (João 13:23), mas o autor real é desconhecido.
        Muitos acreditam que o autor era membro de uma comunidade cristã fundada pelo discípulo amado.
        Sua tradição e ensinamentos representam toda a comunidade joanina, e não apenas um indivíduo.
        
        Data Aproximada de Autoria: AD 90 - 100. FONTE(ESTUDOSBIBLICOSONLINE)`

}


function joaoAparecer() {

        setTimeout(() => {
                conteudojoao()
        }, 1000);
}

function joaoSumir() {

       joao.innerHTML = ` <h2> João </h2> `
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

            Incorreto.innerHTML = `<i style="color: red;"> Nome Incorreto. Necessita ter 3 caracteres, não pode ser vazio ou nulo.<i>`

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

            var perguntas = ['Com quantos anos Jesus começou o seu ministerio?', 'Quantos dias de Jejum Daniel entregou?',
                             'De quanto e quanto anos acontece o Shemitah?', 'Qual o nome do Apostolo que era perseguidor de Cristãos?',
                             'Quantos livros contém na Biblia?']


            ContentGameText.innerHTML = `${perguntas[contador]} <br><br> Resposta: <input type="text" class="inputResposta" id="Resposta1"> <br><br>
                                         você tem 10 segundos para responder
                                         `


                                         console.log(contador + " Após a pergunta do jogo")


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

            ContentGameText.innerHTML = `Parabens ${nome_externo} Resposta Correta, Você Finalizou o game com ${pontos} pontos!!`
            pontos +=3
            contador = 0
            segundos = 15
            Ttempo.innerHTML = `Jogo finalizado`
            contadorA.style.display = "none"
            console.log(contador + " Apos a resposta 4")

           } else {

            if (contador >= 4) {

            ContentGameText.innerHTML = `<i style='color: red;'> Resposta Errada... </i> ${nome_externo}, Você Finalizou o game com ${pontos} pontos!!`
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
            desc.innerHTML = `Além da qualidade cinematográfica, a série se destaca pelo fato de Jesus e
             seus discípulos serem retratados de maneira profundamente humana, permitindo que o espectador se 
             identifique com as personagens e compreenda, com riqueza de detalhes, o significado dos 
             acontecimentos narrados pelos evangelhos.
 
             Maria Madalena, por exemplo, é uma personagem cujo passado é envolto em muitos mistérios e 
             especulações.
             Os textos bíblicos, de fato, apenas confirmam que ela era aquela da qual Jesus expulsou sete demônios.
             É sobre essa informação que os roteiristas desenvolveram a narrativa e ajudam a entender o quando foi 
             forte e transformador para ela o encontro com Cristo.

             Nesse mesmo contexto, Nicodemos, o chefe dos fariseus que simpatizava com Jesus 
             e o encontrava em segredo para não ser descoberto pelos membros de sua seita,
              é retratado com ênfase na sua curiosidade em conhecer aquele homem que atraía multidões e 
              realizava milagres. Os gestos de Jesus provocavam nesse mestre da Lei uma inquietação que fazia com que 
              questionasse tudo aquilo que tinha por verdade.

              Simão Pedro, por sua vez, é mostrado como quem, de fato, era: um pescador, simples, mas, 
              ao mesmo tempo, impulsivo e perspicaz. A narrativa também ajuda o espectador a 
              compreender como o pregador de Nazaré tocou o jovem pescador a ponto de ele deixar 
              tudo aquilo que tinha de mais essencial em sua vida para segui-lo aonde fosse. <br><br>
               FONTE (https://pazebem.org.br/a-impactante-serie-the-chosen)`

    }

    function mudarImg2() {

            ImgUm.style.display = `none`
            ImgDois.style.display = `block`
            ImgTres.style.display = `none`
            ImgQuatro.style.display = `none`
            ImgCinco.style.display = `none`
            desc.innerHTML = `O filme conta a história de Mack Phillips, interpretado pelo ator Sam Worthington,
             que tinha uma vida super corrida: casado e com 3 filhos, 1 menino e 2 meninas e seu xodó é a caçula,
             chamada de Missy.

             Ele não tinha muito tempo para se dedicar à família, pois na sociedade que vivemos hoje,
              em alguns casos, trabalhar tem sido mais importante que dar atenção à família. Um dia,
               Mack Phillips tem a ideia de levar a família para curtir um piquenique perto de um lago.

             Todos estão tranquilos e alegres mas, de repente por um descuido, Missy desaparece.
              Todos começam a procurar desesperados mas não a encontram. A polícia é acionada mas sem sucesso de encontrá-la.

             Mack muito abalado, entra em uma profunda depressão, se fecha interiormente, se torna rude,
              não sai mais de casa e agora vive em conflito com os 2 filhos e sua esposa.

             Após 3 anos e meio sem nenhuma notícia sobre Missy, Mack recebe um bilhete estranho,e
             ele é levado a uma casa bem ao lado da cabana onde supostamente sua filha foi violentada e morta. Ali está uma mulher,
             uma moça e um rapaz, representando Pai, Filho e Espírito Santo. “Papai”, 

             Mack chega e pergunta ainda revoltado e com o coração dolorido porque Deus não impediu que sua filha morresse à
             partir daí, Deus começa a mostrar a Mack que todos tem o livre arbítrio e que há questões a serem consideradas.

             No decorrer da trama, em uma caverna,
             ele é confrontado com a questão do perdão. Uma mulher faz perguntas complexas em relação à justiça, 
             amor e perdão de Deus pela humanidade.

             Mack já está quebrantado e vendo a situação de outra forma. Agora é o Espírito Santo de Deus,
             representado por uma moça asiática que tem uma conversa reveladora e dolorida mas libertadora com Mack.

             Chega o momento em que Deus, transfigurado agora em um homem pede para Mack perdoar seu pai 
             que o fez sofrer quando pequeno e também o bandido que matou sua filha.

             Em uma cena forte, Mack pega o corpo da sua filha e a enterra com Deus estando ao seu lado. 
             Todo este processo fez Mack curar seu coração e entender tudo que aconteceu. FONTE (https://quizlandia.club/resumo-do-filme-a-cabana/)`

    }

    function mudarImg3 () {

            ImgUm.style.display = `none`
            ImgDois.style.display = `none`
            ImgTres.style.display = `block`
            ImgQuatro.style.display = `none`
            ImgCinco.style.display = `none`
            desc.innerHTML = `Em resumo, Superação - O Milagre da Fé é uma grande surpresa para o gênero 
            e pro ano. É um drama cristão que não é totalmente um filme religioso, mas também um filme sobre 
            como é importante ter fé nas tribulações de nossa rotina, não desistir quando vier os pesares e 
            amar ao próximo e a vida. Realmente uma obra que merece ser vista.

            Em resumo, Superação - O Milagre da Fé é uma grande surpresa para o gênero e pro ano. 
            É um drama cristão que não é totalmente um filme religioso, mas também um filme sobre como é 
            importante ter fé nas tribulações de nossa rotina, não desistir quando vier os pesares e amar ao 
            próximo e a vida. Realmente uma obra que merece ser vista.
            
            Quando assisti o trailer deste drama com teor cristão, de início, torci o nariz, 
            justamente por acreditar que a obra não cumpriria com nada no qual estava prometendo em sua 
            divulgação. Me mantendo teimoso, ignorei as recomendações de amigos e até de críticos, 
            não estava nem um pouco interessado na película. Porém, eis que por um verdadeiro milagre, 
            decidi deixar para trás o que meu cérebro dizia e parei para ouvir mais o coração e me aventurei em 
            dar uma conferida e surpreso fiquei, não só após a projeção, como também durante ela toda. Superação 
            - O Milagre da Fé é um drama que, com certeza, fará você se emocionar.

            Durante um passeio com a família em uma manhã de inverno no Lago St Louis, no Missouri, 
            o menino John Smith, de apenas 14 anos, sofre uma queda e se afoga por mais de 15 minutos. 
            Chegando ao hospital, John é considerado morto por mais de uma hora até que sua mãe, Joyce Smith, 
            ao lado do pai e de um pastor, junta todas as suas forças e pede a Deus para que seu filho 
            sobreviva. Sua prece poderosa é responsável por um milagre inédito. <br><br> 
            FONTE (https://aminoapps.com/c/cinemafs/page/blog/resenha-superacao-o-milagre-da-fe-2019/vdm4_1x8inu1dGPBEPQaLrNv4K2q7EVeQ61)`

    }

    function mudarImg4 () {

            ImgUm.style.display = `none`
            ImgDois.style.display = `none`
            ImgTres.style.display = `none`
            ImgQuatro.style.display = `block`
            ImgCinco.style.display = `none`
            desc.innerHTML = `Desafiando Gigantes é um filme gospel que conta a história de Grant Taylor, 
            um treinador escolar de futebol americano, onde tenta levar a equipe estudantil a 
            uma glória a seis anos, mas sem sucesso não consegue levar a equipe a uma colocação muito boa.
            
            Com os resultados a não aparecer os pais começam a criticar seu método de trabalho e assim pedem a 
            direção da escola que demitam Grant Taylor.

            Com os diversos problemas em que Taylor se encontra ele acaba por descobrir por uma conversa entre 
            seus colegas e se sente traído ao saber que os superiores estão pensando em demiti-lo devido aos 
            mãos resultados. Taylor ao dirigir para casa com seu carro cheio de problemas e velho, acaba por 
            parar de funcionar e assim seu problemas aumentam. Para piorar ainda mais a situação, Taylor acaba 
            por descobrir que o encanamento está entupido e o cheiro ruim toma conta da casa. Ao tentarem 
            almoçar seu fogão quebra e acaba por ter somente uma salada para o almoço. Taylor e sua esposa 
            desejam um filho e não consegue a um bom tempo e com alguns exames acabam por descobrir que o 
            problema é com Taylor. Sendo assim o filho acaba por ser deixado de lado devido aos altos custos de 
            um tratamento de fertilidade e assim Taylor começa a ficar cada vez mais triste com a situação.

            Com tantos fatos a acontecer em sua vida Taylor toma por decisão abandonar tudo. Desistindo assim do 
            esporte e dos meninos a qual ele aprendeu a ter uma afeição pro eles.

            Ao tomar sua decisão Taylor tem uma visita inesperada em que está o desafia a acreditar em sua fé e 
            no poder dela. Sendo assim Taylor passa a jogar suas forças na oração e na leitura da Bíblia e assim 
            descobrindo forças para a solução de seus problemas. Taylor passa a utilizar a Bíblia em seus treinos 
            com os meninos e assim contagiando os jovens, mudando a vida de seus meninos também.

            Assim os meninos começam a ter uma postura diferente, contagiados pelas orações e com a presença de 
            todos a sua volta começam a se tornar vencedores e assim seus pais começam a mudar suas vidas também. 
            E essa parceria de Taylor com a Bíblia passa a mudar completamente sua vida e trazendo a ele uma nova 
            vida. <br> <br>
            FONTE (https://www.muitotudo.com/desafiando-gigantes-resumo/)`

    }

    function mudarImg5 () {

            ImgUm.style.display = `none`
            ImgDois.style.display = `none`
            ImgTres.style.display = `none`
            ImgQuatro.style.display = `none`
            ImgCinco.style.display = `block`
            desc.innerHTML = `O filme ‘Deus não está Morto’ conta a história do confronto entre o aluno 
            universitário Josh Wheaton e seu professor de filosofia, conhecido por seu ateísmo radical. 
            O confronto inicia-se quando seu professor pede aos alunos que escrevam em uma folha de papel, 
            a fim de encurtar discussões, “Deus está morto”. Josh é o único da turma que tem crise de 
            consciência e não realiza o pedido. Em contra partida seu professor lhe diz que então terá que 
            defender sua crença perante os alunos, e que se não conseguir, terá pontos descontados para passar 
            na matéria. Conclusão, Josh torna-se um defensor de Deus, enquanto seu professor torna-se o acusador 
            e o pequeno público de alunos, o júri.
            
            O filme é extremamente desonesto, pois ao apresentar o professor de filosofia e seus colegas de 
            profissão como pessoas arrogantes, com sentimento de superioridade, cheios de si, e os cristãos 
            como pessoas humildes, calmas e sábias, acaba por demonizar os ateus, como pessoas maldosas e 
            desagradáveis e os cristãos como pessoas que sempre gostaríamos de ter por perto. É desonesto 
            também com o pensamento defendido pelo professor de filosofia, pois próximo ao final do filme 
            descobrimos que o tal professor é ateu não porque seu ateísmo é a conclusão de sua experiência, 
            de seu raciocínio e de seu conhecimento, mas é o resultado de um trauma de infância, quando sua mãe
            adoeceu de câncer e Deus não a livrou da morte. Ou seja, ele não é alguém que não acredita na existência 
            de Deus, mas apenas alguém que odeia Deus por pura ignorância de não saber como Deus age. Isto também passa 
            para aqueles que acompanham o filme, a ideia de que ateus são ateus apenas por não aceitarem e ignorarem os 
            planos de Deus. <br> <br>

            FONTE (https://bornalcerebrau.blogspot.com/2016/09/resenha-do-filme-deus-nao-esta-morto.html)  `

}
