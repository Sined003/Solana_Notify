
# Solana_Notify


---

## Overview

Solana_Notify is a simple JavaScript project that monitors the Solana blockchain for newly created tokens (coins) and notifies you when a new token mint event occurs.

This project leverages Solana's Web3.js library to subscribe to blockchain events related to token creation, providing a foundation for building real-time notification systems for new Solana tokens.

---

## Features

- Listens for new token mint events on the Solana blockchain
- Uses WebSocket connection for real-time updates
- Lightweight and easy to extend
- MIT licensed open source project

---

## Prerequisites

- Node.js (v14 or later recommended)
- Internet connection to access Solana RPC/WebSocket endpoints

---

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Sined003/Solana_Notify.git
   cd Solana_Notify
   ```

2. Install dependencies (if any):

   ```
   npm install
   ```

   > Note: If the project does not have a `package.json`, you may need to add dependencies manually, e.g., `@solana/web3.js`.

---

## Usage

Run the main script to start listening for new token mint events:

```
node sol.js
```

The script connects to the Solana blockchain and logs notifications when it detects new token creation events.

---

## How It Works

- Connects to the Solana mainnet or testnet via WebSocket.
- Subscribes to logs emitted by the SPL Token Program.
- Detects `InitializeMint` instructions indicating new token creation.
- Outputs the mint address and related info to the console (can be extended to send email, push notifications, etc.).

---

## Customization

You can extend the notification logic by:

- Integrating with messaging platforms (Telegram, Discord, Slack)
- Adding metadata fetching from Metaplex to display token details
- Storing detected tokens in a database for historical tracking

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


