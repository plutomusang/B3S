# What is this?

Get perfect shadows every time for the non-designer.

# Installation

`npm i b3s --save`

Then...

```
import { b3s } from 'b3s';

b3s({
    shadow_type: 'soft',
    padding: false
});
```

## Options

b3s supports 2 options, both of which are optional:

* *shadow_type* - _hard | soft_ (Defaults to soft)
* *padding* - _boolean_ (Defaults to false)