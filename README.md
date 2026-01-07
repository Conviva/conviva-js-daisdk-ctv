# conviva-js-daisdk-ctv
Conviva Google IMA DAI CTV SDK module auto-detects ad events emitted by Google IMA DAI CTV SDK.

## Offline Library
The Conviva JavaScript Google IMA DAI SDK module is built on top of <a href="https://github.com/Conviva/conviva-js-coresdk">conviva-core-sdk</a>, is shared as offline library and should be included via the <script> tag in the application.

Via html:
``` 
<script type="text/javascript" src="<PATH>/conviva-core-sdk.js"></script>
<script type="text/javascript" src="<PATH>/conviva-googledai-ctv-module.js"></script>
```

## Install via npm 

```
npm install @convivainc/conviva-js-daisdk-ctv --save
```
## Install via yarn 

```
yarn add @convivainc/conviva-js-daisdk-ctv
```
Refer to following sample code to include Google IMA DAI SDK modules followed by Conviva modules.

Via import/require:
```
import Conviva from '@convivainc/conviva-js-coresdk'
import ConvivaGoogledaiModule from'@convivainc/conviva-js-daisdk-ctv'
```
```
const Conviva = require('<path>/conviva-js-coresdk');
const ConvivaGoogledaiModule = require('<path>/conviva-js-daisdk-ctv');
```
## Note:
* Refer https://community.conviva.com/ for integration guidelines.

