SassySuit uses `susy` for generating and calculating grid components.
It also has some extra options which `susy` doesn't have, that's why we assign $grid to $susy global variable:

	$susy: $grid;

One of these options is outputting responsive values for `rows` and `cols`, but it can also output static - single value for every `row`/`col`. 

In order to do it, we need to find medium value out of all breakpoint's values: 

	@if map-get($grid, output) == static {
		$bps: map-keys($breakpoints);
		$mediumValue: round(length($bps)/2);
		$value: nth($gridValueList, $mediumValue;

		@return $value;

	}

### TODO

Gather all bp values from $grid by parsing key values of $grid map keys and appending it to a list. 
