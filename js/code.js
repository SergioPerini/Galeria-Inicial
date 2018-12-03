let num = 1;
let imagen = document.getElementById("cajap");
let text = document.getElementById("showinf");
imagen.src = "/imagenes_galeria/"+ num +".jpg";


function cambiarimagen(imagensource){
    imagen.src = imagensource;
    num = imagensource.replace('/imagenes_galeria', '')
                      .replace('.jpg', '')
                      .replace('http://127.0.0.1:5500/', '');
    console.log(num);
}

//let inf = document.getElementById("t"+num);
//let ver = document.getElementById("verinf");
//let ocultar = document.getElementById("ocuinf");

function cambiartexto(){
    let ocultar = document.getElementById("ocuinf"); //Repito las variables en cada función porque si no no me funciona. Aunque debería de funcionar con las variables fuera.
    let ver = document.getElementById("verinf");
    let inf = document.getElementById("t"+num);
    inf.style.display = "block";
    ver.style.display = "none";
    ocultar.style.display = "block";
    
    if(text.style.display == "block"){
        inf.style.display = "none";
	}else{
        inf.style.display = "block";
    }
}
function limpiartexto(){
    let ocultar = document.getElementById("ocuinf");
    let ver = document.getElementById("verinf");
    let inf = document.getElementById("t"+num);
    ocultar.style.display = "none";
    ver.style.display = "block";
    inf.style.display = "none";
}



//let inf = document.getElementById("informacion");
//inf.textContent = "OCULTAR INFORMACIÓN";




//function cambiartexto(textsource){
//    let text = document.getElementById("showinf");
//    num = textsource.replace('t', '')
//                      .replace('.jpg', '')
//                      .replace('http://127.0.0.1:5500/', '');
//    console.log(text);
//}

function anterior(){
    let img = document.getElementById("cajap");
    num--;
    if (num < 1) {
        num = 9;
    }
    img.src = "/imagenes_galeria/"+ num +".jpg"; 
    console.log(img.src)
}

function siguiente(){
    let img = document.getElementById("cajap");
    num++;
    if (num > 9) {
        num = 1;
    }
    img.src = "/imagenes_galeria/"+ num +".jpg"; 
}

function noche(){
    document.body.style.backgroundColor = "rgb(24,24,24)";
    document.getElementById("boton1").style.backgroundColor = "rgb(24,24,24)";
    document.getElementById("boton1").style.color = "white";
    document.getElementById("boton1").style.border = "2px solid #fff";

    document.getElementById("boton2").style.backgroundColor = "rgb(24,24,24)";
    document.getElementById("boton2").style.color = "white";
    document.getElementById("boton2").style.border = "2px solid #fff";

    document.getElementById("noche").style.backgroundColor = "rgb(24,24,24)";
    document.getElementById("noche").style.color = "white";
    document.getElementById("noche").style.border = "2px solid #fff";

    document.getElementById("sepia").style.backgroundColor = "rgb(24,24,24)";
    document.getElementById("sepia").style.color = "white";
    document.getElementById("sepia").style.border = "2px solid #fff";

    document.getElementById("normal").style.backgroundColor = "rgb(24,24,24)";
    document.getElementById("normal").style.color = "white";
    document.getElementById("normal").style.border = "2px solid #fff";

    document.getElementById("verinformacion").style.backgroundColor = "rgb(24,24,24)";
    document.getElementById("verinformacion").style.color = "white";
    document.getElementById("verinformacion").style.border = "2px solid #fff";

    document.getElementById("ocultarinf").style.backgroundColor = "rgb(24,24,24)";
    document.getElementById("ocultarinf").style.color = "white";
    document.getElementById("ocultarinf").style.border = "2px solid #fff";

    document.getElementById("showinf").style.color = "white";
}

function sepia(){
    document.body.style.backgroundColor = "rgb(224,176,86)";
    document.getElementById("boton1").style.backgroundColor = "rgb(224,176,86)";
    document.getElementById("boton1").style.color = "rgb(24,24,24)";
    document.getElementById("boton1").style.border = "2px solid rgb(24,24,24)";

    document.getElementById("boton2").style.backgroundColor = "rgb(224,176,86)";
    document.getElementById("boton2").style.color = "rgb(24,24,24)";
    document.getElementById("boton2").style.border = "2px solid rgb(24,24,24)";

    document.getElementById("noche").style.backgroundColor = "rgb(224,176,86)";
    document.getElementById("noche").style.color = "rgb(24,24,24)";
    document.getElementById("noche").style.border = "2px solid rgb(24,24,24)";

    document.getElementById("sepia").style.backgroundColor = "rgb(224,176,86)";
    document.getElementById("sepia").style.color = "rgb(24,24,24)";
    document.getElementById("sepia").style.border = "2px solid rgb(24,24,24)";

    document.getElementById("normal").style.backgroundColor = "rgb(224,176,86)";
    document.getElementById("normal").style.color = "rgb(24,24,24)";
    document.getElementById("normal").style.border = "2px solid rgb(24,24,24)";

    document.getElementById("verinformacion").style.backgroundColor = "rgb(224,176,86)";
    document.getElementById("verinformacion").style.color = "rgb(24,24,24)";
    document.getElementById("verinformacion").style.border = "2px solid rgb(24,24,24)";

    document.getElementById("ocultarinf").style.backgroundColor = "rgb(224,176,86)";
    document.getElementById("ocultarinf").style.color = "rgb(24,24,24)";
    document.getElementById("ocultarinf").style.border = "2px solid rgb(24,24,24)";

    document.getElementById("showinf").style.color = "rgb(24,24,24)";
}

function normal(){
    document.body.style.backgroundColor = "rgb(250,250,250)";
    document.getElementById("boton1").style.backgroundColor = "rgb(250,250,250)";
    document.getElementById("boton1").style.color = "black";
    document.getElementById("boton1").style.border = "2px solid #000";

    document.getElementById("boton2").style.backgroundColor = "rgb(250,250,250)";
    document.getElementById("boton2").style.color = "black";
    document.getElementById("boton2").style.border = "2px solid #000";

    document.getElementById("noche").style.backgroundColor = "rgb(250,250,250)";
    document.getElementById("noche").style.color = "black";
    document.getElementById("noche").style.border = "2px solid #000";

    document.getElementById("sepia").style.backgroundColor = "rgb(250,250,250)";
    document.getElementById("sepia").style.color = "black";
    document.getElementById("sepia").style.border = "2px solid #000";

    document.getElementById("normal").style.backgroundColor = "rgb(250,250,250)";
    document.getElementById("normal").style.color = "black";
    document.getElementById("normal").style.border = "2px solid #000";

    document.getElementById("verinformacion").style.backgroundColor = "rgb(250,250,250)";
    document.getElementById("verinformacion").style.color = "black";
    document.getElementById("verinformacion").style.border = "2px solid #000";

    document.getElementById("ocultarinf").style.backgroundColor = "rgb(250,250,250)";
    document.getElementById("ocultarinf").style.color = "black";
    document.getElementById("ocultarinf").style.border = "2px solid #000";

    document.getElementById("ocultarinf").style.color = "rgb(24,24,24)";
}

















/*
let imagenactual = 
let boton = document.getElementById("boton");
boton.onclick = function cambio(){
    imagen.src = 

} */

//function anterior(){
    
//}

//function cambiarimagen(imagenS){
//  let imagen = document.getElementsByClassName("");
//  imagen.src= imagenS;
//}
//overflow hidden=fijo. overflow auto=scrol

//let anterior = document.getElementsByClassName("flecha1");
//let siguiente = document.getElementsByClassName("flecha2");