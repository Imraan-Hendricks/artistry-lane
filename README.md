# Artistry Lane

Artistry Lane is a web application that provides a platform for artists to showcase and sell their artwork online.

<br />

## Table of contents

1. [Introduction](#introduction)
   - [Features](#features)
   - [Framework](#framework)
   - [Design System](#design-system)
   - [Data Management](#data-management)
   - [Testing](#testing)
   - [CI/CD](#continuous-integration-and-continuous-delivery)
2. [Key Technologies](#key-technologies)
   - [Design](#design)
   - [Development](#development)
   - [Testing](#testing)
3. [NPM Scripts](#npm-scripts)
4. [Usage](#usage)
   - [Requirements](#requirements)
   - [Environment Variables](#environment-variables)
   - [Setup](#setup)
   - [Development](#in-development)
   - [Production](#in-production)

<br />

### Introduction

Artistry Lane is the perfect online hub for discovering and purchasing captivating artwork from some of the world's most creative and talented artists! Our platform empowers artists to showcase and sell their unique creations to a global audience, and allows art collectors and enthusiasts to discover and connect with artists like never before.

#### Features

- Artists can create and manage their art pieces on the platform, including setting the title, price, and description, as well as updating, viewing, and deleting their posts.
- Users can browse and filter art pieces by artist, price, type, and more. They can also sort by date and price, and interact with artists and other users by liking, commenting, and reacting to art pieces.
- Users can add art pieces to their wish list, and even stand a chance to receive a free or discounted deal from the artist.
- The built-in communication system allows users to connect with artists directly via a form that automatically sets up an email with all the relevant information. The artist can view and respond to messages within the app, making communication easy and seamless.
- Artists and users can set up a profile on Artistry Lane, where they can easily manage their posts, messages, wish list, and likes.
- The platform provides secure user authentication using local, Google, and Facebook OAuth2 protocols. This allows users to log in using their existing social media or email credentials, which reduces the friction of creating a new account.
- The platform provides access control features that ensure only authorized users can access sensitive data or perform certain actions.
- The platform has a user-friendly interface that is easy to navigate, with a clean and modern design.
- Artistry Lane is accessible from any device, including desktop, tablet, and mobile.
- The platform offers a dark mode feature for users who prefer a darker color scheme that is easier on the eyes, especially in low-light environments.
- The platform is compatible with all major web browsers, including Chrome, Firefox, Safari, and Edge, ensuring that users can access the app from their preferred browser without any issues.
- The platform uses S3 storage to securely store all images posted by artists. The app also performs image optimization to ensure that images load quickly and efficiently, even on slower internet connections.
- The platform uses advanced techniques for data synchronization and state management to ensure that all data is consistent and up-to-date across all devices and users.
- The platform features a custom-built user interface that is designed to be intuitive and user-friendly, with a focus on providing a seamless user experience.
- The platform features modern animations that add a touch of elegance and interactivity to the user interface, enhancing the overall user experience. Animations are used strategically to provide feedback and visual interest without overwhelming the user.

#### Framework

Artistry Lane's front-end is powered by React, which provides a fast, efficient, and engaging user interface that is sure to captivate our users. The Next.js framework takes things to the next level by adding server-side rendering capabilities, allowing for lightning-fast load times and a smooth user experience. Artistry Lane fully embraces the latest features of Next.js, including server components, routing and layouts, data fetching, synchronization and caching, route handlers and various optimizations, to provide even faster and seamless user experiences.

#### Design System

The design system for Artistry Lane follows Atomic Design principles, which emphasizes modularity and reusability of components. To support this, we use a combination of Storybook.js and React Testing Library for developing and testing components in isolation. Custom styles are created using TailwindCSS to ensure a consistent visual style across the application. In addition, we leverage the power of Framer Motion to strategically add animations throughout the application to provide feedback and visual interest to users, making the overall experience more engaging and enjoyable.

#### Data Management

Artistry Lane utilizes a robust data management system to ensure seamless operation and high performance. MongoDB, a widely used NoSQL database, is employed to store all relevant data, while digital ocean spaces are used to store image files, ensuring that high-quality artwork is presented with clarity and precision. To further enhance data synchronization and caching, the platform leverages React Query, a performant and powerful library for React that provides seamless data synchronization and caching capabilities. Additionally, Zod is utilized for data validation, ensuring that all information is accurate and meets the platform's standards. Together, these technologies ensure that Artistry Lane is efficient, reliable, and able to provide an exceptional user experience for both artists and users.

#### Testing

Artistry Lane takes testing seriously to ensure the application runs smoothly and is free of bugs. To achieve this, the application uses Jest and React Testing Library for component testing, which includes both unit and integration tests. Additionally, Cypress is utilized for end-to-end testing to simulate user interactions and ensure that the application functions correctly in a real-world scenario. With these tools, Artistry Lane ensures the reliability and functionality of the application, providing a seamless experience for users and artists alike.

#### Continuous Integration and Continuous Delivery

Artistry Lane utilizes a robust CI/CD pipeline using GitHub Actions. With every push to the main branch, our pipeline kicks off an automated build and test process, which ensures that any changes made to the codebase meet the required standards for deployment. The pipeline then deploys the application to our production environment. In addition, we also use feature branching to allow for easier collaboration and testing of new features. Overall, our CI/CD process helps us to maintain a high level of code quality, reduce manual errors, and ensure that new features and updates are deployed quickly and efficiently.

<br />

### Key Technologies:

#### Design:

- FramerMotion: An open source, production-ready motion library for React on the web.
- Storybook: A frontend workshop for building UI components and pages in isolation.
- TailwindCSS: A utility-first CSS framework.

#### Development:

- Next.js: An open-source React front-end development web framework.
- Mongoose: MongoDB object modeling for Node.js.
- React Query: Performant and powerful data synchronization for React.
- TypeScript: A strongly typed programming language that builds on JavaScript.
- Zod: TypeScript-first schema validation with static type inference.

#### Testing:

- Cypress: Front end testing tool for web applications.
- Jest: A Javsacript testing framework built on top of Jasmine.
- React Testing Library: A very light-weight solution for testing React components.
- SuperTest: A high-level abstraction for testing HTTP.

<br />

### NPM Scripts:

In the root directory, you can run:

- `npm run build` - builds the application for production.
- `npm run dev` - starts the application in development mode.
- `npm run start` - starts the application in production mode.
- `npm run cypress:component` - launches component tests.
- `npm run cypress:e2e` - launches end-to-end tests.
- `npm run cypress:open` - opens the cypress launchpad.
- `npm run jest:unit` - launches unit tests.
- `npm run jest:watch` - launches unit tests in interactive mode.
- `npm run storybook` - start Storybook locally and output the address.
- `npm run storybook build` - compiles Storybook instance so it can be deployed.

<br/>

### Usage:

Clone this repository and follow the instructions below to set up your environment and run the project locally. Instructions are also provided for production usage.

#### Requirements:

To get started, ensure that you have Node.js version 16.8.0 or higher installed.

#### Environment Variables:

To set up the required environment variables, create a .env.development.local file and .env.test.local file in the root directory of the project. A sample of these files is provided in the expected location for reference. It should be noted that in a production environment, environment variables should be set up on the host server.

Cypress requires the specification of environment variables, which should be included in a file named cypress.env.json, situated in the root directory of the project. A sample of this file is provided in the expected location for reference. The presence of this file is mandatory for executing end-to-end tests using Cypress.

#### Setup:

In the root directory use `npm ci` to install dependencies.

#### In development:

Use `npm run dev` to run the application in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### In production:

Use `npm run build` to build the app for production. Then use `npm start` to start the application in production mode.

<br />
