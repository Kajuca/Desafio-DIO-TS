let valorAny: any = 3;

let valorString:string = 'teste';
valorString = valorAny; //Dá certo pq valorany pode ser qualquer coisa!!
let valorString2: string = 'testao';
valorString2 = valorAny;

function somarStrings(string1:string, string2:string){
    console.log(string1+string2);
}

somarStrings(valorString, valorString2);