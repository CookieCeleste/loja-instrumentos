import prompt from "prompt-sync";
let input = prompt();

//array que vai armazenar os instrumentos cadastrados
let instrumentos = [];

//função pra facilitar pedir input (pra usar o valor dela tem que lembrar de chamar dentro de uma variavel)
function callInput() {
    let x = input();
    return x;
}

//função principal que redireciona pra todos os menus/funcionalidades, recebe o x do showMenu() e usa
export function runProgram() {

    // loop while true
    while(true) {
        let x = showMenu();
        if (x == '0') {
        break;
        }
        else if (x == '1') {
            cadastrarInstrumento();
        }
        else if (x == '2') {
            listarInstrumentos();
        }
        else if (x == '3') {
            adicionarQuantidade();
        }
        else if (x == '4') {
            subtrairQuantidade();
        }
        else if (x == '5') {
            definirQuantidade();
        }
        else if (x == '6') {
            apagarInstrumento();
        }
        else if (x == 'help') {
            console.log(`
            - Pressione Enter para prosseguir com o programa
            - Recomendado aumentar o tamanho do terminal arrastando a borda acima
            - Quando um menu de escolhas aparecer, insira o número da opção desejada e dê enter para ser direcionado(a)`)
            callInput();
        }
    }
}

//mostra o titulo bonito e espera dar enter e tambem ensina como usa
export function introduceProgram() {
    console.log(`\n
========= PROGRAMA DE GERENCIAMENTO - Loja de Instrumentos ============================================================

        [Pressione Enter para prosseguir com o programa]
        [Recomendado aumentar o tamanho do terminal arrastando a borda acima]`);
    callInput();
    console.log(`
     _      
    / 7       
   /_(                                                                      ________
   |_|                                                            _________/--------\\__________
   |_|                                                           /#0***  **  [****]  ** CASIO#/|
   |_|                                                          ///////////////////////////////
   |_| /\\                                                      /-----------------------------/
 /\\|=|/ /                                            /|                  \\    ||    /
 \\ |_| /                               =  =  =      / |                    \\ /  \\ /
  ) _  \\       -^-_  _            ____| || || |____/  |                     |\\  / \\
 / |_|  \\      / [_][_]_:_      |)----| || || |____   |                      \\/\\   |
/  -=-o /     /|  _||_  v         ((  | || || |  ))\\  |                     / |  \\/
\\  /~\\_/       | /    \\ |          \\\\_|_||_||_|_//  \\ |                   /  /  /  \\
 \\/          =/=\\\\____//=\\=         \\___________/    \\|                 /    \\  \\**\\ \\

        
        Quando um menu de escolhas aparecer, insira o número da opção desejada e dê enter para ser direcionado(a)
        `);
    callInput();
}

//o menu mostra as opções e pega a resposta mas retorna ela pra função principal runProgram onde ele redireciona pra outro menu
function showMenu() {
    console.log(`
        1. Cadastrar novo instrumento
        2. Listar instrumentos
        3. Adicionar quantidade ao estoque
        4. Subtrair quantidade do estoque
        5. Definir quantidade do estoque
        6. Apagar instrumento do estoque
        0. Sair do programa

        digite "help" para rever as instruções
    `);
    
    process.stdout.write('Insira sua escolha: ')
    let x = callInput();
    return x;
    // o valor de x vai ser retornado ao runProgram() e utilizado nas condições dele
}

// função que guarda uma sequência de informações e as tranforma em um objeto, sempre podendo ser cancelada no meio
function cadastrarInstrumento() {

    console.log('\nSiga os passos inserindo as informações pedidas que serão armazenadas, digite "cancelar" para cancelar');
    process.stdout.write('[Enter]');
    let x = callInput();
    // esse if retorna zero pro x, que na função principal cai no break MAS NÃO FECHA O PROGRAMA só sai dessa função e volta
    if (x == 'cancelar') {console.log('\nVoltando...'); return 0;}

    console.log('Nome do instrumento (ex: Guitarra, Saxofone, Piano):');
    let nome = callInput();
    if (nome == 'cancelar') {console.log('\nVoltando...'); return 0;}

    console.log('Marca do instrumento (ex: Gibson, Yamaha, Casio):');
    let marca = callInput();
    if (marca == 'cancelar') {console.log('\nVoltando...'); return 0;}

    console.log('Ano de Fabricação:');
    let ano = callInput();
    if (ano == 'cancelar') {console.log('\nVoltando...'); return 0;}
    else {ano = Number(ano)}

    console.log('É original? (responda "s" para SIM e "n" para NÃO');
    process.stdout.write('s/n');
    let original = callInput();
    if (original == 's') {original = 'Sim';}
    else if (original == 'n') {original = 'Não'}
    else if (original == 'cancelar') {console.log('\nVoltando...'); return 0;}

    let novoInstrumento = {
        Quantidade: 1,
        Nome: nome,
        Marca: marca,
        Ano: ano,
        Original: original
    }

    // coloca as informações inseridas em forma de objeto como elemento do array, mesmo que o objeto seja reutilizado com outras informações o elemento não muda dentro do array e pode ser adicionado como novo
    instrumentos.push(novoInstrumento);
    console.log('\nInstrumento cadastrado!');
}

