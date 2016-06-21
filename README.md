# karma-angular-windows-quickstart
Getting up and running with Karma and Angular 1.* on Windows

#### Core Ideas:
- Get you up and running with Karma + Angular as well as (mocha, sinon, and chai).
- No global dependencies / packages other than npm.
- Example tests that cover some issues with angular testing around services, directives, etc.
- Enough to get you started!

#### Install

- Update your projects packages.json to include what's in this packages.json and run npm install
- OR run install_test_packages.bat
- "scripts" section to your packages.json if you don't have it already, this allows you to run "npm test"
- OR run karma.bat

#### Concepts
- Karma is the interface between your javascript and the environment, it will run your mocha (javascript) defined tests in browser environments like Chrome. It will watch your files so that when you change code it will re-run the tests.
- Read the basic-example.test.js where it will describe the separation between mocha and chai
- Read the sinon-example.test.js where it will describe what sinon is all about

