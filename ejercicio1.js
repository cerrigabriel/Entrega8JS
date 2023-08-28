const flujoAnual = [
{
    mes: "enero",
    ingreso: 5414,
    egreso: 1867
},
{
    mes: "febrero",
    ingreso: 5414,
    egreso: 1867
},
{
    mes: "marzo",
    ingreso: 5414,
    egreso: 1867
},
{
    mes: "abril",
    ingreso: 5414,
    egreso: 1867
},
{
    mes: "mayo",
    ingreso: 5414,
    egreso: 1867
},
{
    mes: "junio",
    ingreso: 5414,
    egreso: 3333
},
{
    mes: "julio",
    ingreso: 5414,
    egreso: 2222
},
{
    mes: "agosto",
    ingreso: 5414,
    egreso: 9999
},
{
    mes: "septiembre",
    ingreso: 5414,
    egreso: 1867
},
{
    mes: "octubre",
    ingreso: 5414,
    egreso: 7589
},
{
    mes: "noviembre",
    ingreso: 5414,
    egreso: 1867
},
{
    mes: "diciembre",
    ingreso: 2457,
    egreso: 1867
}];

function determinarSiHayGanancia(flujoAnual){

    let totalIngresos = 0, totalEgresos = 0;

    flujoAnual.forEach(item => { totalIngresos += item.ingreso; totalEgresos += item.egreso;})

    if(totalIngresos>totalEgresos){
        return 1;
    } else if (totalIngresos == totalEgresos){
        return 0;
    } else{
        return -1;
    }
    
};

console.log(determinarSiHayGanancia(flujoAnual));