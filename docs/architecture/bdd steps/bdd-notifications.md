Feature: Notification Preferences

  Scenario: User enables push notifications
    Given the user is authenticated and push notifications are disabled
    When the user enables push notifications in settings
    Then push notifications are sent for relevant events

  Scenario: User disables email notifications
    Given the user is authenticated and email notifications are enabled
    When the user disables email notifications in settings
    Then no further email notifications are sent


    TODO: Why would a user need to receive notifications on this system? What kinda of notifications would make sense?
