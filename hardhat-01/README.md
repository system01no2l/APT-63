# Guideline

- compile smart-contract -> create folder [artifacts] includes: abi, info contracts, source name: 
``` npx hardhat compile```
- test -> ``` npx hardhat test```
- deploy -> ```npx hardhat run --network bsctest  scripts/deploy.js```
+ Examples: 0xF2bAA8e194caa486226e16EF49CA44E0acA82CE1
- verified contract -> ```npx hardhat verify --network bsctest <address tokens>```
+ Examples: https://testnet.bscscan.com/address/0xF2bAA8e194caa486226e16EF49CA44E0acA82CE1#code
