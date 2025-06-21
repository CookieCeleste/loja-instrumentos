import prompt from "prompt-sync";
let input = prompt();

let instrumentos = [];

//função pra facilitar pedir input (pra usar o valor dela tem que lembrar de chamar dentro de uma variavel)
function callInput() {
    let x = input();
    return x;
}

//função principal que redireciona pra todos os menus/funcionalidades, recebe o x do showMenu() e usa
export function runProgram() {

    while(true) {
        let x = showMenu1();
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
            adicionarEstoque();
        }
        else if (x == '4') {
            subtrairEstoque();
        }
        else if (x == '5') {
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

        [Pressione Enter para prosseguir com o programa]z
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
function showMenu1() {
    console.log(`
        1. Cadastrar novo instrumento
        2. Listar instrumentos
        3. Adicionar quantidade ao estoque
        4. Subtrair quantidade do estoque
        5. Apagar instrumento do estoque
        0. Sair do programa

        digite "help" para rever as instruções
    `);
    
    process.stdout.write('Insira sua escolha: ')
    let x = callInput();
    return x;
}

function cadastrarInstrumento() {

    console.log('\nSiga os passos inserindo as informações pedidas que serão armazenadas, digite "cancelar" para cancelar');
    process.stdout.write('[Enter]');
    let x = callInput();
    // esses if's só tão numa mesma linha mas funcionam igual qualquer if normal
    //esse em específico retorna zero pro x, que na função principal cai no break MAS NÃO FECHA O PROGRAMA só sai dessa função e volta
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
        Nome: nome,
        Marca: marca,
        Ano: ano,
        Original: original
    }

    instrumentos.push(novoInstrumento);
    console.log('\nInstrumento cadastrado!');
}

function listarInstrumentos() {
    for (let i = 0; i < instrumentos.length; i++) {
        console.log(i+1 + '. ', instrumentos[i]);
    }
}

function adicionarEstoque() {
    
}

function subtrairEstoque() {

}

function apagarInstrumento() {

}