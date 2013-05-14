const gjsunit = imports.gjsunit.gjsunit;

var gusuite = new gjsunit.Suite("Test GjsUnit");

gusuite.setup = function() {};

gusuite.teardown = function() {};

gusuite.addTest("Test NotNull", function() {
    gjsunit.assertNotNull(gusuite);
});

gusuite.addTest("Test Null", function() {
    gjsunit.assertNull(null);
});

gusuite.addTest("Test fail", function() {
    gjsunit.fail("a failure");
});

gusuite.addTest("Test error", function() {
    null.toString();
});


