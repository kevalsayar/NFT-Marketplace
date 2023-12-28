# **NFT Marketplace Backend**

[![Node.js](https://img.shields.io/badge/node-%5E14.0.0-green)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)
[![npm](https://img.shields.io/badge/npm-%5E6.0.0-orange)](https://www.npmjs.com/)

## **Overview**

Welcome to the backend of our NFT marketplace! This repository contains the server-side code and functionalities that power our NFT platform.

## **Table of Contents**

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Platform URL](#platform-url)

## **Features**

- User authentication and authorization.
- NFT contract management.
- Minting and trading of NFTs.
- Transaction and event tracking.
- Integration with blockchain networks (Binance Smart Chain).
- Scalable and modular architecture.

# **Getting Started**

## **Prerequisites**

Before you begin, ensure you have met the following requirements:

- **Node.js:** This project is built with Node.js. Make sure you've Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

- **npm (Node Package Manager):** npm is the default package manager for Node.js. It is usually included with the Node.js installation. You can check if you have npm installed by running:

  ```bash
  npm -v
  ```

- **MongoDB:** Install MongoDB following the instructions for your operating system in the [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/). **Ensure the MongoDB server is running before starting the NFT marketplace backend.**

- Ethereum-compatible wallet (for blockchain integration)

**Example for running MongoDB on Unix-like systems:**

```bash
sudo service mongod start
```

**Example for running MongoDB on Windows:**

```bash
mongod.exe --dbpath "C:\data\db"
```

## **Installation**

Now that you have met the prerequisites, follow these steps to install and run the project:

**Clone with HTTPS:**

```bash
# Clone the repository with HTTPS.
git clone https://github.com/kevalsayar/NFT-Marketplace.git
```

**Clone with SSH:**

```bash
# Clone the repository with SSH.
git clone git@github.com:kevalsayar/NFT-Marketplace.git
```

### Navigate to the project directory

```bash
cd NFT-Marketplace/backend
```

### Install dependencies

```bash
$ npm install
```

## **Configuration**

### 1. Environment Variables:

Create a new file named .env in the root of the project. Copy the variable names from the example.env file and populate their values in the .env file.

## Start server

```bash
$ npm start
```

Open http://localhost:3000 (or the appropriate port) to view the app in your browser.

Note: The development server may run on a different port if port 3000 is already in use. Check the terminal for the correct URL.

## **Platform URL**

Visit the platform at [https://thenftagency.theblockchain.team/](https://thenftagency.theblockchain.team/) to experience it in action.
