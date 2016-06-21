# karma-angular-windows-quickstart
Getting up and running with Karma and Angular 1.* on Windows

### Core Ideas:
- Get you up and running with Karma + Angular as well as (mocha, sinon, and chai).
- No global dependencies / packages other than npm.
- Example tests that cover some issues with angular testing around services, directives, etc.
- Enough to get you started!

### Concepts
- Karma is the interface between your javascript and the environment, it will run your mocha (javascript) defined tests in browser environments like Chrome. It will watch your files so that when you change code it will re-run the tests.
- Read the basic-example.test.js where it will describe the separation between mocha and chai
- Read the sinon-example.test.js where it will describe what sinon is all about

### Install

##### Install npm packages
- Run `install_test_packages.bat`, this will install various packages under your devDependencies

##### Modify karma.conf.js
- In the `karma.conf.js` file, add any libraries you need like angular, jquery, etc. Any thing that is used by your application. You can start with simply adding angular, running tests and then adding dependencies as you go.

##### Run karma
- Run karma.bat
- OR in the "scripts" section to your `packages.json` add:
`
"scripts":{
  "test" : "node node_modules/karma/bin/karma start --log-level debug"
}
`
- Now run "npm test"


#### Potential Issues
- no package.json: if you don't have package.json because you're just trying this out make sure you run "npm init" first.
- Cannot set property 'mock' of undefined: Make sure your karma.conf.js files list includes the angular library

