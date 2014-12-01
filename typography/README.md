# Typography README.md 



## File Structure 

* `_config.scss` - store values from root _config.scss
* `_googleFontsFunction.scss` - URL encoder function for Google Fonts 
* `_googleFontsMixin.scss` - Google Fonts URL generator mixin
* `_baseSetsFunctions.scss` - 
* `_baseSetsLists.scss` - 
* `_variables.scss` - 
* `_googleFontsInclude.scss` - Google Fonts URL import mixin
* `_baseSetsBp.scss` - 
* `_baseSetsBpLists.scss` - 
* `_baseSetsLiquid.scss` - 
* `_baseSetsLiquidLists.scss` - 
* `_baseSetsPlaceholders.scss` - 
* `_baseSetsPlaceholderExtendMixin.scss` - 
* `_listsMixin.scss` - 
* `_tablesMixin.scss` - 
* `_styles.scss` - 



## Shortcuts

### Data Type Validation Functions

* `validate($var, bool)`
* `validate($var, color)`
* `validate($var, empty)`
* `validate($var, list)`
* `validate($var, measure)`
* `validate($var, null)`
* `validate($var, number)`
* `validate($var, string)`
* `validate($var, unit)`
* `validate($var, integer)`
* `validate($var, float)`
* `validate($var, positive)`
* `validate($var, negative)`
* `validate($var, negativeMeasure)`
* `validate($var, positiveMeasure)`
* `validate($var, zero)` - work in progress
* `validate($var, map)` - work in progress
* `validate($var, numeric)` - Not sure about including this one, I suppose it's better to avoid using numeric values, which are `strings`, but in the same time are `numbers`, like: `two`, `fourty`, `eleven`, etc..  yeah, that's what I meant, too complicated)


### Logger

__NOTE__: can't be used inside of functions (that's how currently SASS works)

* `@include FATAL($message)` - Severe errors that cause premature termination
* `@include ERROR($message)` - Other runtime errors or unexpected conditions
* `@include  WARN($message)` - Use of deprecated APIs, poor use of API, 'almost' errors, other runtime situations that are undesirable or unexpected, but not necessarily wrong
* `@include  INFO($message)` - Interesting runtime events (startup/shutdown).
* `@include DEBUG($message)` - Detailed information on the flow through the system.



### Modular Scale 

* `ms-generate-list($Value, $Bases, $Ratios)` - calculate list, `Ratios` - maybe a list of values, which will return comma seperate multi-level list



### SassyLists

* `sl-walk($list, function)` - apply function for each $list value 
