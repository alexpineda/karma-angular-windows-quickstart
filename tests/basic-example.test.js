// Define a test suite. These methods (define, it) are mocha.
  describe('math', function () {
    // Define a test.
    it('should have 2*2 be equal to 4', function () {
      var x;
      // Do something.
      x = 2 * 2;
      
      // Check that the results are what we expect and throw an error if something is off.

      //these assertions are from the chai library 
      expect(x).to.equal(4);

    });

    //you can nest describes for a more descriptive test structuring
    describe('addition', function(){

       it('should have 1+1 be equal to 2', function () {
        var x;

        x = 1 + 1;

        expect(x).to.equal(2);
      });

      it('should have 1+2 not be equal to 2', function () {
        var x;

        x = 1 + 2;
        
        expect(x).to.not.equal(2);
      });


    });

  });