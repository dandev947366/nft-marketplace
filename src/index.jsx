import './index.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'
import { MetaMaskProvider } from "@metamask/sdk-react";

  ReactDOM.render(
    <BrowserRouter>
      <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: "NFT Marketplace",
          url: window.location.href,
        },
        infuraAPIKey: process.env.INFURA_API_KEY,
        // Other options
      }}
    >
      <App />
    </MetaMaskProvider>
    </BrowserRouter>,
    document.getElementById('root'),
  )

