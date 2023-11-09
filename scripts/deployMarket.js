const { ethers, upgrades } = require('hardhat');

async function main() {
    const Marketplace = await ethers.getContractFactory('Marketplace');
    const proxy = await upgrades.deployProxy(Marketplace, []);
    await proxy.waitForDeployment();

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
        proxy.target
    );

    console.log('Proxy contract address: ' + proxy.target);

    console.log('Implementation contract address: ' + implementationAddress);
}

main();
