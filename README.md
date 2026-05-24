# web3-auth-starter 🌐

[![Build Status](https://img.shields.io/travis/KaiSilva/web3-auth-starter/master.svg)](https://travis-ci.org/KaiSilva/web3-auth-starter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A production-ready Web3 authentication boilerplate using WalletConnect, Next.js, and RainbowKit.

## Features

- **WalletConnect Integration**: Seamless connection to various wallets.
- **Next.js Framework**: For efficient server-side rendering and static site generation.
- **RainbowKit UI Kit**: Modern and user-friendly wallet interface.
- **Easy Setup**: Minimal configuration for quick implementation.

## Quick Start / Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KaiSilva/web3-auth-starter.git
   cd web3-auth-starter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage Example

Here's a simple example of how to authenticate a user using WalletConnect:

```jsx
import { useAccount, useConnect } from 'wagmi';
import { MetaMaskConnector } from '@wagmi/connectors/metaMask';

const App = () => {
  const { isConnected, address } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });

  return (
    <div>
      {isConnected ? (
        <p>Connected to {address}</p>
      ) : (
        <button onClick={() => connect()}>Connect Wallet</button>
      )}
    </div>
  );
};

export default App;
```

## Tech Stack

- **Framework**: Next.js
- **Authentication**: WalletConnect, RainbowKit
- **State Management**: React Context
- **Styling**: Tailwind CSS

## Project Structure

```
web3-auth-starter/
├── components/
│   ├── ConnectWalletButton.jsx
│   └── ...
├── pages/
│   ├── api/
│   │   ├── auth.js
│   │   └── ...
│   ├── _app.js
│   ├── index.js
│   └── ...
├── public/
│   └── favicon.ico
├── styles/
│   ├── globals.css
│   └── ...
├── .env.local.example
├── next.config.js
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Make your changes and commit them (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.