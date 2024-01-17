<div align="center">
  <a href="https://particle.network/">
    <img src="https://i.imgur.com/xmdzXU4.png" />
  </a>
  <h3>
    Particle Network Biconomy Example
  </h3>
</div>

⚡️ Example application for leveraging [Particle's Smart Wallet-as-a-Service](https://particle.network/) to facilitate ERC-4337 AA interaction with Biconomy's Paymaster. Specifically, sign-in and account management is handled by Particle, while the sending of a sample **gasless** transaction is handled by Biconomy.

Built using **Particle Auth Core**, **Particle AA SDK**, **TypeScript**, and **Ethers**

## 🔑 Particle Auth Core
Particle Auth Core, a component of Particle Network's Wallet-as-a-Service, enables seamless onboarding to an application-embedded MPC-TSS/AA wallet facilitated by social login, such as Google, GitHub, email, phone number, etc. - as an alternative to Particle Auth, the Auth Core SDK comes with more control over the modal itself, application-embedded popups rather than redirects, and so on.

##

👉 Try the demo: https://core-demo.particle.network

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
This project requires a number of keys from Particle Network to be defined in `.env`. The following should be defined:
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
Old version featured in "[Leveraging AA with Particle WaaS + Biconomy](https://twitter.com/TABASCOweb3/status/1712401528039092640)"
