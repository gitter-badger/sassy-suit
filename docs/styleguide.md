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


## File names 

Breaking SASS into partials is a very powerfull feature, but
it can become a mess without strict file name convetions.
Use lower level camel case, starting with a file name and 
appending one of these file type descriptors to the end of the
filename. 

`_fileNameFunction.scss`

1. `Function` or `functions` - depends on the number of functions
2. `Mixin` or `mixins` -  depends on the number of mixins
3. `Variable` or `Variables` - depends on the number of variables
4. `Include` - seperate file partial, with a single purpose - 
include previously generated css 
