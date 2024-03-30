# Template repo for TypeScript SDK  
This template helps developers get started with publishing the TypeScript SDK to npm Registry.

## Prerequisites
The user will need the following:

- An account with npmjs Registry with an automation access token that can bypass two-factor authentication (2FA) when publishing an npm package

## Contents
This repository contains the following:

- A `README` that contains the instructions
- A GitHub Action workflow to publish the TypeScript SDK to npm Registry.


## Instructions

1. Create a new target TypeScript SDK Repo by clicking the **Use this template** button at the top of this repository.

2. Set the npmjs Registry's automation access token as an actions secret `NPM_TOKEN` in the target SDK Repo.

3. Create a release in the target SDK Repo.

4. The GitHub Action `Publish to npm Registry` in the target SDK Repo publishes the package to npmjs registry.
