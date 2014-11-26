# SassySuit Typography 

SassySuit Typography styles.

## Dependencies 

* `../breakpoints` - @media query handler

## Avaliable classes

* `.h1` - exact copy of <h1> styles
* `.h2` - exact copy of <h2> styles
*  

## Configuration

Go to `_config.scss` in root directory.

## Structure

	├── _index.scss
	├── _web-fonts-function.scss
	├── _web-fonts-mixin.scss
	├── _sequence-calc-function.scss
	├── _variables.scss
	├── _web-fonts-include-mixin.scss
	├── _responsive-sequence-calc-function.scss
	├── _base-responsive-sets-map.scss
	├── _base-set-checker-function.scss
	├── _base-reponsive-sets-mixin.scss
	├── _base-sets-placeholder.scss
	├── _base-sets-mixin.scss
	├── _lists-mixin.scss
	├── _styles.scss
	└── README.md

1. `_index.scss` - main component's import file 
2. `_web-fonts-function.scss` - URL encoding function
3. `_web-fonts-mixin.scss` - URL import mixin
4. `_sequence-calc-function.scss` - base typography sequences calculation function  
5. `_variables.scss` - variables from calculated sequences and `_config.scss`file
6. `_web-fonts-include-mixin.scss` - import Google Web font URL 
7. `_responsive-sequence-calc-function.scss` - calculates new sequences from base typography sequence, uses` _config.scss` values
8. `_base-responsive-sets-map.scss` - map with base values for all typography base properties, workaround of SASS disability to dynamically generate variables
9. `_base-set-checker-function.scss` - Base-reponsive-sets-mixin $baseSetPlaceholder argument validator and value reassigning function 
10.`_base-reponsive-sets-mixin.scss` - Uses above sequences to generate responsive set styles  
11. `_base-sets-placeholder.scss` - base typography sets placeholders
12. `_base-sets-mixin.scss` - mixin for size and style placeholder sets extend
13. `_lists-mixin.scss` - lists styles 
14. `_styles.scss` - final typography styles
15. `README.md` - you are here

## Usage 

## Browser support 
