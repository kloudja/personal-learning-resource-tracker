# Login Screen – Layout & Components

- Centered Login Card:
    - App logo (top)
    - "Sign in to your account" (header)
    - Email input field
    - Password input field
    - [Login] button (primary)
    - "Forgot password?" link
    - (Optional) "Continue with Google/Auth0" button
    - Error message area (below form, for validation/API errors)
    - Loading spinner (on button, when authenticating)
    - Footer: "Don’t have an account? Register" (optional)

## UI States:
- Initial (empty)
- Loading (auth in progress)
- Error (invalid credentials, connection issues, locked user, etc.)
