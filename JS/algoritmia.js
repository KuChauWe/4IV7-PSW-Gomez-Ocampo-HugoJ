function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /^([A-ZÑ]+*)+$/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}
function problema3(){

    var extencion = [];
    var exten = [];

    var palabra = document.getElementById('p3-input').value;

    if(palabra!=''){

        var array = palabra.split(',');

        for (var i = 0; i < array.length; i++){

            var letras = array[i];

            var str1Unique = [...new Set(letras.split(''))];

            var result = str1Unique.length;
            var res = str1Unique.length;

            var resultado = str1Unique.join("");

            console.log(str1Unique);

            extencion.push(result);
            exten.push(result)

        }

        var mayor = Math.max.apply(null, extencion)

        console.log(mayor);

        document.querySelector('#p3-output').textContent = "El mayor numero de caracteres es " + mayor;
        document.querySelector('#p3-outputdos').textContent = "Los caracteres de cada palabra son: " + tam;
    }
}