

# Referencing ProseMirror Plugin For Licit

Plugin allows particular paragraph as read-only � even in edit mode.

  

## Build

  

### Commands

- npm ci

- npm pack  

#### To use this in Licit

Run these commands before npm install.

- npm install @modusoperandi/licit-referencing

Include plugin in licit component 

- import ReferencingPlugin 

- add ReferencingPlugin  instance in licit's plugin array

```

import { ReferencingPlugin } from  '@modusoperandi/licit-referencing';


const  plugins = [new  ReferencingPlugin()]

ReactDOM.render(<Licit docID={0} plugins={plugins}/>
  

```
 
