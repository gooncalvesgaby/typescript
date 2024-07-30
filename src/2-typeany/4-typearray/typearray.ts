// Quando eu declaro array em ts eu tenho a vantagem adicional 
// da tipagem estatica, isso me permite definir o tipo dos elementos
// que o array pode conter.

const anos: number [] = [2022, 2023, 2024];
const meses: string [] = ["janeiro", "abril", "maio", "julho"];

// também posso declarar o meu array dessa forma espicificando o type

const dias: Array<number> = [1, 2, 3];
const semana: Array<string> = ["segunda", "terça", "quarta"]

// type tupla
// o type tupla é um tipo de array no qual eu consigo especificar
// que o meu array vai receber dois tipos, uma string e um numero

let gabrielle : [string, number];
gabrielle = ["gonçalves", 29];

