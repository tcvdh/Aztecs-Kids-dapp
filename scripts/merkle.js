const ethers = Moralis.web3Library

export const addresses = ['0x678D36D534880FebB34E4BfE4Cb2770AA971495a', '0xb5B4A615d493826FE993463841cD63e380F548ad', '0x2aBEAd0274aB1304B16b6720019493a42F83b940', '0x7e751562B8bb537Bec42C2dE4AcFaB17B0819130', '0xBc225a1000979535D2F66b61E7F1f8Ff8318559f', '0x9aAcda3A2C48c2571bbB2BB8191a62B34865EC74', '0xc7EAf42e18D80ab4731705C4C191730F60897802', '0x53032baf62d9825Ee956DD06DdD7647D02c8Bf30', '0x2eC206Ed20128fBc32686c0AbD6372ddE97f111F', '0xd0Ce592b78Cfc6D0EDa67c3ED6fF9994179e8060', '0xBC3A956a05808799f3Ef9b1B1eeEEC56F8d89e21', '0x18885ec1c96891A279305A2Fe0E26BE344535cDd', '0xB4d400c7a4Bc96E03f28a9C69bE78Fc075CE2bc5', '0x7124dB5cC3E23F7D6Ba95C58DF56596E3917f2D8', '0x8B171a124199dCe6f80362B7D8d03cdD15bEcd8C', '0x5483Bb4Af64A34A3D510aA44A9C6D6Cf2c8D751F', '0xE9D898169554964cB721E8DD6fF1Dd0FA0D0571B', '0x1cFdbDe3b3fa867f82508353fB2Bb12DC41AD89A', '0x26714cb1787Ed9F907e3A9259b00A0D0cA87fDaB', '0x5143b94903b258Df547e33d5a2D5db8f3cb598D1', '0xc5E49AC5a5D11c8ca65d27309Aaf85d8CE8F8a4A', '0x9601e5f2BeBF117eb7E20C0bB864BE548a75036C', '0xb5B4A615d493826FE993463841cD63e380F548ad', '0xA32f7e47ad26dFa3Ee4eafA99Ebc30645cA58AB8', '0xA0C0b3053913ab14A4cf422060f7e722B2e6fBBA', '0x53032baf62d9825Ee956DD06DdD7647D02c8Bf30', '0x4E6689ECAC7F7d0045F20Aec3A5270E6cAf6F797', '0x672f331E66C25b6D382Ff2758cc78dA309606beE', '0x9Bb2e148453B61931a5d1799f9DdB1348D5CB656', '0x54cCBB5c380f2543BF210BeBB0784878784868F7', '0x3975B13366f2E609627e122db76444735db32cFc', '0x55C708C657b91Eff8BF677D0cF40fc8E901a6F2a', '0x0AA482e5a3726c4e96DDaD54125cA6E34F64aCbD', '0x3e9ED9dD46c5c5767F81d2D70DFACDe8E0569D69', '0xA96Cbc4c3651B25AeBf9ec28d478781bc366BAC7', '0xc7EAf42e18D80ab4731705C4C191730F60897802', '0x810d78229A935587A0B9aC71e534362407FC81b0', '0x2Dc84af695D2815d8E56828A1fD91e7B135Df6EE', '0x2Ad1A97CC2b360256f9723845aA7a1C9F677ecb0', '0x28557F28711948D46f5336181ca96ff8f304E186', '0x0B5FD18B5429a16e281dC7AeDa22Fc4269315e30', '0xa30F4a337B9e53fD07Db63f8f498FDe92FA102c0', '0x8A5d1de7182B9606fC98C7A26f51F24339c9D0a1', '0xfF72087352084AA983A62fD66E562b00a5Fd205A', '0xc2716c5a2EE8298211E6a03F8Fda0188426Ff492', '0x3556C9Cda8461214A097795a4Fe0f06874e06E26', '0xBc225a1000979535D2F66b61E7F1f8Ff8318559f', '0xa10d0d371DacA85E2E7A26e9b5a312Af48C0973B', '0xdFc4e1C297f0B2f3f02966e71f8ACc6E606c8401', '0xBc225a1000979535D2F66b61E7F1f8Ff8318559f', '0xe0f23f4FA9e0C3344D925978b7aE0484adae9dAA', '0x5143b94903b258Df547e33d5a2D5db8f3cb598D1', '0xc5E49AC5a5D11c8ca65d27309Aaf85d8CE8F8a4A'];

export const amount = ['1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '2', '2', '2', '2', '2', '2', '2', '2', '3', '3', '3', '3', '5', '7', '9', '1', '2', '1', '1', '1', '1'];

 export let whitelistAddresses = [
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [0, addresses[0], amount[0]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [1, addresses[1], amount[1]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [2, addresses[2], amount[2]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [3, addresses[3], amount[3]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [4, addresses[4], amount[4]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [5, addresses[5], amount[5]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [6, addresses[6], amount[6]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [7, addresses[7], amount[7]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [8, addresses[8], amount[8]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [9, addresses[9], amount[9]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [10, addresses[10], amount[10]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [11, addresses[11], amount[11]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [12, addresses[12], amount[12]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [13, addresses[13], amount[13]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [14, addresses[14], amount[14]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [15, addresses[15], amount[15]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [16, addresses[16], amount[16]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [17, addresses[17], amount[17]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [18, addresses[18], amount[18]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [19, addresses[19], amount[19]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [20, addresses[20], amount[20]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [21, addresses[21], amount[21]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [22, addresses[22], amount[22]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [23, addresses[23], amount[23]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [24, addresses[24], amount[24]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [25, addresses[25], amount[25]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [26, addresses[26], amount[26]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [27, addresses[27], amount[27]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [28, addresses[28], amount[28]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [29, addresses[29], amount[29]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [30, addresses[30], amount[30]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [31, addresses[31], amount[31]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [32, addresses[32], amount[32]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [33, addresses[33], amount[33]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [34, addresses[34], amount[34]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [35, addresses[35], amount[35]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [36, addresses[36], amount[36]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [37, addresses[37], amount[37]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [38, addresses[38], amount[38]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [39, addresses[39], amount[39]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [40, addresses[40], amount[40]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [41, addresses[41], amount[41]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [42, addresses[42], amount[42]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [43, addresses[43], amount[43]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [44, addresses[44], amount[44]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [45, addresses[45], amount[45]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [46, addresses[46], amount[46]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [47, addresses[47], amount[47]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [48, addresses[48], amount[48]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [49, addresses[49], amount[49]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [50, addresses[50], amount[50]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [51, addresses[51], amount[51]]),
    ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [52, addresses[52], amount[52]]),
  ];
