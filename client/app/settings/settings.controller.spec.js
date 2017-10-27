'use strict';

describe('Component: SettingsComponent', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var SettingsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    SettingsComponent = $componentController('settings', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
