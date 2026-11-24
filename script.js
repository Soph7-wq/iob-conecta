
function verFrequencia() {
    document.getElementById("resultado").innerHTML = `
        <h2>Minha Frequência</h2>
        <p>Suas informações de presença aparecerão aqui.</p>
    `;
}

function verAtividades() {
    document.getElementById("resultado").innerHTML = `
        <h2>Minhas Atividades</h2>
        <p>As atividades publicadas pelos professores aparecerão aqui.</p>
    `;
}

function verAvisos() {
    document.getElementById("resultado").innerHTML = `
        <h2>Avisos Escolares</h2>
        <p>Os comunicados da coordenação aparecerão aqui.</p>
    `;
}


const formulario = document.getElementById("formLogin");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const perfil = document.getElementById("perfil").value;

        if (perfil === "Estudante") {
            window.location.href = "estudante.html";
        } 
        else if (perfil === "Professor") {
            window.location.href = "professor.html";
        } 
        else if (perfil === "Coordenação") {
            window.location.href = "coordenacao.html";
        }
    });
}




function registrarFrequencia() {
    document.getElementById("resultado").innerHTML = `
        <h2>Registro de Frequência</h2>

        <label>Nome do estudante:</label>
        <input type="text" id="nomeEstudante"
        placeholder="Digite o nome">

        <label>Situação:</label>
        <select id="situacao">
            <option value="Presente">Presente</option>
            <option value="Ausente">Ausente</option>
        </select>

        <button onclick="salvarFrequencia()">
            Salvar registro
        </button>

        <p id="mensagemFrequencia"></p>
    `;
}

function salvarFrequencia() {
    const nome = document.getElementById("nomeEstudante").value;
    const situacao = document.getElementById("situacao").value;

    if (nome.trim() === "") {
        alert("Digite o nome do estudante!");
        return;
    }

    document.getElementById("mensagemFrequencia").innerHTML =
        nome + " - " + situacao + " (registro demonstrativo)";
}

function publicarAtividade() {
    document.getElementById("resultado").innerHTML = `
        <h2>Publicar Atividade</h2>

        <label>Nome da atividade:</label>
        <input type="text" id="nomeAtividade"
        placeholder="Digite o título">

        <label>Descrição:</label>
        <textarea id="descricaoAtividade"
        placeholder="Descreva a atividade"></textarea>

        <button onclick="salvarAtividade()">
            Publicar
        </button>

        <p id="mensagemAtividade"></p>
    `;
}

function salvarAtividade() {
    const nome = document.getElementById("nomeAtividade").value;

    if (nome.trim() === "") {
        alert("Digite o nome da atividade!");
        return;
    }

    document.getElementById("mensagemAtividade").innerHTML =
        "Atividade '" + nome + "' publicada (demonstração)!";
}



function verRelatorios() {
    document.getElementById("resultado").innerHTML = `
        <h2>Relatórios de Frequência</h2>
        <p>Os relatórios de presença e ausência dos estudantes aparecerão aqui.</p>
    `;
}

function verPublicacoes() {
    document.getElementById("resultado").innerHTML = `
        <h2>Atividades Publicadas</h2>
        <p>As atividades cadastradas pelos professores aparecerão aqui.</p>
    `;
}

function verComunicados() {
    document.getElementById("resultado").innerHTML = `
        <h2>Comunicados Escolares</h2>
        <p>Os avisos da instituição aparecerão aqui.</p>
    `;
}
