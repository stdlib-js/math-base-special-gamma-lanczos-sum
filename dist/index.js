/** @license Apache-2.0 */

'use strict';

/**
* Calculate the Lanczos sum for the approximation of the gamma function.
*
* @module @stdlib/math-base-special-gamma-lanczos-sum
*
* @example
* var gammaLanczosSum = require( '@stdlib/math-base-special-gamma-lanczos-sum' );
*
* var v = gammaLanczosSum( 4.0 );
* // returns ~950.366
*
* v = gammaLanczosSum( -1.5 );
* // returns ~1373366.245
*
* v = gammaLanczosSum( -0.5 );
* // returns ~-699841.735
*
* v = gammaLanczosSum( 0.5 );
* // returns ~96074.186
*
* v = gammaLanczosSum( 0.0 );
* // returns Infinity
*
* v = gammaLanczosSum( NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
