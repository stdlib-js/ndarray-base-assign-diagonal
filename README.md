<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# assignDiagonal

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Assign elements from a broadcasted input [`ndarray`][@stdlib/ndarray/ctor] to a specified diagonal of an output [`ndarray`][@stdlib/ndarray/ctor].

<section class="intro">

For an `M`-by-`N` matrix `A`, the `k`-th diagonal is defined as

<!-- <equation class="equation" label="eq:diagonal_definition" align="center" raw="D_k = \{\, A_{i,j} : j - i = k \,\}" alt="Definition of the k-th diagonal of a matrix."> -->

```math
D_k = \{\, A_{i,j} : j - i = k \,\}
```

<!-- <div class="equation" align="center" data-raw-text="D_k = \{\, A_{i,j} : j - i = k \,\}" data-equation="eq:diagonal_definition">
    <img src="" alt="Definition of the k-th diagonal of a matrix.">
    <br>
</div> -->

<!-- </equation> -->

where `k = 0` corresponds to the main diagonal, `k > 0` corresponds to the super-diagonals (above the main diagonal), and `k < 0` corresponds to the sub-diagonals (below the main diagonal).

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
assignDiagonal = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assign-diagonal@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var assignDiagonal = require( 'path/to/vendor/umd/ndarray-base-assign-diagonal/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assign-diagonal@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.assignDiagonal;
})();
</script>
```

#### assignDiagonal( arrays, dims, k )

Assigns elements from a broadcasted input [`ndarray`][@stdlib/ndarray/ctor] to a specified diagonal of an output [`ndarray`][@stdlib/ndarray/ctor].

```javascript
var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
var zeros = require( '@stdlib/ndarray-zeros' );

var x = scalar2ndarray( 1.0 );
// returns <ndarray>

var y = zeros( [ 3, 3 ] );
// returns <ndarray>[ [ 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0 ] ]

var out = assignDiagonal( [ x, y ], [ 0, 1 ], 0 );
// returns <ndarray>[ [ 1.0, 0.0, 0.0 ], [ 0.0, 1.0, 0.0 ], [ 0.0, 0.0, 1.0 ] ]

var bool = ( out === y );
// returns true
```

The function accepts the following arguments:

-   **arrays**: array-like object containing one input ndarray and one output ndarray.
-   **dims**: dimension indices defining the plane in which to assign elements to the diagonal.
-   **k**: diagonal offset.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The order of the dimension indices contained in `dims` matters. The first element specifies the row-like dimension. The second element specifies the column-like dimension.
-   Each provided dimension index must reside on the interval `[-ndims, ndims-1]`.
-   The diagonal offset `k` is interpreted as `column - row`. Accordingly, when `k = 0`, the function assigns to the main diagonal; when `k > 0`, the function assigns to a diagonal above the main diagonal; and when `k < 0`, the function assigns to a diagonal below the main diagonal.
-   The input ndarray must be [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes] with the output ndarray view defined by the specified diagonal.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-zeros@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assign-diagonal@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Create a stack of matrices:
var y = zeros( [ 2, 3, 3 ] );
console.log( ndarray2array( y ) );

// Assign a scalar to each main diagonal:
assignDiagonal( [ scalar2ndarray( 1.0 ), y ], [ 1, 2 ], 0 );
console.log( ndarray2array( y ) );

// Assign a scalar to each super-diagonal:
assignDiagonal( [ scalar2ndarray( 2.0 ), y ], [ 1, 2 ], 1 );
console.log( ndarray2array( y ) );

// Assign a scalar to each sub-diagonal:
assignDiagonal( [ scalar2ndarray( 3.0 ), y ], [ 1, 2 ], -1 );
console.log( ndarray2array( y ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-assign-diagonal.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-assign-diagonal

[test-image]: https://github.com/stdlib-js/ndarray-base-assign-diagonal/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-assign-diagonal/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-assign-diagonal/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-assign-diagonal?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-assign-diagonal.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-assign-diagonal/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-assign-diagonal/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-assign-diagonal/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-assign-diagonal/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-assign-diagonal/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-assign-diagonal/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-assign-diagonal/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-assign-diagonal/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-assign-diagonal/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/umd

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/tree/umd

</section>

<!-- /.links -->
