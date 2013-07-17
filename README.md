KontikiJS
=========

An ActionScript 3 Library used to generate Flash API JavaScript code through the Randori compiler.

The Randori Framework and Tools can be found here - http://randoriframework.com/

Demo
--------
http://renaun.com/html5/randoristarlingtest/hero.html (mainly tested on Chrome)


What is it?
--------

The set of KontikiJS classes are ActionScript 3 code that implements the Flash API with JS implementations. When compiled by the Randori compiler it creates JS source files. It makes use of the Randori Guice framework. 

The KontikiJS classes are not a complete API implementation and are currently focused on Starling based games using Stage3D. The JS implementation makes use of HTML5 features and require a modern browser. It should work on mobile browsers as well but JS features are more varying on mobile.


How is the Repository Organized?
--------

* /bin		- Contains the binary for this project, both the swc and js files.
* /build 		- Contains a build.sh script to build the kontiki.js and kontiki-min.js file.
* /projects 	- Contains a Flash Builder project for the KontikiJS and KontikiJS Test Suite.
* /src		- Contains the Kontiki ActionScript 3 source files.

How to use this in your own ActionScript 3 project?
--------

Coming Soon - For now the KontikiJS Test Suite is an example of how to use Flash Builder to build both the SWF and JS of an ActionScript 3 project.

HTML5 Feature Requirements
--------

The code so far makes use of EcmaScript 5 features (getter/setter), WebGL, ArrayBuffer, Web Audio API. These HTML5 features are not supported on all browsers and platforms, please check the respective feature compatibility list on the web (i.e.: http://caniuse.com/webgl)

Disclaimer
--------

This is considered an prototype project at this point. Technically it works but there are plenty of API's not implemented and there is the potential that some will be nearly impossible. Either way this process generates JavaScript files that can be easily modified  if needed.
