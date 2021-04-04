
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _Fresheyeball$elm_return$Respond$comap = F2(
	function (x, y) {
		return function (_p0) {
			return y(
				x(_p0));
		};
	});
var _Fresheyeball$elm_return$Respond$zero = _elm_lang$core$Basics$always(_elm_lang$core$Platform_Cmd$none);
var _Fresheyeball$elm_return$Respond$sum = F2(
	function (rs, a) {
		return _elm_lang$core$Platform_Cmd$batch(
			A2(
				_elm_lang$core$List$map,
				function (r) {
					return r(a);
				},
				rs));
	});
var _Fresheyeball$elm_return$Respond$append = F3(
	function (f, g, a) {
		return _elm_lang$core$Platform_Cmd$batch(
			{
				ctor: '::',
				_0: f(a),
				_1: {
					ctor: '::',
					_0: g(a),
					_1: {ctor: '[]'}
				}
			});
	});

var _Fresheyeball$elm_return$Return$sequence = function () {
	var f = F2(
		function (_p1, _p0) {
			var _p2 = _p1;
			var _p3 = _p0;
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				{ctor: '::', _0: _p2._0, _1: _p3._0},
				{
					ctor: '::',
					_0: _p2._1,
					_1: {
						ctor: '::',
						_0: _p3._1,
						_1: {ctor: '[]'}
					}
				});
		});
	return A2(
		_elm_lang$core$List$foldr,
		f,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: _elm_lang$core$Platform_Cmd$none
		});
}();
var _Fresheyeball$elm_return$Return$mapCmd = F2(
	function (f, _p4) {
		var _p5 = _p4;
		return {
			ctor: '_Tuple2',
			_0: _p5._0,
			_1: A2(_elm_lang$core$Platform_Cmd$map, f, _p5._1)
		};
	});
var _Fresheyeball$elm_return$Return$effect_ = F2(
	function (f, _p6) {
		var _p7 = _p6;
		var _p8 = _p7._0;
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			_p8,
			{
				ctor: '::',
				_0: _p7._1,
				_1: {
					ctor: '::',
					_0: f(_p8),
					_1: {ctor: '[]'}
				}
			});
	});
var _Fresheyeball$elm_return$Return$command = F2(
	function (cmd, _p9) {
		var _p10 = _p9;
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			_p10._0,
			{
				ctor: '::',
				_0: cmd,
				_1: {
					ctor: '::',
					_0: _p10._1,
					_1: {ctor: '[]'}
				}
			});
	});
var _Fresheyeball$elm_return$Return$return = _elm_lang$core$Basics$curry(_elm_lang$core$Basics$identity);
var _Fresheyeball$elm_return$Return$andThen = F2(
	function (f, _p11) {
		var _p12 = _p11;
		var _p13 = f(_p12._0);
		var model_ = _p13._0;
		var cmd_ = _p13._1;
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			model_,
			{
				ctor: '::',
				_0: _p12._1,
				_1: {
					ctor: '::',
					_0: cmd_,
					_1: {ctor: '[]'}
				}
			});
	});
var _Fresheyeball$elm_return$Return_ops = _Fresheyeball$elm_return$Return_ops || {};
_Fresheyeball$elm_return$Return_ops['<<<'] = F3(
	function (f, f_, model) {
		return A2(
			_Fresheyeball$elm_return$Return$andThen,
			f,
			f_(model));
	});
var _Fresheyeball$elm_return$Return_ops = _Fresheyeball$elm_return$Return_ops || {};
_Fresheyeball$elm_return$Return_ops['>>>'] = _elm_lang$core$Basics$flip(
	F2(
		function (x, y) {
			return A2(_Fresheyeball$elm_return$Return_ops['<<<'], x, y);
		}));
var _Fresheyeball$elm_return$Return$flatten = _Fresheyeball$elm_return$Return$andThen(_elm_lang$core$Basics$identity);
var _Fresheyeball$elm_return$Return$singleton = A2(
	_elm_lang$core$Basics$flip,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}),
	_elm_lang$core$Platform_Cmd$none);
var _Fresheyeball$elm_return$Return$dropCmd = function (_p14) {
	return _Fresheyeball$elm_return$Return$singleton(
		_elm_lang$core$Tuple$first(_p14));
};
var _Fresheyeball$elm_return$Return$map5 = F6(
	function (f, _p19, _p18, _p17, _p16, _p15) {
		var _p20 = _p19;
		var _p21 = _p18;
		var _p22 = _p17;
		var _p23 = _p16;
		var _p24 = _p15;
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			A5(f, _p20._0, _p21._0, _p22._0, _p23._0, _p24._0),
			{
				ctor: '::',
				_0: _p20._1,
				_1: {
					ctor: '::',
					_0: _p21._1,
					_1: {
						ctor: '::',
						_0: _p22._1,
						_1: {
							ctor: '::',
							_0: _p23._1,
							_1: {
								ctor: '::',
								_0: _p24._1,
								_1: {ctor: '[]'}
							}
						}
					}
				}
			});
	});
var _Fresheyeball$elm_return$Return$map4 = F5(
	function (f, _p28, _p27, _p26, _p25) {
		var _p29 = _p28;
		var _p30 = _p27;
		var _p31 = _p26;
		var _p32 = _p25;
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			A4(f, _p29._0, _p30._0, _p31._0, _p32._0),
			{
				ctor: '::',
				_0: _p29._1,
				_1: {
					ctor: '::',
					_0: _p30._1,
					_1: {
						ctor: '::',
						_0: _p31._1,
						_1: {
							ctor: '::',
							_0: _p32._1,
							_1: {ctor: '[]'}
						}
					}
				}
			});
	});
var _Fresheyeball$elm_return$Return$map3 = F4(
	function (f, _p35, _p34, _p33) {
		var _p36 = _p35;
		var _p37 = _p34;
		var _p38 = _p33;
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			A3(f, _p36._0, _p37._0, _p38._0),
			{
				ctor: '::',
				_0: _p36._1,
				_1: {
					ctor: '::',
					_0: _p37._1,
					_1: {
						ctor: '::',
						_0: _p38._1,
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _Fresheyeball$elm_return$Return$map2 = F3(
	function (f, _p40, _p39) {
		var _p41 = _p40;
		var _p42 = _p39;
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			A2(f, _p41._0, _p42._0),
			{
				ctor: '::',
				_0: _p41._1,
				_1: {
					ctor: '::',
					_0: _p42._1,
					_1: {ctor: '[]'}
				}
			});
	});
var _Fresheyeball$elm_return$Return$mapBoth = F3(
	function (f, f_, _p43) {
		var _p44 = _p43;
		return {
			ctor: '_Tuple2',
			_0: f_(_p44._0),
			_1: A2(_elm_lang$core$Platform_Cmd$map, f, _p44._1)
		};
	});
var _Fresheyeball$elm_return$Return$andMap = F2(
	function (_p46, _p45) {
		var _p47 = _p46;
		var _p48 = _p45;
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			_p48._0(_p47._0),
			{
				ctor: '::',
				_0: _p48._1,
				_1: {
					ctor: '::',
					_0: _p47._1,
					_1: {ctor: '[]'}
				}
			});
	});
var _Fresheyeball$elm_return$Return$mapWith = _elm_lang$core$Basics$curry(
	_elm_lang$core$Basics$flip(_Fresheyeball$elm_return$Return$andMap));
var _Fresheyeball$elm_return$Return$map = F2(
	function (f, _p49) {
		var _p50 = _p49;
		return {
			ctor: '_Tuple2',
			_0: f(_p50._0),
			_1: _p50._1
		};
	});
var _Fresheyeball$elm_return$Return$zero = _elm_lang$core$Basics$identity;
var _Fresheyeball$elm_return$Return$pipel = A2(
	_elm_lang$core$List$foldl,
	F2(
		function (x, y) {
			return function (_p51) {
				return y(
					x(_p51));
			};
		}),
	_Fresheyeball$elm_return$Return$zero);
var _Fresheyeball$elm_return$Return$piper = A2(
	_elm_lang$core$List$foldr,
	F2(
		function (x, y) {
			return function (_p52) {
				return x(
					y(_p52));
			};
		}),
	_Fresheyeball$elm_return$Return$zero);

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

//import Result //

var _elm_lang$core$Native_Date = function() {

function fromString(str)
{
	var date = new Date(str);
	return isNaN(date.getTime())
		? _elm_lang$core$Result$Err('Unable to parse \'' + str + '\' as a date. Dates must be in the ISO 8601 format.')
		: _elm_lang$core$Result$Ok(date);
}

var dayTable = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var monthTable =
	['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


return {
	fromString: fromString,
	year: function(d) { return d.getFullYear(); },
	month: function(d) { return { ctor: monthTable[d.getMonth()] }; },
	day: function(d) { return d.getDate(); },
	hour: function(d) { return d.getHours(); },
	minute: function(d) { return d.getMinutes(); },
	second: function(d) { return d.getSeconds(); },
	millisecond: function(d) { return d.getMilliseconds(); },
	toTime: function(d) { return d.getTime(); },
	fromTime: function(t) { return new Date(t); },
	dayOfWeek: function(d) { return { ctor: dayTable[d.getDay()] }; }
};

}();
var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Date$millisecond = _elm_lang$core$Native_Date.millisecond;
var _elm_lang$core$Date$second = _elm_lang$core$Native_Date.second;
var _elm_lang$core$Date$minute = _elm_lang$core$Native_Date.minute;
var _elm_lang$core$Date$hour = _elm_lang$core$Native_Date.hour;
var _elm_lang$core$Date$dayOfWeek = _elm_lang$core$Native_Date.dayOfWeek;
var _elm_lang$core$Date$day = _elm_lang$core$Native_Date.day;
var _elm_lang$core$Date$month = _elm_lang$core$Native_Date.month;
var _elm_lang$core$Date$year = _elm_lang$core$Native_Date.year;
var _elm_lang$core$Date$fromTime = _elm_lang$core$Native_Date.fromTime;
var _elm_lang$core$Date$toTime = _elm_lang$core$Native_Date.toTime;
var _elm_lang$core$Date$fromString = _elm_lang$core$Native_Date.fromString;
var _elm_lang$core$Date$now = A2(_elm_lang$core$Task$map, _elm_lang$core$Date$fromTime, _elm_lang$core$Time$now);
var _elm_lang$core$Date$Date = {ctor: 'Date'};
var _elm_lang$core$Date$Sun = {ctor: 'Sun'};
var _elm_lang$core$Date$Sat = {ctor: 'Sat'};
var _elm_lang$core$Date$Fri = {ctor: 'Fri'};
var _elm_lang$core$Date$Thu = {ctor: 'Thu'};
var _elm_lang$core$Date$Wed = {ctor: 'Wed'};
var _elm_lang$core$Date$Tue = {ctor: 'Tue'};
var _elm_lang$core$Date$Mon = {ctor: 'Mon'};
var _elm_lang$core$Date$Dec = {ctor: 'Dec'};
var _elm_lang$core$Date$Nov = {ctor: 'Nov'};
var _elm_lang$core$Date$Oct = {ctor: 'Oct'};
var _elm_lang$core$Date$Sep = {ctor: 'Sep'};
var _elm_lang$core$Date$Aug = {ctor: 'Aug'};
var _elm_lang$core$Date$Jul = {ctor: 'Jul'};
var _elm_lang$core$Date$Jun = {ctor: 'Jun'};
var _elm_lang$core$Date$May = {ctor: 'May'};
var _elm_lang$core$Date$Apr = {ctor: 'Apr'};
var _elm_lang$core$Date$Mar = {ctor: 'Mar'};
var _elm_lang$core$Date$Feb = {ctor: 'Feb'};
var _elm_lang$core$Date$Jan = {ctor: 'Jan'};

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[arguments.length - 2],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _elm_lang$dom$Native_Dom = function() {

var fakeNode = {
	addEventListener: function() {},
	removeEventListener: function() {}
};

var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

var rAF = typeof requestAnimationFrame !== 'undefined'
	? requestAnimationFrame
	: function(callback) { callback(); };

function withNode(id, doStuff)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		rAF(function()
		{
			var node = document.getElementById(id);
			if (node === null)
			{
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
				return;
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
		});
	});
}


// FOCUS

function focus(id)
{
	return withNode(id, function(node) {
		node.focus();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function blur(id)
{
	return withNode(id, function(node) {
		node.blur();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SCROLLING

function getScrollTop(id)
{
	return withNode(id, function(node) {
		return node.scrollTop;
	});
}

function setScrollTop(id, desiredScrollTop)
{
	return withNode(id, function(node) {
		node.scrollTop = desiredScrollTop;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toBottom(id)
{
	return withNode(id, function(node) {
		node.scrollTop = node.scrollHeight;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function getScrollLeft(id)
{
	return withNode(id, function(node) {
		return node.scrollLeft;
	});
}

function setScrollLeft(id, desiredScrollLeft)
{
	return withNode(id, function(node) {
		node.scrollLeft = desiredScrollLeft;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toRight(id)
{
	return withNode(id, function(node) {
		node.scrollLeft = node.scrollWidth;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SIZE

function width(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollWidth;
			case 'VisibleContent':
				return node.clientWidth;
			case 'VisibleContentWithBorders':
				return node.offsetWidth;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.right - rect.left;
		}
	});
}

function height(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollHeight;
			case 'VisibleContent':
				return node.clientHeight;
			case 'VisibleContentWithBorders':
				return node.offsetHeight;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.bottom - rect.top;
		}
	});
}

return {
	onDocument: F3(onDocument),
	onWindow: F3(onWindow),

	focus: focus,
	blur: blur,

	getScrollTop: getScrollTop,
	setScrollTop: F2(setScrollTop),
	getScrollLeft: getScrollLeft,
	setScrollLeft: F2(setScrollLeft),
	toBottom: toBottom,
	toRight: toRight,

	height: F2(height),
	width: F2(width)
};

}();

var _elm_lang$dom$Dom$blur = _elm_lang$dom$Native_Dom.blur;
var _elm_lang$dom$Dom$focus = _elm_lang$dom$Native_Dom.focus;
var _elm_lang$dom$Dom$NotFound = function (a) {
	return {ctor: 'NotFound', _0: a};
};

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$http$Native_Http = function() {


// ENCODING AND DECODING

function encodeUri(string)
{
	return encodeURIComponent(string);
}

function decodeUri(string)
{
	try
	{
		return _elm_lang$core$Maybe$Just(decodeURIComponent(string));
	}
	catch(e)
	{
		return _elm_lang$core$Maybe$Nothing;
	}
}


// SEND REQUEST

function toTask(request, maybeProgress)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var xhr = new XMLHttpRequest();

		configureProgress(xhr, maybeProgress);

		xhr.addEventListener('error', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NetworkError' }));
		});
		xhr.addEventListener('timeout', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'Timeout' }));
		});
		xhr.addEventListener('load', function() {
			callback(handleResponse(xhr, request.expect.responseToResult));
		});

		try
		{
			xhr.open(request.method, request.url, true);
		}
		catch (e)
		{
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'BadUrl', _0: request.url }));
		}

		configureRequest(xhr, request);
		send(xhr, request.body);

		return function() { xhr.abort(); };
	});
}

function configureProgress(xhr, maybeProgress)
{
	if (maybeProgress.ctor === 'Nothing')
	{
		return;
	}

	xhr.addEventListener('progress', function(event) {
		if (!event.lengthComputable)
		{
			return;
		}
		_elm_lang$core$Native_Scheduler.rawSpawn(maybeProgress._0({
			bytes: event.loaded,
			bytesExpected: event.total
		}));
	});
}

function configureRequest(xhr, request)
{
	function setHeader(pair)
	{
		xhr.setRequestHeader(pair._0, pair._1);
	}

	A2(_elm_lang$core$List$map, setHeader, request.headers);
	xhr.responseType = request.expect.responseType;
	xhr.withCredentials = request.withCredentials;

	if (request.timeout.ctor === 'Just')
	{
		xhr.timeout = request.timeout._0;
	}
}

function send(xhr, body)
{
	switch (body.ctor)
	{
		case 'EmptyBody':
			xhr.send();
			return;

		case 'StringBody':
			xhr.setRequestHeader('Content-Type', body._0);
			xhr.send(body._1);
			return;

		case 'FormDataBody':
			xhr.send(body._0);
			return;
	}
}


// RESPONSES

function handleResponse(xhr, responseToResult)
{
	var response = toResponse(xhr);

	if (xhr.status < 200 || 300 <= xhr.status)
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadStatus',
			_0: response
		});
	}

	var result = responseToResult(response);

	if (result.ctor === 'Ok')
	{
		return _elm_lang$core$Native_Scheduler.succeed(result._0);
	}
	else
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadPayload',
			_0: result._0,
			_1: response
		});
	}
}

function toResponse(xhr)
{
	return {
		status: { code: xhr.status, message: xhr.statusText },
		headers: parseHeaders(xhr.getAllResponseHeaders()),
		url: xhr.responseURL,
		body: xhr.response
	};
}

function parseHeaders(rawHeaders)
{
	var headers = _elm_lang$core$Dict$empty;

	if (!rawHeaders)
	{
		return headers;
	}

	var headerPairs = rawHeaders.split('\u000d\u000a');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf('\u003a\u0020');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
				if (oldValue.ctor === 'Just')
				{
					return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
				}
				return _elm_lang$core$Maybe$Just(value);
			}, headers);
		}
	}

	return headers;
}


// EXPECTORS

function expectStringResponse(responseToResult)
{
	return {
		responseType: 'text',
		responseToResult: responseToResult
	};
}

function mapExpect(func, expect)
{
	return {
		responseType: expect.responseType,
		responseToResult: function(response) {
			var convertedResponse = expect.responseToResult(response);
			return A2(_elm_lang$core$Result$map, func, convertedResponse);
		}
	};
}


// BODY

function multipart(parts)
{
	var formData = new FormData();

	while (parts.ctor !== '[]')
	{
		var part = parts._0;
		formData.append(part._0, part._1);
		parts = parts._1;
	}

	return { ctor: 'FormDataBody', _0: formData };
}

return {
	toTask: F2(toTask),
	expectStringResponse: expectStringResponse,
	mapExpect: F2(mapExpect),
	multipart: multipart,
	encodeUri: encodeUri,
	decodeUri: decodeUri
};

}();

var _elm_lang$http$Http_Internal$map = F2(
	function (func, request) {
		return _elm_lang$core$Native_Utils.update(
			request,
			{
				expect: A2(_elm_lang$http$Native_Http.mapExpect, func, request.expect)
			});
	});
var _elm_lang$http$Http_Internal$RawRequest = F7(
	function (a, b, c, d, e, f, g) {
		return {method: a, headers: b, url: c, body: d, expect: e, timeout: f, withCredentials: g};
	});
var _elm_lang$http$Http_Internal$Request = function (a) {
	return {ctor: 'Request', _0: a};
};
var _elm_lang$http$Http_Internal$Expect = {ctor: 'Expect'};
var _elm_lang$http$Http_Internal$FormDataBody = {ctor: 'FormDataBody'};
var _elm_lang$http$Http_Internal$StringBody = F2(
	function (a, b) {
		return {ctor: 'StringBody', _0: a, _1: b};
	});
var _elm_lang$http$Http_Internal$EmptyBody = {ctor: 'EmptyBody'};
var _elm_lang$http$Http_Internal$Header = F2(
	function (a, b) {
		return {ctor: 'Header', _0: a, _1: b};
	});

var _elm_lang$http$Http$decodeUri = _elm_lang$http$Native_Http.decodeUri;
var _elm_lang$http$Http$encodeUri = _elm_lang$http$Native_Http.encodeUri;
var _elm_lang$http$Http$expectStringResponse = _elm_lang$http$Native_Http.expectStringResponse;
var _elm_lang$http$Http$expectJson = function (decoder) {
	return _elm_lang$http$Http$expectStringResponse(
		function (response) {
			return A2(_elm_lang$core$Json_Decode$decodeString, decoder, response.body);
		});
};
var _elm_lang$http$Http$expectString = _elm_lang$http$Http$expectStringResponse(
	function (response) {
		return _elm_lang$core$Result$Ok(response.body);
	});
var _elm_lang$http$Http$multipartBody = _elm_lang$http$Native_Http.multipart;
var _elm_lang$http$Http$stringBody = _elm_lang$http$Http_Internal$StringBody;
var _elm_lang$http$Http$jsonBody = function (value) {
	return A2(
		_elm_lang$http$Http_Internal$StringBody,
		'application/json',
		A2(_elm_lang$core$Json_Encode$encode, 0, value));
};
var _elm_lang$http$Http$emptyBody = _elm_lang$http$Http_Internal$EmptyBody;
var _elm_lang$http$Http$header = _elm_lang$http$Http_Internal$Header;
var _elm_lang$http$Http$request = _elm_lang$http$Http_Internal$Request;
var _elm_lang$http$Http$post = F3(
	function (url, body, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'POST',
				headers: {ctor: '[]'},
				url: url,
				body: body,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$get = F2(
	function (url, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'GET',
				headers: {ctor: '[]'},
				url: url,
				body: _elm_lang$http$Http$emptyBody,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$getString = function (url) {
	return _elm_lang$http$Http$request(
		{
			method: 'GET',
			headers: {ctor: '[]'},
			url: url,
			body: _elm_lang$http$Http$emptyBody,
			expect: _elm_lang$http$Http$expectString,
			timeout: _elm_lang$core$Maybe$Nothing,
			withCredentials: false
		});
};
var _elm_lang$http$Http$toTask = function (_p0) {
	var _p1 = _p0;
	return A2(_elm_lang$http$Native_Http.toTask, _p1._0, _elm_lang$core$Maybe$Nothing);
};
var _elm_lang$http$Http$send = F2(
	function (resultToMessage, request) {
		return A2(
			_elm_lang$core$Task$attempt,
			resultToMessage,
			_elm_lang$http$Http$toTask(request));
	});
var _elm_lang$http$Http$Response = F4(
	function (a, b, c, d) {
		return {url: a, status: b, headers: c, body: d};
	});
var _elm_lang$http$Http$BadPayload = F2(
	function (a, b) {
		return {ctor: 'BadPayload', _0: a, _1: b};
	});
var _elm_lang$http$Http$BadStatus = function (a) {
	return {ctor: 'BadStatus', _0: a};
};
var _elm_lang$http$Http$NetworkError = {ctor: 'NetworkError'};
var _elm_lang$http$Http$Timeout = {ctor: 'Timeout'};
var _elm_lang$http$Http$BadUrl = function (a) {
	return {ctor: 'BadUrl', _0: a};
};
var _elm_lang$http$Http$StringPart = F2(
	function (a, b) {
		return {ctor: 'StringPart', _0: a, _1: b};
	});
var _elm_lang$http$Http$stringPart = _elm_lang$http$Http$StringPart;

var _elm_lang$navigation$Native_Navigation = function() {


// FAKE NAVIGATION

function go(n)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		if (n !== 0)
		{
			history.go(n);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function pushState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.pushState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}

function replaceState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.replaceState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}


// REAL NAVIGATION

function reloadPage(skipCache)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		document.location.reload(skipCache);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function setLocation(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		try
		{
			window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			document.location.reload(false);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


// GET LOCATION

function getLocation()
{
	var location = document.location;

	return {
		href: location.href,
		host: location.host,
		hostname: location.hostname,
		protocol: location.protocol,
		origin: location.origin,
		port_: location.port,
		pathname: location.pathname,
		search: location.search,
		hash: location.hash,
		username: location.username,
		password: location.password
	};
}


// DETECT IE11 PROBLEMS

function isInternetExplorer11()
{
	return window.navigator.userAgent.indexOf('Trident') !== -1;
}


return {
	go: go,
	setLocation: setLocation,
	reloadPage: reloadPage,
	pushState: pushState,
	replaceState: replaceState,
	getLocation: getLocation,
	isInternetExplorer11: isInternetExplorer11
};

}();

var _elm_lang$navigation$Navigation$replaceState = _elm_lang$navigation$Native_Navigation.replaceState;
var _elm_lang$navigation$Navigation$pushState = _elm_lang$navigation$Native_Navigation.pushState;
var _elm_lang$navigation$Navigation$go = _elm_lang$navigation$Native_Navigation.go;
var _elm_lang$navigation$Navigation$reloadPage = _elm_lang$navigation$Native_Navigation.reloadPage;
var _elm_lang$navigation$Navigation$setLocation = _elm_lang$navigation$Native_Navigation.setLocation;
var _elm_lang$navigation$Navigation_ops = _elm_lang$navigation$Navigation_ops || {};
_elm_lang$navigation$Navigation_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return task2;
			},
			task1);
	});
var _elm_lang$navigation$Navigation$notify = F3(
	function (router, subs, location) {
		var send = function (_p1) {
			var _p2 = _p1;
			return A2(
				_elm_lang$core$Platform$sendToApp,
				router,
				_p2._0(location));
		};
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(_elm_lang$core$List$map, send, subs)),
			_elm_lang$core$Task$succeed(
				{ctor: '_Tuple0'}));
	});
var _elm_lang$navigation$Navigation$cmdHelp = F3(
	function (router, subs, cmd) {
		var _p3 = cmd;
		switch (_p3.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$go(_p3._0);
			case 'New':
				return A2(
					_elm_lang$core$Task$andThen,
					A2(_elm_lang$navigation$Navigation$notify, router, subs),
					_elm_lang$navigation$Navigation$pushState(_p3._0));
			case 'Modify':
				return A2(
					_elm_lang$core$Task$andThen,
					A2(_elm_lang$navigation$Navigation$notify, router, subs),
					_elm_lang$navigation$Navigation$replaceState(_p3._0));
			case 'Visit':
				return _elm_lang$navigation$Navigation$setLocation(_p3._0);
			default:
				return _elm_lang$navigation$Navigation$reloadPage(_p3._0);
		}
	});
var _elm_lang$navigation$Navigation$killPopWatcher = function (popWatcher) {
	var _p4 = popWatcher;
	if (_p4.ctor === 'Normal') {
		return _elm_lang$core$Process$kill(_p4._0);
	} else {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Process$kill(_p4._0),
			_elm_lang$core$Process$kill(_p4._1));
	}
};
var _elm_lang$navigation$Navigation$onSelfMsg = F3(
	function (router, location, state) {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			A3(_elm_lang$navigation$Navigation$notify, router, state.subs, location),
			_elm_lang$core$Task$succeed(state));
	});
var _elm_lang$navigation$Navigation$subscription = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$command = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$Location = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {href: a, host: b, hostname: c, protocol: d, origin: e, port_: f, pathname: g, search: h, hash: i, username: j, password: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$navigation$Navigation$State = F2(
	function (a, b) {
		return {subs: a, popWatcher: b};
	});
var _elm_lang$navigation$Navigation$init = _elm_lang$core$Task$succeed(
	A2(
		_elm_lang$navigation$Navigation$State,
		{ctor: '[]'},
		_elm_lang$core$Maybe$Nothing));
var _elm_lang$navigation$Navigation$Reload = function (a) {
	return {ctor: 'Reload', _0: a};
};
var _elm_lang$navigation$Navigation$reload = _elm_lang$navigation$Navigation$command(
	_elm_lang$navigation$Navigation$Reload(false));
var _elm_lang$navigation$Navigation$reloadAndSkipCache = _elm_lang$navigation$Navigation$command(
	_elm_lang$navigation$Navigation$Reload(true));
var _elm_lang$navigation$Navigation$Visit = function (a) {
	return {ctor: 'Visit', _0: a};
};
var _elm_lang$navigation$Navigation$load = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Visit(url));
};
var _elm_lang$navigation$Navigation$Modify = function (a) {
	return {ctor: 'Modify', _0: a};
};
var _elm_lang$navigation$Navigation$modifyUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Modify(url));
};
var _elm_lang$navigation$Navigation$New = function (a) {
	return {ctor: 'New', _0: a};
};
var _elm_lang$navigation$Navigation$newUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$New(url));
};
var _elm_lang$navigation$Navigation$Jump = function (a) {
	return {ctor: 'Jump', _0: a};
};
var _elm_lang$navigation$Navigation$back = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(0 - n));
};
var _elm_lang$navigation$Navigation$forward = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(n));
};
var _elm_lang$navigation$Navigation$cmdMap = F2(
	function (_p5, myCmd) {
		var _p6 = myCmd;
		switch (_p6.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$Jump(_p6._0);
			case 'New':
				return _elm_lang$navigation$Navigation$New(_p6._0);
			case 'Modify':
				return _elm_lang$navigation$Navigation$Modify(_p6._0);
			case 'Visit':
				return _elm_lang$navigation$Navigation$Visit(_p6._0);
			default:
				return _elm_lang$navigation$Navigation$Reload(_p6._0);
		}
	});
var _elm_lang$navigation$Navigation$Monitor = function (a) {
	return {ctor: 'Monitor', _0: a};
};
var _elm_lang$navigation$Navigation$program = F2(
	function (locationToMessage, stuff) {
		var init = stuff.init(
			_elm_lang$navigation$Native_Navigation.getLocation(
				{ctor: '_Tuple0'}));
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				{
					ctor: '::',
					_0: _elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
					_1: {
						ctor: '::',
						_0: stuff.subscriptions(model),
						_1: {ctor: '[]'}
					}
				});
		};
		return _elm_lang$html$Html$program(
			{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$programWithFlags = F2(
	function (locationToMessage, stuff) {
		var init = function (flags) {
			return A2(
				stuff.init,
				flags,
				_elm_lang$navigation$Native_Navigation.getLocation(
					{ctor: '_Tuple0'}));
		};
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				{
					ctor: '::',
					_0: _elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
					_1: {
						ctor: '::',
						_0: stuff.subscriptions(model),
						_1: {ctor: '[]'}
					}
				});
		};
		return _elm_lang$html$Html$programWithFlags(
			{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$subMap = F2(
	function (func, _p7) {
		var _p8 = _p7;
		return _elm_lang$navigation$Navigation$Monitor(
			function (_p9) {
				return func(
					_p8._0(_p9));
			});
	});
var _elm_lang$navigation$Navigation$InternetExplorer = F2(
	function (a, b) {
		return {ctor: 'InternetExplorer', _0: a, _1: b};
	});
var _elm_lang$navigation$Navigation$Normal = function (a) {
	return {ctor: 'Normal', _0: a};
};
var _elm_lang$navigation$Navigation$spawnPopWatcher = function (router) {
	var reportLocation = function (_p10) {
		return A2(
			_elm_lang$core$Platform$sendToSelf,
			router,
			_elm_lang$navigation$Native_Navigation.getLocation(
				{ctor: '_Tuple0'}));
	};
	return _elm_lang$navigation$Native_Navigation.isInternetExplorer11(
		{ctor: '_Tuple0'}) ? A3(
		_elm_lang$core$Task$map2,
		_elm_lang$navigation$Navigation$InternetExplorer,
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)),
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'hashchange', _elm_lang$core$Json_Decode$value, reportLocation))) : A2(
		_elm_lang$core$Task$map,
		_elm_lang$navigation$Navigation$Normal,
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)));
};
var _elm_lang$navigation$Navigation$onEffects = F4(
	function (router, cmds, subs, _p11) {
		var _p12 = _p11;
		var _p15 = _p12.popWatcher;
		var stepState = function () {
			var _p13 = {ctor: '_Tuple2', _0: subs, _1: _p15};
			_v6_2:
			do {
				if (_p13._0.ctor === '[]') {
					if (_p13._1.ctor === 'Just') {
						return A2(
							_elm_lang$navigation$Navigation_ops['&>'],
							_elm_lang$navigation$Navigation$killPopWatcher(_p13._1._0),
							_elm_lang$core$Task$succeed(
								A2(_elm_lang$navigation$Navigation$State, subs, _elm_lang$core$Maybe$Nothing)));
					} else {
						break _v6_2;
					}
				} else {
					if (_p13._1.ctor === 'Nothing') {
						return A2(
							_elm_lang$core$Task$map,
							function (_p14) {
								return A2(
									_elm_lang$navigation$Navigation$State,
									subs,
									_elm_lang$core$Maybe$Just(_p14));
							},
							_elm_lang$navigation$Navigation$spawnPopWatcher(router));
					} else {
						break _v6_2;
					}
				}
			} while(false);
			return _elm_lang$core$Task$succeed(
				A2(_elm_lang$navigation$Navigation$State, subs, _p15));
		}();
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					A2(_elm_lang$navigation$Navigation$cmdHelp, router, subs),
					cmds)),
			stepState);
	});
_elm_lang$core$Native_Platform.effectManagers['Navigation'] = {pkg: 'elm-lang/navigation', init: _elm_lang$navigation$Navigation$init, onEffects: _elm_lang$navigation$Navigation$onEffects, onSelfMsg: _elm_lang$navigation$Navigation$onSelfMsg, tag: 'fx', cmdMap: _elm_lang$navigation$Navigation$cmdMap, subMap: _elm_lang$navigation$Navigation$subMap};

var _elm_lang$svg$Svg$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$svg$Svg$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$svg$Svg$svgNamespace = A2(
	_elm_lang$virtual_dom$VirtualDom$property,
	'namespace',
	_elm_lang$core$Json_Encode$string('http://www.w3.org/2000/svg'));
var _elm_lang$svg$Svg$node = F3(
	function (name, attributes, children) {
		return A3(
			_elm_lang$virtual_dom$VirtualDom$node,
			name,
			{ctor: '::', _0: _elm_lang$svg$Svg$svgNamespace, _1: attributes},
			children);
	});
