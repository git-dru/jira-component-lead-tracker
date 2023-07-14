# Jira Component Lead Checker

This Node.js script fetches all components of a specified Jira project and checks which components do not have a 'component lead'. It then counts the number of issues related to each of these components and outputs this information into a output.txt file.

## Table of Contents

1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
2. [Authentication](#authentication)
3. [Usage](#usage)
4. [EndPoints](#endpoints)
5. [Built With](#built-with)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

This is a list of things you need to have prior to installing the project.

- Node.js
- npm

### Installation

- git clone

```sh
https://github.com/git-dru/jira-component-lead-checker.git
```

- Navigate into the project directory:

```sh
cd jira-component-lead-checker

```

- Install the dependencies:

```sh
npm install
```

## Authentication

This script makes requests to the Jira REST API, which requires authentication. Please ensure to use the appropriate authentication method as per your Atlassian application setup.

In the actual scenario, you need to authenticate the API requests with your Atlassian credentials, which are not used here for demonstration purposes.

## USAGE

Start the script:

```sh
node index.js
```

## Endpoints

To fetch all components of the project:

```sh
GET /rest/api/3/project/SP/components

```

To fetch all issues of the project:

```sh
GET /rest/api/3/search?jql=project%20%3D%20SP

```

## Built With

- Node.js
- Axios
