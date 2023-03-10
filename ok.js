levels = [["Carbono e Nitrogênio (+ hidrogênios, se precisar)", ["CHN", "CH3N", "CH5N"]], ["C + nH", ["CH4"], "O carbono precisa de quatro elétrons para se\n estabilizar com oito na camada de valência.\n O Hidrogênio precisa de um.\n Com quantos Hidrogênios o Carbono\n se estabiliza?"],["C2 + nH", ["C2H2", "C2H4", "C2H6"], "Dois carbonos, cada um precisa de quatro elétrons para \nficar com oito na camada de valência.\nPodendo fazer uma ligação simples, dupla ou tripla\n entre si e completando com Hidrogênio..."], ["N + nH", ["NH3", "H3N"], "O Nitrogênio precisa de três\n életrons para se estabilizar."], ["N2 + nH", ["N2", "H2N2", "N2H2", "H4N2","N2H4"], "O Nitrogênio precisa de três\n elétrons para se estabilizar..."], ["O + nH", ["H2O"], "O Oxigênio tem 6 elétrons na\n camada de valência, se estabilizando\n com mais dois."], ["O2 + nH", ["O2", "H2O2"], "O Oxigênio tem 6e- na\n camada de valência"], ["C + O2 + nH", ["CO2","CH4O2"], "Elétrons na última camada: Carbono = 4e-, Oxigênio = 6e-"], ["C + N + O + nH", ["CHNO"], "..."]]

n = 0
t = 0
a = 0
control = false
done = false
main = document.getElementById("main")
title = document.getElementById("title")
btn = document.getElementById("break")
input = document.getElementById("formula")
vlt = document.getElementById("voltar")
dc = document.getElementById("dica")
main.innerHTML = levels[0][0]
function derrubar() {
    

    if(n==8 || done == true) {
        title.innerHTML = "Fim de jogo! Parabéns!"
        main.innerHTML = `${t} tentativas, ${a} acertos!`
        input.remove()
        btn.remove()
        vlt.remove()
        dc.remove()
        for (const e of document.getElementsByTagName("h1")) {
            e.remove()
        }
        for (const e of document.getElementsByTagName("h3")) {
            e.remove()
        }
        preencherFundo(" By João Pinheiro ")
        done = true
    }
    else {
        if(input.value == "end") {
            done = true
            return
        } 
        for (let e = 0; e < levels[n][1].length; e++) {
            if(input.value.toUpperCase() == levels[n][1][e]){
                n+=1
                a+=1
                control = true
                main.innerHTML = levels[n][0]
                title.innerHTML = `Nível #${n}`
                input.placeholder = "Digite a fórmula molecular..."
                dc.title = "Dica: " + levels[n][2]
                preencherFundo(" "+ levels[n][0] + " ")
            }
        }
        if(control === false) {
            input.placeholder = "Tente novamente!"
        }
        control = false
        if(n<1)vlt.style = "display:none;"
        else vlt.style = "display:block"
    } 
    t+=1
    input.value = ""
}

function voltar() {
    n-=1
    control = true
    main.innerHTML = levels[n][0]
    title.innerHTML = `Nível #${n}`
    input.placeholder = "Digite a fórmula molecular..."
    preencherFundo(" "+ levels[n][0] + " ")
}

function resposta() {
    window.alert("Respostas: " + levels[n][1])
}

document.addEventListener("keypress", (e)=>{
    if(e.key=== "Enter" && !done) {
        btn.click()
    }
    if(e.key !== "Enter" && !done){
        input.focus()
    }
})

slogan = document.getElementById("Slogan")

function preencherFundo(param)
{
    var text = '';

    for(var i=0; i<2000; i++)
    {
        text += param;
    }

    slogan.innerHTML = text
}

preencherFundo(" C + N +nH ")