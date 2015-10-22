function Medida(valor, tipo){
    this.valor = valor || 0;
    this.tipo = tipo || "no type";
	this.getMedida = function(){
		return this.valor + this.tipo;
	}
}

function Temperatura(valor, tipo){
    Medida.call(this, valor, tipo); 
}

function Celsius(valor){
	this.tipo = 'c';
	Temperatura.call(this, valor,this.tipo);
	this.Transform = function (){
	var dato = this.valor;
	return (((this.valor * 9/5)+32).toFixed(2) + "º Farenheit " + (dato+273.15).toFixed(2) + "º Kelvin");
	}
}

function Farenheit(valor){
	this.tipo = 'f';
	Temperatura.call(this, valor, this.tipo);
	this.Transform = function(){
		var dato = this.valor;
		return (((this.valor-32)*5/9).toFixed(2) + "º Celsius " + ((dato+459.67)*5/9).toFixed(2) + "º Kelvin");
	}
}

function Kelvin(valor){
	this.tipo = 'k';
	Temperatura.call(this,valor,this.tipo);
	this.Transform = function(){
		var dato = this.valor;
		return ((this.valor-273.15).toFixed(2) + "º Celsius " + ((dato-459.67)*9/5).toFixed(2) + "º Farenheit");
	}
}


function resolver() {
  var temp = document.getElementById('original').value;  // mirar que coja un elemento
  var converter  = document.getElementById('converter');
  var regexp = /(^[-+]?\d+(?:\.\d*)?)(?:[eE]?([-+]?\d+))?\s*([cCfFkK])/;
  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
		num = parseFloat(num);
    var tipo = m[3];
    var e = m[2];
		e = parseInt(e);

		
	 switch (tipo){
		 case 'c':
		 var celsius = new Celsius(num);
		 converter.innerHTML = celsius.Transform();
		 break;
		 
		 case 'f':
		 var farenheit = new Farenheit(num);
		 converter.innerHTML = farenheit.Transform();
	
		 break;
		 
		 case 'k':
		 var kelvin = new Kelvin(num);
		 converter.innerHTML = kelvin.Transform();
		 break;
	 }
  }
  
    else {
    converter.innerHTML = "ERROR! Prueba con algo como '52.8E4K' ";
  }
}