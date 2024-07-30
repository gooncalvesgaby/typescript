// intersection types quer dizer que eu posso combinar
// mais de um tipo em um só.
// EXEMPLO:

type myName = {name: string};
type myLastName = {lastName: string};
type myAge = {age: number};
type me = myName & myLastName & myAge;

const people: me = {
    name: 'gaby',
    lastName: 'gonçalves',
    age: 29,
};

console.log(people);

export { people };

