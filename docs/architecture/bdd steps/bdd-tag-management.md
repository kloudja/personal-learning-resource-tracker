Feature: Tag Management

  Scenario: User creates a new tag
    Given the user is authenticated
    When the user adds a new tag with a unique name
    Then the tag is saved and available for assignment

  Scenario: User assigns an existing tag to a resource
    Given the user is authenticated and has created or selected a tag
    When the user assigns the tag to a resource
    Then the resource is categorized with the tag
