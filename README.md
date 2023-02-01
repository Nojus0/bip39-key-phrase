# Bip39 Key Phrase
[![Contribute with Gitpod](https://img.shields.io/badge/Contribute%20with-Gitpod-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/Nojus0/bip39-key-phrase)
[![Open in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow_small.svg)](https:///pr.new/Nojus0/bip39-key-phrase)

AES256 Key & IV to mnemonic phrase example, both the Key and IV are 128 bits(16 bytes) so combining both of them results in a 32 byte buffer, this buffer is then
converted into a 24 word mnemonic phrase.

# Building & Usage
1. Install pnpm with `npm install -g pnpm`
2. Install project dependencies with `pnpm install`
3. Transpile to Javascript by running `pnpm run build`
4. Run the example by running `npm run start` or `node dist/index.js`

# Running example in Browser
You don't need to download this repository locally, to run this example in your browser click _Contribute with Gitpod_ or _Open in Codeflow_ 
