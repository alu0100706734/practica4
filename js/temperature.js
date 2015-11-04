"use strict";

function Medida(valor, tipo){
    this.valor = valor;
    this.tipo = tipo;
	
}

function Temperatura(){
    Medida.call(this); 
}

Temperatura.prototype = new Medida();
Temperatura.prototype.ctof = function(){
	var resultado = ((this.getValor() * 9/5)+32).toFixed(2);
	return resultado;
}


Temperatura.prototype.ctok = function(){
	var resultado = (this.getValor() + 273.15).toFixed(2);
	return resultado;	
}

Temperatura.prototype.ftoc = function(){
	var resultado = ((this.getValor * 5/9)-32).toFixed(2);
	return resultado;
}

Temperatura.prototype.ftok = function(){
	var resultado = ((this.getValor*5/9) + 459.67).toFixed(2);
	return resultado;
}

Temperatura.prototype.ktoc = function(){
	var resultado = (this.getValor - 273.15).toFixed(2);
	return resultado;
}

Temperatura.prototype.ktof = function(){
	var resultado = ((this.getValor() - 459.67) * 9/5).toFixed(2);
	return resultado;
}

/*function Celsius(valor){
	this.tipo = 'c';
	Temperatura.call(this, valor,this.tipo);
	this.Transform = function (){
		var dato = parseInt(this.valor);
		return (((this.valor * 9/5)+32).toFixed(2) + "º Farenheit " + (273.15).toFixed(2) + "º Kelvin");
	}
}*/

/*function Farenheit(valor){
	this.tipo = 'f';
	Temperatura.call(this, valor, this.tipo);
	this.Transform = function(){
		var dato = parseInt(this.valor);
		return (((this.valor-32)*5/9).toFixed(2) + "º Celsius " + ((dato+459.67)*5/9).toFixed(2) + "º Kelvin");
	}
}
*/
/*function Kelvin(valor){
	this.tipo = 'k';
	Temperatura.call(this,valor,this.tipo);
	this.Transform = function(){
		var dato = this.valor;
		return ((this.valor-273.15).toFixed(2) + "º Celsius " + ((dato-459.67)*9/5).toFixed(2) + "º Farenheit");
	}
}*/

function Error(){
		return ("ERROR! Prueba con algo como '52.8E4K' ");
}

Medida.prototype.setValor = function(valor){
	this.valor = valor;
}

Medida.prototype.setTipo = function(tipo){
	this.tipo = tipo;
}

Medida.prototype.getValor = function(){
	return this.valor;
}

Medida.prototype.getTipo = function(){
	return this.tipo;
}

function entrada(){
	var valor = original.value;
	var regexp = /(^[-+]?\d+(?:\.\d*)?)(?:[eE]?([-+]?\d+))?\s*([cCfFkK])/;
    var m = valor.match(regexp);
	if (m){
	var convertir = new Temperatura();
	convertir.setTipo(m[3].toLowerCase());
	convertir.setValor(m[1]);
	}
	else {
		document.getElementById("converter");
		converter.innerHTML = "Error de sintaxis. Valores no aceptados"
	}
}



Temperatura.prototype.resolver = function() {
  
  var calculo = 0;
  
  /*if (m) {
    var num = m[1];
		num = parseFloat(num);
    var tipo = m[3];
    	tipo = tipo.toLowerCase();
    var e = m[2];
		e = parseInt(e);*/

  if (this.GetTipo() == 'c'){
	 calculo = this.ctof() + " Farenheit " + this.ctok()+ " Kelvin ";
  }
  if (this.GetTipo() == 'f'){
	calculo = this.ftoc()+ " Celsius " + this.ftok() + " Kelvin ";
  }
 
  if (this.GetTipo() == 'k'){
	calculo = this.ktoc()+ " Celsius " + this.ktof() + " Farenheit"
  }

  else if (this.GetTipo() != 'k' | 'f' | 'c') {
    	converter.innerHTML = Error();
  	}
	
	document.getElementById("converter");
	converter.innerHTML = calculo;
}

/*this.addEventListener('message',function(valor){
	var temperatura = new Temperatura();
	temperatura.entrada(valor.data);
	var res = Temperatura.resolver();
	this.postMessage(res);
	
},false); */