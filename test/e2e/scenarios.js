'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Members App', function() {

  describe('Member list view', function() {

    beforeEach(function() {
      browser().navigateTo('app/index.html');
    });


    it('should filter the member list as user types into the search box', function() {
      expect(repeater('.members li').count()).toBe(5);

      input('query').enter('pablo');
      expect(repeater('.members li').count()).toBe(2);

      input('query').enter('franco');
      expect(repeater('.members li').count()).toBe(1);
    });
  });
});
