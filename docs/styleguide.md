# SASS Specific Styleguide

Nowadays there a lot of great style guides, which cover a variety of coding aspects. 
But most of them don't touch or bearly covering such things as `@function`, `@mixin` calls, `@return`'s and other SASS specific items. 

## @-Rules and Directives

### @debug, @warn, @error

`@debug`, `@warn`, `@error` - are directives.
In computer programming, a __directive pragrma__ (from "pragmatic")
is a language construct that specifies how a compiler should process its input.

Directives can be nested inside of functions and mixins. They __have__ to get an extra line break on top and on bottom. It helps to determine the end of code block logic "wall"

	@function crazyMath($value) {
		$value: $value * $PI;
		$anotherValue: $blaBla / $blaBla;
		// Turn on your imagination 

		@warn "Don't go too far ... ";

		@return $result;
	
	}