// faz um loop que lista o nome e marca de cada item existente no array de instrumentos, se não existirem itens o usuário será informado. Após isso o usuário pode especificar um item para mostrar o objeto inteiro do array
function listarInstrumentos() {
    console.log(`
0. [Voltar ao Menu Anterior]
`);
    for (let i = 0; i < instrumentos.length; i++) {
        console.log(`${i+1}. ${instrumentos[i].Nome} ${instrumentos[i].Marca} (${instrumentos[i].Quantidade})`);
    }
    if (instrumentos[0]) {
        console.log('Digite o número do item para ver suas especificações');
        let x = callInput();
        if (x == '0') {
            return 0;
        } else {
            console.log('\n',instrumentos[x-1]);
        }
        process.stdout.write('\n[Enter]');
    } else {
        console.log('>> Não existem itens cadastrados. <<')
    }
    callInput();
}

// pede um número que vai ser adicionado ao item "quantidade" do objeto escolhido
function adicionarQuantidade() {
    console.log();
    for (let i = 0; i < instrumentos.length; i++) {
        console.log(`${i+1}. ${instrumentos[i].Nome} ${instrumentos[i].Marca} (${instrumentos[i].Quantidade})`);
    }
    console.log('\nDigite o número do item para adicionar mais quantidade dele');
    let x = callInput();
    if (instrumentos[x-1]) {
    console.log('Quantos itens deseja adicionar?');
    let qtd = Number(callInput());
        instrumentos[x-1].Quantidade += qtd;
        console.log('\nItens adicionados!')
    } else { console.log('\nItem inválido, retornando...'); return 0;}
}

// subtrai um número da quantidade do objeto escolhido pelo usuário, caso essa subtração resulte um 0 ou menor, o item pode ser apagado com a autorização do usuário
function subtrairQuantidade() {
    console.log();
    for (let i = 0; i < instrumentos.length; i++) {
        console.log(`${i+1}. ${instrumentos[i].Nome} ${instrumentos[i].Marca} (${instrumentos[i].Quantidade})`);
    }
    console.log('\nDigite o número do item para subtrair sua quantidade');
    let x = callInput();
    if (instrumentos[x-1]) {
        console.log('Qual quantidade a ser subtraída?');
        let qtd = Number(callInput());
        if (qtd >= instrumentos[x-1].Quantidade) {
            console.log(`\nSubtrair essa quantidade irá apagar este item, sem recuperação. Deseja prosseguir?
digite "sim" e dê enter para confirmar.`);
            let y = callInput();
            if (y == 'sim') {
            instrumentos.splice(x-1, 1);
            } else { return 0; }
        } else {
            instrumentos[x-1].Quantidade -= qtd;
            console.log('\nQuantidade subtraída!')
        }
    } else { console.log('\nItem inválido, retornando...'); return 0;}
}

// substitui a quantidade do objeto atual pela inserida no input
function definirQuantidade() {
    console.log();
    for (let i = 0; i < instrumentos.length; i++) {
        console.log(`${i+1}. ${instrumentos[i].Nome} ${instrumentos[i].Marca} (${instrumentos[i].Quantidade})`);
    }
    console.log('\nDigite o número do item para definir sua quantidade');
    let x = callInput();
    if (instrumentos[x-1]) {
    console.log('Qual quantidade a ser definida?');
    let qtd = Number(callInput());
        instrumentos[x-1].Quantidade = qtd;
        console.log('\nQuantidade definida!')
    } else { console.log('\nItem inválido, retornando...'); return 0;}
}

// retira o item do array e da lista por completo, reordenando eles dentro do array
function apagarInstrumento() {
    console.log();
    for (let i = 0; i < instrumentos.length; i++) {
        console.log(`${i+1}. ${instrumentos[i].Nome} ${instrumentos[i].Marca} (${instrumentos[i].Quantidade})`);
    }
    console.log('\nDigite o número do item que deseja deletar definitivamente independente da quantidade.');
    let x = callInput();
    if (instrumentos[x-1]) {
        console.log(`Tem certeza que deseja excluir o item ${x}?
Digite "sim" e dê enter para confirmar:`)
        let y = callInput();
        if (y == 'sim') {
            instrumentos.splice(x-1, 1);
        } else { return 0; }
    }
    
}