var _elm_lang$svg$Svg$svg = _elm_lang$svg$Svg$node('svg');
var _elm_lang$svg$Svg$foreignObject = _elm_lang$svg$Svg$node('foreignObject');
var _elm_lang$svg$Svg$animate = _elm_lang$svg$Svg$node('animate');
var _elm_lang$svg$Svg$animateColor = _elm_lang$svg$Svg$node('animateColor');
var _elm_lang$svg$Svg$animateMotion = _elm_lang$svg$Svg$node('animateMotion');
var _elm_lang$svg$Svg$animateTransform = _elm_lang$svg$Svg$node('animateTransform');
var _elm_lang$svg$Svg$mpath = _elm_lang$svg$Svg$node('mpath');
var _elm_lang$svg$Svg$set = _elm_lang$svg$Svg$node('set');
var _elm_lang$svg$Svg$a = _elm_lang$svg$Svg$node('a');
var _elm_lang$svg$Svg$defs = _elm_lang$svg$Svg$node('defs');
var _elm_lang$svg$Svg$g = _elm_lang$svg$Svg$node('g');
var _elm_lang$svg$Svg$marker = _elm_lang$svg$Svg$node('marker');
var _elm_lang$svg$Svg$mask = _elm_lang$svg$Svg$node('mask');
var _elm_lang$svg$Svg$pattern = _elm_lang$svg$Svg$node('pattern');
var _elm_lang$svg$Svg$switch = _elm_lang$svg$Svg$node('switch');
var _elm_lang$svg$Svg$symbol = _elm_lang$svg$Svg$node('symbol');
var _elm_lang$svg$Svg$desc = _elm_lang$svg$Svg$node('desc');
var _elm_lang$svg$Svg$metadata = _elm_lang$svg$Svg$node('metadata');
var _elm_lang$svg$Svg$title = _elm_lang$svg$Svg$node('title');
var _elm_lang$svg$Svg$feBlend = _elm_lang$svg$Svg$node('feBlend');
var _elm_lang$svg$Svg$feColorMatrix = _elm_lang$svg$Svg$node('feColorMatrix');
var _elm_lang$svg$Svg$feComponentTransfer = _elm_lang$svg$Svg$node('feComponentTransfer');
var _elm_lang$svg$Svg$feComposite = _elm_lang$svg$Svg$node('feComposite');
var _elm_lang$svg$Svg$feConvolveMatrix = _elm_lang$svg$Svg$node('feConvolveMatrix');
var _elm_lang$svg$Svg$feDiffuseLighting = _elm_lang$svg$Svg$node('feDiffuseLighting');
var _elm_lang$svg$Svg$feDisplacementMap = _elm_lang$svg$Svg$node('feDisplacementMap');
var _elm_lang$svg$Svg$feFlood = _elm_lang$svg$Svg$node('feFlood');
var _elm_lang$svg$Svg$feFuncA = _elm_lang$svg$Svg$node('feFuncA');
var _elm_lang$svg$Svg$feFuncB = _elm_lang$svg$Svg$node('feFuncB');
var _elm_lang$svg$Svg$feFuncG = _elm_lang$svg$Svg$node('feFuncG');
var _elm_lang$svg$Svg$feFuncR = _elm_lang$svg$Svg$node('feFuncR');
var _elm_lang$svg$Svg$feGaussianBlur = _elm_lang$svg$Svg$node('feGaussianBlur');
var _elm_lang$svg$Svg$feImage = _elm_lang$svg$Svg$node('feImage');
var _elm_lang$svg$Svg$feMerge = _elm_lang$svg$Svg$node('feMerge');
var _elm_lang$svg$Svg$feMergeNode = _elm_lang$svg$Svg$node('feMergeNode');
var _elm_lang$svg$Svg$feMorphology = _elm_lang$svg$Svg$node('feMorphology');
var _elm_lang$svg$Svg$feOffset = _elm_lang$svg$Svg$node('feOffset');
var _elm_lang$svg$Svg$feSpecularLighting = _elm_lang$svg$Svg$node('feSpecularLighting');
var _elm_lang$svg$Svg$feTile = _elm_lang$svg$Svg$node('feTile');
var _elm_lang$svg$Svg$feTurbulence = _elm_lang$svg$Svg$node('feTurbulence');
var _elm_lang$svg$Svg$font = _elm_lang$svg$Svg$node('font');
var _elm_lang$svg$Svg$linearGradient = _elm_lang$svg$Svg$node('linearGradient');
var _elm_lang$svg$Svg$radialGradient = _elm_lang$svg$Svg$node('radialGradient');
var _elm_lang$svg$Svg$stop = _elm_lang$svg$Svg$node('stop');
var _elm_lang$svg$Svg$circle = _elm_lang$svg$Svg$node('circle');
var _elm_lang$svg$Svg$ellipse = _elm_lang$svg$Svg$node('ellipse');
var _elm_lang$svg$Svg$image = _elm_lang$svg$Svg$node('image');
var _elm_lang$svg$Svg$line = _elm_lang$svg$Svg$node('line');
var _elm_lang$svg$Svg$path = _elm_lang$svg$Svg$node('path');
var _elm_lang$svg$Svg$polygon = _elm_lang$svg$Svg$node('polygon');
var _elm_lang$svg$Svg$polyline = _elm_lang$svg$Svg$node('polyline');
var _elm_lang$svg$Svg$rect = _elm_lang$svg$Svg$node('rect');
var _elm_lang$svg$Svg$use = _elm_lang$svg$Svg$node('use');
var _elm_lang$svg$Svg$feDistantLight = _elm_lang$svg$Svg$node('feDistantLight');
var _elm_lang$svg$Svg$fePointLight = _elm_lang$svg$Svg$node('fePointLight');
var _elm_lang$svg$Svg$feSpotLight = _elm_lang$svg$Svg$node('feSpotLight');
var _elm_lang$svg$Svg$altGlyph = _elm_lang$svg$Svg$node('altGlyph');
var _elm_lang$svg$Svg$altGlyphDef = _elm_lang$svg$Svg$node('altGlyphDef');
var _elm_lang$svg$Svg$altGlyphItem = _elm_lang$svg$Svg$node('altGlyphItem');
var _elm_lang$svg$Svg$glyph = _elm_lang$svg$Svg$node('glyph');
var _elm_lang$svg$Svg$glyphRef = _elm_lang$svg$Svg$node('glyphRef');
var _elm_lang$svg$Svg$textPath = _elm_lang$svg$Svg$node('textPath');
var _elm_lang$svg$Svg$text_ = _elm_lang$svg$Svg$node('text');
var _elm_lang$svg$Svg$tref = _elm_lang$svg$Svg$node('tref');
var _elm_lang$svg$Svg$tspan = _elm_lang$svg$Svg$node('tspan');
var _elm_lang$svg$Svg$clipPath = _elm_lang$svg$Svg$node('clipPath');
var _elm_lang$svg$Svg$colorProfile = _elm_lang$svg$Svg$node('colorProfile');
var _elm_lang$svg$Svg$cursor = _elm_lang$svg$Svg$node('cursor');
var _elm_lang$svg$Svg$filter = _elm_lang$svg$Svg$node('filter');
var _elm_lang$svg$Svg$script = _elm_lang$svg$Svg$node('script');
var _elm_lang$svg$Svg$style = _elm_lang$svg$Svg$node('style');
var _elm_lang$svg$Svg$view = _elm_lang$svg$Svg$node('view');

var _elm_lang$svg$Svg_Attributes$writingMode = _elm_lang$virtual_dom$VirtualDom$attribute('writing-mode');
var _elm_lang$svg$Svg_Attributes$wordSpacing = _elm_lang$virtual_dom$VirtualDom$attribute('word-spacing');
var _elm_lang$svg$Svg_Attributes$visibility = _elm_lang$virtual_dom$VirtualDom$attribute('visibility');
var _elm_lang$svg$Svg_Attributes$unicodeBidi = _elm_lang$virtual_dom$VirtualDom$attribute('unicode-bidi');
var _elm_lang$svg$Svg_Attributes$textRendering = _elm_lang$virtual_dom$VirtualDom$attribute('text-rendering');
var _elm_lang$svg$Svg_Attributes$textDecoration = _elm_lang$virtual_dom$VirtualDom$attribute('text-decoration');
var _elm_lang$svg$Svg_Attributes$textAnchor = _elm_lang$virtual_dom$VirtualDom$attribute('text-anchor');
var _elm_lang$svg$Svg_Attributes$stroke = _elm_lang$virtual_dom$VirtualDom$attribute('stroke');
var _elm_lang$svg$Svg_Attributes$strokeWidth = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-width');
var _elm_lang$svg$Svg_Attributes$strokeOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-opacity');
var _elm_lang$svg$Svg_Attributes$strokeMiterlimit = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-miterlimit');
var _elm_lang$svg$Svg_Attributes$strokeLinejoin = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-linejoin');
var _elm_lang$svg$Svg_Attributes$strokeLinecap = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-linecap');
var _elm_lang$svg$Svg_Attributes$strokeDashoffset = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-dashoffset');
var _elm_lang$svg$Svg_Attributes$strokeDasharray = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-dasharray');
var _elm_lang$svg$Svg_Attributes$stopOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('stop-opacity');
var _elm_lang$svg$Svg_Attributes$stopColor = _elm_lang$virtual_dom$VirtualDom$attribute('stop-color');
var _elm_lang$svg$Svg_Attributes$shapeRendering = _elm_lang$virtual_dom$VirtualDom$attribute('shape-rendering');
var _elm_lang$svg$Svg_Attributes$pointerEvents = _elm_lang$virtual_dom$VirtualDom$attribute('pointer-events');
var _elm_lang$svg$Svg_Attributes$overflow = _elm_lang$virtual_dom$VirtualDom$attribute('overflow');
var _elm_lang$svg$Svg_Attributes$opacity = _elm_lang$virtual_dom$VirtualDom$attribute('opacity');
var _elm_lang$svg$Svg_Attributes$mask = _elm_lang$virtual_dom$VirtualDom$attribute('mask');
var _elm_lang$svg$Svg_Attributes$markerStart = _elm_lang$virtual_dom$VirtualDom$attribute('marker-start');
var _elm_lang$svg$Svg_Attributes$markerMid = _elm_lang$virtual_dom$VirtualDom$attribute('marker-mid');
var _elm_lang$svg$Svg_Attributes$markerEnd = _elm_lang$virtual_dom$VirtualDom$attribute('marker-end');
var _elm_lang$svg$Svg_Attributes$lightingColor = _elm_lang$virtual_dom$VirtualDom$attribute('lighting-color');
var _elm_lang$svg$Svg_Attributes$letterSpacing = _elm_lang$virtual_dom$VirtualDom$attribute('letter-spacing');
var _elm_lang$svg$Svg_Attributes$kerning = _elm_lang$virtual_dom$VirtualDom$attribute('kerning');
var _elm_lang$svg$Svg_Attributes$imageRendering = _elm_lang$virtual_dom$VirtualDom$attribute('image-rendering');
var _elm_lang$svg$Svg_Attributes$glyphOrientationVertical = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-orientation-vertical');
var _elm_lang$svg$Svg_Attributes$glyphOrientationHorizontal = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-orientation-horizontal');
var _elm_lang$svg$Svg_Attributes$fontWeight = _elm_lang$virtual_dom$VirtualDom$attribute('font-weight');
var _elm_lang$svg$Svg_Attributes$fontVariant = _elm_lang$virtual_dom$VirtualDom$attribute('font-variant');
var _elm_lang$svg$Svg_Attributes$fontStyle = _elm_lang$virtual_dom$VirtualDom$attribute('font-style');
var _elm_lang$svg$Svg_Attributes$fontStretch = _elm_lang$virtual_dom$VirtualDom$attribute('font-stretch');
var _elm_lang$svg$Svg_Attributes$fontSize = _elm_lang$virtual_dom$VirtualDom$attribute('font-size');
var _elm_lang$svg$Svg_Attributes$fontSizeAdjust = _elm_lang$virtual_dom$VirtualDom$attribute('font-size-adjust');
var _elm_lang$svg$Svg_Attributes$fontFamily = _elm_lang$virtual_dom$VirtualDom$attribute('font-family');
var _elm_lang$svg$Svg_Attributes$floodOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('flood-opacity');
var _elm_lang$svg$Svg_Attributes$floodColor = _elm_lang$virtual_dom$VirtualDom$attribute('flood-color');
var _elm_lang$svg$Svg_Attributes$filter = _elm_lang$virtual_dom$VirtualDom$attribute('filter');
var _elm_lang$svg$Svg_Attributes$fill = _elm_lang$virtual_dom$VirtualDom$attribute('fill');
var _elm_lang$svg$Svg_Attributes$fillRule = _elm_lang$virtual_dom$VirtualDom$attribute('fill-rule');
var _elm_lang$svg$Svg_Attributes$fillOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('fill-opacity');
var _elm_lang$svg$Svg_Attributes$enableBackground = _elm_lang$virtual_dom$VirtualDom$attribute('enable-background');
var _elm_lang$svg$Svg_Attributes$dominantBaseline = _elm_lang$virtual_dom$VirtualDom$attribute('dominant-baseline');
var _elm_lang$svg$Svg_Attributes$display = _elm_lang$virtual_dom$VirtualDom$attribute('display');
var _elm_lang$svg$Svg_Attributes$direction = _elm_lang$virtual_dom$VirtualDom$attribute('direction');
var _elm_lang$svg$Svg_Attributes$cursor = _elm_lang$virtual_dom$VirtualDom$attribute('cursor');
var _elm_lang$svg$Svg_Attributes$color = _elm_lang$virtual_dom$VirtualDom$attribute('color');
var _elm_lang$svg$Svg_Attributes$colorRendering = _elm_lang$virtual_dom$VirtualDom$attribute('color-rendering');
var _elm_lang$svg$Svg_Attributes$colorProfile = _elm_lang$virtual_dom$VirtualDom$attribute('color-profile');
var _elm_lang$svg$Svg_Attributes$colorInterpolation = _elm_lang$virtual_dom$VirtualDom$attribute('color-interpolation');
var _elm_lang$svg$Svg_Attributes$colorInterpolationFilters = _elm_lang$virtual_dom$VirtualDom$attribute('color-interpolation-filters');
var _elm_lang$svg$Svg_Attributes$clip = _elm_lang$virtual_dom$VirtualDom$attribute('clip');
var _elm_lang$svg$Svg_Attributes$clipRule = _elm_lang$virtual_dom$VirtualDom$attribute('clip-rule');
var _elm_lang$svg$Svg_Attributes$clipPath = _elm_lang$virtual_dom$VirtualDom$attribute('clip-path');
var _elm_lang$svg$Svg_Attributes$baselineShift = _elm_lang$virtual_dom$VirtualDom$attribute('baseline-shift');
var _elm_lang$svg$Svg_Attributes$alignmentBaseline = _elm_lang$virtual_dom$VirtualDom$attribute('alignment-baseline');
var _elm_lang$svg$Svg_Attributes$zoomAndPan = _elm_lang$virtual_dom$VirtualDom$attribute('zoomAndPan');
var _elm_lang$svg$Svg_Attributes$z = _elm_lang$virtual_dom$VirtualDom$attribute('z');
var _elm_lang$svg$Svg_Attributes$yChannelSelector = _elm_lang$virtual_dom$VirtualDom$attribute('yChannelSelector');
var _elm_lang$svg$Svg_Attributes$y2 = _elm_lang$virtual_dom$VirtualDom$attribute('y2');
var _elm_lang$svg$Svg_Attributes$y1 = _elm_lang$virtual_dom$VirtualDom$attribute('y1');
var _elm_lang$svg$Svg_Attributes$y = _elm_lang$virtual_dom$VirtualDom$attribute('y');
var _elm_lang$svg$Svg_Attributes$xmlSpace = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:space');
var _elm_lang$svg$Svg_Attributes$xmlLang = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:lang');
var _elm_lang$svg$Svg_Attributes$xmlBase = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:base');
var _elm_lang$svg$Svg_Attributes$xlinkType = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:type');
var _elm_lang$svg$Svg_Attributes$xlinkTitle = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:title');
var _elm_lang$svg$Svg_Attributes$xlinkShow = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:show');
var _elm_lang$svg$Svg_Attributes$xlinkRole = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:role');
var _elm_lang$svg$Svg_Attributes$xlinkHref = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:href');
var _elm_lang$svg$Svg_Attributes$xlinkArcrole = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:arcrole');
var _elm_lang$svg$Svg_Attributes$xlinkActuate = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:actuate');
var _elm_lang$svg$Svg_Attributes$xChannelSelector = _elm_lang$virtual_dom$VirtualDom$attribute('xChannelSelector');
var _elm_lang$svg$Svg_Attributes$x2 = _elm_lang$virtual_dom$VirtualDom$attribute('x2');
var _elm_lang$svg$Svg_Attributes$x1 = _elm_lang$virtual_dom$VirtualDom$attribute('x1');
var _elm_lang$svg$Svg_Attributes$xHeight = _elm_lang$virtual_dom$VirtualDom$attribute('x-height');
var _elm_lang$svg$Svg_Attributes$x = _elm_lang$virtual_dom$VirtualDom$attribute('x');
var _elm_lang$svg$Svg_Attributes$widths = _elm_lang$virtual_dom$VirtualDom$attribute('widths');
var _elm_lang$svg$Svg_Attributes$width = _elm_lang$virtual_dom$VirtualDom$attribute('width');
var _elm_lang$svg$Svg_Attributes$viewTarget = _elm_lang$virtual_dom$VirtualDom$attribute('viewTarget');
var _elm_lang$svg$Svg_Attributes$viewBox = _elm_lang$virtual_dom$VirtualDom$attribute('viewBox');
var _elm_lang$svg$Svg_Attributes$vertOriginY = _elm_lang$virtual_dom$VirtualDom$attribute('vert-origin-y');
var _elm_lang$svg$Svg_Attributes$vertOriginX = _elm_lang$virtual_dom$VirtualDom$attribute('vert-origin-x');
var _elm_lang$svg$Svg_Attributes$vertAdvY = _elm_lang$virtual_dom$VirtualDom$attribute('vert-adv-y');
var _elm_lang$svg$Svg_Attributes$version = _elm_lang$virtual_dom$VirtualDom$attribute('version');
var _elm_lang$svg$Svg_Attributes$values = _elm_lang$virtual_dom$VirtualDom$attribute('values');
var _elm_lang$svg$Svg_Attributes$vMathematical = _elm_lang$virtual_dom$VirtualDom$attribute('v-mathematical');
var _elm_lang$svg$Svg_Attributes$vIdeographic = _elm_lang$virtual_dom$VirtualDom$attribute('v-ideographic');
var _elm_lang$svg$Svg_Attributes$vHanging = _elm_lang$virtual_dom$VirtualDom$attribute('v-hanging');
var _elm_lang$svg$Svg_Attributes$vAlphabetic = _elm_lang$virtual_dom$VirtualDom$attribute('v-alphabetic');
var _elm_lang$svg$Svg_Attributes$unitsPerEm = _elm_lang$virtual_dom$VirtualDom$attribute('units-per-em');
var _elm_lang$svg$Svg_Attributes$unicodeRange = _elm_lang$virtual_dom$VirtualDom$attribute('unicode-range');
var _elm_lang$svg$Svg_Attributes$unicode = _elm_lang$virtual_dom$VirtualDom$attribute('unicode');
var _elm_lang$svg$Svg_Attributes$underlineThickness = _elm_lang$virtual_dom$VirtualDom$attribute('underline-thickness');
var _elm_lang$svg$Svg_Attributes$underlinePosition = _elm_lang$virtual_dom$VirtualDom$attribute('underline-position');
var _elm_lang$svg$Svg_Attributes$u2 = _elm_lang$virtual_dom$VirtualDom$attribute('u2');
var _elm_lang$svg$Svg_Attributes$u1 = _elm_lang$virtual_dom$VirtualDom$attribute('u1');
var _elm_lang$svg$Svg_Attributes$type_ = _elm_lang$virtual_dom$VirtualDom$attribute('type');
var _elm_lang$svg$Svg_Attributes$transform = _elm_lang$virtual_dom$VirtualDom$attribute('transform');
var _elm_lang$svg$Svg_Attributes$to = _elm_lang$virtual_dom$VirtualDom$attribute('to');
var _elm_lang$svg$Svg_Attributes$title = _elm_lang$virtual_dom$VirtualDom$attribute('title');
var _elm_lang$svg$Svg_Attributes$textLength = _elm_lang$virtual_dom$VirtualDom$attribute('textLength');
var _elm_lang$svg$Svg_Attributes$targetY = _elm_lang$virtual_dom$VirtualDom$attribute('targetY');
var _elm_lang$svg$Svg_Attributes$targetX = _elm_lang$virtual_dom$VirtualDom$attribute('targetX');
var _elm_lang$svg$Svg_Attributes$target = _elm_lang$virtual_dom$VirtualDom$attribute('target');
var _elm_lang$svg$Svg_Attributes$tableValues = _elm_lang$virtual_dom$VirtualDom$attribute('tableValues');
var _elm_lang$svg$Svg_Attributes$systemLanguage = _elm_lang$virtual_dom$VirtualDom$attribute('systemLanguage');
var _elm_lang$svg$Svg_Attributes$surfaceScale = _elm_lang$virtual_dom$VirtualDom$attribute('surfaceScale');
var _elm_lang$svg$Svg_Attributes$style = _elm_lang$virtual_dom$VirtualDom$attribute('style');
var _elm_lang$svg$Svg_Attributes$string = _elm_lang$virtual_dom$VirtualDom$attribute('string');
var _elm_lang$svg$Svg_Attributes$strikethroughThickness = _elm_lang$virtual_dom$VirtualDom$attribute('strikethrough-thickness');
var _elm_lang$svg$Svg_Attributes$strikethroughPosition = _elm_lang$virtual_dom$VirtualDom$attribute('strikethrough-position');
var _elm_lang$svg$Svg_Attributes$stitchTiles = _elm_lang$virtual_dom$VirtualDom$attribute('stitchTiles');
var _elm_lang$svg$Svg_Attributes$stemv = _elm_lang$virtual_dom$VirtualDom$attribute('stemv');
var _elm_lang$svg$Svg_Attributes$stemh = _elm_lang$virtual_dom$VirtualDom$attribute('stemh');
var _elm_lang$svg$Svg_Attributes$stdDeviation = _elm_lang$virtual_dom$VirtualDom$attribute('stdDeviation');
var _elm_lang$svg$Svg_Attributes$startOffset = _elm_lang$virtual_dom$VirtualDom$attribute('startOffset');
var _elm_lang$svg$Svg_Attributes$spreadMethod = _elm_lang$virtual_dom$VirtualDom$attribute('spreadMethod');
var _elm_lang$svg$Svg_Attributes$speed = _elm_lang$virtual_dom$VirtualDom$attribute('speed');
var _elm_lang$svg$Svg_Attributes$specularExponent = _elm_lang$virtual_dom$VirtualDom$attribute('specularExponent');
var _elm_lang$svg$Svg_Attributes$specularConstant = _elm_lang$virtual_dom$VirtualDom$attribute('specularConstant');
var _elm_lang$svg$Svg_Attributes$spacing = _elm_lang$virtual_dom$VirtualDom$attribute('spacing');
var _elm_lang$svg$Svg_Attributes$slope = _elm_lang$virtual_dom$VirtualDom$attribute('slope');
var _elm_lang$svg$Svg_Attributes$seed = _elm_lang$virtual_dom$VirtualDom$attribute('seed');
var _elm_lang$svg$Svg_Attributes$scale = _elm_lang$virtual_dom$VirtualDom$attribute('scale');
var _elm_lang$svg$Svg_Attributes$ry = _elm_lang$virtual_dom$VirtualDom$attribute('ry');
var _elm_lang$svg$Svg_Attributes$rx = _elm_lang$virtual_dom$VirtualDom$attribute('rx');
var _elm_lang$svg$Svg_Attributes$rotate = _elm_lang$virtual_dom$VirtualDom$attribute('rotate');
var _elm_lang$svg$Svg_Attributes$result = _elm_lang$virtual_dom$VirtualDom$attribute('result');
var _elm_lang$svg$Svg_Attributes$restart = _elm_lang$virtual_dom$VirtualDom$attribute('restart');
var _elm_lang$svg$Svg_Attributes$requiredFeatures = _elm_lang$virtual_dom$VirtualDom$attribute('requiredFeatures');
var _elm_lang$svg$Svg_Attributes$requiredExtensions = _elm_lang$virtual_dom$VirtualDom$attribute('requiredExtensions');
var _elm_lang$svg$Svg_Attributes$repeatDur = _elm_lang$virtual_dom$VirtualDom$attribute('repeatDur');
var _elm_lang$svg$Svg_Attributes$repeatCount = _elm_lang$virtual_dom$VirtualDom$attribute('repeatCount');
var _elm_lang$svg$Svg_Attributes$renderingIntent = _elm_lang$virtual_dom$VirtualDom$attribute('rendering-intent');
var _elm_lang$svg$Svg_Attributes$refY = _elm_lang$virtual_dom$VirtualDom$attribute('refY');
var _elm_lang$svg$Svg_Attributes$refX = _elm_lang$virtual_dom$VirtualDom$attribute('refX');
var _elm_lang$svg$Svg_Attributes$radius = _elm_lang$virtual_dom$VirtualDom$attribute('radius');
var _elm_lang$svg$Svg_Attributes$r = _elm_lang$virtual_dom$VirtualDom$attribute('r');
var _elm_lang$svg$Svg_Attributes$primitiveUnits = _elm_lang$virtual_dom$VirtualDom$attribute('primitiveUnits');
var _elm_lang$svg$Svg_Attributes$preserveAspectRatio = _elm_lang$virtual_dom$VirtualDom$attribute('preserveAspectRatio');
var _elm_lang$svg$Svg_Attributes$preserveAlpha = _elm_lang$virtual_dom$VirtualDom$attribute('preserveAlpha');
var _elm_lang$svg$Svg_Attributes$pointsAtZ = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtZ');
var _elm_lang$svg$Svg_Attributes$pointsAtY = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtY');
var _elm_lang$svg$Svg_Attributes$pointsAtX = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtX');
var _elm_lang$svg$Svg_Attributes$points = _elm_lang$virtual_dom$VirtualDom$attribute('points');
var _elm_lang$svg$Svg_Attributes$pointOrder = _elm_lang$virtual_dom$VirtualDom$attribute('point-order');
var _elm_lang$svg$Svg_Attributes$patternUnits = _elm_lang$virtual_dom$VirtualDom$attribute('patternUnits');
var _elm_lang$svg$Svg_Attributes$patternTransform = _elm_lang$virtual_dom$VirtualDom$attribute('patternTransform');
var _elm_lang$svg$Svg_Attributes$patternContentUnits = _elm_lang$virtual_dom$VirtualDom$attribute('patternContentUnits');
var _elm_lang$svg$Svg_Attributes$pathLength = _elm_lang$virtual_dom$VirtualDom$attribute('pathLength');
var _elm_lang$svg$Svg_Attributes$path = _elm_lang$virtual_dom$VirtualDom$attribute('path');
var _elm_lang$svg$Svg_Attributes$panose1 = _elm_lang$virtual_dom$VirtualDom$attribute('panose-1');
var _elm_lang$svg$Svg_Attributes$overlineThickness = _elm_lang$virtual_dom$VirtualDom$attribute('overline-thickness');
var _elm_lang$svg$Svg_Attributes$overlinePosition = _elm_lang$virtual_dom$VirtualDom$attribute('overline-position');
var _elm_lang$svg$Svg_Attributes$origin = _elm_lang$virtual_dom$VirtualDom$attribute('origin');
var _elm_lang$svg$Svg_Attributes$orientation = _elm_lang$virtual_dom$VirtualDom$attribute('orientation');
var _elm_lang$svg$Svg_Attributes$orient = _elm_lang$virtual_dom$VirtualDom$attribute('orient');
var _elm_lang$svg$Svg_Attributes$order = _elm_lang$virtual_dom$VirtualDom$attribute('order');
var _elm_lang$svg$Svg_Attributes$operator = _elm_lang$virtual_dom$VirtualDom$attribute('operator');
var _elm_lang$svg$Svg_Attributes$offset = _elm_lang$virtual_dom$VirtualDom$attribute('offset');
var _elm_lang$svg$Svg_Attributes$numOctaves = _elm_lang$virtual_dom$VirtualDom$attribute('numOctaves');
var _elm_lang$svg$Svg_Attributes$name = _elm_lang$virtual_dom$VirtualDom$attribute('name');
var _elm_lang$svg$Svg_Attributes$mode = _elm_lang$virtual_dom$VirtualDom$attribute('mode');
var _elm_lang$svg$Svg_Attributes$min = _elm_lang$virtual_dom$VirtualDom$attribute('min');
var _elm_lang$svg$Svg_Attributes$method = _elm_lang$virtual_dom$VirtualDom$attribute('method');
var _elm_lang$svg$Svg_Attributes$media = _elm_lang$virtual_dom$VirtualDom$attribute('media');
var _elm_lang$svg$Svg_Attributes$max = _elm_lang$virtual_dom$VirtualDom$attribute('max');
var _elm_lang$svg$Svg_Attributes$mathematical = _elm_lang$virtual_dom$VirtualDom$attribute('mathematical');
var _elm_lang$svg$Svg_Attributes$maskUnits = _elm_lang$virtual_dom$VirtualDom$attribute('maskUnits');
var _elm_lang$svg$Svg_Attributes$maskContentUnits = _elm_lang$virtual_dom$VirtualDom$attribute('maskContentUnits');
var _elm_lang$svg$Svg_Attributes$markerWidth = _elm_lang$virtual_dom$VirtualDom$attribute('markerWidth');
var _elm_lang$svg$Svg_Attributes$markerUnits = _elm_lang$virtual_dom$VirtualDom$attribute('markerUnits');
var _elm_lang$svg$Svg_Attributes$markerHeight = _elm_lang$virtual_dom$VirtualDom$attribute('markerHeight');
var _elm_lang$svg$Svg_Attributes$local = _elm_lang$virtual_dom$VirtualDom$attribute('local');
var _elm_lang$svg$Svg_Attributes$limitingConeAngle = _elm_lang$virtual_dom$VirtualDom$attribute('limitingConeAngle');
var _elm_lang$svg$Svg_Attributes$lengthAdjust = _elm_lang$virtual_dom$VirtualDom$attribute('lengthAdjust');
var _elm_lang$svg$Svg_Attributes$lang = _elm_lang$virtual_dom$VirtualDom$attribute('lang');
var _elm_lang$svg$Svg_Attributes$keyTimes = _elm_lang$virtual_dom$VirtualDom$attribute('keyTimes');
var _elm_lang$svg$Svg_Attributes$keySplines = _elm_lang$virtual_dom$VirtualDom$attribute('keySplines');
var _elm_lang$svg$Svg_Attributes$keyPoints = _elm_lang$virtual_dom$VirtualDom$attribute('keyPoints');
var _elm_lang$svg$Svg_Attributes$kernelUnitLength = _elm_lang$virtual_dom$VirtualDom$attribute('kernelUnitLength');
var _elm_lang$svg$Svg_Attributes$kernelMatrix = _elm_lang$virtual_dom$VirtualDom$attribute('kernelMatrix');
var _elm_lang$svg$Svg_Attributes$k4 = _elm_lang$virtual_dom$VirtualDom$attribute('k4');
var _elm_lang$svg$Svg_Attributes$k3 = _elm_lang$virtual_dom$VirtualDom$attribute('k3');
var _elm_lang$svg$Svg_Attributes$k2 = _elm_lang$virtual_dom$VirtualDom$attribute('k2');
var _elm_lang$svg$Svg_Attributes$k1 = _elm_lang$virtual_dom$VirtualDom$attribute('k1');
var _elm_lang$svg$Svg_Attributes$k = _elm_lang$virtual_dom$VirtualDom$attribute('k');
var _elm_lang$svg$Svg_Attributes$intercept = _elm_lang$virtual_dom$VirtualDom$attribute('intercept');
var _elm_lang$svg$Svg_Attributes$in2 = _elm_lang$virtual_dom$VirtualDom$attribute('in2');
var _elm_lang$svg$Svg_Attributes$in_ = _elm_lang$virtual_dom$VirtualDom$attribute('in');
var _elm_lang$svg$Svg_Attributes$ideographic = _elm_lang$virtual_dom$VirtualDom$attribute('ideographic');
var _elm_lang$svg$Svg_Attributes$id = _elm_lang$virtual_dom$VirtualDom$attribute('id');
var _elm_lang$svg$Svg_Attributes$horizOriginY = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-origin-y');
var _elm_lang$svg$Svg_Attributes$horizOriginX = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-origin-x');
var _elm_lang$svg$Svg_Attributes$horizAdvX = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-adv-x');
var _elm_lang$svg$Svg_Attributes$height = _elm_lang$virtual_dom$VirtualDom$attribute('height');
var _elm_lang$svg$Svg_Attributes$hanging = _elm_lang$virtual_dom$VirtualDom$attribute('hanging');
var _elm_lang$svg$Svg_Attributes$gradientUnits = _elm_lang$virtual_dom$VirtualDom$attribute('gradientUnits');
var _elm_lang$svg$Svg_Attributes$gradientTransform = _elm_lang$virtual_dom$VirtualDom$attribute('gradientTransform');
var _elm_lang$svg$Svg_Attributes$glyphRef = _elm_lang$virtual_dom$VirtualDom$attribute('glyphRef');
var _elm_lang$svg$Svg_Attributes$glyphName = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-name');
var _elm_lang$svg$Svg_Attributes$g2 = _elm_lang$virtual_dom$VirtualDom$attribute('g2');
var _elm_lang$svg$Svg_Attributes$g1 = _elm_lang$virtual_dom$VirtualDom$attribute('g1');
var _elm_lang$svg$Svg_Attributes$fy = _elm_lang$virtual_dom$VirtualDom$attribute('fy');
var _elm_lang$svg$Svg_Attributes$fx = _elm_lang$virtual_dom$VirtualDom$attribute('fx');
var _elm_lang$svg$Svg_Attributes$from = _elm_lang$virtual_dom$VirtualDom$attribute('from');
var _elm_lang$svg$Svg_Attributes$format = _elm_lang$virtual_dom$VirtualDom$attribute('format');
var _elm_lang$svg$Svg_Attributes$filterUnits = _elm_lang$virtual_dom$VirtualDom$attribute('filterUnits');
var _elm_lang$svg$Svg_Attributes$filterRes = _elm_lang$virtual_dom$VirtualDom$attribute('filterRes');
var _elm_lang$svg$Svg_Attributes$externalResourcesRequired = _elm_lang$virtual_dom$VirtualDom$attribute('externalResourcesRequired');
var _elm_lang$svg$Svg_Attributes$exponent = _elm_lang$virtual_dom$VirtualDom$attribute('exponent');
var _elm_lang$svg$Svg_Attributes$end = _elm_lang$virtual_dom$VirtualDom$attribute('end');
var _elm_lang$svg$Svg_Attributes$elevation = _elm_lang$virtual_dom$VirtualDom$attribute('elevation');
var _elm_lang$svg$Svg_Attributes$edgeMode = _elm_lang$virtual_dom$VirtualDom$attribute('edgeMode');
var _elm_lang$svg$Svg_Attributes$dy = _elm_lang$virtual_dom$VirtualDom$attribute('dy');
var _elm_lang$svg$Svg_Attributes$dx = _elm_lang$virtual_dom$VirtualDom$attribute('dx');
var _elm_lang$svg$Svg_Attributes$dur = _elm_lang$virtual_dom$VirtualDom$attribute('dur');
var _elm_lang$svg$Svg_Attributes$divisor = _elm_lang$virtual_dom$VirtualDom$attribute('divisor');
var _elm_lang$svg$Svg_Attributes$diffuseConstant = _elm_lang$virtual_dom$VirtualDom$attribute('diffuseConstant');
var _elm_lang$svg$Svg_Attributes$descent = _elm_lang$virtual_dom$VirtualDom$attribute('descent');
var _elm_lang$svg$Svg_Attributes$decelerate = _elm_lang$virtual_dom$VirtualDom$attribute('decelerate');
var _elm_lang$svg$Svg_Attributes$d = _elm_lang$virtual_dom$VirtualDom$attribute('d');
var _elm_lang$svg$Svg_Attributes$cy = _elm_lang$virtual_dom$VirtualDom$attribute('cy');
var _elm_lang$svg$Svg_Attributes$cx = _elm_lang$virtual_dom$VirtualDom$attribute('cx');
var _elm_lang$svg$Svg_Attributes$contentStyleType = _elm_lang$virtual_dom$VirtualDom$attribute('contentStyleType');
var _elm_lang$svg$Svg_Attributes$contentScriptType = _elm_lang$virtual_dom$VirtualDom$attribute('contentScriptType');
var _elm_lang$svg$Svg_Attributes$clipPathUnits = _elm_lang$virtual_dom$VirtualDom$attribute('clipPathUnits');
var _elm_lang$svg$Svg_Attributes$class = _elm_lang$virtual_dom$VirtualDom$attribute('class');
var _elm_lang$svg$Svg_Attributes$capHeight = _elm_lang$virtual_dom$VirtualDom$attribute('cap-height');
var _elm_lang$svg$Svg_Attributes$calcMode = _elm_lang$virtual_dom$VirtualDom$attribute('calcMode');
var _elm_lang$svg$Svg_Attributes$by = _elm_lang$virtual_dom$VirtualDom$attribute('by');
var _elm_lang$svg$Svg_Attributes$bias = _elm_lang$virtual_dom$VirtualDom$attribute('bias');
var _elm_lang$svg$Svg_Attributes$begin = _elm_lang$virtual_dom$VirtualDom$attribute('begin');
var _elm_lang$svg$Svg_Attributes$bbox = _elm_lang$virtual_dom$VirtualDom$attribute('bbox');
var _elm_lang$svg$Svg_Attributes$baseProfile = _elm_lang$virtual_dom$VirtualDom$attribute('baseProfile');
var _elm_lang$svg$Svg_Attributes$baseFrequency = _elm_lang$virtual_dom$VirtualDom$attribute('baseFrequency');
var _elm_lang$svg$Svg_Attributes$azimuth = _elm_lang$virtual_dom$VirtualDom$attribute('azimuth');
var _elm_lang$svg$Svg_Attributes$autoReverse = _elm_lang$virtual_dom$VirtualDom$attribute('autoReverse');
var _elm_lang$svg$Svg_Attributes$attributeType = _elm_lang$virtual_dom$VirtualDom$attribute('attributeType');
var _elm_lang$svg$Svg_Attributes$attributeName = _elm_lang$virtual_dom$VirtualDom$attribute('attributeName');
var _elm_lang$svg$Svg_Attributes$ascent = _elm_lang$virtual_dom$VirtualDom$attribute('ascent');
var _elm_lang$svg$Svg_Attributes$arabicForm = _elm_lang$virtual_dom$VirtualDom$attribute('arabic-form');
var _elm_lang$svg$Svg_Attributes$amplitude = _elm_lang$virtual_dom$VirtualDom$attribute('amplitude');
var _elm_lang$svg$Svg_Attributes$allowReorder = _elm_lang$virtual_dom$VirtualDom$attribute('allowReorder');
var _elm_lang$svg$Svg_Attributes$alphabetic = _elm_lang$virtual_dom$VirtualDom$attribute('alphabetic');
var _elm_lang$svg$Svg_Attributes$additive = _elm_lang$virtual_dom$VirtualDom$attribute('additive');
var _elm_lang$svg$Svg_Attributes$accumulate = _elm_lang$virtual_dom$VirtualDom$attribute('accumulate');
var _elm_lang$svg$Svg_Attributes$accelerate = _elm_lang$virtual_dom$VirtualDom$attribute('accelerate');
var _elm_lang$svg$Svg_Attributes$accentHeight = _elm_lang$virtual_dom$VirtualDom$attribute('accent-height');

