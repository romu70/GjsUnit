GjsUnit
=======

Gjs comes with JsUnit, but I was not really satisfied by using it. So here is GjsUnit, a Js unit test utility written in the "Gnome" flavour.

GjsUnit is made of only one Js file you can add to your projects and start testing your applications.

This repository is made of 3 files:
- gjsunit.js the test framework itself
- t_gjsunit.js a test suite to illustrate how to use GjsUnit
- run.js the file to run the tests.

To run GjsUnit:
- clone this repo
- open a terminal in the GjsUnit folder
- run "GJS_PATH=. gjs run.js"

And you should see the trace of the provided test suite:

```
~/GjsUnit$ **GJS_PATH=. gjs run.js**
GjsUnit to run 1 suite(s)
Starting suite: Test GjsUnit - 4 test(s) to run
Test: Test NotNull..........OK
Test: Test Null..........OK
Test: Test fail..........KO

GjsUnitException: a failure
at _getStackTrace (gjsunit.js:7)
at GjsUnitException (gjsunit.js:47)
at _assert (gjsunit.js:62)
at fail (gjsunit.js:90)
at _anonymous_ (t_gjsunit.js:18)
at Runner.run (gjsunit.js:211)
at wrapper (lang.js:213)
at _anonymous_ (@run.js:8)

Test: Test error..........KO

TypeError: null has no properties
at _anonymous_ (t_gjsunit.js:22)
at Runner.run (gjsunit.js:211)
at wrapper (lang.js:213)
at _anonymous_ (@run.js:8)

Suite(50.00%) - Run: 4 - OK: 2 - Failed: 1 - Errors: 1

GLOBAL(50.00%) - Suites: 1 - Tests: 4 - OK: 2 - Failed: 1 - Errors: 1
```

