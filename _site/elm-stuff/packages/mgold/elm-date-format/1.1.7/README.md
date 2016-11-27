# Format String for Elm
by Max Goldstein

Create format strings for dates in the Elm programming language.

## Documentation

The module `Date.Format` exports `format : String -> Date.Date -> String`.
The `Date` refers to Elm's standard [Date library](http://package.elm-lang.org/packages/elm-lang/core/latest/Date).
The input `String` may contain any of the following substrings, which will be expanded to parts of the date.

* `%Y` - 4 digit year
* `%y` - 2 digit year
* `%m` - Zero-padded month of year, e.g. `"07"` for July
* `%B` - Full month name, e.g. `"July"`
* `%b` - Abbreviated month name, e.g. `"Jul"`
* `%d` - Zero-padded day of month, e.g `"02"`
* `%e` - Space-padded day of month, e.g `" 2"`
* `%a` - Day of week, abbreviated to three letters, e.g. `"Wed"`
* `%A` - Day of week in full, e.g. `"Wednesday"`
* `%H` - Hour of the day, 24-hour clock, zero-padded
* `%k` - Hour of the day, 24-hour clock, space-padded
* `%I` - Hour of the day, 12-hour clock, zero-padded
* `%l` - (lower ell) Hour of the day, 12-hour clock, space-padded
* `%p` - AM or PM
* `%P` - am or pm
* `%M` - Minute of the hour, zero-padded
* `%S` - Second of the minute, zero-padded
* `%%` - literal `%`

## Contributing

Pull requests are welcome! Note that in addition to adding a new letter to the
massive case statement, you'll also need to add it to the regex. Languages like
[Haskell](http://www.haskell.org/ghc/docs/6.12.3/html/libraries/time-1.1.4/Data-Time-Format.html),
[Python](https://docs.python.org/2/library/datetime.html#strftime-strptime-behavior),
and [Ruby](http://apidock.com/ruby/DateTime/strftime) have very comprehensive
format strings. (Luckily, they seem to agree on the encoding, which you should
follow.) I've tried to add the most common formats, but if you want one added,
send a PR (and add a passing test). To run the tests, `elm test` (after
installing the [node runner](https://github.com/rtfeldman/node-test-runner)).