var _elm_lang$svg$Svg_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$svg$Svg_Events$simpleOn = F2(
	function (name, msg) {
		return A2(
			_elm_lang$svg$Svg_Events$on,
			name,
			_elm_lang$core$Json_Decode$succeed(msg));
	});
var _elm_lang$svg$Svg_Events$onBegin = _elm_lang$svg$Svg_Events$simpleOn('begin');
var _elm_lang$svg$Svg_Events$onEnd = _elm_lang$svg$Svg_Events$simpleOn('end');
var _elm_lang$svg$Svg_Events$onRepeat = _elm_lang$svg$Svg_Events$simpleOn('repeat');
var _elm_lang$svg$Svg_Events$onAbort = _elm_lang$svg$Svg_Events$simpleOn('abort');
var _elm_lang$svg$Svg_Events$onError = _elm_lang$svg$Svg_Events$simpleOn('error');
var _elm_lang$svg$Svg_Events$onResize = _elm_lang$svg$Svg_Events$simpleOn('resize');
var _elm_lang$svg$Svg_Events$onScroll = _elm_lang$svg$Svg_Events$simpleOn('scroll');
var _elm_lang$svg$Svg_Events$onLoad = _elm_lang$svg$Svg_Events$simpleOn('load');
var _elm_lang$svg$Svg_Events$onUnload = _elm_lang$svg$Svg_Events$simpleOn('unload');
var _elm_lang$svg$Svg_Events$onZoom = _elm_lang$svg$Svg_Events$simpleOn('zoom');
var _elm_lang$svg$Svg_Events$onActivate = _elm_lang$svg$Svg_Events$simpleOn('activate');
var _elm_lang$svg$Svg_Events$onClick = _elm_lang$svg$Svg_Events$simpleOn('click');
var _elm_lang$svg$Svg_Events$onFocusIn = _elm_lang$svg$Svg_Events$simpleOn('focusin');
var _elm_lang$svg$Svg_Events$onFocusOut = _elm_lang$svg$Svg_Events$simpleOn('focusout');
var _elm_lang$svg$Svg_Events$onMouseDown = _elm_lang$svg$Svg_Events$simpleOn('mousedown');
var _elm_lang$svg$Svg_Events$onMouseMove = _elm_lang$svg$Svg_Events$simpleOn('mousemove');
var _elm_lang$svg$Svg_Events$onMouseOut = _elm_lang$svg$Svg_Events$simpleOn('mouseout');
var _elm_lang$svg$Svg_Events$onMouseOver = _elm_lang$svg$Svg_Events$simpleOn('mouseover');
var _elm_lang$svg$Svg_Events$onMouseUp = _elm_lang$svg$Svg_Events$simpleOn('mouseup');

var _elm_lang$window$Native_Window = function()
{

var size = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)	{
	callback(_elm_lang$core$Native_Scheduler.succeed({
		width: window.innerWidth,
		height: window.innerHeight
	}));
});

return {
	size: size
};

}();
var _elm_lang$window$Window_ops = _elm_lang$window$Window_ops || {};
_elm_lang$window$Window_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return task2;
			},
			task1);
	});
var _elm_lang$window$Window$onSelfMsg = F3(
	function (router, dimensions, state) {
		var _p1 = state;
		if (_p1.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (_p2) {
				var _p3 = _p2;
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p3._0(dimensions));
			};
			return A2(
				_elm_lang$window$Window_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p1._0.subs)),
				_elm_lang$core$Task$succeed(state));
		}
	});
var _elm_lang$window$Window$init = _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
var _elm_lang$window$Window$size = _elm_lang$window$Native_Window.size;
var _elm_lang$window$Window$width = A2(
	_elm_lang$core$Task$map,
	function (_) {
		return _.width;
	},
	_elm_lang$window$Window$size);
var _elm_lang$window$Window$height = A2(
	_elm_lang$core$Task$map,
	function (_) {
		return _.height;
	},
	_elm_lang$window$Window$size);
var _elm_lang$window$Window$onEffects = F3(
	function (router, newSubs, oldState) {
		var _p4 = {ctor: '_Tuple2', _0: oldState, _1: newSubs};
		if (_p4._0.ctor === 'Nothing') {
			if (_p4._1.ctor === '[]') {
				return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
			} else {
				return A2(
					_elm_lang$core$Task$andThen,
					function (pid) {
						return _elm_lang$core$Task$succeed(
							_elm_lang$core$Maybe$Just(
								{subs: newSubs, pid: pid}));
					},
					_elm_lang$core$Process$spawn(
						A3(
							_elm_lang$dom$Dom_LowLevel$onWindow,
							'resize',
							_elm_lang$core$Json_Decode$succeed(
								{ctor: '_Tuple0'}),
							function (_p5) {
								return A2(
									_elm_lang$core$Task$andThen,
									_elm_lang$core$Platform$sendToSelf(router),
									_elm_lang$window$Window$size);
							})));
			}
		} else {
			if (_p4._1.ctor === '[]') {
				return A2(
					_elm_lang$window$Window_ops['&>'],
					_elm_lang$core$Process$kill(_p4._0._0.pid),
					_elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing));
			} else {
				return _elm_lang$core$Task$succeed(
					_elm_lang$core$Maybe$Just(
						{subs: newSubs, pid: _p4._0._0.pid}));
			}
		}
	});
var _elm_lang$window$Window$subscription = _elm_lang$core$Native_Platform.leaf('Window');
var _elm_lang$window$Window$Size = F2(
	function (a, b) {
		return {width: a, height: b};
	});
