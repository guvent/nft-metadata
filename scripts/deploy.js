require("dotenv").config();

const { ethers, upgrades } = require('hardhat');

async function main() {
    const Collection = await ethers.getContractFactory('Collection');
    const proxy = await upgrades.deployProxy(Collection, [process.env.WALLET_ADDRESS]);
    await proxy.waitForDeployment();

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
        proxy.target
    );

    console.log('Proxy contract address: ' + proxy.target);

    console.log('Implementation contract address: ' + implementationAddress);

    proxy.runner.call({
      data: {
        
      }
    })
}

main();
