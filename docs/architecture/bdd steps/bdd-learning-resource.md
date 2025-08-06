Feature: Learning Resource Management

  Scenario: User creates a new learning resource
    Given the user is authenticated
    When the user submits a new learning resource with required details
    Then the new resource is saved and shown in the user's resource list

  Scenario: User assigns tags to a learning resource
    Given the user is authenticated and editing a resource
    When the user creates or selects tags for the resource
    Then the tags are linked to the resource and visible on the details page

  Scenario: User soft deletes a resource
    Given the user is authenticated and and owns the resource
    When the user deletes the resource
    Then the resource is marked as deleted and hidden from the default view, but remains in the database