var _elm_lang$window$Window$MySub = function (a) {
	return {ctor: 'MySub', _0: a};
};
var _elm_lang$window$Window$resizes = function (tagger) {
	return _elm_lang$window$Window$subscription(
		_elm_lang$window$Window$MySub(tagger));
};
var _elm_lang$window$Window$subMap = F2(
	function (func, _p6) {
		var _p7 = _p6;
		return _elm_lang$window$Window$MySub(
			function (_p8) {
				return func(
					_p7._0(_p8));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Window'] = {pkg: 'elm-lang/window', init: _elm_lang$window$Window$init, onEffects: _elm_lang$window$Window$onEffects, onSelfMsg: _elm_lang$window$Window$onSelfMsg, tag: 'sub', subMap: _elm_lang$window$Window$subMap};

var _evancz$url_parser$UrlParser$toKeyValuePair = function (segment) {
	var _p0 = A2(_elm_lang$core$String$split, '=', segment);
	if (((_p0.ctor === '::') && (_p0._1.ctor === '::')) && (_p0._1._1.ctor === '[]')) {
		return A3(
			_elm_lang$core$Maybe$map2,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			_elm_lang$http$Http$decodeUri(_p0._0),
			_elm_lang$http$Http$decodeUri(_p0._1._0));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _evancz$url_parser$UrlParser$parseParams = function (queryString) {
	return _elm_lang$core$Dict$fromList(
		A2(
			_elm_lang$core$List$filterMap,
			_evancz$url_parser$UrlParser$toKeyValuePair,
			A2(
				_elm_lang$core$String$split,
				'&',
				A2(_elm_lang$core$String$dropLeft, 1, queryString))));
};
var _evancz$url_parser$UrlParser$splitUrl = function (url) {
	var _p1 = A2(_elm_lang$core$String$split, '/', url);
	if ((_p1.ctor === '::') && (_p1._0 === '')) {
		return _p1._1;
	} else {
		return _p1;
	}
};
var _evancz$url_parser$UrlParser$parseHelp = function (states) {
	parseHelp:
	while (true) {
		var _p2 = states;
		if (_p2.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p4 = _p2._0;
			var _p3 = _p4.unvisited;
			if (_p3.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p4.value);
			} else {
				if ((_p3._0 === '') && (_p3._1.ctor === '[]')) {
					return _elm_lang$core$Maybe$Just(_p4.value);
				} else {
					var _v4 = _p2._1;
					states = _v4;
					continue parseHelp;
				}
			}
		}
	}
};
var _evancz$url_parser$UrlParser$parse = F3(
	function (_p5, url, params) {
		var _p6 = _p5;
		return _evancz$url_parser$UrlParser$parseHelp(
			_p6._0(
				{
					visited: {ctor: '[]'},
					unvisited: _evancz$url_parser$UrlParser$splitUrl(url),
					params: params,
					value: _elm_lang$core$Basics$identity
				}));
	});
var _evancz$url_parser$UrlParser$parseHash = F2(
	function (parser, location) {
		return A3(
			_evancz$url_parser$UrlParser$parse,
			parser,
			A2(_elm_lang$core$String$dropLeft, 1, location.hash),
			_evancz$url_parser$UrlParser$parseParams(location.search));
	});
var _evancz$url_parser$UrlParser$parsePath = F2(
	function (parser, location) {
		return A3(
			_evancz$url_parser$UrlParser$parse,
			parser,
			location.pathname,
			_evancz$url_parser$UrlParser$parseParams(location.search));
	});
var _evancz$url_parser$UrlParser$intParamHelp = function (maybeValue) {
	var _p7 = maybeValue;
	if (_p7.ctor === 'Nothing') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Result$toMaybe(
			_elm_lang$core$String$toInt(_p7._0));
	}
};
var _evancz$url_parser$UrlParser$mapHelp = F2(
	function (func, _p8) {
		var _p9 = _p8;
		return {
			visited: _p9.visited,
			unvisited: _p9.unvisited,
			params: _p9.params,
			value: func(_p9.value)
		};
	});
var _evancz$url_parser$UrlParser$State = F4(
	function (a, b, c, d) {
		return {visited: a, unvisited: b, params: c, value: d};
	});
var _evancz$url_parser$UrlParser$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _evancz$url_parser$UrlParser$s = function (str) {
	return _evancz$url_parser$UrlParser$Parser(
		function (_p10) {
			var _p11 = _p10;
			var _p12 = _p11.unvisited;
			if (_p12.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var _p13 = _p12._0;
				return _elm_lang$core$Native_Utils.eq(_p13, str) ? {
					ctor: '::',
					_0: A4(
						_evancz$url_parser$UrlParser$State,
						{ctor: '::', _0: _p13, _1: _p11.visited},
						_p12._1,
						_p11.params,
						_p11.value),
					_1: {ctor: '[]'}
				} : {ctor: '[]'};
			}
		});
};
var _evancz$url_parser$UrlParser$custom = F2(
	function (tipe, stringToSomething) {
		return _evancz$url_parser$UrlParser$Parser(
			function (_p14) {
				var _p15 = _p14;
				var _p16 = _p15.unvisited;
				if (_p16.ctor === '[]') {
					return {ctor: '[]'};
				} else {
					var _p18 = _p16._0;
					var _p17 = stringToSomething(_p18);
					if (_p17.ctor === 'Ok') {
						return {
							ctor: '::',
							_0: A4(
								_evancz$url_parser$UrlParser$State,
								{ctor: '::', _0: _p18, _1: _p15.visited},
								_p16._1,
								_p15.params,
								_p15.value(_p17._0)),
							_1: {ctor: '[]'}
						};
					} else {
						return {ctor: '[]'};
					}
				}
			});
	});
var _evancz$url_parser$UrlParser$string = A2(_evancz$url_parser$UrlParser$custom, 'STRING', _elm_lang$core$Result$Ok);
var _evancz$url_parser$UrlParser$int = A2(_evancz$url_parser$UrlParser$custom, 'NUMBER', _elm_lang$core$String$toInt);
var _evancz$url_parser$UrlParser_ops = _evancz$url_parser$UrlParser_ops || {};
_evancz$url_parser$UrlParser_ops['</>'] = F2(
	function (_p20, _p19) {
		var _p21 = _p20;
		var _p22 = _p19;
		return _evancz$url_parser$UrlParser$Parser(
			function (state) {
				return A2(
					_elm_lang$core$List$concatMap,
					_p22._0,
					_p21._0(state));
			});
	});
var _evancz$url_parser$UrlParser$map = F2(
	function (subValue, _p23) {
		var _p24 = _p23;
		return _evancz$url_parser$UrlParser$Parser(
			function (_p25) {
				var _p26 = _p25;
				return A2(
					_elm_lang$core$List$map,
					_evancz$url_parser$UrlParser$mapHelp(_p26.value),
					_p24._0(
						{visited: _p26.visited, unvisited: _p26.unvisited, params: _p26.params, value: subValue}));
			});
	});
var _evancz$url_parser$UrlParser$oneOf = function (parsers) {
	return _evancz$url_parser$UrlParser$Parser(
		function (state) {
			return A2(
				_elm_lang$core$List$concatMap,
				function (_p27) {
					var _p28 = _p27;
					return _p28._0(state);
				},
				parsers);
		});
};
var _evancz$url_parser$UrlParser$top = _evancz$url_parser$UrlParser$Parser(
	function (state) {
		return {
			ctor: '::',
			_0: state,
			_1: {ctor: '[]'}
		};
	});
var _evancz$url_parser$UrlParser_ops = _evancz$url_parser$UrlParser_ops || {};
_evancz$url_parser$UrlParser_ops['<?>'] = F2(
	function (_p30, _p29) {
		var _p31 = _p30;
		var _p32 = _p29;
		return _evancz$url_parser$UrlParser$Parser(
			function (state) {
				return A2(
					_elm_lang$core$List$concatMap,
					_p32._0,
					_p31._0(state));
			});
	});
var _evancz$url_parser$UrlParser$QueryParser = function (a) {
	return {ctor: 'QueryParser', _0: a};
};
var _evancz$url_parser$UrlParser$customParam = F2(
	function (key, func) {
		return _evancz$url_parser$UrlParser$QueryParser(
			function (_p33) {
				var _p34 = _p33;
				var _p35 = _p34.params;
				return {
					ctor: '::',
					_0: A4(
						_evancz$url_parser$UrlParser$State,
						_p34.visited,
						_p34.unvisited,
						_p35,
						_p34.value(
							func(
								A2(_elm_lang$core$Dict$get, key, _p35)))),
					_1: {ctor: '[]'}
				};
			});
	});
var _evancz$url_parser$UrlParser$stringParam = function (name) {
	return A2(_evancz$url_parser$UrlParser$customParam, name, _elm_lang$core$Basics$identity);
};
var _evancz$url_parser$UrlParser$intParam = function (name) {
	return A2(_evancz$url_parser$UrlParser$customParam, name, _evancz$url_parser$UrlParser$intParamHelp);
};

var _fredcy$elm_parseint$ParseInt$charFromInt = function (i) {
	return (_elm_lang$core$Native_Utils.cmp(i, 10) < 0) ? _elm_lang$core$Char$fromCode(
		i + _elm_lang$core$Char$toCode(
			_elm_lang$core$Native_Utils.chr('0'))) : ((_elm_lang$core$Native_Utils.cmp(i, 36) < 0) ? _elm_lang$core$Char$fromCode(
		(i - 10) + _elm_lang$core$Char$toCode(
			_elm_lang$core$Native_Utils.chr('A'))) : _elm_lang$core$Native_Utils.crash(
		'ParseInt',
		{
			start: {line: 158, column: 9},
			end: {line: 158, column: 20}
		})(
		_elm_lang$core$Basics$toString(i)));
};
var _fredcy$elm_parseint$ParseInt$toRadixUnsafe = F2(
	function (radix, i) {
		return (_elm_lang$core$Native_Utils.cmp(i, radix) < 0) ? _elm_lang$core$String$fromChar(
			_fredcy$elm_parseint$ParseInt$charFromInt(i)) : A2(
			_elm_lang$core$Basics_ops['++'],
			A2(_fredcy$elm_parseint$ParseInt$toRadixUnsafe, radix, (i / radix) | 0),
			_elm_lang$core$String$fromChar(
				_fredcy$elm_parseint$ParseInt$charFromInt(
					A2(_elm_lang$core$Basics_ops['%'], i, radix))));
	});
var _fredcy$elm_parseint$ParseInt$toOct = _fredcy$elm_parseint$ParseInt$toRadixUnsafe(8);
var _fredcy$elm_parseint$ParseInt$toHex = _fredcy$elm_parseint$ParseInt$toRadixUnsafe(16);
var _fredcy$elm_parseint$ParseInt$isBetween = F3(
	function (lower, upper, c) {
		var ci = _elm_lang$core$Char$toCode(c);
		return (_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$Char$toCode(lower),
			ci) < 1) && (_elm_lang$core$Native_Utils.cmp(
			ci,
			_elm_lang$core$Char$toCode(upper)) < 1);
	});
var _fredcy$elm_parseint$ParseInt$charOffset = F2(
	function (basis, c) {
		return _elm_lang$core$Char$toCode(c) - _elm_lang$core$Char$toCode(basis);
	});
var _fredcy$elm_parseint$ParseInt$InvalidRadix = function (a) {
	return {ctor: 'InvalidRadix', _0: a};
};
var _fredcy$elm_parseint$ParseInt$toRadix = F2(
	function (radix, i) {
		return ((_elm_lang$core$Native_Utils.cmp(2, radix) < 1) && (_elm_lang$core$Native_Utils.cmp(radix, 36) < 1)) ? ((_elm_lang$core$Native_Utils.cmp(i, 0) < 0) ? _elm_lang$core$Result$Ok(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'-',
				A2(_fredcy$elm_parseint$ParseInt$toRadixUnsafe, radix, 0 - i))) : _elm_lang$core$Result$Ok(
			A2(_fredcy$elm_parseint$ParseInt$toRadixUnsafe, radix, i))) : _elm_lang$core$Result$Err(
			_fredcy$elm_parseint$ParseInt$InvalidRadix(radix));
	});
var _fredcy$elm_parseint$ParseInt$OutOfRange = function (a) {
	return {ctor: 'OutOfRange', _0: a};
};
var _fredcy$elm_parseint$ParseInt$InvalidChar = function (a) {
	return {ctor: 'InvalidChar', _0: a};
};
var _fredcy$elm_parseint$ParseInt$intFromChar = F2(
	function (radix, c) {
		var validInt = function (i) {
			return (_elm_lang$core$Native_Utils.cmp(i, radix) < 0) ? _elm_lang$core$Result$Ok(i) : _elm_lang$core$Result$Err(
				_fredcy$elm_parseint$ParseInt$OutOfRange(c));
		};
		var toInt = A3(
			_fredcy$elm_parseint$ParseInt$isBetween,
			_elm_lang$core$Native_Utils.chr('0'),
			_elm_lang$core$Native_Utils.chr('9'),
			c) ? _elm_lang$core$Result$Ok(
			A2(
				_fredcy$elm_parseint$ParseInt$charOffset,
				_elm_lang$core$Native_Utils.chr('0'),
				c)) : (A3(
			_fredcy$elm_parseint$ParseInt$isBetween,
			_elm_lang$core$Native_Utils.chr('a'),
			_elm_lang$core$Native_Utils.chr('z'),
			c) ? _elm_lang$core$Result$Ok(
			10 + A2(
				_fredcy$elm_parseint$ParseInt$charOffset,
				_elm_lang$core$Native_Utils.chr('a'),
				c)) : (A3(
			_fredcy$elm_parseint$ParseInt$isBetween,
			_elm_lang$core$Native_Utils.chr('A'),
			_elm_lang$core$Native_Utils.chr('Z'),
			c) ? _elm_lang$core$Result$Ok(
			10 + A2(
				_fredcy$elm_parseint$ParseInt$charOffset,
				_elm_lang$core$Native_Utils.chr('A'),
				c)) : _elm_lang$core$Result$Err(
			_fredcy$elm_parseint$ParseInt$InvalidChar(c))));
		return A2(_elm_lang$core$Result$andThen, validInt, toInt);
	});
var _fredcy$elm_parseint$ParseInt$parseIntR = F2(
	function (radix, rstring) {
		var _p0 = _elm_lang$core$String$uncons(rstring);
		if (_p0.ctor === 'Nothing') {
			return _elm_lang$core$Result$Ok(0);
		} else {
			return A2(
				_elm_lang$core$Result$andThen,
				function (ci) {
					return A2(
						_elm_lang$core$Result$andThen,
						function (ri) {
							return _elm_lang$core$Result$Ok(ci + (ri * radix));
						},
						A2(_fredcy$elm_parseint$ParseInt$parseIntR, radix, _p0._0._1));
				},
				A2(_fredcy$elm_parseint$ParseInt$intFromChar, radix, _p0._0._0));
		}
	});
var _fredcy$elm_parseint$ParseInt$parseIntRadix = F2(
	function (radix, string) {
		return ((_elm_lang$core$Native_Utils.cmp(2, radix) < 1) && (_elm_lang$core$Native_Utils.cmp(radix, 36) < 1)) ? A2(
			_fredcy$elm_parseint$ParseInt$parseIntR,
			radix,
			_elm_lang$core$String$reverse(string)) : _elm_lang$core$Result$Err(
			_fredcy$elm_parseint$ParseInt$InvalidRadix(radix));
	});
var _fredcy$elm_parseint$ParseInt$parseInt = _fredcy$elm_parseint$ParseInt$parseIntRadix(10);
var _fredcy$elm_parseint$ParseInt$parseIntOct = _fredcy$elm_parseint$ParseInt$parseIntRadix(8);
var _fredcy$elm_parseint$ParseInt$parseIntHex = _fredcy$elm_parseint$ParseInt$parseIntRadix(16);

var _marcosh$elm_html_to_unicode$ElmEscapeHtml$friendlyConverterDictionary = _elm_lang$core$Dict$fromList(
	A2(
		_elm_lang$core$List$map,
		function (_p0) {
			var _p1 = _p0;
			return {
				ctor: '_Tuple2',
				_0: _p1._0,
				_1: _elm_lang$core$Char$fromCode(_p1._1)
			};
		},
		{
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'quot', _1: 34},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'amp', _1: 38},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'lt', _1: 60},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'gt', _1: 62},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'nbsp', _1: 160},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'iexcl', _1: 161},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'cent', _1: 162},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'pound', _1: 163},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'curren', _1: 164},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'yen', _1: 165},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'brvbar', _1: 166},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'sect', _1: 167},
														_1: {
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: 'uml', _1: 168},
															_1: {
																ctor: '::',
																_0: {ctor: '_Tuple2', _0: 'copy', _1: 169},
																_1: {
																	ctor: '::',
																	_0: {ctor: '_Tuple2', _0: 'ordf', _1: 170},
																	_1: {
																		ctor: '::',
																		_0: {ctor: '_Tuple2', _0: 'laquo', _1: 171},
																		_1: {
																			ctor: '::',
																			_0: {ctor: '_Tuple2', _0: 'not', _1: 172},
																			_1: {
																				ctor: '::',
																				_0: {ctor: '_Tuple2', _0: 'shy', _1: 173},
																				_1: {
																					ctor: '::',
																					_0: {ctor: '_Tuple2', _0: 'reg', _1: 174},
																					_1: {
																						ctor: '::',
																						_0: {ctor: '_Tuple2', _0: 'macr', _1: 175},
																						_1: {
																							ctor: '::',
																							_0: {ctor: '_Tuple2', _0: 'deg', _1: 176},
																							_1: {
																								ctor: '::',
																								_0: {ctor: '_Tuple2', _0: 'plusmn', _1: 177},
																								_1: {
																									ctor: '::',
																									_0: {ctor: '_Tuple2', _0: 'sup2', _1: 178},
																									_1: {
																										ctor: '::',
																										_0: {ctor: '_Tuple2', _0: 'sup3', _1: 179},
																										_1: {
																											ctor: '::',
																											_0: {ctor: '_Tuple2', _0: 'acute', _1: 180},
																											_1: {
																												ctor: '::',
																												_0: {ctor: '_Tuple2', _0: 'micro', _1: 181},
																												_1: {
																													ctor: '::',
																													_0: {ctor: '_Tuple2', _0: 'para', _1: 182},
																													_1: {
																														ctor: '::',
																														_0: {ctor: '_Tuple2', _0: 'middot', _1: 183},
																														_1: {
																															ctor: '::',
																															_0: {ctor: '_Tuple2', _0: 'cedil', _1: 184},
																															_1: {
																																ctor: '::',
																																_0: {ctor: '_Tuple2', _0: 'sup1', _1: 185},
																																_1: {
																																	ctor: '::',
																																	_0: {ctor: '_Tuple2', _0: 'ordm', _1: 186},
																																	_1: {
																																		ctor: '::',
																																		_0: {ctor: '_Tuple2', _0: 'raquo', _1: 187},
																																		_1: {
																																			ctor: '::',
																																			_0: {ctor: '_Tuple2', _0: 'frac14', _1: 188},
																																			_1: {
																																				ctor: '::',
																																				_0: {ctor: '_Tuple2', _0: 'frac12', _1: 189},
																																				_1: {
																																					ctor: '::',
																																					_0: {ctor: '_Tuple2', _0: 'frac34', _1: 190},
																																					_1: {
																																						ctor: '::',
																																						_0: {ctor: '_Tuple2', _0: 'iquest', _1: 191},
																																						_1: {
																																							ctor: '::',
																																							_0: {ctor: '_Tuple2', _0: 'Agrave', _1: 192},
																																							_1: {
																																								ctor: '::',
																																								_0: {ctor: '_Tuple2', _0: 'Aacute', _1: 193},
																																								_1: {
																																									ctor: '::',
																																									_0: {ctor: '_Tuple2', _0: 'Acirc', _1: 194},
																																									_1: {
																																										ctor: '::',
																																										_0: {ctor: '_Tuple2', _0: 'Atilde', _1: 195},
																																										_1: {
																																											ctor: '::',
																																											_0: {ctor: '_Tuple2', _0: 'Auml', _1: 196},
																																											_1: {
																																												ctor: '::',
																																												_0: {ctor: '_Tuple2', _0: 'Aring', _1: 197},
																																												_1: {
																																													ctor: '::',
																																													_0: {ctor: '_Tuple2', _0: 'AElig', _1: 198},
																																													_1: {
																																														ctor: '::',
																																														_0: {ctor: '_Tuple2', _0: 'Ccedil', _1: 199},
																																														_1: {
																																															ctor: '::',
																																															_0: {ctor: '_Tuple2', _0: 'Egrave', _1: 200},
																																															_1: {
																																																ctor: '::',
																																																_0: {ctor: '_Tuple2', _0: 'Eacute', _1: 201},
																																																_1: {
																																																	ctor: '::',
																																																	_0: {ctor: '_Tuple2', _0: 'Ecirc', _1: 202},
																																																	_1: {
																																																		ctor: '::',
																																																		_0: {ctor: '_Tuple2', _0: 'Euml', _1: 203},
																																																		_1: {
																																																			ctor: '::',
																																																			_0: {ctor: '_Tuple2', _0: 'Igrave', _1: 204},
																																																			_1: {
																																																				ctor: '::',
																																																				_0: {ctor: '_Tuple2', _0: 'Iacute', _1: 205},
																																																				_1: {
																																																					ctor: '::',
																																																					_0: {ctor: '_Tuple2', _0: 'Icirc', _1: 206},
																																																					_1: {
																																																						ctor: '::',
																																																						_0: {ctor: '_Tuple2', _0: 'Iuml', _1: 207},
																																																						_1: {
																																																							ctor: '::',
																																																							_0: {ctor: '_Tuple2', _0: 'ETH', _1: 208},
																																																							_1: {
																																																								ctor: '::',
																																																								_0: {ctor: '_Tuple2', _0: 'Ntilde', _1: 209},
																																																								_1: {
																																																									ctor: '::',
																																																									_0: {ctor: '_Tuple2', _0: 'Ograve', _1: 210},
																																																									_1: {
																																																										ctor: '::',
																																																										_0: {ctor: '_Tuple2', _0: 'Oacute', _1: 211},
																																																										_1: {
																																																											ctor: '::',
																																																											_0: {ctor: '_Tuple2', _0: 'Ocirc', _1: 212},
																																																											_1: {
																																																												ctor: '::',
																																																												_0: {ctor: '_Tuple2', _0: 'Otilde', _1: 213},
																																																												_1: {
																																																													ctor: '::',
																																																													_0: {ctor: '_Tuple2', _0: 'Ouml', _1: 214},
																																																													_1: {
																																																														ctor: '::',
																																																														_0: {ctor: '_Tuple2', _0: 'times', _1: 215},
																																																														_1: {
																																																															ctor: '::',
																																																															_0: {ctor: '_Tuple2', _0: 'Oslash', _1: 216},
																																																															_1: {
																																																																ctor: '::',
																																																																_0: {ctor: '_Tuple2', _0: 'Ugrave', _1: 217},
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: {ctor: '_Tuple2', _0: 'Uacute', _1: 218},
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: {ctor: '_Tuple2', _0: 'Ucirc', _1: 219},
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: {ctor: '_Tuple2', _0: 'Uuml', _1: 220},
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: {ctor: '_Tuple2', _0: 'Yacute', _1: 221},
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: {ctor: '_Tuple2', _0: 'THORN', _1: 222},
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: {ctor: '_Tuple2', _0: 'szlig', _1: 223},
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: {ctor: '_Tuple2', _0: 'agrave', _1: 224},
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: {ctor: '_Tuple2', _0: 'aacute', _1: 225},
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: {ctor: '_Tuple2', _0: 'acirc', _1: 226},
																																																																									_1: {
																																																																										ctor: '::',
																																																																										_0: {ctor: '_Tuple2', _0: 'atilde', _1: 227},
																																																																										_1: {
																																																																											ctor: '::',
																																																																											_0: {ctor: '_Tuple2', _0: 'auml', _1: 228},
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: {ctor: '_Tuple2', _0: 'aring', _1: 229},
																																																																												_1: {
																																																																													ctor: '::',
																																																																													_0: {ctor: '_Tuple2', _0: 'aelig', _1: 230},
																																																																													_1: {
																																																																														ctor: '::',
																																																																														_0: {ctor: '_Tuple2', _0: 'ccedil', _1: 231},
																																																																														_1: {
																																																																															ctor: '::',
																																																																															_0: {ctor: '_Tuple2', _0: 'egrave', _1: 232},
																																																																															_1: {
																																																																																ctor: '::',
																																																																																_0: {ctor: '_Tuple2', _0: 'eacute', _1: 233},
																																																																																_1: {
																																																																																	ctor: '::',
																																																																																	_0: {ctor: '_Tuple2', _0: 'ecirc', _1: 234},
																																																																																	_1: {
																																																																																		ctor: '::',
																																																																																		_0: {ctor: '_Tuple2', _0: 'euml', _1: 235},
																																																																																		_1: {
																																																																																			ctor: '::',
																																																																																			_0: {ctor: '_Tuple2', _0: 'igrave', _1: 236},
																																																																																			_1: {
																																																																																				ctor: '::',
																																																																																				_0: {ctor: '_Tuple2', _0: 'iacute', _1: 237},
																																																																																				_1: {
																																																																																					ctor: '::',
																																																																																					_0: {ctor: '_Tuple2', _0: 'icirc', _1: 238},
																																																																																					_1: {
																																																																																						ctor: '::',
																																																																																						_0: {ctor: '_Tuple2', _0: 'iuml', _1: 239},
																																																																																						_1: {
																																																																																							ctor: '::',
																																																																																							_0: {ctor: '_Tuple2', _0: 'eth', _1: 240},
																																																																																							_1: {
																																																																																								ctor: '::',
																																																																																								_0: {ctor: '_Tuple2', _0: 'ntilde', _1: 241},
																																																																																								_1: {
																																																																																									ctor: '::',
																																																																																									_0: {ctor: '_Tuple2', _0: 'ograve', _1: 242},
																																																																																									_1: {
																																																																																										ctor: '::',
																																																																																										_0: {ctor: '_Tuple2', _0: 'oacute', _1: 243},
																																																																																										_1: {
																																																																																											ctor: '::',
																																																																																											_0: {ctor: '_Tuple2', _0: 'ocirc', _1: 244},
																																																																																											_1: {
																																																																																												ctor: '::',
																																																																																												_0: {ctor: '_Tuple2', _0: 'otilde', _1: 245},
																																																																																												_1: {
																																																																																													ctor: '::',
																																																																																													_0: {ctor: '_Tuple2', _0: 'ouml', _1: 246},
																																																																																													_1: {
																																																																																														ctor: '::',
																																																																																														_0: {ctor: '_Tuple2', _0: 'divide', _1: 247},
																																																																																														_1: {
																																																																																															ctor: '::',
																																																																																															_0: {ctor: '_Tuple2', _0: 'oslash', _1: 248},
																																																																																															_1: {
																																																																																																ctor: '::',
																																																																																																_0: {ctor: '_Tuple2', _0: 'ugrave', _1: 249},
																																																																																																_1: {
																																																																																																	ctor: '::',
																																																																																																	_0: {ctor: '_Tuple2', _0: 'uacute', _1: 250},
																																																																																																	_1: {
																																																																																																		ctor: '::',
																																																																																																		_0: {ctor: '_Tuple2', _0: 'ucirc', _1: 251},
																																																																																																		_1: {
																																																																																																			ctor: '::',
																																																																																																			_0: {ctor: '_Tuple2', _0: 'uuml', _1: 252},
																																																																																																			_1: {
																																																																																																				ctor: '::',
																																																																																																				_0: {ctor: '_Tuple2', _0: 'yacute', _1: 253},
																																																																																																				_1: {
																																																																																																					ctor: '::',
																																																																																																					_0: {ctor: '_Tuple2', _0: 'thorn', _1: 254},
																																																																																																					_1: {
																																																																																																						ctor: '::',
																																																																																																						_0: {ctor: '_Tuple2', _0: 'yuml', _1: 255},
																																																																																																						_1: {
																																																																																																							ctor: '::',
																																																																																																							_0: {ctor: '_Tuple2', _0: 'Amacr', _1: 256},
																																																																																																							_1: {
																																																																																																								ctor: '::',
																																																																																																								_0: {ctor: '_Tuple2', _0: 'amacr', _1: 257},
																																																																																																								_1: {
																																																																																																									ctor: '::',
																																																																																																									_0: {ctor: '_Tuple2', _0: 'Abreve', _1: 258},
																																																																																																									_1: {
																																																																																																										ctor: '::',
																																																																																																										_0: {ctor: '_Tuple2', _0: 'abreve', _1: 259},
																																																																																																										_1: {
																																																																																																											ctor: '::',
																																																																																																											_0: {ctor: '_Tuple2', _0: 'Aogon', _1: 260},
																																																																																																											_1: {
																																																																																																												ctor: '::',
																																																																																																												_0: {ctor: '_Tuple2', _0: 'aogon', _1: 261},
																																																																																																												_1: {
																																																																																																													ctor: '::',
																																																																																																													_0: {ctor: '_Tuple2', _0: 'Cacute', _1: 262},
																																																																																																													_1: {
																																																																																																														ctor: '::',
																																																																																																														_0: {ctor: '_Tuple2', _0: 'cacute', _1: 263},
																																																																																																														_1: {
																																																																																																															ctor: '::',
																																																																																																															_0: {ctor: '_Tuple2', _0: 'Ccirc', _1: 264},
																																																																																																															_1: {
																																																																																																																ctor: '::',
																																																																																																																_0: {ctor: '_Tuple2', _0: 'ccirc', _1: 265},
																																																																																																																_1: {
																																																																																																																	ctor: '::',
																																																																																																																	_0: {ctor: '_Tuple2', _0: 'Cdod', _1: 266},
																																																																																																																	_1: {
																																																																																																																		ctor: '::',
																																																																																																																		_0: {ctor: '_Tuple2', _0: 'cdot', _1: 267},
																																																																																																																		_1: {
																																																																																																																			ctor: '::',
																																																																																																																			_0: {ctor: '_Tuple2', _0: 'Ccaron', _1: 268},
																																																																																																																			_1: {
																																																																																																																				ctor: '::',
																																																																																																																				_0: {ctor: '_Tuple2', _0: 'ccaron', _1: 269},
																																																																																																																				_1: {
																																																																																																																					ctor: '::',
																																																																																																																					_0: {ctor: '_Tuple2', _0: 'Dcaron', _1: 270},
																																																																																																																					_1: {
																																																																																																																						ctor: '::',
																																																																																																																						_0: {ctor: '_Tuple2', _0: 'dcaron', _1: 271},
																																																																																																																						_1: {
																																																																																																																							ctor: '::',
																																																																																																																							_0: {ctor: '_Tuple2', _0: 'Dstork', _1: 272},
																																																																																																																							_1: {
																																																																																																																								ctor: '::',
																																																																																																																								_0: {ctor: '_Tuple2', _0: 'dstork', _1: 273},
																																																																																																																								_1: {
																																																																																																																									ctor: '::',
																																																																																																																									_0: {ctor: '_Tuple2', _0: 'Emacr', _1: 274},
																																																																																																																									_1: {
																																																																																																																										ctor: '::',
																																																																																																																										_0: {ctor: '_Tuple2', _0: 'emacr', _1: 275},
																																																																																																																										_1: {
																																																																																																																											ctor: '::',
																																																																																																																											_0: {ctor: '_Tuple2', _0: 'Edot', _1: 278},
																																																																																																																											_1: {
																																																																																																																												ctor: '::',
																																																																																																																												_0: {ctor: '_Tuple2', _0: 'edot', _1: 279},
																																																																																																																												_1: {
																																																																																																																													ctor: '::',
																																																																																																																													_0: {ctor: '_Tuple2', _0: 'Eogon', _1: 280},
																																																																																																																													_1: {
																																																																																																																														ctor: '::',
																																																																																																																														_0: {ctor: '_Tuple2', _0: 'eogon', _1: 281},
																																																																																																																														_1: {
																																																																																																																															ctor: '::',
																																																																																																																															_0: {ctor: '_Tuple2', _0: 'Ecaron', _1: 282},
																																																																																																																															_1: {
																																																																																																																																ctor: '::',
																																																																																																																																_0: {ctor: '_Tuple2', _0: 'ecaron', _1: 283},
																																																																																																																																_1: {
																																																																																																																																	ctor: '::',
																																																																																																																																	_0: {ctor: '_Tuple2', _0: 'Gcirc', _1: 284},
																																																																																																																																	_1: {
																																																																																																																																		ctor: '::',
																																																																																																																																		_0: {ctor: '_Tuple2', _0: 'gcirc', _1: 285},
																																																																																																																																		_1: {
																																																																																																																																			ctor: '::',
																																																																																																																																			_0: {ctor: '_Tuple2', _0: 'Gbreve', _1: 286},
																																																																																																																																			_1: {
																																																																																																																																				ctor: '::',
																																																																																																																																				_0: {ctor: '_Tuple2', _0: 'gbreve', _1: 287},
																																																																																																																																				_1: {
																																																																																																																																					ctor: '::',
																																																																																																																																					_0: {ctor: '_Tuple2', _0: 'Gdot', _1: 288},
																																																																																																																																					_1: {
																																																																																																																																						ctor: '::',
																																																																																																																																						_0: {ctor: '_Tuple2', _0: 'gdot', _1: 289},
																																																																																																																																						_1: {
																																																																																																																																							ctor: '::',
																																																																																																																																							_0: {ctor: '_Tuple2', _0: 'Gcedil', _1: 290},
																																																																																																																																							_1: {
																																																																																																																																								ctor: '::',
																																																																																																																																								_0: {ctor: '_Tuple2', _0: 'gcedil', _1: 291},
																																																																																																																																								_1: {
																																																																																																																																									ctor: '::',
																																																																																																																																									_0: {ctor: '_Tuple2', _0: 'Hcirc', _1: 292},
																																																																																																																																									_1: {
																																																																																																																																										ctor: '::',
																																																																																																																																										_0: {ctor: '_Tuple2', _0: 'hcirc', _1: 293},
																																																																																																																																										_1: {
																																																																																																																																											ctor: '::',
																																																																																																																																											_0: {ctor: '_Tuple2', _0: 'Hstork', _1: 294},
																																																																																																																																											_1: {
																																																																																																																																												ctor: '::',
																																																																																																																																												_0: {ctor: '_Tuple2', _0: 'hstork', _1: 295},
																																																																																																																																												_1: {
																																																																																																																																													ctor: '::',
																																																																																																																																													_0: {ctor: '_Tuple2', _0: 'Itilde', _1: 296},
																																																																																																																																													_1: {
																																																																																																																																														ctor: '::',
																																																																																																																																														_0: {ctor: '_Tuple2', _0: 'itilde', _1: 297},
																																																																																																																																														_1: {
																																																																																																																																															ctor: '::',
																																																																																																																																															_0: {ctor: '_Tuple2', _0: 'Imacr', _1: 298},
																																																																																																																																															_1: {
																																																																																																																																																ctor: '::',
																																																																																																																																																_0: {ctor: '_Tuple2', _0: 'imacr', _1: 299},
																																																																																																																																																_1: {
																																																																																																																																																	ctor: '::',
																																																																																																																																																	_0: {ctor: '_Tuple2', _0: 'Iogon', _1: 302},
																																																																																																																																																	_1: {
																																																																																																																																																		ctor: '::',
																																																																																																																																																		_0: {ctor: '_Tuple2', _0: 'iogon', _1: 303},
																																																																																																																																																		_1: {
																																																																																																																																																			ctor: '::',
																																																																																																																																																			_0: {ctor: '_Tuple2', _0: 'Idot', _1: 304},
																																																																																																																																																			_1: {
																																																																																																																																																				ctor: '::',
																																																																																																																																																				_0: {ctor: '_Tuple2', _0: 'inodot', _1: 305},
																																																																																																																																																				_1: {
																																																																																																																																																					ctor: '::',
																																																																																																																																																					_0: {ctor: '_Tuple2', _0: 'IJlog', _1: 306},
																																																																																																																																																					_1: {
																																																																																																																																																						ctor: '::',
																																																																																																																																																						_0: {ctor: '_Tuple2', _0: 'ijlig', _1: 307},
																																																																																																																																																						_1: {
																																																																																																																																																							ctor: '::',
																																																																																																																																																							_0: {ctor: '_Tuple2', _0: 'Jcirc', _1: 308},
																																																																																																																																																							_1: {
																																																																																																																																																								ctor: '::',
																																																																																																																																																								_0: {ctor: '_Tuple2', _0: 'jcirc', _1: 309},
																																																																																																																																																								_1: {
																																																																																																																																																									ctor: '::',
																																																																																																																																																									_0: {ctor: '_Tuple2', _0: 'Kcedil', _1: 310},
																																																																																																																																																									_1: {
																																																																																																																																																										ctor: '::',
																																																																																																																																																										_0: {ctor: '_Tuple2', _0: 'kcedil', _1: 311},
																																																																																																																																																										_1: {
																																																																																																																																																											ctor: '::',
																																																																																																																																																											_0: {ctor: '_Tuple2', _0: 'kgreen', _1: 312},
																																																																																																																																																											_1: {
																																																																																																																																																												ctor: '::',
																																																																																																																																																												_0: {ctor: '_Tuple2', _0: 'Lacute', _1: 313},
																																																																																																																																																												_1: {
																																																																																																																																																													ctor: '::',
																																																																																																																																																													_0: {ctor: '_Tuple2', _0: 'lacute', _1: 314},
																																																																																																																																																													_1: {
																																																																																																																																																														ctor: '::',
																																																																																																																																																														_0: {ctor: '_Tuple2', _0: 'Lcedil', _1: 315},
																																																																																																																																																														_1: {
																																																																																																																																																															ctor: '::',
																																																																																																																																																															_0: {ctor: '_Tuple2', _0: 'lcedil', _1: 316},
																																																																																																																																																															_1: {
																																																																																																																																																																ctor: '::',
																																																																																																																																																																_0: {ctor: '_Tuple2', _0: 'Lcaron', _1: 317},
																																																																																																																																																																_1: {
																																																																																																																																																																	ctor: '::',
																																																																																																																																																																	_0: {ctor: '_Tuple2', _0: 'lcaron', _1: 318},
																																																																																																																																																																	_1: {
																																																																																																																																																																		ctor: '::',
																																																																																																																																																																		_0: {ctor: '_Tuple2', _0: 'Lmodot', _1: 319},
																																																																																																																																																																		_1: {
																																																																																																																																																																			ctor: '::',
																																																																																																																																																																			_0: {ctor: '_Tuple2', _0: 'lmidot', _1: 320},
																																																																																																																																																																			_1: {
																																																																																																																																																																				ctor: '::',
																																																																																																																																																																				_0: {ctor: '_Tuple2', _0: 'Lstork', _1: 321},
																																																																																																																																																																				_1: {
																																																																																																																																																																					ctor: '::',
																																																																																																																																																																					_0: {ctor: '_Tuple2', _0: 'lstork', _1: 322},
																																																																																																																																																																					_1: {
																																																																																																																																																																						ctor: '::',
																																																																																																																																																																						_0: {ctor: '_Tuple2', _0: 'Nacute', _1: 323},
																																																																																																																																																																						_1: {
																																																																																																																																																																							ctor: '::',
																																																																																																																																																																							_0: {ctor: '_Tuple2', _0: 'nacute', _1: 324},
																																																																																																																																																																							_1: {
																																																																																																																																																																								ctor: '::',
																																																																																																																																																																								_0: {ctor: '_Tuple2', _0: 'Ncedil', _1: 325},
																																																																																																																																																																								_1: {
																																																																																																																																																																									ctor: '::',
																																																																																																																																																																									_0: {ctor: '_Tuple2', _0: 'ncedil', _1: 326},
																																																																																																																																																																									_1: {
																																																																																																																																																																										ctor: '::',
																																																																																																																																																																										_0: {ctor: '_Tuple2', _0: 'Ncaron', _1: 327},
																																																																																																																																																																										_1: {
																																																																																																																																																																											ctor: '::',
																																																																																																																																																																											_0: {ctor: '_Tuple2', _0: 'ncaron', _1: 328},
																																																																																																																																																																											_1: {
																																																																																																																																																																												ctor: '::',
																																																																																																																																																																												_0: {ctor: '_Tuple2', _0: 'napos', _1: 329},
																																																																																																																																																																												_1: {
																																																																																																																																																																													ctor: '::',
																																																																																																																																																																													_0: {ctor: '_Tuple2', _0: 'ENG', _1: 330},
																																																																																																																																																																													_1: {
																																																																																																																																																																														ctor: '::',
																																																																																																																																																																														_0: {ctor: '_Tuple2', _0: 'eng', _1: 331},
																																																																																																																																																																														_1: {
																																																																																																																																																																															ctor: '::',
																																																																																																																																																																															_0: {ctor: '_Tuple2', _0: 'Omacr', _1: 332},
																																																																																																																																																																															_1: {
																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																_0: {ctor: '_Tuple2', _0: 'omacr', _1: 333},
																																																																																																																																																																																_1: {
																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																	_0: {ctor: '_Tuple2', _0: 'Odblac', _1: 336},
																																																																																																																																																																																	_1: {
																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																		_0: {ctor: '_Tuple2', _0: 'odblac', _1: 337},
																																																																																																																																																																																		_1: {
																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																			_0: {ctor: '_Tuple2', _0: 'OEling', _1: 338},
																																																																																																																																																																																			_1: {
																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																				_0: {ctor: '_Tuple2', _0: 'oelig', _1: 339},
																																																																																																																																																																																				_1: {
																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																					_0: {ctor: '_Tuple2', _0: 'Racute', _1: 340},
																																																																																																																																																																																					_1: {
																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																						_0: {ctor: '_Tuple2', _0: 'racute', _1: 341},
																																																																																																																																																																																						_1: {
																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																							_0: {ctor: '_Tuple2', _0: 'Rcedil', _1: 342},
																																																																																																																																																																																							_1: {
																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																								_0: {ctor: '_Tuple2', _0: 'rcedil', _1: 343},
																																																																																																																																																																																								_1: {
																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																									_0: {ctor: '_Tuple2', _0: 'Rcaron', _1: 344},
																																																																																																																																																																																									_1: {
																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																										_0: {ctor: '_Tuple2', _0: 'rcaron', _1: 345},
																																																																																																																																																																																										_1: {
																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																											_0: {ctor: '_Tuple2', _0: 'Sacute', _1: 346},
																																																																																																																																																																																											_1: {
																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																												_0: {ctor: '_Tuple2', _0: 'sacute', _1: 347},
																																																																																																																																																																																												_1: {
																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																													_0: {ctor: '_Tuple2', _0: 'Scirc', _1: 348},
																																																																																																																																																																																													_1: {
																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																														_0: {ctor: '_Tuple2', _0: 'scirc', _1: 349},
																																																																																																																																																																																														_1: {
																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																															_0: {ctor: '_Tuple2', _0: 'Scedil', _1: 350},
																																																																																																																																																																																															_1: {
																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																_0: {ctor: '_Tuple2', _0: 'scedil', _1: 351},
																																																																																																																																																																																																_1: {
																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																	_0: {ctor: '_Tuple2', _0: 'Scaron', _1: 352},
																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																		_0: {ctor: '_Tuple2', _0: 'scaron', _1: 353},
																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																			_0: {ctor: '_Tuple2', _0: 'Tcedil', _1: 354},
																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																				_0: {ctor: '_Tuple2', _0: 'tcedil', _1: 355},
																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																					_0: {ctor: '_Tuple2', _0: 'Tcaron', _1: 356},
																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																						_0: {ctor: '_Tuple2', _0: 'tcaron', _1: 357},
																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																							_0: {ctor: '_Tuple2', _0: 'Tstork', _1: 358},
																																																																																																																																																																																																							_1: {
																																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																																								_0: {ctor: '_Tuple2', _0: 'tstork', _1: 359},
																																																																																																																																																																																																								_1: {
																																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																																									_0: {ctor: '_Tuple2', _0: 'Utilde', _1: 360},
																																																																																																																																																																																																									_1: {
																																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																																										_0: {ctor: '_Tuple2', _0: 'utilde', _1: 361},
																																																																																																																																																																																																										_1: {
																																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																																											_0: {ctor: '_Tuple2', _0: 'Umacr', _1: 362},
																																																																																																																																																																																																											_1: {
																																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																																												_0: {ctor: '_Tuple2', _0: 'umacr', _1: 363},
																																																																																																																																																																																																												_1: {
																																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																																													_0: {ctor: '_Tuple2', _0: 'Ubreve', _1: 364},
																																																																																																																																																																																																													_1: {
																																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																																														_0: {ctor: '_Tuple2', _0: 'ubreve', _1: 365},
																																																																																																																																																																																																														_1: {
																																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																																															_0: {ctor: '_Tuple2', _0: 'Uring', _1: 366},
																																																																																																																																																																																																															_1: {
																																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																																_0: {ctor: '_Tuple2', _0: 'uring', _1: 367},
																																																																																																																																																																																																																_1: {
																																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																																	_0: {ctor: '_Tuple2', _0: 'Udblac', _1: 368},
																																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																																		_0: {ctor: '_Tuple2', _0: 'udblac', _1: 369},
																																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																																			_0: {ctor: '_Tuple2', _0: 'Uogon', _1: 370},
																																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																																				_0: {ctor: '_Tuple2', _0: 'uogon', _1: 371},
																																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																																					_0: {ctor: '_Tuple2', _0: 'Wcirc', _1: 372},
																																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																																						_0: {ctor: '_Tuple2', _0: 'wcirc', _1: 373},
																																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																																							_0: {ctor: '_Tuple2', _0: 'Ycirc', _1: 374},
																																																																																																																																																																																																																							_1: {
																																																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																																																								_0: {ctor: '_Tuple2', _0: 'ycirc', _1: 375},
																																																																																																																																																																																																																								_1: {
																																																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																																																									_0: {ctor: '_Tuple2', _0: 'Yuml', _1: 376},
																																																																																																																																																																																																																									_1: {
																																																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																																																										_0: {ctor: '_Tuple2', _0: 'Zacute', _1: 377},
																																																																																																																																																																																																																										_1: {
																																																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																																																											_0: {ctor: '_Tuple2', _0: 'zacute', _1: 378},
																																																																																																																																																																																																																											_1: {
																																																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																																																												_0: {ctor: '_Tuple2', _0: 'Zdot', _1: 379},
																																																																																																																																																																																																																												_1: {
																																																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																																																													_0: {ctor: '_Tuple2', _0: 'zdot', _1: 380},
																																																																																																																																																																																																																													_1: {
																																																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																																																														_0: {ctor: '_Tuple2', _0: 'Zcaron', _1: 381},
																																																																																																																																																																																																																														_1: {
																																																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																																																															_0: {ctor: '_Tuple2', _0: 'zcaron', _1: 382},
																																																																																																																																																																																																																															_1: {
																																																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																																																_0: {ctor: '_Tuple2', _0: 'fnof', _1: 402},
																																																																																																																																																																																																																																_1: {
																																																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																																																	_0: {ctor: '_Tuple2', _0: 'imped', _1: 437},
																																																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																																																		_0: {ctor: '_Tuple2', _0: 'gacute', _1: 501},
																																																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																																																			_0: {ctor: '_Tuple2', _0: 'jmath', _1: 567},
																																																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																																																				_0: {ctor: '_Tuple2', _0: 'circ', _1: 710},
																																																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																																																					_0: {ctor: '_Tuple2', _0: 'tilde', _1: 732},
																																																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																																																						_0: {ctor: '_Tuple2', _0: 'Alpha', _1: 913},
																																																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																																																							_0: {ctor: '_Tuple2', _0: 'Beta', _1: 914},
																																																																																																																																																																																																																																							_1: {
																																																																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																																																																								_0: {ctor: '_Tuple2', _0: 'Gamma', _1: 915},
																																																																																																																																																																																																																																								_1: {
																																																																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																																																																									_0: {ctor: '_Tuple2', _0: 'Delta', _1: 916},
																																																																																																																																																																																																																																									_1: {
																																																																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																																																																										_0: {ctor: '_Tuple2', _0: 'Epsilon', _1: 917},
																																																																																																																																																																																																																																										_1: {
																																																																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																																																																											_0: {ctor: '_Tuple2', _0: 'Zeta', _1: 918},
																																																																																																																																																																																																																																											_1: {
																																																																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																																																																												_0: {ctor: '_Tuple2', _0: 'Eta', _1: 919},
																																																																																																																																																																																																																																												_1: {
																																																																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																																																																													_0: {ctor: '_Tuple2', _0: 'Theta', _1: 920},
																																																																																																																																																																																																																																													_1: {
																																																																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																																																																														_0: {ctor: '_Tuple2', _0: 'Iota', _1: 921},
																																																																																																																																																																																																																																														_1: {
																																																																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																																																																															_0: {ctor: '_Tuple2', _0: 'Kappa', _1: 922},
																																																																																																																																																																																																																																															_1: {
																																																																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																																																																_0: {ctor: '_Tuple2', _0: 'Lambda', _1: 923},
																																																																																																																																																																																																																																																_1: {
																																																																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																																																																	_0: {ctor: '_Tuple2', _0: 'Mu', _1: 924},
																																																																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																																																																		_0: {ctor: '_Tuple2', _0: 'Nu', _1: 925},
																																																																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																																																																			_0: {ctor: '_Tuple2', _0: 'Xi', _1: 926},
																																																																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																																																																				_0: {ctor: '_Tuple2', _0: 'Omicron', _1: 927},
																																																																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																																																																					_0: {ctor: '_Tuple2', _0: 'Pi', _1: 928},
																																																																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																																																																						_0: {ctor: '_Tuple2', _0: 'Rho', _1: 929},
																																																																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																																																																							_0: {ctor: '_Tuple2', _0: 'Sigma', _1: 931},
																																																																																																																																																																																																																																																							_1: {
																																																																																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																																																																																								_0: {ctor: '_Tuple2', _0: 'Tau', _1: 932},
																																																																																																																																																																																																																																																								_1: {
																																																																																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																																																																																									_0: {ctor: '_Tuple2', _0: 'Upsilon', _1: 933},
																																																																																																																																																																																																																																																									_1: {
																																																																																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																																																																																										_0: {ctor: '_Tuple2', _0: 'Phi', _1: 934},
																																																																																																																																																																																																																																																										_1: {
																																																																																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																																																																																											_0: {ctor: '_Tuple2', _0: 'Chi', _1: 935},
																																																																																																																																																																																																																																																											_1: {
																																																																																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																																																																																												_0: {ctor: '_Tuple2', _0: 'Psi', _1: 936},
																																																																																																																																																																																																																																																												_1: {
																																																																																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																																																																																													_0: {ctor: '_Tuple2', _0: 'Omega', _1: 937},
																																																																																																																																																																																																																																																													_1: {
																																																																																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																																																																																														_0: {ctor: '_Tuple2', _0: 'alpha', _1: 945},
																																																																																																																																																																																																																																																														_1: {
																																																																																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																																																																																															_0: {ctor: '_Tuple2', _0: 'beta', _1: 946},
																																																																																																																																																																																																																																																															_1: {
																																																																																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																																																																																_0: {ctor: '_Tuple2', _0: 'gamma', _1: 947},
																																																																																																																																																																																																																																																																_1: {
																																																																																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																																																																																	_0: {ctor: '_Tuple2', _0: 'delta', _1: 948},
																																																																																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																																																																																		_0: {ctor: '_Tuple2', _0: 'epsilon', _1: 949},
																																																																																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																																																																																			_0: {ctor: '_Tuple2', _0: 'zeta', _1: 950},
																																																																																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																																																																																				_0: {ctor: '_Tuple2', _0: 'eta', _1: 951},
																																																																																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																																																																																					_0: {ctor: '_Tuple2', _0: 'theta', _1: 952},
																																																																																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																																																																																						_0: {ctor: '_Tuple2', _0: 'iota', _1: 953},
																																																																																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																																																																																							_0: {ctor: '_Tuple2', _0: 'kappa', _1: 954},
																																																																																																																																																																																																																																																																							_1: {
																																																																																																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																																																																																																								_0: {ctor: '_Tuple2', _0: 'lambda', _1: 955},
																																																																																																																																																																																																																																																																								_1: {
																																																																																																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																																																																																																									_0: {ctor: '_Tuple2', _0: 'mu', _1: 956},
																																																																																																																																																																																																																																																																									_1: {
																																																																																																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																																																																																																										_0: {ctor: '_Tuple2', _0: 'nu', _1: 957},
																																																																																																																																																																																																																																																																										_1: {
																																																																																																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																																																																																																											_0: {ctor: '_Tuple2', _0: 'xi', _1: 958},
																																																																																																																																																																																																																																																																											_1: {
																																																																																																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																																																																																																												_0: {ctor: '_Tuple2', _0: 'omicron', _1: 959},
																																																																																																																																																																																																																																																																												_1: {
																																																																																																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																																																																																																													_0: {ctor: '_Tuple2', _0: 'pi', _1: 960},
																																																																																																																																																																																																																																																																													_1: {
																																																																																																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																																																																																																														_0: {ctor: '_Tuple2', _0: 'rho', _1: 961},
																																																																																																																																																																																																																																																																														_1: {
																																																																																																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																																																																																																															_0: {ctor: '_Tuple2', _0: 'sigmaf', _1: 962},
																																																																																																																																																																																																																																																																															_1: {
																																																																																																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																																																																																																_0: {ctor: '_Tuple2', _0: 'sigma', _1: 963},
																																																																																																																																																																																																																																																																																_1: {
																																																																																																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																																																																																																	_0: {ctor: '_Tuple2', _0: 'tau', _1: 934},
																																																																																																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																																																																																																		_0: {ctor: '_Tuple2', _0: 'upsilon', _1: 965},
																																																																																																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																																																																																																			_0: {ctor: '_Tuple2', _0: 'phi', _1: 966},
																																																																																																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																																																																																																				_0: {ctor: '_Tuple2', _0: 'chi', _1: 967},
																																																																																																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																																																																																																					_0: {ctor: '_Tuple2', _0: 'psi', _1: 968},
																																																																																																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																																																																																																						_0: {ctor: '_Tuple2', _0: 'omega', _1: 969},
																																																																																																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																																																																																																							_0: {ctor: '_Tuple2', _0: 'thetasym', _1: 977},
																																																																																																																																																																																																																																																																																							_1: {
																																																																																																																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																																																																																																																								_0: {ctor: '_Tuple2', _0: 'upsih', _1: 978},
																																																																																																																																																																																																																																																																																								_1: {
																																																																																																																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																																																																																																																									_0: {ctor: '_Tuple2', _0: 'straightphi', _1: 981},
																																																																																																																																																																																																																																																																																									_1: {
																																																																																																																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																																																																																																																										_0: {ctor: '_Tuple2', _0: 'piv', _1: 982},
																																																																																																																																																																																																																																																																																										_1: {
																																																																																																																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																																																																																																																											_0: {ctor: '_Tuple2', _0: 'Gammad', _1: 988},
																																																																																																																																																																																																																																																																																											_1: {
																																																																																																																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																																																																																																																												_0: {ctor: '_Tuple2', _0: 'gammad', _1: 989},
																																																																																																																																																																																																																																																																																												_1: {
																																																																																																																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																																																																																																																													_0: {ctor: '_Tuple2', _0: 'varkappa', _1: 1008},
																																																																																																																																																																																																																																																																																													_1: {
																																																																																																																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																																																																																																																														_0: {ctor: '_Tuple2', _0: 'varrho', _1: 1009},
																																																																																																																																																																																																																																																																																														_1: {
																																																																																																																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																																																																																																																															_0: {ctor: '_Tuple2', _0: 'straightepsilon', _1: 1013},
																																																																																																																																																																																																																																																																																															_1: {
																																																																																																																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																																																																																																																_0: {ctor: '_Tuple2', _0: 'backepsilon', _1: 1014},
																																																																																																																																																																																																																																																																																																_1: {
																																																																																																																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																																																																																																																	_0: {ctor: '_Tuple2', _0: 'ensp', _1: 8194},
																																																																																																																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																																																																																																																		_0: {ctor: '_Tuple2', _0: 'emsp', _1: 8195},
																																																																																																																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																																																																																																																			_0: {ctor: '_Tuple2', _0: 'thinsp', _1: 8201},
																																																																																																																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																																																																																																																				_0: {ctor: '_Tuple2', _0: 'zwnj', _1: 8204},
																																																																																																																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																																																																																																																					_0: {ctor: '_Tuple2', _0: 'zwj', _1: 8205},
																																																																																																																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																																																																																																																						_0: {ctor: '_Tuple2', _0: 'lrm', _1: 8206},
																																																																																																																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																																																																																																																							_0: {ctor: '_Tuple2', _0: 'rlm', _1: 8207},
																																																																																																																																																																																																																																																																																																							_1: {
																																																																																																																																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																																																																																																																																								_0: {ctor: '_Tuple2', _0: 'ndash', _1: 8211},
																																																																																																																																																																																																																																																																																																								_1: {
																																																																																																																																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																																																																																																																																									_0: {ctor: '_Tuple2', _0: 'mdash', _1: 8212},
																																																																																																																																																																																																																																																																																																									_1: {
																																																																																																																																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																																																																																																																																										_0: {ctor: '_Tuple2', _0: 'lsquo', _1: 8216},
																																																																																																																																																																																																																																																																																																										_1: {
																																																																																																																																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																																																																																																																																											_0: {ctor: '_Tuple2', _0: 'rsquo', _1: 8217},
																																																																																																																																																																																																																																																																																																											_1: {
																																																																																																																																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																																																																																																																																												_0: {ctor: '_Tuple2', _0: 'sbquo', _1: 8218},
																																																																																																																																																																																																																																																																																																												_1: {
																																																																																																																																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																																																																																																																																													_0: {ctor: '_Tuple2', _0: 'ldquo', _1: 8220},
																																																																																																																																																																																																																																																																																																													_1: {
																																																																																																																																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																																																																																																																																														_0: {ctor: '_Tuple2', _0: 'rdquo', _1: 8221},
																																																																																																																																																																																																																																																																																																														_1: {
																																																																																																																																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																																																																																																																																															_0: {ctor: '_Tuple2', _0: 'bdquo', _1: 8222},
																																																																																																																																																																																																																																																																																																															_1: {
																																																																																																																																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																																																																																																																																_0: {ctor: '_Tuple2', _0: 'dagger', _1: 8224},
																																																																																																																																																																																																																																																																																																																_1: {
																																																																																																																																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																																																																																																																																	_0: {ctor: '_Tuple2', _0: 'Dagger', _1: 8225},
																																																																																																																																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																																																																																																																																		_0: {ctor: '_Tuple2', _0: 'bull', _1: 8226},
																																																																																																																																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																																																																																																																																			_0: {ctor: '_Tuple2', _0: 'hellip', _1: 8230},
																																																																																																																																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																																																																																																																																				_0: {ctor: '_Tuple2', _0: 'permil', _1: 8240},
																																																																																																																																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																																																																																																																																					_0: {ctor: '_Tuple2', _0: 'prime', _1: 8242},
																																																																																																																																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																																																																																																																																						_0: {ctor: '_Tuple2', _0: 'Prime', _1: 8243},
																																																																																																																																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																																																																																																																																							_0: {ctor: '_Tuple2', _0: 'lsaquo', _1: 8249},
																																																																																																																																																																																																																																																																																																																							_1: {
																																																																																																																																																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																																																																																																																																																								_0: {ctor: '_Tuple2', _0: 'rsaquo', _1: 8250},
																																																																																																																																																																																																																																																																																																																								_1: {
																																																																																																																																																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																																																																																																																																																									_0: {ctor: '_Tuple2', _0: 'oline', _1: 8254},
																																																																																																																																																																																																																																																																																																																									_1: {
																																																																																																																																																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																																																																																																																																																										_0: {ctor: '_Tuple2', _0: 'frasl', _1: 8260},
																																																																																																																																																																																																																																																																																																																										_1: {
																																																																																																																																																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																																																																																																																																																											_0: {ctor: '_Tuple2', _0: 'sigma', _1: 963},
																																																																																																																																																																																																																																																																																																																											_1: {
																																																																																																																																																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																																																																																																																																																												_0: {ctor: '_Tuple2', _0: 'euro', _1: 8364},
																																																																																																																																																																																																																																																																																																																												_1: {
																																																																																																																																																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																																																																																																																																																													_0: {ctor: '_Tuple2', _0: 'image', _1: 8465},
																																																																																																																																																																																																																																																																																																																													_1: {
																																																																																																																																																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																																																																																																																																																														_0: {ctor: '_Tuple2', _0: 'weierp', _1: 8472},
																																																																																																																																																																																																																																																																																																																														_1: {
																																																																																																																																																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																																																																																																																																																															_0: {ctor: '_Tuple2', _0: 'real', _1: 8476},
																																																																																																																																																																																																																																																																																																																															_1: {
																																																																																																																																																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																																																																																																																																																_0: {ctor: '_Tuple2', _0: 'trade', _1: 8482},
																																																																																																																																																																																																																																																																																																																																_1: {
																																																																																																																																																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																																																																																																																																																	_0: {ctor: '_Tuple2', _0: 'alefsym', _1: 8501},
																																																																																																																																																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																																																																																																																																																		_0: {ctor: '_Tuple2', _0: 'larr', _1: 8592},
																																																																																																																																																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																																																																																																																																																			_0: {ctor: '_Tuple2', _0: 'uarr', _1: 8593},
																																																																																																																																																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																																																																																																																																																				_0: {ctor: '_Tuple2', _0: 'rarr', _1: 8594},
																																																																																																																																																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																																																																																																																																																					_0: {ctor: '_Tuple2', _0: 'darr', _1: 8595},
																																																																																																																																																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																																																																																																																																																						_0: {ctor: '_Tuple2', _0: 'harr', _1: 8596},
																																																																																																																																																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																																																																																																																																																							_0: {ctor: '_Tuple2', _0: 'crarr', _1: 8629},
																																																																																																																																																																																																																																																																																																																																							_1: {
																																																																																																																																																																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																																																																																																																																																																								_0: {ctor: '_Tuple2', _0: 'lArr', _1: 8656},
																																																																																																																																																																																																																																																																																																																																								_1: {
																																																																																																																																																																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																																																																																																																																																																									_0: {ctor: '_Tuple2', _0: 'uArr', _1: 8657},
																																																																																																																																																																																																																																																																																																																																									_1: {
																																																																																																																																																																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																																																																																																																																																																										_0: {ctor: '_Tuple2', _0: 'rArr', _1: 8658},
																																																																																																																																																																																																																																																																																																																																										_1: {
																																																																																																																																																																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																																																																																																																																																																											_0: {ctor: '_Tuple2', _0: 'dArr', _1: 8659},
																																																																																																																																																																																																																																																																																																																																											_1: {
																																																																																																																																																																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																																																																																																																																																																												_0: {ctor: '_Tuple2', _0: 'hArr', _1: 8660},
																																																																																																																																																																																																																																																																																																																																												_1: {
																																																																																																																																																																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																																																																																																																																																																													_0: {ctor: '_Tuple2', _0: 'forall', _1: 8704},
																																																																																																																																																																																																																																																																																																																																													_1: {
																																																																																																																																																																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																																																																																																																																																																														_0: {ctor: '_Tuple2', _0: 'part', _1: 8706},
																																																																																																																																																																																																																																																																																																																																														_1: {
																																																																																																																																																																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																																																																																																																																																																															_0: {ctor: '_Tuple2', _0: 'exist', _1: 8707},
																																																																																																																																																																																																																																																																																																																																															_1: {
																																																																																																																																																																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																																																																																																																																																																_0: {ctor: '_Tuple2', _0: 'empty', _1: 8709},
																																																																																																																																																																																																																																																																																																																																																_1: {
																																																																																																																																																																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																																																																																																																																																																	_0: {ctor: '_Tuple2', _0: 'nabla', _1: 8711},
																																																																																																																																																																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																																																																																																																																																																		_0: {ctor: '_Tuple2', _0: 'isin', _1: 8712},
																																																																																																																																																																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																																																																																																																																																																			_0: {ctor: '_Tuple2', _0: 'notin', _1: 8713},
																																																																																																																																																																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																																																																																																																																																																				_0: {ctor: '_Tuple2', _0: 'ni', _1: 8715},
																																																																																																																																																																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																																																																																																																																																																					_0: {ctor: '_Tuple2', _0: 'prod', _1: 8719},
																																																																																																																																																																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																																																																																																																																																																						_0: {ctor: '_Tuple2', _0: 'sum', _1: 8721},
																																																																																																																																																																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																																																																																																																																																																							_0: {ctor: '_Tuple2', _0: 'minus', _1: 8722},
																																																																																																																																																																																																																																																																																																																																																							_1: {
																																																																																																																																																																																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																																																																																																																																																																																								_0: {ctor: '_Tuple2', _0: 'lowast', _1: 8727},
																																																																																																																																																																																																																																																																																																																																																								_1: {
																																																																																																																																																																																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																																																																																																																																																																																									_0: {ctor: '_Tuple2', _0: 'radic', _1: 8730},
																																																																																																																																																																																																																																																																																																																																																									_1: {
																																																																																																																																																																																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																																																																																																																																																																																										_0: {ctor: '_Tuple2', _0: 'prop', _1: 8733},
																																																																																																																																																																																																																																																																																																																																																										_1: {
																																																																																																																																																																																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																																																																																																																																																																																											_0: {ctor: '_Tuple2', _0: 'infin', _1: 8734},
																																																																																																																																																																																																																																																																																																																																																											_1: {
																																																																																																																																																																																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																																																																																																																																																																																												_0: {ctor: '_Tuple2', _0: 'ang', _1: 8736},
																																																																																																																																																																																																																																																																																																																																																												_1: {
																																																																																																																																																																																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																																																																																																																																																																																													_0: {ctor: '_Tuple2', _0: 'and', _1: 8743},
																																																																																																																																																																																																																																																																																																																																																													_1: {
																																																																																																																																																																																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																																																																																																																																																																																														_0: {ctor: '_Tuple2', _0: 'or', _1: 8744},
																																																																																																																																																																																																																																																																																																																																																														_1: {
																																																																																																																																																																																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																																																																																																																																																																																															_0: {ctor: '_Tuple2', _0: 'cap', _1: 8745},
																																																																																																																																																																																																																																																																																																																																																															_1: {
																																																																																																																																																																																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																_0: {ctor: '_Tuple2', _0: 'cup', _1: 8746},
																																																																																																																																																																																																																																																																																																																																																																_1: {
																																																																																																																																																																																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																	_0: {ctor: '_Tuple2', _0: 'int', _1: 8747},
																																																																																																																																																																																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																		_0: {ctor: '_Tuple2', _0: 'there4', _1: 8756},
																																																																																																																																																																																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																			_0: {ctor: '_Tuple2', _0: 'sim', _1: 8764},
																																																																																																																																																																																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																				_0: {ctor: '_Tuple2', _0: 'cong', _1: 8773},
																																																																																																																																																																																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																					_0: {ctor: '_Tuple2', _0: 'asymp', _1: 8776},
																																																																																																																																																																																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																						_0: {ctor: '_Tuple2', _0: 'ne', _1: 8800},
																																																																																																																																																																																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																							_0: {ctor: '_Tuple2', _0: 'equiv', _1: 8801},
																																																																																																																																																																																																																																																																																																																																																																							_1: {
																																																																																																																																																																																																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																								_0: {ctor: '_Tuple2', _0: 'le', _1: 8804},
																																																																																																																																																																																																																																																																																																																																																																								_1: {
																																																																																																																																																																																																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																									_0: {ctor: '_Tuple2', _0: 'ge', _1: 8805},
																																																																																																																																																																																																																																																																																																																																																																									_1: {
																																																																																																																																																																																																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																										_0: {ctor: '_Tuple2', _0: 'sub', _1: 8834},
																																																																																																																																																																																																																																																																																																																																																																										_1: {
																																																																																																																																																																																																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																											_0: {ctor: '_Tuple2', _0: 'sup', _1: 8835},
																																																																																																																																																																																																																																																																																																																																																																											_1: {
																																																																																																																																																																																																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																												_0: {ctor: '_Tuple2', _0: 'nsub', _1: 8836},
																																																																																																																																																																																																																																																																																																																																																																												_1: {
																																																																																																																																																																																																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																													_0: {ctor: '_Tuple2', _0: 'sube', _1: 8838},
																																																																																																																																																																																																																																																																																																																																																																													_1: {
																																																																																																																																																																																																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																														_0: {ctor: '_Tuple2', _0: 'supe', _1: 8839},
																																																																																																																																																																																																																																																																																																																																																																														_1: {
																																																																																																																																																																																																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																															_0: {ctor: '_Tuple2', _0: 'oplus', _1: 8853},
																																																																																																																																																																																																																																																																																																																																																																															_1: {
																																																																																																																																																																																																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																																_0: {ctor: '_Tuple2', _0: 'otimes', _1: 8855},
																																																																																																																																																																																																																																																																																																																																																																																_1: {
																																																																																																																																																																																																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																																	_0: {ctor: '_Tuple2', _0: 'perp', _1: 8869},
																																																																																																																																																																																																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																																		_0: {ctor: '_Tuple2', _0: 'sdot', _1: 8901},
																																																																																																																																																																																																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																																			_0: {ctor: '_Tuple2', _0: 'loz', _1: 9674},
																																																																																																																																																																																																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																																				_0: {ctor: '_Tuple2', _0: 'spades', _1: 9824},
																																																																																																																																																																																																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																																					_0: {ctor: '_Tuple2', _0: 'clubs', _1: 9827},
																																																																																																																																																																																																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																																						_0: {ctor: '_Tuple2', _0: 'hearts', _1: 9829},
																																																																																																																																																																																																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																																																																																																																																																																																																							_0: {ctor: '_Tuple2', _0: 'diams', _1: 9830},
																																																																																																																																																																																																																																																																																																																																																																																							_1: {ctor: '[]'}
																																																																																																																																																																																																																																																																																																																																																																																						}
																																																																																																																																																																																																																																																																																																																																																																																					}
																																																																																																																																																																																																																																																																																																																																																																																				}
																																																																																																																																																																																																																																																																																																																																																																																			}
																																																																																																																																																																																																																																																																																																																																																																																		}
																																																																																																																																																																																																																																																																																																																																																																																	}
																																																																																																																																																																																																																																																																																																																																																																																}
																																																																																																																																																																																																																																																																																																																																																																															}
																																																																																																																																																																																																																																																																																																																																																																														}
																																																																																																																																																																																																																																																																																																																																																																													}
																																																																																																																																																																																																																																																																																																																																																																												}
																																																																																																																																																																																																																																																																																																																																																																											}
																																																																																																																																																																																																																																																																																																																																																																										}
																																																																																																																																																																																																																																																																																																																																																																									}
																																																																																																																																																																																																																																																																																																																																																																								}
																																																																																																																																																																																																																																																																																																																																																																							}
																																																																																																																																																																																																																																																																																																																																																																						}
																																																																																																																																																																																																																																																																																																																																																																					}
																																																																																																																																																																																																																																																																																																																																																																				}
																																																																																																																																																																																																																																																																																																																																																																			}
																																																																																																																																																																																																																																																																																																																																																																		}
																																																																																																																																																																																																																																																																																																																																																																	}
																																																																																																																																																																																																																																																																																																																																																																}
																																																																																																																																																																																																																																																																																																																																																															}
																																																																																																																																																																																																																																																																																																																																																														}
																																																																																																																																																																																																																																																																																																																																																													}
																																																																																																																																																																																																																																																																																																																																																												}
																																																																																																																																																																																																																																																																																																																																																											}
																																																																																																																																																																																																																																																																																																																																																										}
																																																																																																																																																																																																																																																																																																																																																									}
																																																																																																																																																																																																																																																																																																																																																								}
																																																																																																																																																																																																																																																																																																																																																							}
																																																																																																																																																																																																																																																																																																																																																						}
																																																																																																																																																																																																																																																																																																																																																					}
																																																																																																																																																																																																																																																																																																																																																				}
																																																																																																																																																																																																																																																																																																																																																			}
																																																																																																																																																																																																																																																																																																																																																		}
																																																																																																																																																																																																																																																																																																																																																	}
																																																																																																																																																																																																																																																																																																																																																}
																																																																																																																																																																																																																																																																																																																																															}
																																																																																																																																																																																																																																																																																																																																														}
																																																																																																																																																																																																																																																																																																																																													}
																																																																																																																																																																																																																																																																																																																																												}
																																																																																																																																																																																																																																																																																																																																											}
																																																																																																																																																																																																																																																																																																																																										}
																																																																																																																																																																																																																																																																																																																																									}
																																																																																																																																																																																																																																																																																																																																								}
																																																																																																																																																																																																																																																																																																																																							}
																																																																																																																																																																																																																																																																																																																																						}
																																																																																																																																																																																																																																																																																																																																					}
																																																																																																																																																																																																																																																																																																																																				}
																																																																																																																																																																																																																																																																																																																																			}
																																																																																																																																																																																																																																																																																																																																		}
																																																																																																																																																																																																																																																																																																																																	}
																																																																																																																																																																																																																																																																																																																																}
																																																																																																																																																																																																																																																																																																																															}
																																																																																																																																																																																																																																																																																																																														}
																																																																																																																																																																																																																																																																																																																													}
																																																																																																																																																																																																																																																																																																																												}
																																																																																																																																																																																																																																																																																																																											}
																																																																																																																																																																																																																																																																																																																										}
																																																																																																																																																																																																																																																																																																																									}
																																																																																																																																																																																																																																																																																																																								}
																																																																																																																																																																																																																																																																																																																							}
																																																																																																																																																																																																																																																																																																																						}
																																																																																																																																																																																																																																																																																																																					}
																																																																																																																																																																																																																																																																																																																				}
																																																																																																																																																																																																																																																																																																																			}
																																																																																																																																																																																																																																																																																																																		}
																																																																																																																																																																																																																																																																																																																	}
																																																																																																																																																																																																																																																																																																																}
																																																																																																																																																																																																																																																																																																															}
																																																																																																																																																																																																																																																																																																														}
																																																																																																																																																																																																																																																																																																													}
																																																																																																																																																																																																																																																																																																												}
																																																																																																																																																																																																																																																																																																											}
																																																																																																																																																																																																																																																																																																										}
																																																																																																																																																																																																																																																																																																									}
																																																																																																																																																																																																																																																																																																								}
																																																																																																																																																																																																																																																																																																							}
																																																																																																																																																																																																																																																																																																						}
																																																																																																																																																																																																																																																																																																					}
																																																																																																																																																																																																																																																																																																				}
																																																																																																																																																																																																																																																																																																			}
																																																																																																																																																																																																																																																																																																		}
																																																																																																																																																																																																																																																																																																	}
																																																																																																																																																																																																																																																																																																}
																																																																																																																																																																																																																																																																																															}
																																																																																																																																																																																																																																																																																														}
																																																																																																																																																																																																																																																																																													}
																																																																																																																																																																																																																																																																																												}
																																																																																																																																																																																																																																																																																											}
																																																																																																																																																																																																																																																																																										}
																																																																																																																																																																																																																																																																																									}
																																																																																																																																																																																																																																																																																								}
																																																																																																																																																																																																																																																																																							}
																																																																																																																																																																																																																																																																																						}
																																																																																																																																																																																																																																																																																					}
																																																																																																																																																																																																																																																																																				}
																																																																																																																																																																																																																																																																																			}
																																																																																																																																																																																																																																																																																		}
																																																																																																																																																																																																																																																																																	}
																																																																																																																																																																																																																																																																																}
																																																																																																																																																																																																																																																																															}
																																																																																																																																																																																																																																																																														}
																																																																																																																																																																																																																																																																													}
																																																																																																																																																																																																																																																																												}
																																																																																																																																																																																																																																																																											}
																																																																																																																																																																																																																																																																										}
																																																																																																																																																																																																																																																																									}
																																																																																																																																																																																																																																																																								}
																																																																																																																																																																																																																																																																							}
																																																																																																																																																																																																																																																																						}
																																																																																																																																																																																																																																																																					}
																																																																																																																																																																																																																																																																				}
																																																																																																																																																																																																																																																																			}
																																																																																																																																																																																																																																																																		}
																																																																																																																																																																																																																																																																	}
																																																																																																																																																																																																																																																																}
																																																																																																																																																																																																																																																															}
																																																																																																																																																																																																																																																														}
																																																																																																																																																																																																																																																													}
																																																																																																																																																																																																																																																												}
																																																																																																																																																																																																																																																											}
																																																																																																																																																																																																																																																										}
																																																																																																																																																																																																																																																									}
																																																																																																																																																																																																																																																								}
																																																																																																																																																																																																																																																							}
																																																																																																																																																																																																																																																						}
																																																																																																																																																																																																																																																					}
																																																																																																																																																																																																																																																				}
																																																																																																																																																																																																																																																			}
																																																																																																																																																																																																																																																		}
																																																																																																																																																																																																																																																	}
																																																																																																																																																																																																																																																}
																																																																																																																																																																																																																																															}
																																																																																																																																																																																																																																														}
																																																																																																																																																																																																																																													}
																																																																																																																																																																																																																																												}
																																																																																																																																																																																																																																											}
																																																																																																																																																																																																																																										}
																																																																																																																																																																																																																																									}
																																																																																																																																																																																																																																								}
																																																																																																																																																																																																																																							}
																																																																																																																																																																																																																																						}
																																																																																																																																																																																																																																					}
																																																																																																																																																																																																																																				}
																																																																																																																																																																																																																																			}
																																																																																																																																																																																																																																		}
																																																																																																																																																																																																																																	}
																																																																																																																																																																																																																																}
																																																																																																																																																																																																																															}
																																																																																																																																																																																																																														}
																																																																																																																																																																																																																													}
																																																																																																																																																																																																																												}
																																																																																																																																																																																																																											}
																																																																																																																																																																																																																										}
																																																																																																																																																																																																																									}
																																																																																																																																																																																																																								}
																																																																																																																																																																																																																							}
																																																																																																																																																																																																																						}
																																																																																																																																																																																																																					}
																																																																																																																																																																																																																				}
																																																																																																																																																																																																																			}
																																																																																																																																																																																																																		}
																																																																																																																																																																																																																	}
																																																																																																																																																																																																																}
																																																																																																																																																																																																															}
																																																																																																																																																																																																														}
																																																																																																																																																																																																													}
																																																																																																																																																																																																												}
																																																																																																																																																																																																											}
																																																																																																																																																																																																										}
																																																																																																																																																																																																									}
																																																																																																																																																																																																								}
																																																																																																																																																																																																							}
																																																																																																																																																																																																						}
																																																																																																																																																																																																					}
																																																																																																																																																																																																				}
																																																																																																																																																																																																			}
																																																																																																																																																																																																		}
																																																																																																																																																																																																	}
																																																																																																																																																																																																}
																																																																																																																																																																																															}
																																																																																																																																																																																														}
																																																																																																																																																																																													}
																																																																																																																																																																																												}
																																																																																																																																																																																											}
																																																																																																																																																																																										}
																																																																																																																																																																																									}
																																																																																																																																																																																								}
																																																																																																																																																																																							}
																																																																																																																																																																																						}
																																																																																																																																																																																					}
																																																																																																																																																																																				}
																																																																																																																																																																																			}
																																																																																																																																																																																		}
																																																																																																																																																																																	}
																																																																																																																																																																																}
																																																																																																																																																																															}
																																																																																																																																																																														}
																																																																																																																																																																													}
																																																																																																																																																																												}
																																																																																																																																																																											}
																																																																																																																																																																										}
																																																																																																																																																																									}
																																																																																																																																																																								}
																																																																																																																																																																							}
																																																																																																																																																																						}
																																																																																																																																																																					}
																																																																																																																																																																				}
																																																																																																																																																																			}
																																																																																																																																																																		}
																																																																																																																																																																	}
																																																																																																																																																																}
																																																																																																																																																															}
																																																																																																																																																														}
																																																																																																																																																													}
																																																																																																																																																												}
																																																																																																																																																											}
																																																																																																																																																										}
																																																																																																																																																									}
																																																																																																																																																								}
																																																																																																																																																							}
																																																																																																																																																						}
																																																																																																																																																					}
																																																																																																																																																				}
																																																																																																																																																			}
																																																																																																																																																		}
																																																																																																																																																	}
																																																																																																																																																}
																																																																																																																																															}
																																																																																																																																														}
																																																																																																																																													}
																																																																																																																																												}
																																																																																																																																											}
																																																																																																																																										}
																																																																																																																																									}
																																																																																																																																								}
																																																																																																																																							}
																																																																																																																																						}
																																																																																																																																					}
																																																																																																																																				}
																																																																																																																																			}
																																																																																																																																		}
																																																																																																																																	}
																																																																																																																																}
																																																																																																																															}
																																																																																																																														}
																																																																																																																													}
																																																																																																																												}
																																																																																																																											}
																																																																																																																										}
																																																																																																																									}
																																																																																																																								}
																																																																																																																							}
																																																																																																																						}
																																																																																																																					}
																																																																																																																				}
																																																																																																																			}
																																																																																																																		}
																																																																																																																	}
																																																																																																																}
																																																																																																															}
																																																																																																														}
																																																																																																													}
																																																																																																												}
																																																																																																											}
																																																																																																										}
																																																																																																									}
																																																																																																								}
																																																																																																							}
																																																																																																						}
																																																																																																					}
																																																																																																				}
																																																																																																			}
																																																																																																		}
																																																																																																	}
																																																																																																}
																																																																																															}
																																																																																														}
																																																																																													}
																																																																																												}
																																																																																											}
																																																																																										}
																																																																																									}
																																																																																								}
																																																																																							}
																																																																																						}
																																																																																					}
																																																																																				}
																																																																																			}
																																																																																		}
																																																																																	}
																																																																																}
																																																																															}
																																																																														}
																																																																													}
																																																																												}
																																																																											}
																																																																										}
																																																																									}
																																																																								}
																																																																							}
																																																																						}
																																																																					}
																																																																				}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}));
