// o tipo void eu utilizo geralmente em funções que não
// devem retornar nada.

function noReturn(...args: string[]): void {
    console.log(args.join(''));
}

noReturn("gabrielle", "rocha")


