#!/usr/bin/gjs
const gjsunit = imports.gjsunit.gjsunit;

// By importing here the suites, we automatically create the tests and add them to the runner
imports.t_logger;
imports.t_gjsunit;

// Get the runner
gjsunit.instance.run();
