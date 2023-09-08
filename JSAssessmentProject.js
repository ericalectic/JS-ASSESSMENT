/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

let collectNFT=[];

function mintNFT (name,description,color) {
    const metadata = {
        "name": name,
        "description": description,
       "color":color,
      };
    collectNFT.push(metadata);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i=0; i<collectNFT.length;i++){
        console.log("Name: " + nft[i].name);
        console.log("Desc: " + nft[i].description);
       console.log("Desc: " + nft[i].color);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return mintNFT.length;
}

// call your functions below this line
mintNFT("NFT 1", "Description 1","Color 1");
mintNFT("NFT 2", "Description 2","Color 2");
mintNFT("NFT 3", "Description 3","Color 3");
listNFTs();
console.log("Total Supply: " + getTotalSupply());
