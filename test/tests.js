var expect = chai.expect;

describe('temperature', function() {
    
    it('32F = 0C', function() {
		var temp = new Temperatura();
		temp.setValor(32);
		temp.setTipo("F");
		var res = temp.ftoc();
		expect(res).to.equal(0);
   }); 
   
    it('100C = 212F', function() {
		var temp = new Temperatura();
		temp.setValor(100);
		temp.setTipo("C");
		var res = temp.ctof();
		expect(res).to.equal(212.00);
   });
   
    it('100C = 373.15F', function() {
		var temp = new Temperatura();
		temp.setValor(100);
		temp.setTipo("C");
		var res = temp.ctok();
		expect(res).to.equal(373.15);
   });
   
    it('78F = 298.71K', function() {
		var temp = new Temperatura();
		temp.setValor(78);
		temp.setTipo("F");
		var res = temp.ftok();
		expect(res).to.equal(298.7055555555556);
   });
   
    it('273.15K = 0C', function() {
		var temp = new Temperatura();
		temp.setValor(273.15);
		temp.setTipo("K");
		var res = temp.ktoc();
		expect(res).to.equal(0);
   });
   
    it('273.15K = -335.74F', function() {
		var temp = new Temperatura();
		temp.setValor(273.15);
		temp.setTipo("K");
		var res = temp.ktof();
		expect(res).to.equal(-335.73600000000005);
   });
   

});
  