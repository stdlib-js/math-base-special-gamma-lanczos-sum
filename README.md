<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Gamma Lanczos Sum

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the Lanczos sum for the approximation of the [gamma function][gamma-function].

<section class="intro">

The [Lanczos approximation][lanczos-approximation] for the [gamma function][gamma-function] can be written in partial fraction form as follows:

<!-- <equation class="equation" label="eq:lanczos_approximation" align="center" raw="\Gamma ( n ) = \frac{(n+g-0.5)^{n-0.5}}{e^{n+g-0.5}} L_g(n)" alt="Lanczos approximation for gamma function."> -->

<div class="equation" align="center" data-raw-text="\Gamma ( n ) = \frac{(n+g-0.5)^{n-0.5}}{e^{n+g-0.5}} L_g(n)" data-equation="eq:lanczos_approximation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/gamma-lanczos-sum/docs/img/equation_lanczos_approximation.svg" alt="Lanczos approximation for gamma function.">
    <br>
</div>

<!-- </equation> -->

where `g` is an [arbitrary constant][@stdlib/constants/float64/gamma-lanczos-g] and `L_g(n)` is the Lanczos sum.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
gammaLanczosSum = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-lanczos-sum@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var gammaLanczosSum = require( 'path/to/vendor/umd/math-base-special-gamma-lanczos-sum/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-lanczos-sum@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.gammaLanczosSum;
})();
</script>
```

#### gammaLanczosSum( x )

Calculates the Lanczos sum for the approximation of the [gamma function][gamma-function].

```javascript
var v = gammaLanczosSum( 4.0 );
// returns ~950.366

v = gammaLanczosSum( -1.5 );
// returns ~1373366.245

v = gammaLanczosSum( -0.5 );
// returns ~-699841.735

v = gammaLanczosSum( 0.5 );
// returns ~96074.186

v = gammaLanczosSum( 0.0 );
// returns Infinity

v = gammaLanczosSum( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-lanczos-sum@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x = linspace( -10.0, 10.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'x: %d, f(x): %d', x[ i ], gammaLanczosSum( x[ i ] ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/gamma`][@stdlib/math/base/special/gamma]</span><span class="delimiter">: </span><span class="description">gamma function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled`][@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled]</span><span class="delimiter">: </span><span class="description">calculate a scaled Lanczos sum for the approximation of the gamma function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-gamma-lanczos-sum.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-gamma-lanczos-sum

[test-image]: https://github.com/stdlib-js/math-base-special-gamma-lanczos-sum/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-gamma-lanczos-sum/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-gamma-lanczos-sum/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-gamma-lanczos-sum?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-gamma-lanczos-sum.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-gamma-lanczos-sum/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-gamma-lanczos-sum/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-gamma-lanczos-sum/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-gamma-lanczos-sum/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-gamma-lanczos-sum/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-gamma-lanczos-sum/main/LICENSE

[@stdlib/constants/float64/gamma-lanczos-g]: https://github.com/stdlib-js/constants-float64-gamma-lanczos-g/tree/umd

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[lanczos-approximation]: https://en.wikipedia.org/wiki/Lanczos_approximation

<!-- <related-links> -->

[@stdlib/math/base/special/gamma]: https://github.com/stdlib-js/math-base-special-gamma/tree/umd

[@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled]: https://github.com/stdlib-js/math-base-special-gamma-lanczos-sum-expg-scaled/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