var _marcosh$elm_html_to_unicode$ElmEscapeHtml$convertFriendlyCodeToChar = function (string) {
	return A2(_elm_lang$core$Dict$get, string, _marcosh$elm_html_to_unicode$ElmEscapeHtml$friendlyConverterDictionary);
};
var _marcosh$elm_html_to_unicode$ElmEscapeHtml$convertCode = F5(
	function (mayber, lister, pre, post, list) {
		var string = _elm_lang$core$String$fromList(list);
		var maybe = mayber(string);
		var _p2 = maybe;
		if (_p2.ctor === 'Nothing') {
			return _elm_lang$core$List$concat(
				{
					ctor: '::',
					_0: pre,
					_1: {
						ctor: '::',
						_0: list,
						_1: {
							ctor: '::',
							_0: post,
							_1: {ctor: '[]'}
						}
					}
				});
		} else {
			return lister(_p2._0);
		}
	});
var _marcosh$elm_html_to_unicode$ElmEscapeHtml$convertHexadecimalCode = A2(
	_marcosh$elm_html_to_unicode$ElmEscapeHtml$convertCode,
	function (_p3) {
		return _elm_lang$core$Result$toMaybe(
			_fredcy$elm_parseint$ParseInt$parseIntHex(_p3));
	},
	function ($int) {
		return {
			ctor: '::',
			_0: _elm_lang$core$Char$fromCode($int),
			_1: {ctor: '[]'}
		};
	});
var _marcosh$elm_html_to_unicode$ElmEscapeHtml$convertDecimalCode = A2(
	_marcosh$elm_html_to_unicode$ElmEscapeHtml$convertCode,
	function (_p4) {
		return _elm_lang$core$Result$toMaybe(
			_elm_lang$core$String$toInt(_p4));
	},
	function ($int) {
		return {
			ctor: '::',
			_0: _elm_lang$core$Char$fromCode($int),
			_1: {ctor: '[]'}
		};
	});
var _marcosh$elm_html_to_unicode$ElmEscapeHtml$convertFriendlyCode = A2(
	_marcosh$elm_html_to_unicode$ElmEscapeHtml$convertCode,
	_marcosh$elm_html_to_unicode$ElmEscapeHtml$convertFriendlyCodeToChar,
	function ($char) {
		return {
			ctor: '::',
			_0: $char,
			_1: {ctor: '[]'}
		};
	});
var _marcosh$elm_html_to_unicode$ElmEscapeHtml$convertNumericalCode = F3(
	function (pre, post, list) {
		var _p5 = list;
		if (_p5.ctor === '[]') {
			return _elm_lang$core$List$concat(
				{
					ctor: '::',
					_0: pre,
					_1: {
						ctor: '::',
						_0: post,
						_1: {ctor: '[]'}
					}
				});
		} else {
			if (_p5._0.valueOf() === 'x') {
				return A3(
					_marcosh$elm_html_to_unicode$ElmEscapeHtml$convertHexadecimalCode,
					A2(
						_elm_lang$core$List$append,
						pre,
						{
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.chr('x'),
							_1: {ctor: '[]'}
						}),
					post,
					_p5._1);
			} else {
				return A3(_marcosh$elm_html_to_unicode$ElmEscapeHtml$convertDecimalCode, pre, post, _p5);
			}
		}
	});
var _marcosh$elm_html_to_unicode$ElmEscapeHtml$noAmpUnicodeConverter = F3(
	function (pre, post, list) {
		var _p6 = list;
		if (_p6.ctor === '[]') {
			return {
				ctor: '::',
				_0: pre,
				_1: {
					ctor: '::',
					_0: post,
					_1: {ctor: '[]'}
				}
			};
		} else {
			if (_p6._0.valueOf() === '#') {
				return A3(
					_marcosh$elm_html_to_unicode$ElmEscapeHtml$convertNumericalCode,
					{
						ctor: '::',
						_0: pre,
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.chr('#'),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: post,
						_1: {ctor: '[]'}
					},
					_p6._1);
			} else {
				return A3(
					_marcosh$elm_html_to_unicode$ElmEscapeHtml$convertFriendlyCode,
					{
						ctor: '::',
						_0: pre,
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: post,
						_1: {ctor: '[]'}
					},
					{ctor: '::', _0: _p6._0, _1: _p6._1});
			}
		}
	});
var _marcosh$elm_html_to_unicode$ElmEscapeHtml$unicodeConverter = F2(
	function (post, list) {
		var _p7 = list;
		if (_p7.ctor === '[]') {
			return {
				ctor: '::',
				_0: post,
				_1: {ctor: '[]'}
			};
		} else {
			return A3(_marcosh$elm_html_to_unicode$ElmEscapeHtml$noAmpUnicodeConverter, _p7._0, post, _p7._1);
		}
	});
var _marcosh$elm_html_to_unicode$ElmEscapeHtml$parser = F3(
	function (charsToBeParsed, charsOnParsing, charsParsed) {
		parser:
		while (true) {
			var _p8 = charsToBeParsed;
			if (_p8.ctor === '[]') {
				return charsParsed;
			} else {
				var _p10 = _p8._1;
				var _p9 = _p8._0;
				if (_elm_lang$core$Native_Utils.eq(
					_p9,
					_elm_lang$core$Native_Utils.chr('&'))) {
					var _v6 = _p10,
						_v7 = {
						ctor: '::',
						_0: _p9,
						_1: {ctor: '[]'}
					},
						_v8 = charsParsed;
					charsToBeParsed = _v6;
					charsOnParsing = _v7;
					charsParsed = _v8;
					continue parser;
				} else {
					if (_elm_lang$core$Native_Utils.eq(
						_p9,
						_elm_lang$core$Native_Utils.chr(';'))) {
						var _v9 = _p10,
							_v10 = {ctor: '[]'},
							_v11 = A2(
							_elm_lang$core$List$append,
							charsParsed,
							A2(_marcosh$elm_html_to_unicode$ElmEscapeHtml$unicodeConverter, _p9, charsOnParsing));
						charsToBeParsed = _v9;
						charsOnParsing = _v10;
						charsParsed = _v11;
						continue parser;
					} else {
						if (!_elm_lang$core$List$isEmpty(charsOnParsing)) {
							var _v12 = _p10,
								_v13 = A2(
								_elm_lang$core$List$append,
								charsOnParsing,
								{
									ctor: '::',
									_0: _p9,
									_1: {ctor: '[]'}
								}),
								_v14 = charsParsed;
							charsToBeParsed = _v12;
							charsOnParsing = _v13;
							charsParsed = _v14;
							continue parser;
						} else {
							var _v15 = _p10,
								_v16 = {ctor: '[]'},
								_v17 = A2(
								_elm_lang$core$List$append,
								charsParsed,
								{
									ctor: '::',
									_0: _p9,
									_1: {ctor: '[]'}
								});
							charsToBeParsed = _v15;
							charsOnParsing = _v16;
							charsParsed = _v17;
							continue parser;
						}
					}
				}
			}
		}
	});
