# Typography README.md 

## File Structure 

* `_config.scss` - Alias for root _config.scss, stores values in variables
* `_webFontsFunction.scss` - URL encoder for Google Web Fonts 
* `_webFontsMixin.scss` - Google Web Fonts URL generator
* `_typeSetsFunction.scss` -  Base typography values calculation
* `_typeSetPlaceholders.scss` -  Base typography values grouping
* `_typeStylePlaceholders.scss` - Base typography style values grouping
* `_webFontsInclude.scss` - Google Fonts URL import mixin
* `_styles.scss` - All typography styles



## Shortcuts

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
