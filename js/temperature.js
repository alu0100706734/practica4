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
	var resultado = ((this.getValor() * 9/5)+32);
	return resultado;
}


Temperatura.prototype.ctok = function(){
	var resultado = (this.getValor() + 273.15);
	return resultado;	
}

Temperatura.prototype.ftoc = function(){
	var resultado = ((this.getValor()-32)*5/9);
	return resultado;
}

Temperatura.prototype.ftok = function(){
	var resultado = ((this.getValor*5/9) + 459.67);
	return resultado;
}

Temperatura.prototype.ktoc = function(){
	var resultado = (this.getValor - 273.15);
	return resultado;
}

Temperatura.prototype.ktof = function(){
	var resultado = ((this.getValor() - 459.67) * 9/5);
	return resultado;
}


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
	m[1] = parseFloat(m[1]);
	var convertir = new Temperatura();
	convertir.setTipo(m[3].toLowerCase());
	convertir.setValor(m[1]);
	convertir.resolver();
	}
	else {
		document.getElementById("converter");
		converter.innerHTML = "Error de sintaxis. Valores no aceptados"
	}
}



Temperatura.prototype.resolver = function() {
  
  var calculo = 0;
 
  if (this.getTipo() == 'c'){
	 calculo = this.ctof().toFixed(2) + " Farenheit " + this.ctok().toFixed(2)+ " Kelvin ";
  }
  if (this.getTipo() == 'f'){
	calculo = this.ftoc().toFixed(2)+ " Celsius " + this.ftok().toFixed(2) + " Kelvin ";
  }
 
  if (this.getTipo() == 'k'){
	calculo = this.ktoc().toFixed(2)+ " Celsius " + this.ktof().toFixed(2) + " Farenheit"
  }

  else if (this.getTipo() != 'k' | 'f' | 'c') {
    	converter.innerHTML = Error();
  	}
	
	document.getElementById("converter");
	converter.innerHTML = calculo;
}
