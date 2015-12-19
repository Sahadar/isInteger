'use strict';

QUnit.module('isInteger');

test("All asserts", function () {
	ok(isInteger(0));
	ok(isInteger(-0));
	ok(isInteger(1));
	ok(isInteger(5034));
	ok(isInteger(-5034));
	ok(isInteger(9007199254740991));
	ok(isInteger(-9007199254740991));
	ok(isInteger(1.0));
	ok(isInteger(0));
	ok(isInteger(1));
	ok(isInteger(-100000));

	ok(!isInteger(Math.PI));
	ok(!isInteger(NaN));
	ok(!isInteger("10"));
	ok(!isInteger(0.1));
	ok(!isInteger(1.1));
	ok(!isInteger(NaN));
	ok(!isInteger(Infinity));
	ok(!isInteger(-Infinity));
	ok(!isInteger(null));
	ok(!isInteger(undefined));
});