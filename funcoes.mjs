import prompt from "prompt-sync";
let input = prompt();


export function executeProgram() {

    introduceProgram();

    while(true) {
        let x = showMenu1();
        if (x == '0') {
        break;
        }
    }
}

function introduceProgram() {
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

function callInput() {
    let x = input();
    return x;
}

function showMenu1() {
    console.log(`
        1. Cadastrar novo instrumento
        2. Listar instrumentos
        3. Adicionar quantidade ao estoque
        4. Subtrair quantidade do estoque
        5. Apagar instrumento completamente
        0. Sair do programa

        digite "help" para rever as instruções
        `);
    
    process.stdout.write('Insira sua escolha: ')
    let x = callInput();
    return x;
}