# CPAN-212-Lab8-9


## Project Description

A full-stack insurance platform implemented using the MERN stack. This application supports both external users and internal staff. Supporting multiple insurance product categories, secure user authentication, protected RESTful APIs, role-based authorization, and centralized administration of user roles.

## Setup

1. Place your PFX file in:
   - `backend-api/cert/server.pfx`

2. Configure `.env` in `backend-api/`

3. Configure `.env.local` in `frontend-api`

4. Install frontend and backend dependencies:
   ```bash
   npm install


## Certificate Setup Instructions

1. Place your PFX file in:
   - `backend-api/cert/server.pfx`
2. configure pfx path and passphrase in `backend-api/.env`

## Environment Setup

In backend `.env` configure:
Node environment, backend port, mongoDB uri, your secret for JWT tokens, JWT expiry time, Frontend URL, Path to your HTTPS Pfx file, the passphrase for your HTTPS pfx.

Your base url for Keycloak, the name of your keycloak realm, client id for your backend in keycloak, your client secret, the callback url, the redirect urls for success and failure.

## Sample Users
- customer1, agent1

## Sample Roles
- Agent
- Customer

## JWT Usage

JWTs are used to authenticate user requests. The authMiddleware verifies a jwt to retrieve the userId and then attaches the user profile to the request. This allows the authorization middlewares such as the rolesMiddleware to retrieve the user role and determine if the user is authorized for certain requests.


## User Profile Module

#### User profiles have two logical layers:
- The authentication layer
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

