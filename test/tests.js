var expect = chai.expect;

describe('temperature', function() {
	
	describe("Constructores", function() {
  
    it("Valor por defecto = 0", function() {
      var temperatura = new Temperatura();
      expect(temperatura.valor).to.equal(0);
    });
    
    it("Tipo por defecto = 'no type'", function() {
      var medida = new Medida(0,0);
      expect(medida.tipo).to.equal("no type");
    });
    
  });
    it('32F = 0C', function() {
         var num = "32";
		 var farenheit = new Farenheit(num);
		 salida.innerHTML = farenheit.Transform();
		 expect(salida.innerHTML).to.equal("0.00º Celsius 273.15º Kelvin");
   }); 
    it('45C = 113.0 Farenheit', function() {
         var num = "45";
		 var celsius = new Celsius(num);
		 salida.innerHTML = celsius.Transform();
		 expect(salida.innerHTML).to.equal("113.00º Farenheit 273.15º Kelvin");
    });
    it('5X = error', function() {
      
        salida.innerHTML = Error();
        expect(salida.innerHTML).to.equal( "ERROR! Prueba con algo como '52.8E4K' ");
    });

});
