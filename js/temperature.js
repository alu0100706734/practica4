"use strict";

function Medida(valor, tipo){
    this.valor = valor;
    this.tipo = tipo;
	
}

function Temperatura(){
    Medida.call(this); 
}

Temperatura.prototype = new Medida();

function Celsius(valor){
	this.tipo = 'c';
	Temperatura.call(this, valor,this.tipo);
	this.Transform = function (){
		var dato = parseInt(this.valor);
		return (((this.valor * 9/5)+32).toFixed(2) + "º Farenheit " + (273.15).toFixed(2) + "º Kelvin");
	}
}

function Farenheit(valor){
	this.tipo = 'f';
	Temperatura.call(this, valor, this.tipo);
	this.Transform = function(){
		var dato = parseInt(this.valor);
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

function Error(){
		return ("ERROR! Prueba con algo como '52.8E4K' ");
}



Medida.prototype.SetValor = function(valor){
	this.valor = valor;
}

Medida.prototype.SetTipo = function(tipo){
	this.tipo = tipo;
}

Medida.prototype.GetValor = function(){
	return this.valor;
}

Medida.prototype.GetTipo = function(){
	return this.tipo;
}

Temperatura.prototype.entrada = function(valor){
	var regexp = /(^[-+]?\d+(?:\.\d*)?)(?:[eE]?([-+]?\d+))?\s*([cCfFkK])/;
    var m = valor.match(regexp);
    this.SetValor(m[1]);
    this.SetTipo(m[3]).toLowerCase();
}



Temperatura.prototype.resolver = function() {
  
  /*if (m) {
    var num = m[1];
		num = parseFloat(num);
    var tipo = m[3];
    	tipo = tipo.toLowerCase();
    var e = m[2];
		e = parseInt(e);*/

  if (this.GetTipo() == 'c'){
		 var celsius = new Celsius(num);
		 converter.innerHTML = celsius.Transform();
  }
 else if (this.GetTipo() == 'f'){
		 var farenheit = new Farenheit(num);
		 converter.innerHTML = farenheit.Transform();
 }
 
 else if (this.GetTipo() == 'k'){
 		var kelvin = new Kelvin(num);
		 converter.innerHTML = kelvin.Transform();
	 }

    else if (this.GetTipo() != 'k' | 'f' | 'c') {
    	converter.innerHTML = Error();
  	}
}

/*this.addEventListener('message',function(valor){
	var temperatura = new Temperatura();
	temperatura.entrada(valor.data);
	var res = Temperatura.resolver();
	this.postMessage(res);
	
},false); */