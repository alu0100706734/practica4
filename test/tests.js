var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0C', function() {
        original.value = "32f";
        resolver();
        assert.deepEqual(converter.innerHTML, "0.00º Celsius 273.15º Kelvin");
    });
    test('45C = 113.0 Farenheit', function() {
        original.value = "45c";
        resolver();
        assert.deepEqual(converter.innerHTML, "113.00º Farenheit 318.15º Kelvin");
    });
    test('5X = error', function() {
        original.value = "5X";
        resolver();
        assert.match(converter.innerHTML, /ERROR/);
    });
});
