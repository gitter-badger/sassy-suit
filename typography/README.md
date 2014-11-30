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



### Data Type Validation

* `validate($value, bool)`
* `validate($value, color)`
* `validate($value, empty)`
* `validate($value, list)`
* `validate($value, measure)`
* `validate($value, null)`
* `validate($value, numeric)`
* `validate($value, string)`
* `validate($value, unit)`

You can also pass a list of multiple parametrs (avoid using commas)

* `validate($value, unit numeric color)`
* `validate($value, bool color)`
* `validate($value, bool measure color numeric string)`



### Logger

* `@include FATAL($message)` - Severe errors that cause premature termination
* `@include ERROR($message)` - Other runtime errors or unexpected conditions
* `@include  WARN($message)` - Use of deprecated APIs, poor use of API, 'almost' errors, other runtime situations that are undesirable or unexpected, but not necessarily wrong
* `@include  INFO($message)` - Interesting runtime events (startup/shutdown).
* `@include DEBUG($message)` - Detailed information on the flow through the system.



### Modular Scale 

* `ms-generate-list($Value, $Bases, $Ratios)` - calculate list, `Ratios` - maybe a list of values, which will return comma seperate multi-level list



### SassyLists

* `sl-walk($list, function)` - apply function for each $list value 
