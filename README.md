## Why modules

* Global style pollution can happens
  * styles written with the same class name will overwrite each other
* complicated relationship
  * a style class can be used in different component?
    * good for sharing
    * vulnerable against changing! 
    * a change to one component can cause unexpected changes in other place
* it's annoying to figure out a new class name for new component



## How it works

* one line of webpack config
* import the style into javascript



* webpack add a unique hashID to that class.




## How to use it in project

* an project example

  * reuse the same classname in different compoennts, short and nice class name

  * use indentation to indicate a clear structure, which can reflect the DOM

    * `blog.tsx` & `blog.module.less`
    * `siderbar.tsx` & `sidebar.module.less`

    

* webpack config, two types of style file
  * all styles in `.less` will be used globally
  * all styles in `.module.less` will be used locally



* global style

  * global.less

    * imported in the `index.tsx`
    * `logo class` used in `blog.tsx` & `blog.tsx`

  * variables.less 

    * define variables colors, `layout` variables which can be shared globally

      * for example the `@content-vertical-padding`  (change once)

    * define shared pattern / block of styles

      * mixin called time, used in `sidebar` & `blog` component

      

  * how to overwrite the global components

    * overwrite the mixin: `sidebar.module.less` & `blog.module.less` directly overwrite inside of local class
    * overwrite the global style: `sidebar.module.less` & `sidebar.tsx`



#### In KnockoutJS

* integrated into knockout js:  websitedesktop >  test branch



#### In Existing Project

* create relative new component
  * spend some time to change the `webpack.config` & use the css modules