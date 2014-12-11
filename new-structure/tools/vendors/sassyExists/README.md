sassyExists
===========

Tiny SASS helper library for existence checks. 

After SASS has released it's [3.4.0 version](http://sass-lang.com/documentation/file.SASS_CHANGELOG.html), it became possible to determine the existence of different Sass constructs using new functions:

* `variable-exists($name)`
* `global-variable-exists($name)`
* `function-exists($name)`
* `mixin-exists($name)`

And detect the presence of a Sass feature using the new function:

* `feature-exists($feature-name)`

## Installing

    cd /your-project
    git clone https://github.com/SassySuit/sassyExists ./

Import `_sassyExists.scss` in your root scss file and you are ready to check the existences :collision: 

## Configuration

sassyExist uses `$config` map in `_config.scss` for setting up configurations. 

`output` - by default is set to output `@warn` messages, you can
change that, by setting to `error` value for `@error` output or turn
the output off by setting it to `none` or `false`.
`message` - is your message output.

    $config: (
        output:     warn,
        message:    "doesn't exist!"
    );

## API 

Each function returns boolean value.

* `varExst($name)` - checks if variable exists
* `globVarExst($name)` - checks if global variable exists
* `mixinExst($name)` - checks if mixin exists
* `funcExst($name)` - checks if function exists
* `featExst($feature)` - checks if SASS feauture exists

## TO DO 

* Add multiple checkup (sl-walk every item)
