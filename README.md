# BoardingClaims

BoardingClaims is a web application designed for managing and processing boarding claims. This repository contains the source code for the site, which is deployed on Vercel and can be accessed at [boardingclaims.com](https://boardingclaims.com).

## Table of Contents
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Deployment](#deployment)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## About

This project allows users to file and manage boarding claims related to various services. The app provides a simple interface for claim submission and tracking, with an intuitive dashboard for both users and administrators.

The site is hosted on [Vercel](https://vercel.com), and custom domain support is configured through `boardingclaims.com`.

## Features

- **User Registration & Login**: Secure user authentication.
- **Claim Submission**: File boarding claims with necessary documentation.
- **Claim Tracking**: Monitor the status of submitted claims.
- **Admin Dashboard**: Admins can manage and review claims.
- **Notifications**: Get notified on claim updates and actions.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/boardingclaims.git
    ```

2. Navigate to the project directory:
    ```bash
    cd boardingclaims
    ```

3. Install dependencies using `npm` or `yarn`:
    ```bash
    npm install
    ```
    Or if you're using Yarn:
    ```bash
    yarn install
    ```

4. Start the local development server:
    ```bash
    npm run dev
    ```
    Or with Yarn:
    ```bash
    yarn dev
    ```

5. Open your browser and navigate to `http://localhost:3000` to see the app running locally.

## Deployment

The project is deployed on Vercel, and any changes pushed to the repository will automatically trigger a new deployment.

1. If you don't have an account on Vercel, sign up at [Vercel](https://vercel.com/signup).
2. Link this repository to Vercel.
3. Once connected, Vercel will automatically deploy the project for you.

### DNS Configuration (Custom Domain)
To link your custom domain `boardingclaims.com` with the Vercel deployment, follow these steps:

1. Log into your DNS provider (e.g., Combell).
2. Add a CNAME record with the following values:
    - **Record**: `www`
    - **Destination**: `cname.vercel-dns.com.`
    - **TTL**: `3600`
3. Save the changes. DNS propagation may take some time.

Once configured, you can visit `https://boardingclaims.com` to access the site.

## Configuration

1. **Environment Variables**: Ensure that you have configured the necessary environment variables in Vercel for production, such as API keys, authentication secrets, etc.
   
2. **Vercel Toolbar**: If you're using the Vercel toolbar or any related integrations, make sure to configure them correctly. For example:
    - You may need to place a file at `.well-known/vercel/toolbar` to access the Vercel toolbar.

## Troubleshooting

If you encounter issues, here are a few things to check:

1. **404 Error - Not Found**: If you're seeing a "Not Found" error, ensure that the correct files have been deployed to Vercel. Double-check that your URLs and directory structure are correct.
   
2. **DNS Propagation Delay**: Changes to DNS records can take up to 48 hours to propagate. If you're seeing issues with custom domain setup, check the DNS settings and wait for full propagation.

3. **Check Logs**: For deployment issues, check the logs on Vercel's dashboard for more information about any failed deployments or runtime errors.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