var _marcosh$elm_html_to_unicode$ElmEscapeHtml$unescapeChars = function (list) {
	return A3(
		_marcosh$elm_html_to_unicode$ElmEscapeHtml$parser,
		list,
		{ctor: '[]'},
		{ctor: '[]'});
};
var _marcosh$elm_html_to_unicode$ElmEscapeHtml$escapeDictionary = _elm_lang$core$Dict$fromList(
	A2(
		_elm_lang$core$List$map,
		function (_p11) {
			var _p12 = _p11;
			return {
				ctor: '_Tuple2',
				_0: _p12._0,
				_1: _elm_lang$core$String$toList(_p12._1)
			};
		},
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_Utils.chr('&'),
				_1: '&amp;'
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('<'),
					_1: '&lt;'
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.chr('>'),
						_1: '&gt;'
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.chr('\"'),
							_1: '&quot;'
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Native_Utils.chr('\''),
								_1: '&#39;'
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Native_Utils.chr('`'),
									_1: '&#96;'
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Native_Utils.chr(' '),
										_1: '&#32;'
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: _elm_lang$core$Native_Utils.chr('!'),
											_1: '&#33;'
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: _elm_lang$core$Native_Utils.chr('@'),
												_1: '&#64;'
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: _elm_lang$core$Native_Utils.chr('$'),
													_1: '&#36;'
												},
												_1: {
													ctor: '::',
													_0: {
														ctor: '_Tuple2',
														_0: _elm_lang$core$Native_Utils.chr('%'),
														_1: '&#37;'
													},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: _elm_lang$core$Native_Utils.chr('('),
															_1: '&#40;'
														},
														_1: {
															ctor: '::',
															_0: {
																ctor: '_Tuple2',
																_0: _elm_lang$core$Native_Utils.chr(')'),
																_1: '&#41;'
															},
															_1: {
																ctor: '::',
																_0: {
																	ctor: '_Tuple2',
																	_0: _elm_lang$core$Native_Utils.chr('='),
																	_1: '&#61;'
																},
																_1: {
																	ctor: '::',
																	_0: {
																		ctor: '_Tuple2',
																		_0: _elm_lang$core$Native_Utils.chr('+'),
																		_1: '&#43;'
																	},
																	_1: {
																		ctor: '::',
																		_0: {
																			ctor: '_Tuple2',
																			_0: _elm_lang$core$Native_Utils.chr('{'),
																			_1: '&#123;'
																		},
																		_1: {
																			ctor: '::',
																			_0: {
																				ctor: '_Tuple2',
																				_0: _elm_lang$core$Native_Utils.chr('}'),
																				_1: '&#125;'
																			},
																			_1: {
																				ctor: '::',
																				_0: {
																					ctor: '_Tuple2',
																					_0: _elm_lang$core$Native_Utils.chr('['),
																					_1: '&#91;'
																				},
																				_1: {
																					ctor: '::',
																					_0: {
																						ctor: '_Tuple2',
																						_0: _elm_lang$core$Native_Utils.chr(']'),
																						_1: '&#93;'
																					},
																					_1: {ctor: '[]'}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}));
var _marcosh$elm_html_to_unicode$ElmEscapeHtml$escapeChar = function ($char) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		{
			ctor: '::',
			_0: $char,
			_1: {ctor: '[]'}
		},
		A2(_elm_lang$core$Dict$get, $char, _marcosh$elm_html_to_unicode$ElmEscapeHtml$escapeDictionary));
};
var _marcosh$elm_html_to_unicode$ElmEscapeHtml$escapeChars = function (list) {
	return _elm_lang$core$List$concat(
		A2(_elm_lang$core$List$map, _marcosh$elm_html_to_unicode$ElmEscapeHtml$escapeChar, list));
};
var _marcosh$elm_html_to_unicode$ElmEscapeHtml$convert = F2(
	function (convertChars, string) {
		return _elm_lang$core$String$concat(
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$String$fromChar,
				convertChars(
					_elm_lang$core$String$toList(string))));
	});
var _marcosh$elm_html_to_unicode$ElmEscapeHtml$unescape = _marcosh$elm_html_to_unicode$ElmEscapeHtml$convert(_marcosh$elm_html_to_unicode$ElmEscapeHtml$unescapeChars);
var _marcosh$elm_html_to_unicode$ElmEscapeHtml$escape = _marcosh$elm_html_to_unicode$ElmEscapeHtml$convert(_marcosh$elm_html_to_unicode$ElmEscapeHtml$escapeChars);

var _mgold$elm_date_format$Date_Local$dutch = {
	date: {
		months: {jan: 'januari', feb: 'februari', mar: 'maart', apr: 'april', may: 'mei', jun: 'juni', jul: 'juli', aug: 'augustus', sep: 'september', oct: 'oktober', nov: 'november', dec: 'december'},
		monthsAbbrev: {jan: 'jan', feb: 'feb', mar: 'mrt', apr: 'apr', may: 'mei', jun: 'jun', jul: 'jul', aug: 'aug', sep: 'sep', oct: 'okt', nov: 'nov', dec: 'dec'},
		wdays: {mon: 'maandag', tue: 'dinsdag', wed: 'woensdag', thu: 'donderdag', fri: 'vrijdag', sat: 'zaterdag', sun: 'zondag'},
		wdaysAbbrev: {mon: 'ma', tue: 'di', wed: 'wo', thu: 'do', fri: 'vr', sat: 'za', sun: 'zo'},
		defaultFormat: _elm_lang$core$Maybe$Nothing
	},
	time: {
		am: 'am',
		pm: 'pm',
		defaultFormat: _elm_lang$core$Maybe$Just('%H:%M')
	},
	timeZones: _elm_lang$core$Maybe$Nothing,
	defaultFormat: _elm_lang$core$Maybe$Nothing
};
var _mgold$elm_date_format$Date_Local$greek = {
	date: {
		months: {jan: 'Ιανουαρίου', feb: 'Φεβρουαρίου', mar: 'Μαρτίου', apr: 'Απριλίου', may: 'Μαΐου', jun: 'Ιουνίου', jul: 'Ιουλίου', aug: 'Αυγούστου', sep: 'Σεπτεμβρίου', oct: 'Οκτωβρίου', nov: 'Νοεμβρίου', dec: 'Δεκεμβρίου'},
		monthsAbbrev: {jan: 'Ιαν', feb: 'Φεβ', mar: 'Μαρ', apr: 'Απρ', may: 'Μαϊ', jun: 'Ιουν', jul: 'Ιουλ', aug: 'Αυγ', sep: 'Σεπ', oct: 'Οκτ', nov: 'Νοε', dec: 'Δεκ'},
		wdays: {mon: 'Δευτέρα', tue: 'Τρίτη', wed: 'Τετάρτη', thu: 'Πέμπτη', fri: 'Παρασκευή', sat: 'Σάββατο', sun: 'Κυριακή'},
		wdaysAbbrev: {mon: 'Δευ', tue: 'Τρι', wed: 'Τετ', thu: 'Πεμ', fri: 'Παρ', sat: 'Σαβ', sun: 'Κυρ'},
		defaultFormat: _elm_lang$core$Maybe$Nothing
	},
	time: {am: 'πμ', pm: 'μμ', defaultFormat: _elm_lang$core$Maybe$Nothing},
	timeZones: _elm_lang$core$Maybe$Nothing,
	defaultFormat: _elm_lang$core$Maybe$Nothing
};
var _mgold$elm_date_format$Date_Local$german = {
	date: {
		months: {jan: 'Januar', feb: 'Februar', mar: 'März', apr: 'April', may: 'Mai', jun: 'Juni', jul: 'Juli', aug: 'August', sep: 'September', oct: 'Oktober', nov: 'November', dec: 'Dezember'},
		monthsAbbrev: {jan: 'Jan', feb: 'Feb', mar: 'Mär', apr: 'Apr', may: 'Mai', jun: 'Jun', jul: 'Jul', aug: 'Aug', sep: 'Sep', oct: 'Okt', nov: 'Nov', dec: 'Dez'},
		wdays: {mon: 'Montag', tue: 'Dienstag', wed: 'Mittwoch', thu: 'Donnerstag', fri: 'Freitag', sat: 'Samstag', sun: 'Sonntag'},
		wdaysAbbrev: {mon: 'Mo', tue: 'Di', wed: 'Mi', thu: 'Do', fri: 'Fr', sat: 'Sa', sun: 'So'},
		defaultFormat: _elm_lang$core$Maybe$Just('%e. %B %Y')
	},
	time: {
		am: 'am',
		pm: 'pm',
		defaultFormat: _elm_lang$core$Maybe$Just('%k:%M')
	},
	timeZones: _elm_lang$core$Maybe$Nothing,
	defaultFormat: _elm_lang$core$Maybe$Nothing
};
var _mgold$elm_date_format$Date_Local$brazilian = {
	date: {
		months: {jan: 'Janeiro', feb: 'Fevereiro', mar: 'Março', apr: 'Abril', may: 'Maio', jun: 'Junho', jul: 'Julho', aug: 'Agosto', sep: 'Setembro', oct: 'Outubro', nov: 'Novembro', dec: 'Dezembro'},
		monthsAbbrev: {jan: 'Jan', feb: 'Fev', mar: 'Mar', apr: 'Abr', may: 'Mai', jun: 'Jun', jul: 'Jul', aug: 'Ago', sep: 'Set', oct: 'Out', nov: 'Nov', dec: 'Dez'},
		wdays: {mon: 'Segunda-feira', tue: 'Terça-feira', wed: 'Quarta-feira', thu: 'Quinta-feira', fri: 'Sexta-feira', sat: 'Sábado', sun: 'Domingo'},
		wdaysAbbrev: {mon: 'Seg', tue: 'Ter', wed: 'Qua', thu: 'Qui', fri: 'Sex', sat: 'Sáb', sun: 'Dom'},
		defaultFormat: _elm_lang$core$Maybe$Just('%e de %B de %Y')
	},
	time: {
		am: 'am',
		pm: 'pm',
		defaultFormat: _elm_lang$core$Maybe$Just('%k:%M')
	},
	timeZones: _elm_lang$core$Maybe$Nothing,
	defaultFormat: _elm_lang$core$Maybe$Nothing
};
var _mgold$elm_date_format$Date_Local$french = {
	date: {
		months: {jan: 'Janvier', feb: 'Février', mar: 'Mars', apr: 'Avril', may: 'Mai', jun: 'Juin', jul: 'Juillet', aug: 'Août', sep: 'Septembre', oct: 'Octobre', nov: 'Novembre', dec: 'Décembre'},
		monthsAbbrev: {jan: 'Jan', feb: 'Fév', mar: 'Mar', apr: 'Avr', may: 'Mai', jun: 'Jui', jul: 'Jul', aug: 'Aoû', sep: 'Sep', oct: 'Oct', nov: 'Nov', dec: 'Déc'},
		wdays: {mon: 'Lundi', tue: 'Mardi', wed: 'Mercredi', thu: 'Jeudi', fri: 'Vendredi', sat: 'Samedi', sun: 'Dimanche'},
		wdaysAbbrev: {mon: 'Lun', tue: 'Mar', wed: 'Mer', thu: 'Jeu', fri: 'Ven', sat: 'Sam', sun: 'Dim'},
		defaultFormat: _elm_lang$core$Maybe$Nothing
	},
	time: {am: 'am', pm: 'pm', defaultFormat: _elm_lang$core$Maybe$Nothing},
	timeZones: _elm_lang$core$Maybe$Nothing,
	defaultFormat: _elm_lang$core$Maybe$Nothing
};
var _mgold$elm_date_format$Date_Local$international = {
	date: {
		months: {jan: 'January', feb: 'February', mar: 'March', apr: 'April', may: 'May', jun: 'June', jul: 'July', aug: 'August', sep: 'September', oct: 'October', nov: 'November', dec: 'December'},
		monthsAbbrev: {jan: 'Jan', feb: 'Feb', mar: 'Mar', apr: 'Apr', may: 'May', jun: 'Jun', jul: 'Jul', aug: 'Aug', sep: 'Sep', oct: 'Oct', nov: 'Nov', dec: 'Dec'},
		wdays: {mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday', fri: 'Friday', sat: 'Saturday', sun: 'Sunday'},
		wdaysAbbrev: {mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat', sun: 'Sun'},
		defaultFormat: _elm_lang$core$Maybe$Nothing
	},
	time: {am: 'am', pm: 'pm', defaultFormat: _elm_lang$core$Maybe$Nothing},
	timeZones: _elm_lang$core$Maybe$Nothing,
	defaultFormat: _elm_lang$core$Maybe$Nothing
};
var _mgold$elm_date_format$Date_Local$Local = F4(
	function (a, b, c, d) {
		return {date: a, time: b, timeZones: c, defaultFormat: d};
	});
var _mgold$elm_date_format$Date_Local$Months = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return {jan: a, feb: b, mar: c, apr: d, may: e, jun: f, jul: g, aug: h, sep: i, oct: j, nov: k, dec: l};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _mgold$elm_date_format$Date_Local$WeekDays = F7(
	function (a, b, c, d, e, f, g) {
		return {mon: a, tue: b, wed: c, thu: d, fri: e, sat: f, sun: g};
	});

var _mgold$elm_date_format$Date_Format$padWith = function (padding) {
	var padder = function () {
		var _p0 = padding;
		switch (_p0.ctor) {
			case 'NoPadding':
				return _elm_lang$core$Basics$identity;
			case 'Zero':
				return A2(
					_elm_lang$core$String$padLeft,
					2,
					_elm_lang$core$Native_Utils.chr('0'));
			case 'ZeroThreeDigits':
				return A2(
					_elm_lang$core$String$padLeft,
					3,
					_elm_lang$core$Native_Utils.chr('0'));
			default:
				return A2(
					_elm_lang$core$String$padLeft,
					2,
					_elm_lang$core$Native_Utils.chr(' '));
		}
	}();
	return function (_p1) {
		return padder(
			_elm_lang$core$Basics$toString(_p1));
	};
};
var _mgold$elm_date_format$Date_Format$zero2twelve = function (n) {
	return _elm_lang$core$Native_Utils.eq(n, 0) ? 12 : n;
};
var _mgold$elm_date_format$Date_Format$mod12 = function (h) {
	return A2(_elm_lang$core$Basics_ops['%'], h, 12);
};
var _mgold$elm_date_format$Date_Format$dayOfWeekToWord = F2(
	function (loc, dow) {
		var _p2 = dow;
		switch (_p2.ctor) {
			case 'Mon':
				return loc.mon;
			case 'Tue':
				return loc.tue;
			case 'Wed':
				return loc.wed;
			case 'Thu':
				return loc.thu;
			case 'Fri':
				return loc.fri;
			case 'Sat':
				return loc.sat;
			default:
				return loc.sun;
		}
	});
var _mgold$elm_date_format$Date_Format$monthToWord = F2(
	function (loc, m) {
		var _p3 = m;
		switch (_p3.ctor) {
			case 'Jan':
				return loc.jan;
			case 'Feb':
				return loc.feb;
			case 'Mar':
				return loc.mar;
			case 'Apr':
				return loc.apr;
			case 'May':
				return loc.may;
			case 'Jun':
				return loc.jun;
			case 'Jul':
				return loc.jul;
			case 'Aug':
				return loc.aug;
			case 'Sep':
				return loc.sep;
			case 'Oct':
				return loc.oct;
			case 'Nov':
				return loc.nov;
			default:
				return loc.dec;
		}
	});
var _mgold$elm_date_format$Date_Format$monthToInt = function (m) {
	var _p4 = m;
	switch (_p4.ctor) {
		case 'Jan':
			return 1;
		case 'Feb':
			return 2;
		case 'Mar':
			return 3;
		case 'Apr':
			return 4;
		case 'May':
			return 5;
		case 'Jun':
			return 6;
		case 'Jul':
			return 7;
		case 'Aug':
			return 8;
		case 'Sep':
			return 9;
		case 'Oct':
			return 10;
		case 'Nov':
			return 11;
		default:
			return 12;
	}
};
var _mgold$elm_date_format$Date_Format$re = _elm_lang$core$Regex$regex('%(_|-|0)?(%|Y|y|m|B|b|d|e|a|A|H|k|I|l|L|p|P|M|S)');
var _mgold$elm_date_format$Date_Format$ZeroThreeDigits = {ctor: 'ZeroThreeDigits'};
var _mgold$elm_date_format$Date_Format$Zero = {ctor: 'Zero'};
var _mgold$elm_date_format$Date_Format$Space = {ctor: 'Space'};
var _mgold$elm_date_format$Date_Format$NoPadding = {ctor: 'NoPadding'};
var _mgold$elm_date_format$Date_Format$formatToken = F3(
	function (loc, d, m) {
		var _p5 = function () {
			var _p6 = m.submatches;
			_v4_4:
			do {
				if (_p6.ctor === '::') {
					if (_p6._0.ctor === 'Just') {
						if (((_p6._1.ctor === '::') && (_p6._1._0.ctor === 'Just')) && (_p6._1._1.ctor === '[]')) {
							switch (_p6._0._0) {
								case '-':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Maybe$Just(_mgold$elm_date_format$Date_Format$NoPadding),
										_1: _p6._1._0._0
									};
								case '_':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Maybe$Just(_mgold$elm_date_format$Date_Format$Space),
										_1: _p6._1._0._0
									};
								case '0':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Maybe$Just(_mgold$elm_date_format$Date_Format$Zero),
										_1: _p6._1._0._0
									};
								default:
									break _v4_4;
							}
						} else {
							break _v4_4;
						}
					} else {
						if (((_p6._1.ctor === '::') && (_p6._1._0.ctor === 'Just')) && (_p6._1._1.ctor === '[]')) {
							return {ctor: '_Tuple2', _0: _elm_lang$core$Maybe$Nothing, _1: _p6._1._0._0};
						} else {
							break _v4_4;
						}
					}
				} else {
					break _v4_4;
				}
			} while(false);
			return {ctor: '_Tuple2', _0: _elm_lang$core$Maybe$Nothing, _1: ' '};
		}();
		var padding = _p5._0;
		var symbol = _p5._1;
		var _p7 = symbol;
		switch (_p7) {
			case '%':
				return '%';
			case 'Y':
				return _elm_lang$core$Basics$toString(
					_elm_lang$core$Date$year(d));
			case 'y':
				return A2(
					_elm_lang$core$String$right,
					2,
					_elm_lang$core$Basics$toString(
						_elm_lang$core$Date$year(d)));
			case 'm':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					A2(_elm_lang$core$Maybe$withDefault, _mgold$elm_date_format$Date_Format$Zero, padding),
					_mgold$elm_date_format$Date_Format$monthToInt(
						_elm_lang$core$Date$month(d)));
			case 'B':
				return A2(
					_mgold$elm_date_format$Date_Format$monthToWord,
					loc.date.months,
					_elm_lang$core$Date$month(d));
			case 'b':
				return A2(
					_mgold$elm_date_format$Date_Format$monthToWord,
					loc.date.monthsAbbrev,
					_elm_lang$core$Date$month(d));
			case 'd':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					A2(_elm_lang$core$Maybe$withDefault, _mgold$elm_date_format$Date_Format$Zero, padding),
					_elm_lang$core$Date$day(d));
			case 'e':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					A2(_elm_lang$core$Maybe$withDefault, _mgold$elm_date_format$Date_Format$Space, padding),
					_elm_lang$core$Date$day(d));
			case 'a':
				return A2(
					_mgold$elm_date_format$Date_Format$dayOfWeekToWord,
					loc.date.wdaysAbbrev,
					_elm_lang$core$Date$dayOfWeek(d));
			case 'A':
				return A2(
					_mgold$elm_date_format$Date_Format$dayOfWeekToWord,
					loc.date.wdays,
					_elm_lang$core$Date$dayOfWeek(d));
			case 'H':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					A2(_elm_lang$core$Maybe$withDefault, _mgold$elm_date_format$Date_Format$Zero, padding),
					_elm_lang$core$Date$hour(d));
			case 'k':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					A2(_elm_lang$core$Maybe$withDefault, _mgold$elm_date_format$Date_Format$Space, padding),
					_elm_lang$core$Date$hour(d));
			case 'I':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					A2(_elm_lang$core$Maybe$withDefault, _mgold$elm_date_format$Date_Format$Zero, padding),
					_mgold$elm_date_format$Date_Format$zero2twelve(
						_mgold$elm_date_format$Date_Format$mod12(
							_elm_lang$core$Date$hour(d))));
			case 'l':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					A2(_elm_lang$core$Maybe$withDefault, _mgold$elm_date_format$Date_Format$Space, padding),
					_mgold$elm_date_format$Date_Format$zero2twelve(
						_mgold$elm_date_format$Date_Format$mod12(
							_elm_lang$core$Date$hour(d))));
			case 'p':
				return (_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$Date$hour(d),
					12) < 0) ? _elm_lang$core$String$toUpper(loc.time.am) : _elm_lang$core$String$toUpper(loc.time.pm);
			case 'P':
				return (_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$Date$hour(d),
					12) < 0) ? loc.time.am : loc.time.pm;
			case 'M':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					A2(_elm_lang$core$Maybe$withDefault, _mgold$elm_date_format$Date_Format$Zero, padding),
					_elm_lang$core$Date$minute(d));
			case 'S':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					A2(_elm_lang$core$Maybe$withDefault, _mgold$elm_date_format$Date_Format$Zero, padding),
					_elm_lang$core$Date$second(d));
			case 'L':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					A2(_elm_lang$core$Maybe$withDefault, _mgold$elm_date_format$Date_Format$ZeroThreeDigits, padding),
					_elm_lang$core$Date$millisecond(d));
			default:
				return '';
		}
	});
var _mgold$elm_date_format$Date_Format$localFormat = F3(
	function (loc, s, d) {
		return A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_mgold$elm_date_format$Date_Format$re,
			A2(_mgold$elm_date_format$Date_Format$formatToken, loc, d),
			s);
	});
var _mgold$elm_date_format$Date_Format$format = F2(
	function (s, d) {
		return A3(_mgold$elm_date_format$Date_Format$localFormat, _mgold$elm_date_format$Date_Local$international, s, d);
	});
var _mgold$elm_date_format$Date_Format$formatISO8601 = _mgold$elm_date_format$Date_Format$format('%Y-%m-%dT%H:%M:%SZ');

var _sporto$erl$Erl$appendPathSegments = F2(
	function (segments, url) {
		var newPath = A2(_elm_lang$core$List$append, url.path, segments);
		return _elm_lang$core$Native_Utils.update(
			url,
			{path: newPath});
	});
var _sporto$erl$Erl$removeQuery = F2(
	function (key, url) {
		var updated = A2(_elm_lang$core$Dict$remove, key, url.query);
		return _elm_lang$core$Native_Utils.update(
			url,
			{query: updated});
	});
var _sporto$erl$Erl$setQuery = F3(
	function (key, val, url) {
		var updated = A2(_elm_lang$core$Dict$singleton, key, val);
		return _elm_lang$core$Native_Utils.update(
			url,
			{query: updated});
	});
var _sporto$erl$Erl$addQuery = F3(
	function (key, val, url) {
		var updated = _elm_lang$core$String$isEmpty(val) ? A2(_elm_lang$core$Dict$remove, key, url.query) : A3(_elm_lang$core$Dict$insert, key, val, url.query);
		return _elm_lang$core$Native_Utils.update(
			url,
			{query: updated});
	});
var _sporto$erl$Erl$clearQuery = function (url) {
	return _elm_lang$core$Native_Utils.update(
		url,
		{query: _elm_lang$core$Dict$empty});
};
var _sporto$erl$Erl$new = {
	protocol: '',
	username: '',
	password: '',
	host: {ctor: '[]'},
	path: {ctor: '[]'},
	hasLeadingSlash: false,
	hasTrailingSlash: false,
	port_: 0,
	hash: '',
	query: _elm_lang$core$Dict$empty
};
var _sporto$erl$Erl$hashToString = function (url) {
	return _elm_lang$core$String$isEmpty(url.hash) ? '' : A2(_elm_lang$core$Basics_ops['++'], '#', url.hash);
};
var _sporto$erl$Erl$trailingSlashComponent = function (url) {
	return _elm_lang$core$Native_Utils.eq(url.hasTrailingSlash, true) ? '/' : '';
};
var _sporto$erl$Erl$portComponent = function (url) {
	var _p0 = url.port_;
	switch (_p0) {
		case 0:
			return '';
		case 80:
			return '';
		default:
			return A2(
				_elm_lang$core$Basics_ops['++'],
				':',
				_elm_lang$core$Basics$toString(url.port_));
	}
};
var _sporto$erl$Erl$hostComponent = function (url) {
	return _elm_lang$http$Http$encodeUri(
		A2(_elm_lang$core$String$join, '.', url.host));
};
var _sporto$erl$Erl$pathComponent = function (url) {
	var leadingSlash = ((!_elm_lang$core$Native_Utils.eq(
		_sporto$erl$Erl$hostComponent(url),
		'')) || url.hasLeadingSlash) ? '/' : '';
	var encoded = A2(_elm_lang$core$List$map, _elm_lang$http$Http$encodeUri, url.path);
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$List$length(url.path),
		0) ? '' : A2(
		_elm_lang$core$Basics_ops['++'],
		leadingSlash,
		A2(_elm_lang$core$String$join, '/', encoded));
};
var _sporto$erl$Erl$protocolComponent = function (url) {
	var _p1 = url.protocol;
	if (_p1 === '') {
		return '';
	} else {
		return A2(_elm_lang$core$Basics_ops['++'], url.protocol, '://');
	}
};
var _sporto$erl$Erl$queryToString = function (url) {
	var tuples = _elm_lang$core$Dict$toList(url.query);
	var encodedTuples = A2(
		_elm_lang$core$List$map,
		function (_p2) {
			var _p3 = _p2;
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$http$Http$encodeUri(_p3._0),
				_1: _elm_lang$http$Http$encodeUri(_p3._1)
			};
		},
		tuples);
	var parts = A2(
		_elm_lang$core$List$map,
		function (_p4) {
			var _p5 = _p4;
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_p5._0,
				A2(_elm_lang$core$Basics_ops['++'], '=', _p5._1));
		},
		encodedTuples);
	return _elm_lang$core$Dict$isEmpty(url.query) ? '' : A2(
		_elm_lang$core$Basics_ops['++'],
		'?',
		A2(_elm_lang$core$String$join, '&', parts));
};
var _sporto$erl$Erl$toString = function (url) {
	var hash = _sporto$erl$Erl$hashToString(url);
	var query_ = _sporto$erl$Erl$queryToString(url);
	var trailingSlash_ = _sporto$erl$Erl$trailingSlashComponent(url);
	var path_ = _sporto$erl$Erl$pathComponent(url);
	var port_ = _sporto$erl$Erl$portComponent(url);
	var host_ = _sporto$erl$Erl$hostComponent(url);
	var protocol_ = _sporto$erl$Erl$protocolComponent(url);
	return A2(
		_elm_lang$core$Basics_ops['++'],
		protocol_,
		A2(
			_elm_lang$core$Basics_ops['++'],
			host_,
			A2(
				_elm_lang$core$Basics_ops['++'],
				port_,
				A2(
					_elm_lang$core$Basics_ops['++'],
					path_,
					A2(
						_elm_lang$core$Basics_ops['++'],
						trailingSlash_,
						A2(_elm_lang$core$Basics_ops['++'], query_, hash))))));
};
var _sporto$erl$Erl$queryStringElementToTuple = function (element) {
	var splitted = A2(_elm_lang$core$String$split, '=', element);
	var first = A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(splitted));
	var firstDecoded = A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$http$Http$decodeUri(first));
	var second = A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, 1, splitted)));
	var secondDecoded = A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$http$Http$decodeUri(second));
	return {ctor: '_Tuple2', _0: firstDecoded, _1: secondDecoded};
};
var _sporto$erl$Erl$queryTuples = function (queryString) {
	var splitted = A2(_elm_lang$core$String$split, '&', queryString);
	return _elm_lang$core$String$isEmpty(queryString) ? {ctor: '[]'} : A2(_elm_lang$core$List$map, _sporto$erl$Erl$queryStringElementToTuple, splitted);
};
var _sporto$erl$Erl$parseQuery = function (str) {
	return _elm_lang$core$Dict$fromList(
		_sporto$erl$Erl$queryTuples(str));
};
var _sporto$erl$Erl$extractQuery = function (str) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(
			A2(
				_elm_lang$core$String$split,
				'#',
				A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					_elm_lang$core$List$head(
						A2(
							_elm_lang$core$List$drop,
							1,
							A2(_elm_lang$core$String$split, '?', str)))))));
};
var _sporto$erl$Erl$queryFromAll = function (all) {
	return _sporto$erl$Erl$parseQuery(
		_sporto$erl$Erl$extractQuery(all));
};
var _sporto$erl$Erl$extractHash = function (str) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(
			A2(
				_elm_lang$core$List$drop,
				1,
				A2(_elm_lang$core$String$split, '#', str))));
};
var _sporto$erl$Erl$hashFromAll = function (str) {
	return _sporto$erl$Erl$extractHash(str);
};
var _sporto$erl$Erl$parseHost = function (str) {
	return A2(_elm_lang$core$String$split, '.', str);
};
var _sporto$erl$Erl$extractProtocol = function (str) {
	var parts = A2(_elm_lang$core$String$split, '://', str);
	var _p6 = _elm_lang$core$List$length(parts);
	if (_p6 === 1) {
		return '';
	} else {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			_elm_lang$core$List$head(parts));
	}
};
var _sporto$erl$Erl$extractPort = function (str) {
	var rx = _elm_lang$core$Regex$regex(':\\d+');
	var res = A3(
		_elm_lang$core$Regex$find,
		_elm_lang$core$Regex$AtMost(1),
		rx,
		str);
	return function (result) {
		var _p7 = result;
		if (_p7.ctor === 'Ok') {
			return _p7._0;
		} else {
			var _p8 = _sporto$erl$Erl$extractProtocol(str);
			switch (_p8) {
				case 'http':
					return 80;
				case 'https':
					return 443;
				case 'ftp':
					return 21;
				case 'sftp':
					return 22;
				default:
					return 0;
			}
		}
	}(
		_elm_lang$core$String$toInt(
			A2(
				_elm_lang$core$String$dropLeft,
				1,
				A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					_elm_lang$core$List$head(
						A2(
							_elm_lang$core$List$map,
							function (_) {
								return _.match;
							},
							res))))));
};
var _sporto$erl$Erl$leftFrom = F2(
	function (delimiter, str) {
		var parts = A2(_elm_lang$core$String$split, delimiter, str);
		var head = _elm_lang$core$List$head(parts);
		var _p9 = _elm_lang$core$List$length(parts);
		switch (_p9) {
			case 0:
				return '';
			case 1:
				return '';
			default:
				return A2(_elm_lang$core$Maybe$withDefault, '', head);
		}
	});
var _sporto$erl$Erl$leftFromOrSame = F2(
	function (delimiter, str) {
		var parts = A2(_elm_lang$core$String$split, delimiter, str);
		return A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			_elm_lang$core$List$head(parts));
	});
var _sporto$erl$Erl$rightFromOrSame = F2(
	function (delimiter, str) {
		var parts = A2(_elm_lang$core$String$split, delimiter, str);
		return A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			_elm_lang$core$List$head(
				_elm_lang$core$List$reverse(parts)));
	});
var _sporto$erl$Erl$extractHost = function (str) {
	var localhostRx = 'localhost';
	var dotsRx = '((\\w|-)+\\.)+(\\w|-)+';
	var rx = A2(
		_elm_lang$core$Basics_ops['++'],
		'(',
		A2(
			_elm_lang$core$Basics_ops['++'],
			dotsRx,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'|',
				A2(_elm_lang$core$Basics_ops['++'], localhostRx, ')'))));
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(
			A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.match;
				},
				A3(
					_elm_lang$core$Regex$find,
					_elm_lang$core$Regex$AtMost(1),
					_elm_lang$core$Regex$regex(rx),
					A2(
						_sporto$erl$Erl$leftFromOrSame,
						'/',
						A2(_sporto$erl$Erl$rightFromOrSame, '//', str))))));
};
var _sporto$erl$Erl$host = function (str) {
	return _sporto$erl$Erl$parseHost(
		_sporto$erl$Erl$extractHost(str));
};
var _sporto$erl$Erl$extractPath = function (str) {
	var host = _sporto$erl$Erl$extractHost(str);
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$AtMost(1),
		_elm_lang$core$Regex$regex(':\\d+'),
		function (_p10) {
			return '';
		},
		A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$AtMost(1),
			_elm_lang$core$Regex$regex(host),
			function (_p11) {
				return '';
			},
			A2(
				_sporto$erl$Erl$leftFromOrSame,
				'#',
				A2(
					_sporto$erl$Erl$leftFromOrSame,
					'?',
					A2(_sporto$erl$Erl$rightFromOrSame, '//', str)))));
};
var _sporto$erl$Erl$hasLeadingSlashFromAll = function (str) {
	return A2(
		_elm_lang$core$Regex$contains,
		_elm_lang$core$Regex$regex('^/'),
		_sporto$erl$Erl$extractPath(str));
};
var _sporto$erl$Erl$hasTrailingSlashFromAll = function (str) {
	return A2(
		_elm_lang$core$Regex$contains,
		_elm_lang$core$Regex$regex('/$'),
		_sporto$erl$Erl$extractPath(str));
};
var _sporto$erl$Erl$rightFrom = F2(
	function (delimiter, str) {
		var parts = A2(_elm_lang$core$String$split, delimiter, str);
		var _p12 = _elm_lang$core$List$length(parts);
		switch (_p12) {
			case 0:
				return '';
			case 1:
				return '';
			default:
				return A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					_elm_lang$core$List$head(
						_elm_lang$core$List$reverse(parts)));
		}
	});
var _sporto$erl$Erl$notEmpty = function (str) {
	return !_elm_lang$core$String$isEmpty(str);
};
var _sporto$erl$Erl$parsePath = function (str) {
	return A2(
		_elm_lang$core$List$map,
		_elm_lang$core$Maybe$withDefault(''),
		A2(
			_elm_lang$core$List$map,
			_elm_lang$http$Http$decodeUri,
			A2(
				_elm_lang$core$List$filter,
				_sporto$erl$Erl$notEmpty,
				A2(_elm_lang$core$String$split, '/', str))));
};
var _sporto$erl$Erl$pathFromAll = function (str) {
	return _sporto$erl$Erl$parsePath(
		_sporto$erl$Erl$extractPath(str));
};
var _sporto$erl$Erl$parse = function (str) {
	return {
		host: _sporto$erl$Erl$host(str),
		hash: _sporto$erl$Erl$hashFromAll(str),
		password: '',
		path: _sporto$erl$Erl$pathFromAll(str),
		hasLeadingSlash: _sporto$erl$Erl$hasLeadingSlashFromAll(str),
		hasTrailingSlash: _sporto$erl$Erl$hasTrailingSlashFromAll(str),
		port_: _sporto$erl$Erl$extractPort(str),
		protocol: _sporto$erl$Erl$extractProtocol(str),
		query: _sporto$erl$Erl$queryFromAll(str),
		username: ''
	};
};
var _sporto$erl$Erl$Url = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return {protocol: a, username: b, password: c, host: d, port_: e, path: f, hasLeadingSlash: g, hasTrailingSlash: h, hash: i, query: j};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};

var _user$project$Analytics$error = F2(
	function (display, raw) {
		return {category: 'Error', action: display, label: raw, title: _elm_lang$core$Maybe$Nothing, tag: _elm_lang$core$Maybe$Nothing, author: _elm_lang$core$Maybe$Nothing};
	});
