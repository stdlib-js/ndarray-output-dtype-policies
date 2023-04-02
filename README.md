<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# Policies

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> List of output ndarray data type policies.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-output-dtype-policies
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var policies = require( '@stdlib/ndarray-output-dtype-policies' );
```

#### policies()

Returns a list of ndarray data type policies.

```javascript
var out = policies();
// e.g., returns [ 'same', 'promoted', ... ]
```

The output `array` contains the following data type policies:

-   `same`: return the same data type.
-   `promoted`: return a promoted data type.
-   `bool`: return a boolean data type.
-   `signed_integer`: return a signed integer data type.
-   `unsigned_integer`: return an unsigned integer data type.
-   `integral`: return an integer data type (i.e., either signed or unsigned).
-   `floating_point`: return a floating-point data type (i.e., either real-valued or complex-valued).
-   `real_floating_point`: return a real-valued floating-point data type.
-   `complex_floating_point`: return a complex-valued floating-point data type.
-   `real`: return a real-valued data type.
-   `numeric`: return a numeric data type.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var indexOf = require( '@stdlib/utils-index-of' );
var policies = require( '@stdlib/ndarray-output-dtype-policies' );

var POLICIES = policies();

function isPolicy( str ) {
    if ( indexOf( POLICIES, str ) === -1 ) {
        return false;
    }
    return true;
}

var bool = isPolicy( 'same' );
// returns true

bool = isPolicy( 'real_floating_point' );
// returns true

bool = isPolicy( 'promoted' );
// returns true

bool = isPolicy( 'beep' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-output-dtype-policies.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-output-dtype-policies

[test-image]: https://github.com/stdlib-js/ndarray-output-dtype-policies/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-output-dtype-policies/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-output-dtype-policies/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-output-dtype-policies?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-output-dtype-policies.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-output-dtype-policies/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-output-dtype-policies/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-output-dtype-policies/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-output-dtype-policies/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-output-dtype-policies/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-output-dtype-policies/main/LICENSE

</section>

<!-- /.links -->
