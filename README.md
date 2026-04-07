
## Project Description

A full-stack insurance platform implemented using the MERN stack. This application supports both external users and internal staff. Supporting multiple insurance product categories, secure user authentication, protected RESTful APIs, role-based authorization, and centralized administration of user roles.

## Setup

1. Place your PFX file in:
   - `backend-api/cert/server.pfx`

2. Configure `.env` in `backend-api/`

3. Configure `.env.local` in `frontend-api`

4. Install frontend and backend dependencies:
   ```bash
   start-platform.bat or start-platform.sh

## Certificate Setup Instructions

1. Place your PFX file in:
   - `backend-api/cert/server.pfx`
2. configure pfx path and passphrase in `backend-api/.env`

## Environment Setup

In backend `.env` configure:
Node environment, backend port, mongoDB uri, your secret for JWT tokens, JWT expiry time, Frontend URL, Path to your HTTPS Pfx file, the passphrase for your HTTPS pfx.

Your base url for Keycloak, the name of your keycloak realm, client id for your backend in keycloak, your client secret, the callback url, the redirect urls for success and failure.

## Sample Users
- customer1
- agent1
- admin1
- underwriter1
- adjuster1

## Sample Roles
- Agent
- Customer
- Admin
- underwriter
- claims adjuster

## JWT Usage

JWTs are used to authenticate user requests. The authMiddleware verifies a jwt to retrieve the userId and then attaches the user profile to the request. This allows the authorization middlewares such as the rolesMiddleware to retrieve the user role and determine if the user is authorized for certain requests.


## User Profile Module

#### User profiles have two logical layers:
#### The authentication layer
- userId
- Username
- Password
- Account status
- Roles
#### The Business profile layer
- userId
- First name
- Last name
- DOB
- Email
- Phone number
- Address line 1
- Address line 2
- City
- Postal code
- Country
- Customer number or employee number
- User type
- Preferred contact method
- Emergency contact name
- Emergency contact phone
- Status
- createdAt
- updatedAt

For internal users the user profile also supports:
- Department
- Job title
- Supervisor name/id
- Internal access status

For customers:
- Client category
- Linked policies cont/references
- Beneficiary-related field placeholder for life insurance (if needed)

## Protected API routes

API routes are protected using the authentication middleware (authMiddleware) and the authorization middlewares roleMiddleware and ownershipMiddleware.

All routes except authRoutes require authentication (logged in user).

Other routes require specific roles in order to access. 

or example: The get request for the endpoint /claims/review for claims requires either the role of Admin or CLAIMS_ADJUSTER to access. If the authenticated user does not have either role, their request to /claims/review/ will be rejected.

Currently, the ownershipMiddleware is not utilized. But it's method requirePolicyOwnership would require the user either have the roles of Admin or agent for access to a policy without ownership. For the role customer, the middleware would check if the user is the owner of the policy by comparing the policy's customerId and the userId. If it matches, access would be granted. Otherwise an error would be returned. For all other roles, an error 403 would be returned. For any validation errors, an error with the code 500 would be returned.