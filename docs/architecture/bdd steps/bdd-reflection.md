Feature: Reflection on Learning Resource

  Scenario: User adds a reflection
    Given the user is authenticated and viewing a resource
    When the user submits a new reflection
    Then the reflection is saved and displayed under the resource

  Scenario: User adds multiple reflections to the same resource
    Given the user has already added at least one reflection to a resource
    When the user submits another reflection
    Then both reflections are listed chronologically with the resource
                               TODO: "chronologically"???