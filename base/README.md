# Inverted Triangle Methodology

[Slides](https://speakerdeck.com/dafed/managing-css-projects-with-itcss)

* Settings
* Tools
* Generic
* Objects
* Components

### Inuit.css Base Structure 

* [Base structure](https://github.com/csswizardry/inuit.css/tree/master/base)

### Default layers of ITCSS

1. `Settings` - global variables, config switches
2. `Tools` - default mixins and functions 
3. `Generic` - ground-zero styles [ Normalize.css, resets, box-sizing ]
4. `Base` - unclassed HTML elemetns 
5. `Objects` - cosmetic-free design patterns 
6. `Components` - designed components, chunks of UI
7. `Trumps` - Helpers and overrides 

#### Settings 

Globally avaliable settings.
Config switches.
Brand colors, etc 

#### Tools

Globally aaliable mixins.
Public mixins.
Helper functions.

#### Generic 

Ground zero styles.
Low-specifity, far-reaching 
Resets, Normalize.css, etc. 

#### Base 

Unclassed HTML elements.
H1-H6, basic links, lists, etc.
Last layer we see type selectors
[ e.g. a {}, blockquote {} ]

#### OOCSS

Design patterns. 
No cosmetics.
Begin using classes exclusively. 

#### Components 

Designed peaces of UI.
Still only using classes.
More explicitly named [ e.g. .products-lists {} ]

#### Trumps

Overrides, helpers, utilities.
Only affect one piece of the DOM at a time.
Usually carry `!important`

Specificity __slowly increases__ layer-by-layer 
We affect __smaller and smaller__ bits of the DOM at a time
Progressively adding styles; __never undoing__


#### ITCSS 

__Manages source order__
Filters __explicitness__
__Tames__ the cascade.
__Sanitises__ inheritance.