var _user$project$Analytics$twitterLink = {category: 'Twitter', action: 'click', label: '', title: _elm_lang$core$Maybe$Nothing, tag: _elm_lang$core$Maybe$Nothing, author: _elm_lang$core$Maybe$Nothing};
var _user$project$Analytics$newsletterSignup = {category: 'Newsletter', action: 'signup', label: '', title: _elm_lang$core$Maybe$Nothing, tag: _elm_lang$core$Maybe$Nothing, author: _elm_lang$core$Maybe$Nothing};
var _user$project$Analytics$tagLink = F2(
	function (tag, url) {
		return {
			category: 'Tag',
			action: 'click',
			label: url,
			title: _elm_lang$core$Maybe$Nothing,
			tag: _elm_lang$core$Maybe$Just(tag),
			author: _elm_lang$core$Maybe$Nothing
		};
	});
var _user$project$Analytics$archivedNewsLink = function (_p0) {
	var _p1 = _p0;
	return {
		category: 'Archived News',
		action: 'click',
		label: _p1.url,
		title: _elm_lang$core$Maybe$Just(_p1.title),
		tag: _elm_lang$core$Maybe$Just(_p1.tag),
		author: _elm_lang$core$Maybe$Just(_p1.author)
	};
};
var _user$project$Analytics$newsLink = function (_p2) {
	var _p3 = _p2;
	return {
		category: 'News',
		action: 'click',
		label: _p3.url,
		title: _elm_lang$core$Maybe$Just(_p3.title),
		tag: _elm_lang$core$Maybe$Just(_p3.tag),
		author: _elm_lang$core$Maybe$Just(_p3.author)
	};
};
var _user$project$Analytics$githubRepo = {category: 'Github Link', action: 'click', label: '', title: _elm_lang$core$Maybe$Nothing, tag: _elm_lang$core$Maybe$Nothing, author: _elm_lang$core$Maybe$Nothing};
var _user$project$Analytics$registerEvent = _elm_lang$core$Native_Platform.outgoingPort(
	'registerEvent',
	function (v) {
		return {
			category: v.category,
			action: v.action,
			label: v.label,
			title: (v.title.ctor === 'Nothing') ? null : v.title._0,
			tag: (v.tag.ctor === 'Nothing') ? null : v.tag._0,
			author: (v.author.ctor === 'Nothing') ? null : v.author._0
		};
	});
var _user$project$Analytics$pageView = _elm_lang$core$Native_Platform.outgoingPort(
	'pageView',
	function (v) {
		return v;
	});
var _user$project$Analytics$Event = F6(
	function (a, b, c, d, e, f) {
		return {category: a, action: b, label: c, title: d, tag: e, author: f};
	});
var _user$project$Analytics$NewsEventInfo = F4(
	function (a, b, c, d) {
		return {tag: a, url: b, title: c, author: d};
	});

var _user$project$Components_Close$view = A2(
	_elm_lang$html$Html$div,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('close'),
		_1: {
			ctor: '::',
			_0: _elm_lang$html$Html_Events$onClick(
				{ctor: '_Tuple0'}),
			_1: {ctor: '[]'}
		}
	},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('✖'),
		_1: {ctor: '[]'}
	});

var _user$project$Components_ErrorToast$view = F2(
	function (error, top) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('error'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						{
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'top',
								_1: A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(top),
									'px')
							},
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('error__content'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$img,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$src('assets/images/error.svg'),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$alt('Error'),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('error__img'),
										_1: {ctor: '[]'}
									}
								}
							},
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('error__text'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(error),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					}),
				_1: {
					ctor: '::',
					_0: _user$project$Components_Close$view,
					_1: {ctor: '[]'}
				}
			});
	});

var _user$project$Links$home = '/';
var _user$project$Links$newsletters = '/newsletters';
var _user$project$Links$newsletter = function (name) {
	return A2(_elm_lang$core$Basics_ops['++'], '/newsletters/', name);
};
var _user$project$Links$newsletterSignup = 'https://docs.google.com/forms/d/1jZmbctSv_HnPlrcVN_fvtemTaWz7MAq8019gJsnSPOE/viewform';
var _user$project$Links$githubIcon = '/assets/images/GitHub-Mark-Light-64px.png';
var _user$project$Links$github = 'https://github.com/oakesja/elm-news';
var _user$project$Links$twitterIcon = '/assets/images/twitter-64px.png';
var _user$project$Links$twitter = 'https://twitter.com/elmlangnews';

var _user$project$Components_GithubLink$view = F2(
	function (imgClasses, onLinkClick) {
		return A2(
			_elm_lang$html$Html$a,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$href(_user$project$Links$github),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$img,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class(
							A2(_elm_lang$core$Basics_ops['++'], 'github ', imgClasses)),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$src(_user$project$Links$githubIcon),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$alt('elm-news on github'),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$title('elm-news on github'),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onClick(
											onLinkClick(_user$project$Analytics$githubRepo)),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {ctor: '[]'}
			});
	});

var _user$project$Components_Footer$copyrightYear = function (currentYear) {
	var startYear = 2016;
	var _p0 = currentYear;
	if (_p0.ctor === 'Just') {
		var _p1 = _p0._0;
		return (_elm_lang$core$Native_Utils.cmp(_p1, startYear) > 0) ? A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(startYear),
			A2(
				_elm_lang$core$Basics_ops['++'],
				'-',
				_elm_lang$core$Basics$toString(_p1))) : _elm_lang$core$Basics$toString(startYear);
	} else {
		return _elm_lang$core$Basics$toString(startYear);
	}
};
var _user$project$Components_Footer$view = F2(
	function (currentYear, onLinkClick) {
		return A2(
			_elm_lang$html$Html$footer,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('footer grey'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('footer__description'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Code for this site is open source and written in Elm'),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(
										A2(
											_elm_lang$core$Basics_ops['++'],
											'© ',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_user$project$Components_Footer$copyrightYear(currentYear),
												' Jacob Oakes'))),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					}),
				_1: {
					ctor: '::',
					_0: A2(_user$project$Components_GithubLink$view, 'footer__github', onLinkClick),
					_1: {ctor: '[]'}
				}
			});
	});

var _user$project$HtmlEvents$onEnter = function (onEnterAction) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'keyup',
		A2(
			_elm_lang$core$Json_Decode$andThen,
			function (keyCode) {
				return _elm_lang$core$Native_Utils.eq(keyCode, 13) ? _elm_lang$core$Json_Decode$succeed(onEnterAction) : _elm_lang$core$Json_Decode$fail(
					_elm_lang$core$Basics$toString(keyCode));
			},
			_elm_lang$html$Html_Events$keyCode));
};

var _user$project$Components_Logo$icon = A2(
	_elm_lang$svg$Svg$g,
	{
		ctor: '::',
		_0: _elm_lang$svg$Svg_Attributes$viewBox('0 0 100 100'),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: A2(
			_elm_lang$svg$Svg$path,
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$d('M 5 0 L 95 0 L 50 55 z'),
				_1: {
					ctor: '::',
					_0: _elm_lang$svg$Svg_Attributes$fill('#F0AD00'),
					_1: {ctor: '[]'}
				}
			},
			{ctor: '[]'}),
		_1: {
			ctor: '::',
			_0: A2(
				_elm_lang$svg$Svg$path,
				{
					ctor: '::',
					_0: _elm_lang$svg$Svg_Attributes$d('M 0 5 L 0 95 L 36.8 50 z'),
					_1: {
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$fill('#60B5CC'),
						_1: {ctor: '[]'}
					}
				},
				{ctor: '[]'}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$svg$Svg$path,
					{
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$d('M 100 5 L 100 95 L 63.2 50 z'),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$fill('#60B5CC'),
							_1: {ctor: '[]'}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$svg$Svg$path,
						{
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$d('M 5 100 L 41.36 55.55 L 50 66.11 L 58.64 55.55 L 95 100 z'),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Attributes$fill('#7FD13B'),
								_1: {ctor: '[]'}
							}
						},
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				}
			}
		}
	});
var _user$project$Components_Logo$view = function (clickMsg) {
	return A2(
		_elm_lang$svg$Svg$svg,
		{
			ctor: '::',
			_0: _elm_lang$svg$Svg_Attributes$height('40px'),
			_1: {
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$viewBox('0 0 300 100'),
				_1: {
					ctor: '::',
					_0: _elm_lang$svg$Svg_Attributes$class('logo'),
					_1: {
						ctor: '::',
						_0: _elm_lang$svg$Svg_Events$onClick(clickMsg),
						_1: {ctor: '[]'}
					}
				}
			}
		},
		{
			ctor: '::',
			_0: _user$project$Components_Logo$icon,
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$svg$Svg$g,
					{
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$transform('translate(140, 45)'),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$fill('#FFFFFF'),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Attributes$fontSize('3.0em'),
								_1: {ctor: '[]'}
							}
						}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$svg$Svg$text_,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$svg$Svg$text('elm'),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$svg$Svg$text_,
								{
									ctor: '::',
									_0: _elm_lang$svg$Svg_Attributes$y('40'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$svg$Svg$text('news'),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			}
		});
};

var _user$project$Components_Header$view = function (config) {
	var minimized = _elm_lang$core$Native_Utils.cmp(config.screenWidth, 1000) < 0;
	return A2(
		_elm_lang$html$Html$header,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('header'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$classList(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'header__logo', _1: true},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'header__logo_min', _1: minimized},
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: A2(_elm_lang$html$Html_Attributes$attribute, 'role', 'button'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$tabindex(0),
								_1: {
									ctor: '::',
									_0: _user$project$HtmlEvents$onEnter(config.onIconClick),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$id('logo'),
										_1: {ctor: '[]'}
									}
								}
							}
						},
						{
							ctor: '::',
							_0: _user$project$Components_Logo$view(config.onIconClick),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{ctor: '[]'},
							{ctor: '[]'}),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$h1,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$classList(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'header__title', _1: true},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'header__title_hidden', _1: minimized},
									_1: {ctor: '[]'}
								}
							}),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('All elm news in one place'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$classList(
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'header__controls', _1: true},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'header__controls_min', _1: minimized},
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(_user$project$Components_GithubLink$view, 'header__icon header__control', config.onLinkClick),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Components_Header$Config = F4(
	function (a, b, c, d) {
		return {onLinkClick: a, onIconClick: b, onNewsletterClick: c, screenWidth: d};
	});

var _user$project$Components_Icons$icon = F4(
	function (pathString, className, h, onClickMsg) {
		return A2(
			_elm_lang$svg$Svg$svg,
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$class(className),
				_1: {
					ctor: '::',
					_0: _elm_lang$svg$Svg_Attributes$viewBox('0 0 24 24'),
					_1: {
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$height(
							_elm_lang$core$Basics$toString(h)),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$fill('currentColor'),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Events$onClick(onClickMsg),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$svg$Svg$path,
					{
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$d(pathString),
						_1: {ctor: '[]'}
					},
					{ctor: '[]'}),
				_1: {ctor: '[]'}
			});
	});
var _user$project$Components_Icons$right = _user$project$Components_Icons$icon('M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z');
var _user$project$Components_Icons$left = _user$project$Components_Icons$icon('M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z');

var _user$project$Components_Spinner$view = A2(
	_elm_lang$html$Html$div,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('spinner'),
		_1: {ctor: '[]'}
	},
	{ctor: '[]'});

var _user$project$DateFormatter$format = F2(
	function (maybeNow, dateTime) {
		var _p0 = maybeNow;
		if (_p0.ctor === 'Just') {
			var nowTime = _elm_lang$core$Date$toTime(_p0._0);
			var diff = (nowTime - dateTime) / 1000;
			return (_elm_lang$core$Native_Utils.cmp(diff, 0) < 1) ? A2(
				_mgold$elm_date_format$Date_Format$format,
				'%b %d',
				_elm_lang$core$Date$fromTime(dateTime)) : (((_elm_lang$core$Native_Utils.cmp(diff, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(diff, 1) < 1)) ? '1 second ago' : (((_elm_lang$core$Native_Utils.cmp(diff, 1) > 0) && (_elm_lang$core$Native_Utils.cmp(diff, 60) < 0)) ? A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(
					_elm_lang$core$Basics$round(diff)),
				' seconds ago') : (((_elm_lang$core$Native_Utils.cmp(diff, 60) > -1) && (_elm_lang$core$Native_Utils.cmp(diff, 120) < 0)) ? '1 minute ago' : (((_elm_lang$core$Native_Utils.cmp(diff, 120) > -1) && (_elm_lang$core$Native_Utils.cmp(diff, 3600) < 0)) ? A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(
					_elm_lang$core$Basics$round(diff / 60)),
				' minutes ago') : (((_elm_lang$core$Native_Utils.cmp(diff, 3600) > -1) && (_elm_lang$core$Native_Utils.cmp(diff, 7200) < 0)) ? '1 hour ago' : (((_elm_lang$core$Native_Utils.cmp(diff, 7200) > -1) && (_elm_lang$core$Native_Utils.cmp(diff, 86400) < 0)) ? A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(
					_elm_lang$core$Basics$round(diff / 3600)),
				' hours ago') : (((_elm_lang$core$Native_Utils.cmp(diff, 86400) > -1) && (_elm_lang$core$Native_Utils.cmp(diff, 172800) < 0)) ? '1 day ago' : (((_elm_lang$core$Native_Utils.cmp(diff, 172800) > -1) && (_elm_lang$core$Native_Utils.cmp(diff, 2592000) < 0)) ? A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(
					_elm_lang$core$Basics$round(diff / 86400)),
				' days ago') : (((_elm_lang$core$Native_Utils.cmp(diff, 2592000) > -1) && (_elm_lang$core$Native_Utils.cmp(diff, 5259600) < 0)) ? '1 month ago' : (((_elm_lang$core$Native_Utils.cmp(diff, 5259600) > -1) && (_elm_lang$core$Native_Utils.cmp(diff, 31557600) < 0)) ? A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(
					_elm_lang$core$Basics$round(diff / 2629800)),
				' months ago') : (((_elm_lang$core$Native_Utils.cmp(diff, 31557600) > -1) && (_elm_lang$core$Native_Utils.cmp(diff, 63115200) < 0)) ? '1 year ago' : A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(diff / 31557600),
				' years ago'))))))))))));
		} else {
			return A2(
				_mgold$elm_date_format$Date_Format$format,
				'%b %d',
				_elm_lang$core$Date$fromTime(dateTime));
		}
	});

var _user$project$ErrorManager$noErrors = function (model) {
	return _elm_lang$core$Native_Utils.cmp(
		_elm_lang$core$List$length(model),
		0) > 0;
};
var _user$project$ErrorManager$ackError = F2(
	function (error, model) {
		var _p0 = model;
		if (_p0.ctor === '[]') {
			return model;
		} else {
			var _p2 = _p0._1;
			var _p1 = _p0._0._1;
			return _elm_lang$core$Native_Utils.eq(_p1, error) ? {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: true, _1: error},
				_1: _p2
			} : {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _p0._0._0, _1: _p1},
				_1: A2(_user$project$ErrorManager$ackError, error, _p2)
			};
		}
	});
var _user$project$ErrorManager$init = {ctor: '[]'};
var _user$project$ErrorManager$Error = F2(
	function (a, b) {
		return {display: a, raw: b};
	});
var _user$project$ErrorManager$AcknowledgeError = function (a) {
	return {ctor: 'AcknowledgeError', _0: a};
};
var _user$project$ErrorManager$ackErrorAfterNSeconds = F2(
	function (error, seconds) {
		return A2(
			_elm_lang$core$Task$perform,
			function (_p3) {
				return _user$project$ErrorManager$AcknowledgeError(error);
			},
			_elm_lang$core$Process$sleep(_elm_lang$core$Time$second * seconds));
	});
var _user$project$ErrorManager$update = F2(
	function (msg, model) {
		var _p4 = msg;
		if (_p4.ctor === 'AddError') {
			var _p5 = _p4._0;
			return {
				ctor: '_Tuple2',
				_0: A2(
					_elm_lang$core$Basics_ops['++'],
					model,
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: false, _1: _p5},
						_1: {ctor: '[]'}
					}),
				_1: _elm_lang$core$Platform_Cmd$batch(
					{
						ctor: '::',
						_0: A2(_user$project$ErrorManager$ackErrorAfterNSeconds, _p5, 5),
						_1: {
							ctor: '::',
							_0: _user$project$Analytics$registerEvent(
								A2(_user$project$Analytics$error, _p5.display, _p5.raw)),
							_1: {ctor: '[]'}
						}
					})
			};
		} else {
			return {
				ctor: '_Tuple2',
				_0: A2(_user$project$ErrorManager$ackError, _p4._0, model),
				_1: _elm_lang$core$Platform_Cmd$none
			};
		}
	});
var _user$project$ErrorManager$errorView = F2(
	function (index, _p6) {
		var _p7 = _p6;
		var _p9 = _p7._1;
		var top = (index * 80) + 12;
		return _p7._0 ? A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(''),
				_1: {ctor: '[]'}
			}) : A2(
			_elm_lang$html$Html$map,
			function (_p8) {
				return _user$project$ErrorManager$AcknowledgeError(_p9);
			},
			A2(_user$project$Components_ErrorToast$view, _p9.display, top));
	});
var _user$project$ErrorManager$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		A2(_elm_lang$core$List$indexedMap, _user$project$ErrorManager$errorView, model));
};
var _user$project$ErrorManager$AddError = function (a) {
	return {ctor: 'AddError', _0: a};
};

var _user$project$FetchData$view = F2(
	function (fetchedView, data) {
		var _p0 = data;
		switch (_p0.ctor) {
			case 'Fetched':
				return fetchedView(_p0._0);
			case 'Failed':
				return A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('center__error'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Failed to load'),
						_1: {ctor: '[]'}
					});
			default:
				return A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('center__spinner'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _user$project$Components_Spinner$view,
						_1: {ctor: '[]'}
					});
		}
	});
var _user$project$FetchData$default = F2(
	function (defaultData, data) {
		var _p1 = data;
		if (_p1.ctor === 'Fetched') {
			return _p1._0;
		} else {
			return defaultData;
		}
	});
var _user$project$FetchData$Fetched = function (a) {
	return {ctor: 'Fetched', _0: a};
};
var _user$project$FetchData$Failed = function (a) {
	return {ctor: 'Failed', _0: a};
};
var _user$project$FetchData$Fetching = {ctor: 'Fetching'};
var _user$project$FetchData$NotStarted = {ctor: 'NotStarted'};

var _user$project$News_Feed$elmDiscourse = 'Discourse';

var _user$project$News_Story$Story = F5(
	function (a, b, c, d, e) {
		return {author: a, title: b, date: c, url: d, tag: e};
	});
var _user$project$News_Story$StoryResp = F2(
	function (a, b) {
		return {tag: a, stories: b};
	});
var _user$project$News_Story$StoryError = F2(
	function (a, b) {
		return {tag: a, error: b};
	});

var _user$project$News_HackerNews$timeDecoder = A2(
	_elm_lang$core$Json_Decode$map,
	function (time) {
		return time * 1000;
	},
	_elm_lang$core$Json_Decode$float);
var _user$project$News_HackerNews$tag = 'Hacker News';
var _user$project$News_HackerNews$storyToMessage = function (story) {
	return {
		author: story.author,
		title: A2(_elm_lang$core$Maybe$withDefault, '', story.title),
		date: story.date,
		url: A2(_elm_lang$core$Maybe$withDefault, '', story.url),
		tag: _user$project$News_HackerNews$tag
	};
};
var _user$project$News_HackerNews$HackerNewsStory = F5(
	function (a, b, c, d, e) {
		return {author: a, title: b, date: c, url: d, tag: e};
	});
var _user$project$News_HackerNews$hackerNewsDecoder = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'hits',
		_1: {ctor: '[]'}
	},
	_elm_lang$core$Json_Decode$list(
		A6(
			_elm_lang$core$Json_Decode$map5,
			_user$project$News_HackerNews$HackerNewsStory,
			A2(_elm_lang$core$Json_Decode$field, 'author', _elm_lang$core$Json_Decode$string),
			_elm_lang$core$Json_Decode$maybe(
				A2(_elm_lang$core$Json_Decode$field, 'title', _elm_lang$core$Json_Decode$string)),
			A2(_elm_lang$core$Json_Decode$field, 'created_at_i', _user$project$News_HackerNews$timeDecoder),
			_elm_lang$core$Json_Decode$maybe(
				A2(_elm_lang$core$Json_Decode$field, 'url', _elm_lang$core$Json_Decode$string)),
			_elm_lang$core$Json_Decode$succeed(_user$project$News_HackerNews$tag))));
var _user$project$News_HackerNews$decoder = A2(
	_elm_lang$core$Json_Decode$map,
	function (stories) {
		return A2(
			_elm_lang$core$List$filter,
			function (s) {
				return (!_elm_lang$core$Native_Utils.eq(s.url, '')) && (!_elm_lang$core$Native_Utils.eq(s.title, ''));
			},
			A2(_elm_lang$core$List$map, _user$project$News_HackerNews$storyToMessage, stories));
	},
	_user$project$News_HackerNews$hackerNewsDecoder);
var _user$project$News_HackerNews$fetch = A2(_elm_lang$http$Http$get, 'https://hn.algolia.com/api/v1/search_by_date?query=%22elm%22&tags=(story,show,poll,pollopt,ask_hn)', _user$project$News_HackerNews$decoder);

var _user$project$News_Reddit$timeDecoder = A2(
	_elm_lang$core$Json_Decode$map,
	function (time) {
		return time * 1000;
	},
	_elm_lang$core$Json_Decode$float);
var _user$project$News_Reddit$tag = 'reddit';
var _user$project$News_Reddit$decoder = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'data',
		_1: {
			ctor: '::',
			_0: 'children',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$list(
		A2(
			_elm_lang$core$Json_Decode$at,
			{
				ctor: '::',
				_0: 'data',
				_1: {ctor: '[]'}
			},
			A6(
				_elm_lang$core$Json_Decode$map5,
				_user$project$News_Story$Story,
				A2(_elm_lang$core$Json_Decode$field, 'author', _elm_lang$core$Json_Decode$string),
				A2(_elm_lang$core$Json_Decode$field, 'title', _elm_lang$core$Json_Decode$string),
				A2(_elm_lang$core$Json_Decode$field, 'created_utc', _user$project$News_Reddit$timeDecoder),
				A2(_elm_lang$core$Json_Decode$field, 'url', _elm_lang$core$Json_Decode$string),
				_elm_lang$core$Json_Decode$succeed(_user$project$News_Reddit$tag)))));
var _user$project$News_Reddit$fetch = A2(_elm_lang$http$Http$get, 'https://www.reddit.com/r/elm/new/.json', _user$project$News_Reddit$decoder);

var _user$project$News_Tag$discourseTag = {
	tagColor: 'elm_dark_teal',
	url: _elm_lang$core$Maybe$Just('https://discourse.elm-lang.org'),
	displayName: _user$project$News_Feed$elmDiscourse
};
var _user$project$News_Tag$hackerNewsTag = {
	tagColor: 'elm_green',
	url: _elm_lang$core$Maybe$Just('https://hn.algolia.com/?query=elm&sort=byDate&prefix=false&page=0&dateRange=all&type=story'),
	displayName: _user$project$News_HackerNews$tag
};
var _user$project$News_Tag$redditTag = {
	tagColor: 'elm_yellow',
	url: _elm_lang$core$Maybe$Just('https://www.reddit.com/r/elm/new'),
	displayName: _user$project$News_Reddit$tag
};
var _user$project$News_Tag$linkAttrs = F3(
	function (name, tag, onLinkClick) {
		var _p0 = tag.url;
		if (_p0.ctor === 'Just') {
			var _p1 = _p0._0;
			return {
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('tag__link'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$href(_p1),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$tabindex(-1),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onClick(
								onLinkClick(
									A2(_user$project$Analytics$tagLink, name, _p1))),
							_1: {ctor: '[]'}
						}
					}
				}
			};
		} else {
			return {
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('tag__link tag_disabled'),
				_1: {ctor: '[]'}
			};
		}
	});
var _user$project$News_Tag$TagInfo = F3(
	function (a, b, c) {
		return {tagColor: a, url: b, displayName: c};
	});
var _user$project$News_Tag$lookupTagInfo = function (name) {
	var lookup = A3(
		_elm_lang$core$Dict$insert,
		_elm_lang$core$String$toLower(_user$project$News_Feed$elmDiscourse),
		_user$project$News_Tag$discourseTag,
		A3(
			_elm_lang$core$Dict$insert,
			_elm_lang$core$String$toLower(_user$project$News_HackerNews$tag),
			_user$project$News_Tag$hackerNewsTag,
			A3(
				_elm_lang$core$Dict$insert,
				_elm_lang$core$String$toLower(_user$project$News_Reddit$tag),
				_user$project$News_Tag$redditTag,
				_elm_lang$core$Dict$empty)));
	var $default = A3(_user$project$News_Tag$TagInfo, 'elm_grey', _elm_lang$core$Maybe$Nothing, name);
	return A2(
		_elm_lang$core$Maybe$withDefault,
		$default,
		A2(_elm_lang$core$Dict$get, name, lookup));
};
var _user$project$News_Tag$view = F2(
	function (name, onLinkClick) {
		var tag = _user$project$News_Tag$lookupTagInfo(
			_elm_lang$core$String$toLower(name));
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class(
					A2(_elm_lang$core$Basics_ops['++'], 'tag ', tag.tagColor)),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$a,
					A3(_user$project$News_Tag$linkAttrs, name, tag, onLinkClick),
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(tag.displayName),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	});

var _user$project$Url$domain = function (url) {
	return A2(
		_elm_lang$core$String$join,
		'.',
		function (_) {
			return _.host;
		}(
			_sporto$erl$Erl$parse(url)));
};

var _user$project$News_News$timeStamp = F2(
	function (now, date) {
		var _p0 = date;
		if (_p0.ctor === 'Just') {
			return A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('card__date'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(
						A2(_user$project$DateFormatter$format, now, _p0._0)),
					_1: {ctor: '[]'}
				});
		} else {
			return _elm_lang$html$Html$text('');
		}
	});
var _user$project$News_News$authorView = function (from) {
	var fromText = function () {
		var _p1 = from;
		if (_p1.ctor === 'Author') {
			return A2(_elm_lang$core$Basics_ops['++'], 'By ', _p1._0);
		} else {
			return _p1._0;
		}
	}();
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('card__author'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(fromText),
			_1: {ctor: '[]'}
		});
};
var _user$project$News_News$storyDate = function (story) {
	return A2(_elm_lang$core$Maybe$withDefault, 0, story.date);
};
var _user$project$News_News$getAuthor = function (from) {
	var _p2 = from;
	if (_p2.ctor === 'Author') {
		return _p2._0;
	} else {
		return _p2._0;
	}
};
var _user$project$News_News$storyId = function (story) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		story.title,
		A2(
			_elm_lang$core$Basics_ops['++'],
			'_',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(story.tag),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'_',
					_user$project$News_News$getAuthor(story.from)))));
};
var _user$project$News_News$storyEvent = function (story) {
	return {
		tag: story.tag,
		url: story.url,
		title: story.title,
		author: _user$project$News_News$getAuthor(story.from)
	};
};
var _user$project$News_News$update = F3(
	function (config, msg, model) {
		var _p3 = msg;
		if (_p3.ctor === 'ClickStory') {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				model,
				{
					ctor: '::',
					_0: _user$project$Analytics$registerEvent(
						config.newsEvent(
							_user$project$News_News$storyEvent(_p3._0))),
					_1: {ctor: '[]'}
				});
		} else {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				model,
				{
					ctor: '::',
					_0: _user$project$Analytics$registerEvent(_p3._0),
					_1: {ctor: '[]'}
				});
		}
	});
var _user$project$News_News$init = {};
var _user$project$News_News$Model = {};
var _user$project$News_News$DisplayStory = F5(
	function (a, b, c, d, e) {
		return {from: a, title: b, date: c, url: d, tag: e};
	});
var _user$project$News_News$UpdateConfig = function (a) {
	return {newsEvent: a};
};
var _user$project$News_News$Config = F2(
	function (a, b) {
		return {now: a, screenWidth: b};
	});
var _user$project$News_News$Other = function (a) {
	return {ctor: 'Other', _0: a};
};
var _user$project$News_News$Author = function (a) {
	return {ctor: 'Author', _0: a};
};
var _user$project$News_News$TrackEvent = function (a) {
	return {ctor: 'TrackEvent', _0: a};
};
var _user$project$News_News$ClickStory = function (a) {
	return {ctor: 'ClickStory', _0: a};
};
var _user$project$News_News$linkView = function (story) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('card__description__header'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$a,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(
						_user$project$News_News$ClickStory(story)),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$href(story.url),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('card__description__title'),
							_1: {ctor: '[]'}
						}
					}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(
						_marcosh$elm_html_to_unicode$ElmEscapeHtml$unescape(story.title)),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$span,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('card__description__domain'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'(',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_user$project$Url$domain(story.url),
									')'))),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$News_News$cardView = F2(
	function (_p4, story) {
		var _p5 = _p4;
		var _p6 = _p5.now;
		return (_elm_lang$core$Native_Utils.cmp(_p5.screenWidth, 650) < 0) ? A2(
			_elm_lang$html$Html$a,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('card_min'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(
						_user$project$News_News$ClickStory(story)),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$href(story.url),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$id(
								_user$project$News_News$storyId(story)),
							_1: {ctor: '[]'}
						}
					}
				}
			},
			{
				ctor: '::',
				_0: _user$project$News_News$linkView(story),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('card__description__min'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _user$project$News_News$authorView(story.from),
							_1: {
								ctor: '::',
								_0: A2(_user$project$News_News$timeStamp, _p6, story.date),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}
			}) : A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('card'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$id(
						_user$project$News_News$storyId(story)),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(_user$project$News_Tag$view, story.tag, _user$project$News_News$TrackEvent),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('card__description'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _user$project$News_News$linkView(story),
							_1: {
								ctor: '::',
								_0: _user$project$News_News$authorView(story.from),
								_1: {ctor: '[]'}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(_user$project$News_News$timeStamp, _p6, story.date),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _user$project$News_News$view = F3(
	function (model, config, stories) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'cards_max',
							_1: _elm_lang$core$Native_Utils.cmp(config.screenWidth, 850) > -1
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'cards_min',
								_1: _elm_lang$core$Native_Utils.cmp(config.screenWidth, 850) < 0
							},
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			},
			A2(
				_elm_lang$core$List$map,
				_user$project$News_News$cardView(config),
				_elm_lang$core$List$reverse(
					A2(_elm_lang$core$List$sortBy, _user$project$News_News$storyDate, stories))));
	});

var _user$project$HomePage$toDisplayStory = function (story) {
	return {
		from: _user$project$News_News$Author(story.author),
		title: story.title,
		date: _elm_lang$core$Maybe$Just(story.date),
		url: story.url,
		tag: story.tag
	};
};
var _user$project$HomePage$updateRemainingToFetch = F2(
	function (tag, model) {
		return _elm_lang$core$Native_Utils.update(
			model,
			{
				remainingPlacesToFetchFrom: A2(
					_elm_lang$core$List$filter,
					function (t) {
						return !_elm_lang$core$Native_Utils.eq(t, tag);
					},
					model.remainingPlacesToFetchFrom)
			});
	});
var _user$project$HomePage$scrollIntoView = _elm_lang$core$Native_Platform.outgoingPort(
	'scrollIntoView',
	function (v) {
		return v;
	});
var _user$project$HomePage$fetchGoogleGroupMsgs = _elm_lang$core$Native_Platform.outgoingPort(
	'fetchGoogleGroupMsgs',
	function (v) {
		return v;
	});
var _user$project$HomePage$fetchedGoogleGroupMsgs = _elm_lang$core$Native_Platform.incomingPort(
	'fetchedGoogleGroupMsgs',
	A2(
		_elm_lang$core$Json_Decode$andThen,
		function (tag) {
			return A2(
				_elm_lang$core$Json_Decode$andThen,
				function (stories) {
					return _elm_lang$core$Json_Decode$succeed(
						{tag: tag, stories: stories});
				},
				A2(
					_elm_lang$core$Json_Decode$field,
					'stories',
					_elm_lang$core$Json_Decode$list(
						A2(
							_elm_lang$core$Json_Decode$andThen,
							function (author) {
								return A2(
									_elm_lang$core$Json_Decode$andThen,
									function (title) {
										return A2(
											_elm_lang$core$Json_Decode$andThen,
											function (date) {
												return A2(
													_elm_lang$core$Json_Decode$andThen,
													function (url) {
														return A2(
															_elm_lang$core$Json_Decode$andThen,
															function (tag) {
																return _elm_lang$core$Json_Decode$succeed(
																	{author: author, title: title, date: date, url: url, tag: tag});
															},
															A2(_elm_lang$core$Json_Decode$field, 'tag', _elm_lang$core$Json_Decode$string));
													},
													A2(_elm_lang$core$Json_Decode$field, 'url', _elm_lang$core$Json_Decode$string));
											},
											A2(_elm_lang$core$Json_Decode$field, 'date', _elm_lang$core$Json_Decode$float));
									},
									A2(_elm_lang$core$Json_Decode$field, 'title', _elm_lang$core$Json_Decode$string));
							},
							A2(_elm_lang$core$Json_Decode$field, 'author', _elm_lang$core$Json_Decode$string)))));
		},
		A2(_elm_lang$core$Json_Decode$field, 'tag', _elm_lang$core$Json_Decode$string)));
var _user$project$HomePage$errorGoogleGroupMsgs = _elm_lang$core$Native_Platform.incomingPort(
	'errorGoogleGroupMsgs',
	A2(
		_elm_lang$core$Json_Decode$andThen,
		function (tag) {
			return A2(
				_elm_lang$core$Json_Decode$andThen,
				function (error) {
					return _elm_lang$core$Json_Decode$succeed(
						{tag: tag, error: error});
				},
				A2(_elm_lang$core$Json_Decode$field, 'error', _elm_lang$core$Json_Decode$string));
		},
		A2(_elm_lang$core$Json_Decode$field, 'tag', _elm_lang$core$Json_Decode$string)));
var _user$project$HomePage$Model = F4(
	function (a, b, c, d) {
		return {allStories: a, errorManager: b, news: c, remainingPlacesToFetchFrom: d};
	});
