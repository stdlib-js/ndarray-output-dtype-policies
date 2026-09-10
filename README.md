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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Policies

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> List of output ndarray data type policies.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import policies from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-output-dtype-policies@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { enum } from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-output-dtype-policies@deno/mod.js';
```

#### policies()

Returns a list of ndarray data type policies.

```javascript
var out = policies();
// e.g., returns [ 'same', 'promoted', ... ]
```

The output array contains the following data type policies:

-   `same`: return the same data type.
-   `promoted`: return a promoted data type.
-   `accumulation`: return a data type amenable to accumulation.
-   `boolean`: return a boolean data type.
-   `boolean_and_generic`: return a boolean or "generic" data type.
-   `signed_integer`: return a signed integer data type.
-   `signed_integer_and_generic`: return a signed integer or "generic" data type.
-   `unsigned_integer`: return an unsigned integer data type.
-   `unsigned_integer_and_generic`: return an unsigned integer or "generic" data type.
-   `integer`: return an integer data type (i.e., either signed or unsigned).
-   `integer_and_generic`: return an integer (i.e., either signed or unsigned) or "generic" data type.
-   `floating_point`: return a floating-point data type (i.e., either real-valued or complex-valued).
-   `floating_point_and_generic`: return a floating-point (i.e., either real-valued or complex-valued) or "generic" data type.
-   `real_floating_point`: return a real-valued floating-point data type.
-   `real_floating_point_and_generic`: return a real-valued or "generic" floating-point data type.
-   `complex_floating_point`: return a complex-valued floating-point data type.
-   `complex_floating_point_and_generic`: return a complex-valued or "generic" floating-point data type.
-   `real`: return a real-valued data type.
-   `real_and_generic`: return a real-valued or "generic" data type.
-   `numeric`: return a numeric data type.
-   `numeric_and_generic`: return a numeric or "generic" data type.
-   `integer_index`: return an integer index data type.
-   `integer_index_and_generic`: return an integer index or "generic" data type.
-   `boolean_index`: return a boolean index data type.
-   `boolean_index_and_generic`: return a boolean index or "generic" data type.
-   `mask_index`: return a mask index data type.
-   `mask_index_and_generic`: return a mask index or "generic" data type.
-   `default`: return the default data type.
-   `default_index`: return the default index data type.

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
import indexOf from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@deno/mod.js';
import policies from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-output-dtype-policies@deno/mod.js';

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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

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

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-output-dtype-policies/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-output-dtype-policies/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-output-dtype-policies/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-output-dtype-policies/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-output-dtype-policies/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-output-dtype-policies/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-output-dtype-policies/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-output-dtype-policies/main/LICENSE

</section>

<!-- /.links -->
