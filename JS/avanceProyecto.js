//1
var ahuachapan = [
    '• Cabecera: Ahuachapán \n',
    '• La extensión de su término municipal es de 244,84 km². \n',
    '• Su población es de 116 948 habitantes (Estimado 2013).\n',
    '• Densidad: 477.73 hab/km².\n'
];
var ahuachapan = ahuachapan.join("");

//2
var sanSalvador = [
    '• Cabecera: ciudad de San Salvador.\n',
    '• La extensión de su término municipal es de 21.040 Km2. \n',
    '• Su población es de 694 788 hab habitantes (Estimado 2020).\n',
    '• Densidad: 4655,02 hab/km²\n'
];
var sanSalvador = sanSalvador.join("");

//3
var Cabañas = [
    '• Cabecera: Sensuntepeque.\n',
    '• La extensión de su término municipal es de 1,104 km² \n',
    '• Su población es de 149,326 habitantes (Estimado 2015).\n',
    '• Densidad:  142 hab/km²\n'
];
var Cabañas = Cabañas.join("");

//4
var cuscatlan = [
    '• Cabecera: Cojutepeque.\n',
    '• La extensión de su término municipal es de 756 km²² \n',
    '• Su población es de 232 238 habitantes (Estimado 2018).\n',
    '• Densidad:  286,23 hab/km²\n'
];
var cuscatlan = cuscatlan.join("");

//5
var laLibertad = [
    '• Cabecera: Santa Tecla.\n',
    '• La extensión de su término municipal es de 1653 km² \n',
    '• Su población es de 843 500 habitantes (Estimado 2018).\n',
    '• Densidad:  509,79 hab/km²\n'
];
var laLibertad = laLibertad.join("");

//6
var laPaz = [
    '• Cabecera: Zacatecoluca.\n',
    '• La extensión de su término municipal es de 1,224 km² \n',
    '• Su población es de 332 000 habitantes (Estimado 2018).\n',
    '• Densidad:  226 hab/km²\n'
];
var laPaz = laPaz.join("");

//7
var sonsonate = [
    '• Cabecera: Ciudad de Sonsonate.\n',
    '• La extensión de su término municipal es de 232.5 km² \n',
    '• Su población es de 71.541 habitantes (Estimado 2018).\n',
    '• Densidad:  307,7 /km²\n'
];
var sonsonate = sonsonate.join("");

//8
var laUnion = [
    '• Cabecera: Ciudad de Puerto de La Unión.\n',
    '• La extensión de su término municipal es de 232.5 km² \n',
    '• Su población es de 251 123 habitantes (Estimado 2018).\n',
    '• Densidad:   236 `hab./km²`\n'
];
var laUnion = laUnion.join("");

//9
var morazan = [
    '• Cabecera: San Francisco Gotera.\n',
    '• La extensión de su término municipal es de 1 447 km² \n',
    '• Su población es de 251 447 habitantes (Estimado 2018).\n',
    '• Densidad:   173,72 hab/km²\n'
];
var morazan = morazan.join("");

//10
var sanMiguel = [
    '• Cabecera: San Miguel.\n',
    '• La extensión de su término municipal es de 594 km² \n',
    '• Su población es de 53,213  habitantes (Estimado 2012).\n',
    '• Densidad:   457,6 hab/km²\n'
];
var sanMiguel = sanMiguel.join("");

//11
var sanVicente = [
    '• Cabecera: San Vicente.\n',
    '• La extensión de su término municipal es de 267,25 km² \n',
    '• Su población es de 581,410 habitantes (Estimado 2017).\n',
    '• Densidad:   284 hab/km²\n'
];
var sanVicente = sanVicente.join("");

//12
var usulutan = [
    '• Cabecera: Usulutan.\n',
    '• La extensión de su término municipal es de 139.8 km² \n',
    '• Su población es de 73,064  habitantes (Estimado 2012).\n',
    '• Densidad:   522,8 /km²\n'
];
var usulutan = usulutan.join("");

//13
var chalatenango = [
    '• Cabecera: San Antonio de la Cruz.\n',
    '• La extensión de su término municipal es de 131.8 km² \n',
    '• Su población es de 275 100  habitantes (Estimado 2017).\n',
    '• Densidad: 2,016.6 Km²\n'
];
var chalatenango = chalatenango.join("");
/*var hola= ['1','2','3'];
hola = hola.join("");
alert(hola);*/
//14
var santaAna = [
    '• Cabecera: Ciudad de Santa Ana.\n',
    '• La extensión de su término municipal es de 408 km² \n',
    '• Su población es de  631,100  habitantes (Estimado 2017).\n',
    '• Densidad: 258,83 hab/km²\n'
];
var santaAna = santaAna.join("");

//invocacion de variables  las que posteriormente
//se usaran para las funciones
var ahuachapanF   = document.getElementById("Ahuachapan");
var cabañasF      = document.getElementById("cabañas");
//
var cuscatlanF    = document.getElementById("cuscatlan");
var laLibertadF   = document.getElementById("laLibertad");
var laPazF        = document.getElementById("laPaz");
var sonsonateF    = document.getElementById("sonsonate");
var sanSalvadorF  = document.getElementById("sanSalvador");
//
var laUnionF      = document.getElementById("laUnion");
var morazanF      = document.getElementById("morazan");
var sanMiguelF    = document.getElementById("sanmiguel");
var sanVicenteF   = document.getElementById("sanVicente");
var usulutanF     = document.getElementById("usulutan");
var chalatenangoF = document.getElementById("chalatenango");
var santaAnaF     = document.getElementById("santaAna");
//identificador de nuestro mi textarea
var cajaTexto = document.getElementById("result");




//invocacion de las funciones con sus respectivos parametros
agregarResult(sanSalvadorF,sanSalvador);
agregarResult(sonsonateF,sonsonate);
agregarResult(ahuachapanF,ahuachapan);
agregarResult(santaAnaF,santaAna);
agregarResult(sanMiguelF,sanMiguel);
agregarResult(cabañasF,Cabañas);
agregarResult(laUnionF,laUnion);
agregarResult(laPazF,laPaz);
agregarResult(laLibertadF,laLibertad);
agregarResult(sanVicenteF,sanVicente);
agregarResult(usulutanF,usulutan);
agregarResult(cuscatlanF,cuscatlan);
agregarResult(chalatenangoF,chalatenango);
agregarResult(morazanF,morazan);
//creacion de funcion
//funcion principal la cual pasara el arreglo correspondiente a mi textarea
function agregarResult(departamentoF,arreglop){
                
    departamentoF.addEventListener("mouseover", function( event ) {
    
        cajaTexto.value = arreglop;
      
    }, false);
    
    departamentoF.addEventListener("mouseout", function(event){
          cajaTexto.value= '';
    });

}






   
  
  
  