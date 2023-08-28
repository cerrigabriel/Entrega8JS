const ofertaCreditos=[
   {
    nombre: "plan001",
    capital: 150000,
    plazoEnDias: 30,
    porcentajeTasa: 15
   },
   {
    nombre: "plan002",
    capital: 300000,
    plazoEnDias: 180,
    porcentajeTasa: 10
   }, 
   {
    nombre: "plan003",
    capital: 485000,
    plazoEnDias: 60,
    porcentajeTasa: 23
   }
];

function calcularInteresGanado(capital, plazo, tasa){
   let interesGanado = ((capital * plazo) * (tasa/100)) / 100;
   return interesGanado;
}

let alternativasCredito = [];

for (let i = 0; i < ofertaCreditos.length; i++) {
    let nombre = ofertaCreditos[i].nombre; 
    let capital = ofertaCreditos[i].capital; 
    let plazo = ofertaCreditos[i].plazoEnDias;
    let tasa = ofertaCreditos[i].porcentajeTasa;
    
    let interesGanado = calcularInteresGanado(capital, plazo, tasa); 
    alternativasCredito.push({nombre, interesGanado}); 
};

console.log(alternativasCredito);





