import { whitelistAddresses, addresses, amount } from './merkle.js?ver=8.0.0'
import { ABI } from './abi.js';


const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const infuraProvider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/a0ecf0217614452099724b8999730684");
const infuraContract = new ethers.Contract("0x81E3eC24f1b0E451a0aF6110211B209eE76C9E54", ABI, infuraProvider);
var contract;
var provider;

var walletAddress = "0x";
getTotalSupply();

async function loginWeb3() {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "a0ecf0217614452099724b8999730684",
      }
    },
  };

  let web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });
  const instance = await web3Modal.connect();
  provider = new ethers.providers.Web3Provider(instance);
  
  
  const currentChain = await provider.getNetwork()
  if(currentChain.chainId != 1) {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x01' }], // chainId must be in hexadecimal numbers
    });
    provider = new ethers.providers.Web3Provider(instance);
  }
  const signer = provider.getSigner();
  contract = new ethers.Contract("0x81E3eC24f1b0E451a0aF6110211B209eE76C9E54", ABI, signer)

  walletAddress = await signer.getAddress();
  const ethFirst = walletAddress.substring(0,4);
  const ethLast = walletAddress.substring(38,42);
  const fullAddress = `${ethFirst}...${ethLast}`;


  
  document.getElementById('connect').innerHTML = fullAddress;
  getENS();
  start();
}

async function getENS() {
  var fullAddress;

  const hasENS = await provider.lookupAddress(walletAddress);

  if(hasENS) {
    fullAddress = hasENS
    document.getElementById('connect').innerHTML = fullAddress;
  }
  
}


async function getTotalSupply() {
  const totalSupply = await infuraContract.totalSupply()
  document.getElementById('totalSupply').innerHTML = `Minted: ${totalSupply}/500`;
}


  async function mint() {
    const leafNodes = whitelistAddresses.map(addr => addr);
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});
    var found = addresses.lastIndexOf(walletAddress);
    if(found < 0) {
      document.getElementById('amounttext').innerHTML = `You are not on the minting list. Maybe next time!`;
      $('#amounttext').addClass('text-danger');
      document.getElementById("amounttext").style.visibility = "visible";
      return
    }
    var claimingAddress = leafNodes[found];
    const hexProof = merkleTree.getHexProof(claimingAddress);

    const receipt = await contract.freeMintPhase(walletAddress, found, hexProof);
    console.log(receipt);
    await start();
    
  }




async function main() {
  if (!contract) {
    await loginWeb3();
    return
  }
    
  
  if(document.getElementById('main').innerHTML === "MINT") {
    await mint();
    await getTotalSupply();  
  }
}




async function start() {
  getTotalSupply();
  var found = addresses.lastIndexOf(walletAddress);
  if(found < 0) {
    document.getElementById('amounttext').innerHTML = `You are not on the minting list. Maybe next time!`;
    $('#amounttext').addClass('text-danger');
    document.getElementById("amounttext").style.visibility = "visible";
    return
  }
  var amountt = amount[found];
  const claimed = await contract.checkClaimed(found);

  if(claimed === true) {
    document.getElementById('amounttext').innerHTML = `You have already claimed, maybe next time again!`;
    $('#amounttext').addClass('text-danger');
    document.getElementById("amounttext").style.visibility = "visible";
    document.getElementById('main').innerHTML = "already claimed";
    return
  }
  document.getElementById('amounttext').innerHTML = `You can mint ${amountt}`;
  document.getElementById("amounttext").style.visibility = "visible";
  document.getElementById('main').innerHTML = "MINT";
}




document.getElementById("main").onclick = main;