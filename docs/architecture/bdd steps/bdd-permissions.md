Feature: Permissions and Roles

  Scenario: Non-admin user tries to access admin dashboard
    Given the user is authenticated but does not have the admin role
    When the user tries to access the admin dashboard
    Then access is denied and the user is redirected or shown an error

  Scenario: Admin user accesses admin dashboard
    Given the user is authenticated and has the admin role
    When the user navigates to the admin dashboard
    Then the admin dashboard is displayed with relevant management features

    TODO: What are the functionalities for Admin Dashboard?