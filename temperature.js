function Medida(valor, tipo){
    this.valor = valor;
    this.tipo = tipo;
}

function Temperatura(valor, tipo){
    Medida.call(this, valor, tipo); 
}

Temperatura.prototype = new Medida();
Temperatura.prototype.constructor = Temperatura;

Temperatura.prototype.celsius = function(){
	var F, K = this.valor;
	var F = ((this.valor * 9/5)+32).toFixed(1);
	var K = (this.valor + 273.15).toFixed(1);
	return (K + " Kelvin " + F + " Farenheit");
}

Temperatura.prototype.farenheit = function(){

    	var C = ((this.valor-32)*5/9).toFixed(1);
	var K = ((this.valor+459.67)*5/9).toFixed(1);
		return (C + " Celsius " + K +" Kelvin")
}

Temperatura.prototype.kelvin = function(){
	
	var F = (this.valor *9/5 -459.67).toFixed(1);
	var C = (this.valor -273.15).toFixed(1);
		return (F + " Farenheit " + C + " Celsius");
	
}



function resolver() {
  var temp = original.value;
  var regexp = /(^[-+]?\d+(?:\.\d*)?)(?:[eE]?([-+]?\d+))?\s*([cCfFkK])/;
  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    num = parseFloat(num);

    if(m[2]!==undefined){

        var e = m[2];
        e = parseInt(e);

        if(e<0){
            e = -e;
            var final = num / (10*e);
        }

        else{
            var final = num * (10*e);
        }
        
        var t = new Temperatura(final,m[3])
        var type = m[3];

        if (type == 'c' || type == 'C') {
            converter.innerHTML = t.celsius();
        }
        else if (type == 'f' || type == 'F') {
            converter.innerHTML = t.farenheit();
        }
		else if (type == 'k' || type == 'K'){
			converter.innerHTML = t.kelvin();
		}
    }
      
    else{
        var type = m[3];
        var t = new Temperatura(num,m[3])
        
        if (type == 'c' || type == 'C') {
            converter.innerHTML = t.celsius();
        }
            else if (type == 'f' || type == 'F') {
            converter.innerHTML = t.farenheit();
        }
		else if (type == 'k' || type == 'K'){
			converter.innerHTML = t.kelvin();
		}
    }
    
  }
  else {
    converted.innerHTML = "ERROR! Prueba con algo como '52.8E4K' ";
  }
}