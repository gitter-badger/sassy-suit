# Typography README.md 

## SASS docs

`sassdoc ./ sassdoc -c yml` - sassdoc generate docs from current directory to
sassdoc folder, use YML

## File Structure 

* `_webFontsFunction.scss"` - URL encoder for Google Web Fonts
* `_webFontsMixin.scss"` - Google Web Fonts URL generator
* `_typeSetFunction.scss"` - Base typography values calculation
* `_typeSetResponsiveRatiosFunction.scss"` - Responsive ratios calculation 
* `_typeSetResponsiveFunction.scss"` - Base typography values calculation
* `_typeSetResponsiveMixin.scss"` - Responsive values mixin
* `_webFontsInclude.scss"` - Responsive values include mixin 

### Data Type Validation Functions

* `val($var, bool)`
* `val($var, color)`
* `val($var, empty)`
* `val($var, list)`
* `val($var, measure)`
* `val($var, null)`
* `val($var, number)`
* `val($var, string)`
* `val($var, unit)`
* `val($var, integer)`
* `val($var, float)`
* `val($var, positive)`
* `val($var, negative)`
* `val($var, negativeMeasure)`
* `val($var, positiveMeasure)`
* `val($var, map)`

### Logger

__NOTE__: can't be used inside of functions (that's how SASS works)

* `@include FATAL($message)` - Severe errors that cause premature termination
* `@include ERROR($message)` - Other runtime errors or unexpected conditions
* `@include  WARN($message)` - Use of deprecated APIs, poor use of API, 'almost' errors, other runtime situations that are undesirable or unexpected, but not necessarily wrong
* `@include  INFO($message)` - Interesting runtime events (startup/shutdown).
* `@include DEBUG($message)` - Detailed information on the flow through the system.

### Modular Scale 

* `ms-generate-list($Value, $Bases, $Ratios)` - calculate list, `Ratios` - maybe a list of values, which will return comma seperate multi-level list
* `ms-list($Start: 0, $End: 0, $Bases: $ms-base, $Ratios: $ms-ratio)`

### SassyLists

* `sl-walk($list, function)` - apply function for each $list value 

### Parker.js

* `parker -f human sassySuit.css` - output CSS specificity

### CSS Specifity Graph Generator

* [CSS Specifity](http://jonassebastianohlsson.com/specificity-graph/)
