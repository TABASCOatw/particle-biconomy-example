import React, { useState, useEffect } from 'react';
import { ParticleNetwork } from '@particle-network/auth';
import { ParticleProvider } from '@particle-network/provider';
import { EthereumGoerli } from '@particle-network/chains';
import { AAWrapProvider, SmartAccount, SendTransactionMode } from '@particle-network/aa';
import { ethers } from 'ethers';

import './App.css';

const config = {
  projectId: process.env.REACT_APP_PROJECT_ID,
  clientKey: process.env.REACT_APP_CLIENT_KEY,
  appId: process.env.REACT_APP_APP_ID,
};

const particle = new ParticleNetwork({
  ...config,
  chainName: EthereumGoerli.name,
  chainId: EthereumGoerli.id,
  wallet: { displayWalletEntry: true, uiMode: 'dark' },
});

const smartAccount = new SmartAccount(new ParticleProvider(particle.auth), {
  ...config,
  networkConfig: [
    { dappAPIKey: process.env.REACT_APP_BICONOMY_KEY, chainId: EthereumGoerli.id }
  ],
});

const customProvider = new ethers.providers.Web3Provider(new AAWrapProvider(smartAccount, SendTransactionMode.Gasless), "any");
particle.setERC4337(true);

const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [ethBalance, setEthBalance] = useState(null);

  useEffect(() => {
    if (userInfo) {
      fetchEthBalance();
    }
  }, [userInfo]);

  const fetchEthBalance = async () => {
    const address = await smartAccount.getAddress();
    const balance = await customProvider.getBalance(address);
    setEthBalance(ethers.utils.formatEther(balance));
  };

  const handleLogin = async (preferredAuthType) => {
    const user = !particle.auth.isLogin() ? await particle.auth.login({preferredAuthType}) : particle.auth.getUserInfo();
    setUserInfo(user);
  }

  const executeUserOp = async () => {
    const signer = customProvider.getSigner();

    const tx = {
      to: "0x000000000000000000000000000000000000dEaD",
      value: ethers.utils.parseEther("0.001"),
    };

    const txResponse = await signer.sendTransaction(tx);
    const txReceipt = await txResponse.wait();
    console.log('Transaction hash:', txReceipt.transactionHash);
  };

  return (
  <div className="App">
    <div className="logos-section">
      <img src="https://lever-client-logos.s3.us-west-2.amazonaws.com/73c89f44-01e6-4d0a-9354-9661e253e4bf-1685457360524.png" alt="Biconomy Logo" className="biconomy-logo" />
      <img src="https://i.imgur.com/2btL79J.png" alt="Particle Network Logo" className="particle-logo" />
    </div>
    {!userInfo ? (
      <div className="login-section">
        <button className="sign-button" onClick={() => handleLogin('google')}>Sign in with Google</button>
        <button className="sign-button" onClick={() => handleLogin('twitter')}>Sign in with Twitter</button>
      </div>
    ) : (
      <div className="profile-card">
        <h2>{userInfo.name}</h2>
        <div className="avax-balance-section">
          <small>{ethBalance} ETH</small>
          <button className="sign-message-button" onClick={executeUserOp}>Execute User Operation</button>
        </div>
      </div>
    )}
  </div>
  );
};

export default App;