var _user$project$HomePage$NewsMsg = function (a) {
	return {ctor: 'NewsMsg', _0: a};
};
var _user$project$HomePage$FetchedNews = F2(
	function (a, b) {
		return {ctor: 'FetchedNews', _0: a, _1: b};
	});
var _user$project$HomePage$fetch = F2(
	function (tag, request) {
		return A2(
			_elm_lang$core$Task$attempt,
			function (result) {
				return A2(
					_user$project$HomePage$FetchedNews,
					tag,
					A2(_elm_lang$core$Result$mapError, _elm_lang$core$Basics$toString, result));
			},
			_elm_lang$http$Http$toTask(request));
	});
var _user$project$HomePage$init = A2(
	_elm_lang$core$Platform_Cmd_ops['!'],
	{
		errorManager: _user$project$ErrorManager$init,
		allStories: {ctor: '[]'},
		news: _user$project$News_News$init,
		remainingPlacesToFetchFrom: {
			ctor: '::',
			_0: _user$project$News_Feed$elmDiscourse,
			_1: {
				ctor: '::',
				_0: _user$project$News_Reddit$tag,
				_1: {
					ctor: '::',
					_0: _user$project$News_HackerNews$tag,
					_1: {ctor: '[]'}
				}
			}
		}
	},
	{
		ctor: '::',
		_0: _user$project$HomePage$fetchGoogleGroupMsgs(_user$project$News_Feed$elmDiscourse),
		_1: {
			ctor: '::',
			_0: A2(_user$project$HomePage$fetch, _user$project$News_Reddit$tag, _user$project$News_Reddit$fetch),
			_1: {
				ctor: '::',
				_0: A2(_user$project$HomePage$fetch, _user$project$News_HackerNews$tag, _user$project$News_HackerNews$fetch),
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$HomePage$subscriptions = _elm_lang$core$Platform_Sub$batch(
	{
		ctor: '::',
		_0: _user$project$HomePage$fetchedGoogleGroupMsgs(
			function (resp) {
				return A2(
					_user$project$HomePage$FetchedNews,
					resp.tag,
					_elm_lang$core$Result$Ok(resp.stories));
			}),
		_1: {
			ctor: '::',
			_0: _user$project$HomePage$errorGoogleGroupMsgs(
				function (resp) {
					return A2(
						_user$project$HomePage$FetchedNews,
						resp.tag,
						_elm_lang$core$Result$Err(resp.error));
				}),
			_1: {ctor: '[]'}
		}
	});
var _user$project$HomePage$AnalyticsEvent = function (a) {
	return {ctor: 'AnalyticsEvent', _0: a};
};
var _user$project$HomePage$ErrorManagerMessage = function (a) {
	return {ctor: 'ErrorManagerMessage', _0: a};
};
var _user$project$HomePage$updateErrorManager = F2(
	function (msg, model) {
		var _p0 = A2(_user$project$ErrorManager$update, msg, model.errorManager);
		var newErrorMang = _p0._0;
		var fx = _p0._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_Utils.update(
				model,
				{errorManager: newErrorMang}),
			_1: A2(_elm_lang$core$Platform_Cmd$map, _user$project$HomePage$ErrorManagerMessage, fx)
		};
	});
var _user$project$HomePage$update = F2(
	function (msg, model) {
		var _p1 = msg;
		switch (_p1.ctor) {
			case 'ErrorManagerMessage':
				return A2(_user$project$HomePage$updateErrorManager, _p1._0, model);
			case 'AnalyticsEvent':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					model,
					{
						ctor: '::',
						_0: _user$project$Analytics$registerEvent(_p1._0),
						_1: {ctor: '[]'}
					});
			case 'FetchedNews':
				if (_p1._1.ctor === 'Ok') {
					var updatedModel = A2(
						_user$project$HomePage$updateRemainingToFetch,
						_p1._0,
						_elm_lang$core$Native_Utils.update(
							model,
							{
								allStories: A2(_elm_lang$core$Basics_ops['++'], model.allStories, _p1._1._0)
							}));
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						updatedModel,
						{ctor: '[]'});
				} else {
					var _p3 = _p1._0;
					var error = {
						display: A2(_elm_lang$core$Basics_ops['++'], 'Failed to fetch content from ', _p3),
						raw: A2(_elm_lang$core$Debug$log, '', _p1._1._0)
					};
					var _p2 = A2(
						_user$project$HomePage$updateErrorManager,
						_user$project$ErrorManager$AddError(error),
						model);
					var updatedWithError = _p2._0;
					var errorCmd = _p2._1;
					var updatedModel = A2(_user$project$HomePage$updateRemainingToFetch, _p3, updatedWithError);
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						updatedModel,
						{
							ctor: '::',
							_0: errorCmd,
							_1: {ctor: '[]'}
						});
				}
			default:
				var _p4 = A3(
					_user$project$News_News$update,
					{newsEvent: _user$project$Analytics$newsLink},
					_p1._0,
					model.news);
				var newNews = _p4._0;
				var cmd = _p4._1;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{news: newNews}),
					{
						ctor: '::',
						_0: A2(_elm_lang$core$Platform_Cmd$map, _user$project$HomePage$NewsMsg, cmd),
						_1: {ctor: '[]'}
					});
		}
	});
var _user$project$HomePage$view = F3(
	function (now, screenWidth, model) {
		var news = _elm_lang$core$List$isEmpty(model.allStories) ? _user$project$Components_Spinner$view : A2(
			_elm_lang$html$Html$map,
			_user$project$HomePage$NewsMsg,
			A3(
				_user$project$News_News$view,
				model.news,
				{now: now, screenWidth: screenWidth},
				A2(_elm_lang$core$List$map, _user$project$HomePage$toDisplayStory, model.allStories)));
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('home__body'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: news,
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$map,
						_user$project$HomePage$ErrorManagerMessage,
						_user$project$ErrorManager$view(model.errorManager)),
					_1: {ctor: '[]'}
				}
			});
	});

var _user$project$Json$result = _elm_lang$core$Json_Decode$andThen(
	function (result) {
		var _p0 = result;
		if (_p0.ctor === 'Ok') {
			return _elm_lang$core$Json_Decode$succeed(_p0._0);
		} else {
			return _elm_lang$core$Json_Decode$fail(_p0._0);
		}
	});

var _user$project$Newsletter_NewsletterFile$nameDecoder = A2(_elm_lang$core$Json_Decode$field, 'name', _elm_lang$core$Json_Decode$string);
var _user$project$Newsletter_NewsletterFile$parseDateFromFile = function (name) {
	return _elm_lang$core$Date$fromString(
		A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			_elm_lang$core$List$head(
				A2(_elm_lang$core$String$split, '.', name))));
};
var _user$project$Newsletter_NewsletterFile$dateFromNameDecoder = A2(_elm_lang$core$Json_Decode$map, _user$project$Newsletter_NewsletterFile$parseDateFromFile, _user$project$Newsletter_NewsletterFile$nameDecoder);
var _user$project$Newsletter_NewsletterFile$NewsletterFile = F3(
	function (a, b, c) {
		return {date: a, url: b, name: c};
	});
var _user$project$Newsletter_NewsletterFile$decoder = A4(
	_elm_lang$core$Json_Decode$map3,
	_user$project$Newsletter_NewsletterFile$NewsletterFile,
	_user$project$Json$result(_user$project$Newsletter_NewsletterFile$dateFromNameDecoder),
	A2(_elm_lang$core$Json_Decode$field, 'download_url', _elm_lang$core$Json_Decode$string),
	_user$project$Newsletter_NewsletterFile$nameDecoder);
var _user$project$Newsletter_NewsletterFile$fetch = A2(
	_elm_lang$http$Http$get,
	'https://api.github.com/repos/oakesja/elm-news-newsletters/contents/newsletters',
	_elm_lang$core$Json_Decode$list(_user$project$Newsletter_NewsletterFile$decoder));

var _user$project$NewslettersPage$update = F2(
	function (msg, model) {
		var _p0 = msg;
		if (_p0.ctor === 'GoToNewletter') {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				model,
				{
					ctor: '::',
					_0: _elm_lang$navigation$Navigation$modifyUrl(
						_user$project$Links$newsletter(_p0._0)),
					_1: {ctor: '[]'}
				});
		} else {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				model,
				{
					ctor: '::',
					_0: _user$project$Analytics$registerEvent(_user$project$Analytics$newsletterSignup),
					_1: {ctor: '[]'}
				});
		}
	});
var _user$project$NewslettersPage$init = A2(
	_elm_lang$core$Platform_Cmd_ops['!'],
	{},
	{ctor: '[]'});
var _user$project$NewslettersPage$Model = {};
var _user$project$NewslettersPage$GoToSignup = {ctor: 'GoToSignup'};
var _user$project$NewslettersPage$GoToNewletter = function (a) {
	return {ctor: 'GoToNewletter', _0: a};
};
var _user$project$NewslettersPage$newsletterView = F2(
	function (index, file) {
		var issue = _elm_lang$core$Basics$toString(index + 1);
		return A2(
			_elm_lang$html$Html$span,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('newsletters__file'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'#',
						A2(_elm_lang$core$Basics_ops['++'], issue, ' ― '))),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$span,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('internal__link'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onClick(
									_user$project$NewslettersPage$GoToNewletter(file.name)),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$tabindex(0),
									_1: {
										ctor: '::',
										_0: A2(_elm_lang$html$Html_Attributes$attribute, 'row', 'button'),
										_1: {
											ctor: '::',
											_0: _user$project$HtmlEvents$onEnter(
												_user$project$NewslettersPage$GoToNewletter(file.name)),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								A2(_mgold$elm_date_format$Date_Format$format, '%b %d, %Y', file.date)),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$NewslettersPage$newslettersView = function (newsletters) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('newsletters'),
			_1: {ctor: '[]'}
		},
		_elm_lang$core$List$reverse(
			A2(
				_elm_lang$core$List$indexedMap,
				_user$project$NewslettersPage$newsletterView,
				A2(
					_elm_lang$core$List$sortBy,
					function (_p1) {
						return _elm_lang$core$Date$toTime(
							function (_) {
								return _.date;
							}(_p1));
					},
					newsletters))));
};
var _user$project$NewslettersPage$newsletters = function (files) {
	return A2(_user$project$FetchData$view, _user$project$NewslettersPage$newslettersView, files);
};
var _user$project$NewslettersPage$view = F2(
	function (files, model) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('newsletters__row'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('newsletters__col'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$h1,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('newletters__header'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Weekly Top News Archive'),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$span,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('newsletters__description'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('\n                    Every Monday a newsletter is sent out for the previous\n                    week\'s top visited elm news articles from the site.\n                    This is an archive for past newsletters.\n                    '),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('signup__row'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$a,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$href(_user$project$Links$newsletterSignup),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onClick(_user$project$NewslettersPage$GoToSignup),
													_1: {
														ctor: '::',
														_0: _elm_lang$html$Html_Attributes$class('signup__button'),
														_1: {ctor: '[]'}
													}
												}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Subscribe'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: _user$project$NewslettersPage$newsletters(files),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			});
	});

var _user$project$Newsletter_Newsletter$fromDecoder = _elm_lang$core$Json_Decode$oneOf(
	{
		ctor: '::',
		_0: A2(
			_elm_lang$core$Json_Decode$map,
			_user$project$News_News$Author,
			A2(_elm_lang$core$Json_Decode$field, 'author', _elm_lang$core$Json_Decode$string)),
		_1: {
			ctor: '::',
			_0: A2(
				_elm_lang$core$Json_Decode$map,
				_user$project$News_News$Other,
				A2(_elm_lang$core$Json_Decode$field, 'description', _elm_lang$core$Json_Decode$string)),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Json_Decode$fail('Failed to find an author or description'),
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$Newsletter_Newsletter$Newsletter = F4(
	function (a, b, c, d) {
		return {startDate: a, endDate: b, year: c, articles: d};
	});
var _user$project$Newsletter_Newsletter$Article = F4(
	function (a, b, c, d) {
		return {url: a, title: b, from: c, tag: d};
	});
var _user$project$Newsletter_Newsletter$articleDecoder = A5(
	_elm_lang$core$Json_Decode$map4,
	_user$project$Newsletter_Newsletter$Article,
	A2(_elm_lang$core$Json_Decode$field, 'url', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode$field, 'title', _elm_lang$core$Json_Decode$string),
	_user$project$Newsletter_Newsletter$fromDecoder,
	A2(_elm_lang$core$Json_Decode$field, 'tag', _elm_lang$core$Json_Decode$string));
var _user$project$Newsletter_Newsletter$decoder = A5(
	_elm_lang$core$Json_Decode$map4,
	_user$project$Newsletter_Newsletter$Newsletter,
	A2(_elm_lang$core$Json_Decode$field, 'start_date', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode$field, 'end_date', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode$field, 'year', _elm_lang$core$Json_Decode$string),
	A2(
		_elm_lang$core$Json_Decode$field,
		'articles',
		_elm_lang$core$Json_Decode$list(_user$project$Newsletter_Newsletter$articleDecoder)));
var _user$project$Newsletter_Newsletter$fetch = function (name) {
	return A2(
		_elm_lang$http$Http$get,
		A2(_elm_lang$core$Basics_ops['++'], 'https://raw.githubusercontent.com/oakesja/elm-news-newsletters/master/newsletters/', name),
		_user$project$Newsletter_Newsletter$decoder);
};

var _user$project$NewsletterPage$nextArticle = F2(
	function (name, files) {
		nextArticle:
		while (true) {
			var _p0 = files;
			if (_p0.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				if (_p0._1.ctor === '[]') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					var _p1 = _p0._1._0;
					if (_elm_lang$core$Native_Utils.eq(_p0._0.name, name)) {
						return _elm_lang$core$Maybe$Just(_p1);
					} else {
						var _v1 = name,
							_v2 = {ctor: '::', _0: _p1, _1: _p0._1._1};
						name = _v1;
						files = _v2;
						continue nextArticle;
					}
				}
			}
		}
	});
var _user$project$NewsletterPage$previousArticle = F2(
	function (name, files) {
		previousArticle:
		while (true) {
			var _p2 = files;
			if (_p2.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				if (_p2._1.ctor === '[]') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					var _p3 = _p2._1._0;
					if (_elm_lang$core$Native_Utils.eq(_p3.name, name)) {
						return _elm_lang$core$Maybe$Just(_p2._0);
					} else {
						var _v4 = name,
							_v5 = {ctor: '::', _0: _p3, _1: _p2._1._1};
						name = _v4;
						files = _v5;
						continue previousArticle;
					}
				}
			}
		}
	});
var _user$project$NewsletterPage$toDisplayStory = function (article) {
	return {from: article.from, title: article.title, date: _elm_lang$core$Maybe$Nothing, url: article.url, tag: article.tag};
};
var _user$project$NewsletterPage$title = function (newsletter) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'Top News for ',
		A2(
			_elm_lang$core$Basics_ops['++'],
			newsletter.startDate,
			A2(
				_elm_lang$core$Basics_ops['++'],
				' - ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					newsletter.endDate,
					A2(_elm_lang$core$Basics_ops['++'], ', ', newsletter.year)))));
};
var _user$project$NewsletterPage$init = function (filename) {
	return A2(
		_elm_lang$core$Platform_Cmd_ops['!'],
		{news: _user$project$News_News$init, filename: filename},
		{ctor: '[]'});
};
var _user$project$NewsletterPage$Model = F2(
	function (a, b) {
		return {news: a, filename: b};
	});
var _user$project$NewsletterPage$Data = F3(
	function (a, b, c) {
		return {screenWidth: a, files: b, newsletter: c};
	});
var _user$project$NewsletterPage$NoOp = {ctor: 'NoOp'};
var _user$project$NewsletterPage$NewsMsg = function (a) {
	return {ctor: 'NewsMsg', _0: a};
};
var _user$project$NewsletterPage$update = F2(
	function (msg, model) {
		var _p4 = msg;
		switch (_p4.ctor) {
			case 'ClickEvent':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					model,
					{
						ctor: '::',
						_0: _user$project$Analytics$registerEvent(_p4._0),
						_1: {ctor: '[]'}
					});
			case 'GoToArticle':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					model,
					{
						ctor: '::',
						_0: _elm_lang$navigation$Navigation$newUrl(
							_user$project$Links$newsletter(_p4._0)),
						_1: {ctor: '[]'}
					});
			case 'NewsMsg':
				var _p5 = A3(
					_user$project$News_News$update,
					{newsEvent: _user$project$Analytics$archivedNewsLink},
					_p4._0,
					model.news);
				var newNews = _p5._0;
				var cmd = _p5._1;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{news: newNews}),
					{
						ctor: '::',
						_0: A2(_elm_lang$core$Platform_Cmd$map, _user$project$NewsletterPage$NewsMsg, cmd),
						_1: {ctor: '[]'}
					});
			default:
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					model,
					{ctor: '[]'});
		}
	});
var _user$project$NewsletterPage$articles = F4(
	function (screenWidth, files, newsletter, model) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('newsletter__articles'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$h1,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('newsletter__header'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							_user$project$NewsletterPage$title(newsletter)),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$map,
						_user$project$NewsletterPage$NewsMsg,
						A3(
							_user$project$News_News$view,
							model.news,
							{now: _elm_lang$core$Maybe$Nothing, screenWidth: screenWidth},
							A2(_elm_lang$core$List$map, _user$project$NewsletterPage$toDisplayStory, newsletter.articles))),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$NewsletterPage$GoToArticle = function (a) {
	return {ctor: 'GoToArticle', _0: a};
};
var _user$project$NewsletterPage$navIcon = F5(
	function (findArticle, icon, files, filename, baseClass) {
		var _p6 = A2(findArticle, filename, files);
		if (_p6.ctor === 'Just') {
			var _p7 = _p6._0;
			return A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$tabindex(0),
					_1: {
						ctor: '::',
						_0: A2(_elm_lang$html$Html_Attributes$attribute, 'role', 'button'),
						_1: {
							ctor: '::',
							_0: _user$project$HtmlEvents$onEnter(
								_user$project$NewsletterPage$GoToArticle(_p7.name)),
							_1: {ctor: '[]'}
						}
					}
				},
				{
					ctor: '::',
					_0: A3(
						icon,
						baseClass,
						48,
						_user$project$NewsletterPage$GoToArticle(_p7.name)),
					_1: {ctor: '[]'}
				});
		} else {
			return A3(icon, 'newsletter__nav_disabled', 48, _user$project$NewsletterPage$NoOp);
		}
	});
var _user$project$NewsletterPage$displayNewsletter = F4(
	function (screenWidth, files, model, newsletter) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('newsletter__body'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A4(_user$project$NewsletterPage$articles, screenWidth, files, newsletter, model),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('newsletter__controls'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A5(_user$project$NewsletterPage$navIcon, _user$project$NewsletterPage$previousArticle, _user$project$Components_Icons$left, files, model.filename, 'newsletter__nav_min'),
							_1: {
								ctor: '::',
								_0: A5(_user$project$NewsletterPage$navIcon, _user$project$NewsletterPage$nextArticle, _user$project$Components_Icons$right, files, model.filename, 'newsletter__nav_min'),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$NewsletterPage$view = F2(
	function (data, model) {
		return A2(
			_user$project$FetchData$view,
			A3(_user$project$NewsletterPage$displayNewsletter, data.screenWidth, data.files, model),
			data.newsletter);
	});
var _user$project$NewsletterPage$ClickEvent = function (a) {
	return {ctor: 'ClickEvent', _0: a};
};

var _user$project$Page$NotFound = {ctor: 'NotFound'};
var _user$project$Page$Newsletter = function (a) {
	return {ctor: 'Newsletter', _0: a};
};
var _user$project$Page$Newsletters = {ctor: 'Newsletters'};
var _user$project$Page$Home = {ctor: 'Home'};
var _user$project$Page$pageParser = _evancz$url_parser$UrlParser$oneOf(
	{
		ctor: '::',
		_0: A2(
			_evancz$url_parser$UrlParser$map,
			_user$project$Page$Newsletter,
			A2(
				_evancz$url_parser$UrlParser_ops['</>'],
				_evancz$url_parser$UrlParser$s('newsletters'),
				_evancz$url_parser$UrlParser$string)),
		_1: {
			ctor: '::',
			_0: A2(
				_evancz$url_parser$UrlParser$map,
				_user$project$Page$Newsletters,
				_evancz$url_parser$UrlParser$s('newsletters')),
			_1: {
				ctor: '::',
				_0: A2(
					_evancz$url_parser$UrlParser$map,
					_user$project$Page$Home,
					_evancz$url_parser$UrlParser$s('')),
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$Page$parse = function (location) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		_user$project$Page$NotFound,
		A2(_evancz$url_parser$UrlParser$parsePath, _user$project$Page$pageParser, location));
};

var _user$project$Main$Model = F5(
	function (a, b, c, d, e) {
		return {currentPage: a, newsletterFiles: b, newsletters: c, now: d, width: e};
	});
var _user$project$Main$NotFound = {ctor: 'NotFound'};
var _user$project$Main$NewsletterPage = function (a) {
	return {ctor: 'NewsletterPage', _0: a};
};
var _user$project$Main$NewslettersPage = function (a) {
	return {ctor: 'NewslettersPage', _0: a};
};
var _user$project$Main$HomePage = function (a) {
	return {ctor: 'HomePage', _0: a};
};
var _user$project$Main$NoOp = {ctor: 'NoOp'};
var _user$project$Main$resetFocus = A2(
	_elm_lang$core$Task$attempt,
	function (_p0) {
		return _user$project$Main$NoOp;
	},
	_elm_lang$dom$Dom$focus('logo'));
var _user$project$Main$NewsletterClicked = {ctor: 'NewsletterClicked'};
var _user$project$Main$IconClicked = {ctor: 'IconClicked'};
var _user$project$Main$FetchedNewsletter = F2(
	function (a, b) {
		return {ctor: 'FetchedNewsletter', _0: a, _1: b};
	});
var _user$project$Main$fetchNewsletter = F2(
	function (name, model) {
		var _p1 = A2(_elm_lang$core$Dict$get, name, model.newsletters);
		if (_p1.ctor === 'Nothing') {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_elm_lang$core$Native_Utils.update(
					model,
					{
						newsletters: A3(_elm_lang$core$Dict$insert, name, _user$project$FetchData$Fetching, model.newsletters)
					}),
				{
					ctor: '::',
					_0: A2(
						_elm_lang$http$Http$send,
						_user$project$Main$FetchedNewsletter(name),
						_user$project$Newsletter_Newsletter$fetch(name)),
					_1: {ctor: '[]'}
				});
		} else {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				model,
				{ctor: '[]'});
		}
	});
var _user$project$Main$FetchedFiles = function (a) {
	return {ctor: 'FetchedFiles', _0: a};
};
var _user$project$Main$fetchNewsletterFiles = function (model) {
	var _p2 = model.newsletterFiles;
	if (_p2.ctor === 'NotStarted') {
		return A2(_elm_lang$http$Http$send, _user$project$Main$FetchedFiles, _user$project$Newsletter_NewsletterFile$fetch);
	} else {
		return _elm_lang$core$Platform_Cmd$none;
	}
};
var _user$project$Main$WindowSize = function (a) {
	return {ctor: 'WindowSize', _0: a};
};
var _user$project$Main$CurrentDate = function (a) {
	return {ctor: 'CurrentDate', _0: a};
};
var _user$project$Main$AnalyticsEvent = function (a) {
	return {ctor: 'AnalyticsEvent', _0: a};
};
var _user$project$Main$PageMsg = function (a) {
	return {ctor: 'PageMsg', _0: a};
};
var _user$project$Main$UrlChange = function (a) {
	return {ctor: 'UrlChange', _0: a};
};
var _user$project$Main$NewsletterMsg = function (a) {
	return {ctor: 'NewsletterMsg', _0: a};
};
var _user$project$Main$NewslettersMsg = function (a) {
	return {ctor: 'NewslettersMsg', _0: a};
};
var _user$project$Main$HomePageMsg = function (a) {
	return {ctor: 'HomePageMsg', _0: a};
};
var _user$project$Main$updateCurrentPage = F2(
	function (msg, model) {
		var _p3 = {ctor: '_Tuple2', _0: msg, _1: model};
		_v2_3:
		do {
			if (_p3.ctor === '_Tuple2') {
				switch (_p3._0.ctor) {
					case 'HomePageMsg':
						if (_p3._1.ctor === 'HomePage') {
							return A3(
								_Fresheyeball$elm_return$Return$mapBoth,
								_user$project$Main$HomePageMsg,
								_user$project$Main$HomePage,
								A2(_user$project$HomePage$update, _p3._0._0, _p3._1._0));
						} else {
							break _v2_3;
						}
					case 'NewslettersMsg':
						if (_p3._1.ctor === 'NewslettersPage') {
							return A3(
								_Fresheyeball$elm_return$Return$mapBoth,
								_user$project$Main$NewslettersMsg,
								_user$project$Main$NewslettersPage,
								A2(_user$project$NewslettersPage$update, _p3._0._0, _p3._1._0));
						} else {
							break _v2_3;
						}
					default:
						if (_p3._1.ctor === 'NewsletterPage') {
							return A3(
								_Fresheyeball$elm_return$Return$mapBoth,
								_user$project$Main$NewsletterMsg,
								_user$project$Main$NewsletterPage,
								A2(_user$project$NewsletterPage$update, _p3._0._0, _p3._1._0));
						} else {
							break _v2_3;
						}
				}
			} else {
				break _v2_3;
			}
		} while(false);
		var _p4 = A2(_elm_lang$core$Debug$log, 'received unexpected message', msg);
		return _Fresheyeball$elm_return$Return$singleton(model);
	});
var _user$project$Main$loadPage = F2(
	function (location, model) {
		var mapToCurrentPage = F2(
			function (pageMsg, pageModel) {
				return A2(
					_Fresheyeball$elm_return$Return$mapBoth,
					function (_p5) {
						return _user$project$Main$PageMsg(
							pageMsg(_p5));
					},
					function (page) {
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								currentPage: pageModel(page)
							});
					});
			});
		var pageView = _user$project$Analytics$pageView(location.pathname);
		var _p6 = _user$project$Page$parse(location);
		switch (_p6.ctor) {
			case 'Home':
				return A2(
					_Fresheyeball$elm_return$Return$command,
					pageView,
					A2(
						_Fresheyeball$elm_return$Return$command,
						_user$project$Main$resetFocus,
						A3(mapToCurrentPage, _user$project$Main$HomePageMsg, _user$project$Main$HomePage, _user$project$HomePage$init)));
			case 'Newsletters':
				return A2(
					_Fresheyeball$elm_return$Return$command,
					pageView,
					A2(
						_Fresheyeball$elm_return$Return$command,
						_user$project$Main$resetFocus,
						A2(
							_Fresheyeball$elm_return$Return$effect_,
							_user$project$Main$fetchNewsletterFiles,
							A3(mapToCurrentPage, _user$project$Main$NewslettersMsg, _user$project$Main$NewslettersPage, _user$project$NewslettersPage$init))));
			case 'Newsletter':
				var _p7 = _p6._0;
				return A2(
					_Fresheyeball$elm_return$Return$command,
					pageView,
					A2(
						_Fresheyeball$elm_return$Return$command,
						_user$project$Main$resetFocus,
						A2(
							_Fresheyeball$elm_return$Return$effect_,
							_user$project$Main$fetchNewsletterFiles,
							A2(
								_Fresheyeball$elm_return$Return$andThen,
								_user$project$Main$fetchNewsletter(_p7),
								A3(
									mapToCurrentPage,
									_user$project$Main$NewsletterMsg,
									_user$project$Main$NewsletterPage,
									_user$project$NewsletterPage$init(_p7))))));
			default:
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					model,
					{
						ctor: '::',
						_0: pageView,
						_1: {ctor: '[]'}
					});
		}
	});
var _user$project$Main$init = function (location) {
	return A2(
		_Fresheyeball$elm_return$Return$command,
		A2(_elm_lang$core$Task$perform, _user$project$Main$WindowSize, _elm_lang$window$Window$size),
		A2(
			_Fresheyeball$elm_return$Return$command,
			A2(_elm_lang$core$Task$perform, _user$project$Main$CurrentDate, _elm_lang$core$Date$now),
			A2(
				_user$project$Main$loadPage,
				location,
				{currentPage: _user$project$Main$NotFound, newsletterFiles: _user$project$FetchData$NotStarted, newsletters: _elm_lang$core$Dict$empty, now: _elm_lang$core$Maybe$Nothing, width: 0})));
};
var _user$project$Main$update = F2(
	function (msg, model) {
		var _p8 = msg;
		switch (_p8.ctor) {
			case 'UrlChange':
				return A2(_user$project$Main$loadPage, _p8._0, model);
			case 'PageMsg':
				return A3(
					_Fresheyeball$elm_return$Return$mapBoth,
					_user$project$Main$PageMsg,
					function (page) {
						return _elm_lang$core$Native_Utils.update(
							model,
							{currentPage: page});
					},
					A2(_user$project$Main$updateCurrentPage, _p8._0, model.currentPage));
			case 'AnalyticsEvent':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					model,
					{
						ctor: '::',
						_0: _user$project$Analytics$registerEvent(_p8._0),
						_1: {ctor: '[]'}
					});
			case 'CurrentDate':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							now: _elm_lang$core$Maybe$Just(_p8._0)
						}),
					{
						ctor: '::',
						_0: A2(
							_elm_lang$core$Task$perform,
							_user$project$Main$CurrentDate,
							A2(
								_elm_lang$core$Task$andThen,
								function (_p9) {
									return _elm_lang$core$Date$now;
								},
								_elm_lang$core$Process$sleep(_elm_lang$core$Time$minute))),
						_1: {ctor: '[]'}
					});
			case 'WindowSize':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{width: _p8._0.width}),
					{ctor: '[]'});
			case 'FetchedFiles':
				if (_p8._0.ctor === 'Err') {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								newsletterFiles: _user$project$FetchData$Failed(_p8._0._0)
							}),
						{ctor: '[]'});
				} else {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								newsletterFiles: _user$project$FetchData$Fetched(_p8._0._0)
							}),
						{ctor: '[]'});
				}
			case 'FetchedNewsletter':
				if (_p8._1.ctor === 'Err') {
					var _p11 = _p8._1._0;
					var newsletters = A3(
						_elm_lang$core$Dict$insert,
						_p8._0,
						_user$project$FetchData$Failed(_p11),
						model.newsletters);
					var _p10 = A2(_elm_lang$core$Debug$log, 'error', _p11);
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{newsletters: newsletters}),
						{ctor: '[]'});
				} else {
					var newsletters = A3(
						_elm_lang$core$Dict$insert,
						_p8._0,
						_user$project$FetchData$Fetched(_p8._1._0),
						model.newsletters);
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{newsletters: newsletters}),
						{ctor: '[]'});
				}
			case 'IconClicked':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					model,
					{
						ctor: '::',
						_0: _elm_lang$navigation$Navigation$newUrl(_user$project$Links$home),
						_1: {ctor: '[]'}
					});
			case 'NewsletterClicked':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					model,
					{
						ctor: '::',
						_0: _elm_lang$navigation$Navigation$newUrl(_user$project$Links$newsletters),
						_1: {ctor: '[]'}
					});
			default:
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					model,
					{ctor: '[]'});
		}
	});
var _user$project$Main$body = function (model) {
	var _p12 = model.currentPage;
	switch (_p12.ctor) {
		case 'HomePage':
			return A2(
				_elm_lang$html$Html$map,
				function (_p13) {
					return _user$project$Main$PageMsg(
						_user$project$Main$HomePageMsg(_p13));
				},
				A3(_user$project$HomePage$view, model.now, model.width, _p12._0));
		case 'NewslettersPage':
			return A2(
				_elm_lang$html$Html$map,
				function (_p14) {
					return _user$project$Main$PageMsg(
						_user$project$Main$NewslettersMsg(_p14));
				},
				A2(_user$project$NewslettersPage$view, model.newsletterFiles, _p12._0));
		case 'NewsletterPage':
			var _p16 = _p12._0;
			return A2(
				_elm_lang$html$Html$map,
				function (_p15) {
					return _user$project$Main$PageMsg(
						_user$project$Main$NewsletterMsg(_p15));
				},
				A2(
					_user$project$NewsletterPage$view,
					{
						screenWidth: model.width,
						files: A2(
							_user$project$FetchData$default,
							{ctor: '[]'},
							model.newsletterFiles),
						newsletter: A2(
							_elm_lang$core$Maybe$withDefault,
							_user$project$FetchData$NotStarted,
							A2(_elm_lang$core$Dict$get, _p16.filename, model.newsletters))
					},
					_p16));
		default:
			return A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('not__found'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Page Not Found'),
					_1: {ctor: '[]'}
				});
	}
};
var _user$project$Main$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('main'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$Components_Header$view(
				{onLinkClick: _user$project$Main$AnalyticsEvent, onIconClick: _user$project$Main$IconClicked, onNewsletterClick: _user$project$Main$NewsletterClicked, screenWidth: model.width}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('body'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _user$project$Main$body(model),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_user$project$Components_Footer$view,
						A2(_elm_lang$core$Maybe$map, _elm_lang$core$Date$year, model.now),
						_user$project$Main$AnalyticsEvent),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Main$subscriptions = function (model) {
	return _elm_lang$core$Platform_Sub$batch(
		{
			ctor: '::',
			_0: A2(
				_elm_lang$core$Platform_Sub$map,
				function (_p17) {
					return _user$project$Main$PageMsg(
						_user$project$Main$HomePageMsg(_p17));
				},
				_user$project$HomePage$subscriptions),
			_1: {
				ctor: '::',
				_0: _elm_lang$window$Window$resizes(_user$project$Main$WindowSize),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Main$main = A2(
	_elm_lang$navigation$Navigation$program,
	_user$project$Main$UrlChange,
	{init: _user$project$Main$init, view: _user$project$Main$view, update: _user$project$Main$update, subscriptions: _user$project$Main$subscriptions})();

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _user$project$Main$main !== 'undefined') {
    _user$project$Main$main(Elm['Main'], 'Main', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

