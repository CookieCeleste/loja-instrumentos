import prompt from "prompt-sync";
let input = prompt();

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

// FUNÇÃO QUE TEORICAMENTE AJUDARIA A ARMAZENAR OS OBJETOS (INSTRUMENTOS ADICIONADOS) MAS ACHO QUE O BRUNO NAO PASSOU ISSO
// function Instrumento(nome, marca, ano, original) {
//     this.nome = nome;
//     this.marca = marca;
//     this.ano = ano;
//     this.original = original;
// }

//não sei como fazer novos objetos com nomes diferentes pra cada vez que a função for usada (principalmente sem usar coisas que não foram passadas)
function cadastrarInstrumento() {

    console.log('\nSiga os passos inserindo as informações pedidas que serão armazenadas, digite "cancelar" para cancelar');
    let x = callInput();
    // esses if's só tão numa mesma linha mas funcionam igual qualquer if normal
    //esse em específico retorna zero pro x, que na função principal cai no break MAS NÃO FECHA O PROGRAMA só sai dessa função e volta
    if (x == 'cancelar') {console.log('\nVoltando...'); return 0;}

    console.log('Nome do instrumento (ex: Guitarra, Saxofone, Piano):');
    let nome = callInput();

    console.log('Marca do instrumento (ex: Gibson, Yamaha, Casio):');
    let marca = callInput();

    console.log('Ano de Fabricação:');
    let ano = Number(callInput());

    console.log('É original? (responda "s" para SIM e "n" para NÃO');
    process.stdout.write('s/n');
    let original = callInput();
    if (original == 's') {original = true;}
    else if (original == 'n') {original = false}
}

//aqui vai mostrar os objetos armazenados que eu não sei como armazenar porque eles precisam ter nomes diferentes e feitos enquanto o programa roda aaaaaaaaaaaaaaaaaaaa
function listarInstrumentos() {

}
//aqui eu nao pensei muito bem como vai funcionar sinceramente, vai criar clones dos objetos(?) ou vai ter uma variavel pra quantidade(?)
function adicionarEstoque() {
    
}
//mesma coisa de cima só que ao contrario
function subtrairEstoque() {

}
//deve ser bom pensar nessas tres funções junto pq se nao pode acabar empacando
function apagarInstrumento() {

}