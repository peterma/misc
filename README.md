#### To debug application on Chrome from devtools
**package.json**
```json
"debug": "babel-node --debug tools/run start --inspect"
```


#### Add fontawesome
**App.js**
```js
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee);
```
**xx.js**
````js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
...
<FontAwesomeIcon icon="coffee" />
````
**TODO**
+Fork react-starter-kit
+Add debugging command
+Add font-awesome
