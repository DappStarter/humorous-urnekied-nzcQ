require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remind purity hover clip surge slide'; 
let testAccounts = [
"0xc5268b1ceaa52590a938b6d346de9a186dd151ef8704e606f7b82a8863320438",
"0xf2571e001ba3e85af12a915fee21b7487162ef489b52d03359237fed18b1397e",
"0x061a492d28e854577921fb85509cbce91fd6cc0d4a38ecafe96ce94b0c238734",
"0x79eff019bacb763831c05422f30d4a5c9f94f153824c69541ce9d3cbec9bffdc",
"0x16e75372d45ef0766e85b95b438e992d3f4b16c2828a8870455dfc98db0f2015",
"0xf638eccf949f55abb08e5d614848107db5696264db8579267eb43bb4cffffd90",
"0x47411e4c9fe2f937b415485cfb5d0852c66e9bfb9590a459d59e5e53d84ae727",
"0xa559f33f7c8645a418adbfa54ffcfeae9f00000e4210c5266eaf69f63c801994",
"0xde29330fe4efc32c11c6d2da8e67af3d23a3881ffa4cbcbb9483025e86bba1bb",
"0x90cb545d2198c203af78b6e05cc18564fced14469ef912f62a6dbaa892a1451f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

