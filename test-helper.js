beforeEach(function() {
  // Create a new sandbox before each test
  this.sandbox = sinon.sandbox.create();
});

afterEach(function() {
  // Cleanup the sandbox to remove all the stubs
  this.sandbox.restore();
});
