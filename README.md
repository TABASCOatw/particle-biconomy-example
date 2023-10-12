<div align="center">
  <a href="https://particle.network/">
    <img src="https://i.imgur.com/xmdzXU4.png" />
  </a>
  <h3>
    Particle Biconomy Example
  </h3>
</div>

⚡️ Example application for leveraging [Particle WaaS](https://particle.network/) to facilitate ERC-4337 AA interaction with Biconomy. Specifically, sign-in and account management is handled by Particle, while the sending of a sample **gasless** transaction is handled by Biconomy.

Built using **Particle Auth**, **Particle AA SDK**, **TypeScript**, and **Ethers**

## 🔑 Particle Auth
Particle Auth, a component of Particle Network's Wallet-as-a-Service, enables seamless onboarding to an application-embedded MPC-TSS/AA wallet facilitated by social login, such as Google, GitHub, email, phone number, etc.

##

👉 Try the demo: https://web-demo.particle.network/connectKit

👉 Learn more about Particle Network: https://particle.network

![Particle Auth Example](https://i.imgur.com/ZM33jAF.png)

## 🛠️ Quickstart

### Clone this repository
```
git clone https://github.com/TABASCOatw/particle-biconomy-example.git
```

### Install dependencies
```
yarn install
```
OR
```
npm install
```

### Set environment variables
This project requires a number of keys from Particle Network and WalletConnect to be defined in `.env`. The following should be defined:
- `REACT_APP_APP_ID`, the ID of the corresponding application in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).
- `REACT_APP_PROJECT_ID`, the ID of the corresponding project in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).
-  `REACT_APP_CLIENT_KEY`, the client key of the corresponding project in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).
-  `REACT_APP_BICONOMY_KEY`, the API key of the Biconomy paymaster you're using, acquired from the [Biconomy dashboard](https://dashboard.biconomy.io/)

### Start the project
```
npm run dev
```
OR
```
yarn dev
```

##
Originally featured in "[Leveraging AA with Particle WaaS + Biconomy](https://twitter.com/TABASCOweb3/status/1712401528039092640)"
