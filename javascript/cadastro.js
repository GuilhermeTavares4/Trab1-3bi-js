let nome = document.querySelector("#nome")
            let cpf = document.querySelector("#cpf")
            let senha = document.querySelector("#senha")
            let csenha = document.querySelector("#csenha")
            let profissao
            let inputrs
            let inputsc
            let inputpr
            let anosdexp
            let valornome
            let valorcpf
            let valorsenha
            let valorcsenha
            let valorprofissao
            let valorestado
            let valoranosdexp
            let br
            let foco = []
            let count = 0
            let erronome = 0
            let errocpf = 0
            let errosenha = 0
            let errocsenha = 0
            let erroprofissao = 0
            let erroestado = 0
            let erroanosdexp = 0
            let erronomediv
            let errocpfdiv
            let errosenhadiv
            let errocsenhadiv
            let erroprofissaodiv
            let erroestadodiv
            let erroanosdexpdiv
            let form = document.querySelector("#form")
                            //função do erro
            function erro(errodiv, input, errotext){
                input.style.border = "1.6px solid red";   
                errodiv.appendChild(errotext)
                br = document.createElement("br")
                errodiv.appendChild(br)
                document.querySelector("#erros").appendChild(errodiv)
                foco[count] = input;
                count++;
            }

            //funções anteriores à função "erro"
            function vnome(){
                if (document.querySelector("#nome").value == ""){
                    erronomediv = document.createElement("div");
                    let erronometext = document.createTextNode("O campo do nome não foi preenchido.")
                    erro(erronomediv,nome,erronometext)    
                    erronome = 1;             
                }
            }
            function vcpf(){
                    if (document.querySelector("#cpf").value.length != 11){
                    errocpfdiv = document.createElement("div");
                    let errocpftext = document.createTextNode("O campo do CPF deve conter 11 digitos.")              
                    erro(errocpfdiv,cpf,errocpftext)  
                    errocpf = 1;          
                } 
            }
            function vsenha(){
                if (document.querySelector("#senha").value.length != 8){
                    errosenhadiv = document.createElement("div");
                    let errosenhatext = document.createTextNode("A senha deve conter 8 digitos.")
                    erro(errosenhadiv,senha,errosenhatext)
                    errosenha = 1;
            }
        }
        function vcsenha(){
                if (document.querySelector("#csenha").value != document.querySelector("#senha").value){
                    errocsenhadiv = document.createElement("div");
                    let errocsenhatext = document.createTextNode("As senhas não estão iguais.")
                    erro(errocsenhadiv,csenha,errocsenhatext)
                    errocsenha = 1;
            }
        }
        function vprofissao(){
                if (document.querySelector("#profissao").value == ""){
                    erroprofissaodiv = document.createElement("div");
                    let erroprofissaotext = document.createTextNode("O campo da profissão não foi preenchido.")
                    erro(erroprofissaodiv,profissao,erroprofissaotext)
                    erroprofissao = 1;
            }
        }
        function vestado(){
            if (inputrs.checked == false && inputsc.checked == false && inputpr.checked == false){
                erroestadodiv = document.createElement("div");
                let erroestadotext = document.createTextNode("Nenhum estado foi selecionado.")
                erroestadodiv.appendChild(erroestadotext)
                br = document.createElement("br")
                erroestadodiv.appendChild(br)
                document.querySelector("#erros").appendChild(erroestadodiv)
                erroestado = 1;
            }
        }
        function vanosdexp(){
            if (document.querySelector("#anosdexp").value > 50 || document.querySelector("#anosdexp").value < 0 || document.querySelector("#anosdexp").value == ""){
                    erroanosdexpdiv = document.createElement("div");
                    let erroanosdexptext = document.createTextNode("O número permitido de anos de experiência é entre 0 e 50.")
                    erro(erroanosdexpdiv,anosdexp,erroanosdexptext)
                    erroanosdexp = 1;
        }
    }
            // apaga os erros
        function removeerros(errodiv, input){
            errodiv.remove()
            input.style.border = "1px solid black"; 
        }

        //coloca foco :)
        function colocafoco(){
            if (count > 0){
                let x;
                x = Math.ceil(Math.random() * count - 1);
                foco[x].focus();
                foco = []
            }
        }
        function brkfdst(){
            br = document.createElement("br")
            let fdst = document.querySelector("fieldset")
            fdst.appendChild(br)
        }
        function brkform(){
            br = document.createElement("br")
            form.appendChild(br)
        }

            document.querySelector("#botao").addEventListener("click", ()=>{ 
            //apaga os erros
            if (erronome == 1){
                removeerros(erronomediv, nome)
                erronome = 0;
            }
            if (errocpf == 1){
                removeerros(errocpfdiv, cpf)
                errocpf = 0;
            }
            if (errosenha == 1){
                removeerros(errosenhadiv, senha)
                errosenha = 0;
            }
            if (errocsenha == 1){
                removeerros(errocsenhadiv, csenha)
                errocsenha = 0;
            } 

            //executa as funções dos erros
            count=0
            vnome()
            vcpf()
            vsenha()
            vcsenha()
            colocafoco()

            //verifica se pode passar para a próxima etapa
            if (count == 0) {
                //guarda as informações do usuário
                valornome = nome.value
                valorcpf = cpf.value
                valorsenha = senha.value
                valorcsenha = csenha.value
                document.querySelector("fieldset").innerHTML = ""
                let fieldset = document.querySelector("fieldset")
                let legend = document.createElement("legend");
                legend.appendChild(document.createTextNode("Form.js"))
                fieldset.appendChild(legend)
                //muda o input e label "nome" para "profissão"
                let label1 = document.createElement("label")
                label1.setAttribute("for", "profissao")
                label1.appendChild(document.createTextNode("Digite a sua profissão atual:"))
                fieldset.appendChild(label1)
                brkfdst()
                profissao = document.createElement("input");
                profissao.setAttribute("type","text")
                profissao.setAttribute("class","input")
                profissao.setAttribute("id","profissao")
                fieldset.appendChild(profissao)
                brkfdst()
                let radiotext = document.createElement("span")
                radiotext.appendChild(document.createTextNode("Escolha o estado em que trabalha:"));
                fieldset.appendChild(radiotext)
                brkfdst();
                //botao radio RS
                inputrs = document.createElement("input");
                inputrs.setAttribute("type","radio");
                inputrs.setAttribute("name","radiobox");
                inputrs.setAttribute("id","rs");
                inputrs.setAttribute("value", "RS")
                fieldset.appendChild(inputrs);
                //cria label para "RS"
                let labelrs = document.createElement("label");
                labelrs.setAttribute("for","rs")
                text = document.createTextNode("RS");
                labelrs.appendChild(text);
                fieldset.appendChild(labelrs);
                
                //botao radio "SC"
                inputsc = document.createElement("input");
                inputsc.setAttribute("type","radio");
                inputsc.setAttribute("name","radiobox");
                inputsc.setAttribute("id","sc");
                inputsc.setAttribute("value", "SC")
                fieldset.appendChild(inputsc);
                //cria label para "sc"
                let labelsc = document.createElement("label");
                labelsc.setAttribute("for","sc")
                text = document.createTextNode("SC");
                labelsc.appendChild(text);
                fieldset.appendChild(labelsc);
                
                //botao radio "SC"
                inputpr = document.createElement("input");
                inputpr.setAttribute("type","radio");
                inputpr.setAttribute("name","radiobox");
                inputpr.setAttribute("id","pr");
                inputpr.setAttribute("value", "PR")
                fieldset.appendChild(inputpr);
                //cria label para "pr"
                let labelpr = document.createElement("label");
                labelpr.setAttribute("for","pr")
                text = document.createTextNode("PR");
                labelpr.appendChild(text);
                fieldset.appendChild(labelpr);
                brkfdst()
                // input anos de xp
                let label2 = document.createElement("label")
                label2.setAttribute("for", "label2")
                label2.appendChild(document.createTextNode("Anos de experiência:"))
                fieldset.appendChild(label2)
                brkfdst()
                anosdexp = document.createElement("input");
                anosdexp.setAttribute("type","number")
                anosdexp.setAttribute("class","input")
                anosdexp.setAttribute("id","anosdexp")
                fieldset.appendChild(anosdexp)
                brkfdst()
                //botao enviar
                let a = document.createElement("button")
                a.setAttribute("type", "button")
                a.setAttribute("id", "botao2")
                a.setAttribute("class", "botao")
                let b = document.createTextNode("Enviar")
                a.appendChild(b)
                fieldset.appendChild(a)
                //finalmente
                document.querySelector("#botao2").addEventListener("click", ()=>{
        //apaga os erros
            if (erroprofissao == 1){
                removeerros(erroprofissaodiv, profissao)
                erroprofissao = 0;
            }
            if (erroestado == 1){
                erroestadodiv.remove()
                erroestado = 0;
            }
            if (erroanosdexp == 1){
                removeerros(erroanosdexpdiv, anosdexp)
                erroanosdexp = 0;
            }

            //executa as funções dos erros
            count=0
            vprofissao()
            vestado()
            vanosdexp()
            colocafoco()

            if (count == 0) {
                //guarda as informações do usuário
                valorprofissao = profissao.value
                valoranosdexp = anosdexp.value
                valorestado = document.querySelector('input[name="radiobox"]:checked').value;
                //agora falta a terceira pag
                //limpa o form
                form.innerHTML = ""
                form.setAttribute("class","form")
                //titulo
                let h1 = document.createElement("h2")
                h1.appendChild(document.createTextNode("Estes são os dados que você preencheu:"))
                form.appendChild(h1)
                brkform()
                //fim do titulo
                let span1 = document.createElement("span")
                span1.setAttribute("class","inputs")
                span1.appendChild(document.createTextNode("Nome:"))
                form.appendChild(span1)
                let text1 = document.createElement("span")
                text1.setAttribute("class","spans")
                text1.appendChild(document.createTextNode(valornome))
                form.appendChild(text1)
                brkform()
                //fim
                let span2 = document.createElement("span")
                span2.setAttribute("class","inputs")
                span2.appendChild(document.createTextNode("CPF:"))
                form.appendChild(span2)
                let text2 = document.createElement("span")
                text2.setAttribute("class","spans")
                text2.appendChild(document.createTextNode(valorcpf))
                form.appendChild(text2)
                brkform()
                //fim
                let span3 = document.createElement("span")
                span3.setAttribute("class","inputs")
                span3.appendChild(document.createTextNode("Senha:"))
                form.appendChild(span3)
                let text3 = document.createElement("span")
                text3.appendChild(document.createTextNode(valorsenha))
                text3.setAttribute("class","spans")
                form.appendChild(text3)
                brkform()
                //fim
                let span4 = document.createElement("span")
                span4.setAttribute("class","inputs")
                span4.appendChild(document.createTextNode("Profissão:"))
                form.appendChild(span4)
                let text4 = document.createElement("span")
                text4.appendChild(document.createTextNode(valorprofissao))
                text4.setAttribute("class","spans")
                form.appendChild(text4)
                brkform()
                //fim
                let span5 = document.createElement("span")
                span5.setAttribute("class","inputs")
                span5.appendChild(document.createTextNode("Estado:"))
                form.appendChild(span5)
                let text5 = document.createElement("span")
                text5.appendChild(document.createTextNode(valorestado))
                text5.setAttribute("class","spans")
                form.appendChild(text5)
                brkform()
                //fim
                let span6 = document.createElement("span")
                span6.setAttribute("class","inputs")
                span6.appendChild(document.createTextNode("Anos de experiência:"))
                form.appendChild(span6)
                let text6 = document.createElement("span")
                text6.appendChild(document.createTextNode(valoranosdexp))
                text6.setAttribute("class","spans")
                form.appendChild(text6)
                brkform()
                brkform()
                //fim
                //texto para verificar se as informações estão certas
                let text = document.createElement("div")
                text.setAttribute("class","inputs")
                text.appendChild(document.createTextNode("As informações estão corretas?"))
                form.appendChild(text);
                //botao radio pra verificar se ta tudo certinho mesmo
                //botao radio "sim"
                let inputsim = document.createElement("input");
                inputsim.setAttribute("type","radio");
                inputsim.setAttribute("name","soun");
                inputsim.setAttribute("id","sim");
                inputsim.setAttribute("value", "SIM")
                form.appendChild(inputsim);
                //cria label para "sim"
                let labelsim = document.createElement("label");
                labelsim.setAttribute("for","sim")
                text = document.createTextNode("Sim");
                labelsim.appendChild(text);
                form.appendChild(labelsim);
                //botao radio "nao"
                let inputnao = document.createElement("input");
                inputnao.setAttribute("class","nao")
                inputnao.setAttribute("type","radio");
                inputnao.setAttribute("name","soun");
                inputnao.setAttribute("id","nao");
                inputnao.setAttribute("value", "nao")
                form.appendChild(inputnao);
                //cria label para "nao"
                let labelnao = document.createElement("label");
                labelnao.setAttribute("for","nao")
                text = document.createTextNode("Não");
                labelnao.appendChild(text);
                form.appendChild(labelnao);
                //cria botão final para enviar o radio
                let botao = document.createElement("input")
                br = document.createElement("br")
                form.appendChild(br)
                botao.setAttribute("type","submit")
                botao.setAttribute("id","botaofinal")
                botao.setAttribute("class","botao")
                botao.setAttribute("value","Enviar")
                form.appendChild(botao)
                form.addEventListener("submit", (e)=>{
                    if (document.querySelector("#nao").checked == false && document.querySelector("#sim").checked == false){
                        e.preventDefault();
                    }
                    
                    else if (document.querySelector('input[name="soun"]:checked').value == "nao"){
                        e.preventDefault()
                        alert("Certo, então a página será recarregada para recomeçar.")
                        window.location.reload()
                    }
                    
                    else {
                        alert("Tudo certo então. Informações salvas.")
                    }

                })


            }
        });
                }
        } );