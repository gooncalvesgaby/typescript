const comidas: {
    comidaA: string;
    comidaB: string;
    comidaC: string;
    comidasD?: string;
    [key: string]: unknown
} = {
    comidaA: "feijoada",
    comidaB: "maiones",
    comidaC: "frango assado",
};

comidas.comidaA = "chocolate";
comidas.comidaB = "morango";
comidas.comidasD = "nova comida";
comidas.valor = 23;

console.log(comidas)

//[key: string]: unknown ---- o [key:tring] quer dizer que as chaves do objeto
//podem ser qualquer string e o :unknown quer dizer que o valor associado a chave
//pode ser de qualquer tipo