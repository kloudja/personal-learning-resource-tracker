Feature: Authentication

  Scenario: User accesses a protected resource without being authenticated
    Given the user is not authenticated
    When the user tries to access a protected page
    Then the user is redirected to the login page

  Scenario: User logs in successfully
    Given the user is on the login screen
    When the user enters valid credentials and clicks Login
    Then the user is authenticated and redirected to the dashboard

  Scenario: User enters invalid credentials
    Given the user is on the login screen
    When the user submits invalid credentials
    Then an error message is displayed: "Invalid email or password"

  Scenario: User leaves fields empty
    Given the user is on the login screen
    When the user submits without entering email or password
    Then validation messages are shown: "Email is required", "Password is required"

  Scenario: Network/API error during login
    Given the user is on the login screen
    When there is a network issue or server error
    Then a generic error message is displayed: "Could not connect. Please try again."

  Scenario: User clicks Forgot password
    Given the user is on the login screen
    When the user clicks "Forgot password?"
    Then the password reset flow is triggered

  Scenario: User's session expires
    Given the user was authenticated
    When the JWT expires and the user tries to access a protected resource
    Then the user is redirected to login or prompted to re-authenticate

  Scenario: User logs out
    Given the user is authenticated
    When the user clicks the logout button
    Then the session and JWT are cleared and the user is redirected