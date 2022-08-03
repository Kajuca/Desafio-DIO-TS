let anyEstadeVolta: any;
anyEstadeVolta = 3;
anyEstadeVolta = 'string';

let Stringteste:string = 'verificar';
Stringteste = anyEstadeVolta;

let unknownValor:unknown;

unknownValor = 3;
unknownValor = 'opa';

let stringTeste2: string ; 'agoravai';
//stringTeste2 = unknownValor;

if (typeof unknownValor === 'string'){
    stringTeste2 = unknownValor;
}

function jogaErro(erro:string, codigo:number):never{
    throw{error:erro, code:codigo}
}

jogaErro('deu erro', 500)
