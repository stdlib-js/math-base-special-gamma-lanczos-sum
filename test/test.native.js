/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var linspace = require( '@stdlib/array-base-linspace' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var gamma = require( '@stdlib/math-base-special-gamma' );
var abs = require( '@stdlib/math-base-special-abs' );
var exp = require( '@stdlib/math-base-special-exp' );
var pow = require( '@stdlib/math-base-special-pow' );
var EPS = require( '@stdlib/constants-float64-eps' );
var G = require( '@stdlib/constants-float64-gamma-lanczos-g' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var gammaLanczosSum = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( gammaLanczosSum instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gammaLanczosSum, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', opts, function test( t ) {
	var v = gammaLanczosSum( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the Lanczos sum', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var i;
	var x;
	var y;

	x = linspace( 1.0, 100.0, 500 );
	for ( i = 0; i < x.length; i++ ) {
		y = gammaLanczosSum( x[ i ] );
		expected = gamma( x[ i ] );
		expected /= pow( x[ i ] + G - 0.5, x[ i ] - 0.5 ) / ( exp( x[ i ] + G - 0.5 ) ); // eslint-disable-line max-len
		if ( y === expected ) {
			t.strictEqual( y, expected, 'x: '+x[ i ]+', y: '+y+', expected: '+expected );
		} else {
			delta = abs( y - expected );
			tol = 10.0 * EPS * abs( expected );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});
