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
});
  