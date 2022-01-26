require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift renew noise assault hunt opinion blue genius'; 
let testAccounts = [
"0xad857a461e3bd5d0c86f171c9113e1155d7ab4edf133b9cb8bb656f1e95755ef",
"0x7ffc2d6f4fec928bf879f83f0338f95eb071e55827a6ccff6f8b2d73f139ddec",
"0x3f306a191b1868ed1eee2990b1e4712f7f9bf0cc90918b9de514b61fa475d7b5",
"0xcd396994eacf73e06b9297d552104b8d44d3b62f89cbdc73b606bcb760c99af0",
"0x9d5f354391548d2e13cc43bbcfd44e0c4aaece754a66d447a370cb27fc551c39",
"0x98ea1055f184e8bb88296f0fea43fb4385e08bd60954ba7cc1483f6683487d54",
"0xca3b9934dd8a75589dda1f8b3181e6dd927fb4b546468c2bb3ea44036482ceac",
"0xefd1586480abc9cb655860cf1de6b0f4346003a01bda880d91a63d276eb54fad",
"0xd47daac952f4625c48fa0fe8fd09957c0b85c1d31a2919d230466c93f8d9351f",
"0x8068c7daa504f70e7d56444edc2f6a5fdc4a5c38b21d53076f3c9cbc917ead94"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


