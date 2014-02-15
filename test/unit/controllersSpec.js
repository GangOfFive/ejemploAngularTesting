'use strict';

/* jasmine specs for controllers go here */
describe('Member controllers', function() {

  describe('MembersCtrl', function(){

    beforeEach(module('memberApp'));

    it('should create "members" model with 5 members', inject(function($controller) {
      var scope = {},
          ctrl = $controller('MembersCtrl', {$scope:scope});

      expect(scope.members.length).toBe(5);
    }));

  });
});
