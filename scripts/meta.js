require("dotenv").config();

const axios = require("axios");

const sendIpfs = async (data) => {
  try {
    const res = await axios({
        method: "post",
        url: process.env.PINATA_URL,
        data,
        headers: {
          pinata_api_key: process.env.PINATA_API_KEY,
          pinata_secret_api_key: process.env.PINATA_SECRET_KEY,
          "Content-Type": "application/json",
        },
      });

    console.log(res.data);

    return res.data.IpfsHash;
  } catch (error) {
    console.error(error);
  }
};

// sendIpfs({
//     "title": "My Token",
//     "type": "object",
//     "properties": {
//         "name": {
//             "type": "string",
//             "description": "My Token Collection"
//         },
//         "description": {
//             "type": "string",
//             "description": "Describes the asset to which this NFT represents"
//         },
//         "image": {
//             "type": "string",
//             "description": "https://ipfs.io/ipfs/QmdZ1f6NCsdXqJMrc6Kd7uCvhPBqNbBaqgmhv4Uyj9Wpsh"
//         },
//         "banner": {
//             "type": "string",
//             "description": "https://ipfs.io/ipfs/QmbMnPy5wjuXfXnrTKShAdrttBzuyZPnbgX4yBzahZJM5z"
//         }
//     }
// });


// sendIpfs({
//     "name": "My Token",
//     "symbol": "MTK",
//     "description": "OpenSea Creatures are adorable aquatic beings primarily for...",
//     "external_link": "https://opensea.com",
//     "image": "https://ipfs.io/ipfs/QmdZ1f6NCsdXqJMrc6Kd7uCvhPBqNbBaqgmhv4Uyj9Wpsh",
//     "banner": "https://ipfs.io/ipfs/QmbMnPy5wjuXfXnrTKShAdrttBzuyZPnbgX4yBzahZJM5z",
//     "twitterUrl": "https://twitter.com",
//     "discordUrl": "https://discord.com",
//     "twitterUsername": "@twt",
// });

sendIpfs({
    "name": "My Token",
    "symbol": "MTK",
    "description": "OpenSea Creatures are adorable aquatic beings primarily for...",
    "external_link": "https://deneme.com",
    "image": "https://ipfs.io/ipfs/QmdZ1f6NCsdXqJMrc6Kd7uCvhPBqNbBaqgmhv4Uyj9Wpsh",
    "banner": "https://ipfs.io/ipfs/QmbMnPy5wjuXfXnrTKShAdrttBzuyZPnbgX4yBzahZJM5z",
    "attributes": [
      {
          "trait_type": "bg",
          "value": "Tangerine"
      },
      {
          "trait_type": "body",
          "value": "Glitch"
      },
      {
          "trait_type": "clothes",
          "value": "Duck Swin-ring"
      },
      {
          "trait_type": "head",
          "value": "Baseball Cap"
      },
      {
          "trait_type": "eye",
          "value": "Orange Rectangle"
      },
      {
          "trait_type": "mouth",
          "value": "Party Horn"
      }
    ]
});




/**



{
  IpfsHash: 'Qme79Yp3nb7bRtyWBxL1o2oaY6YbScfrfv6zEn5XDVY2RA',
  PinSize: 599,
  Timestamp: '2023-11-09T10:57:10.741Z'
}


{
  IpfsHash: 'QmPESj6Tc7tZcbnaWxntTjETaunTS9YYBpFgmuo945YyCP',
  PinSize: 414,
  Timestamp: '2023-11-09T08:28:48.851Z'
}

{
  IpfsHash: 'QmTrCL3ZwtxG4acLe6yHHgWQKQqStNuMybHTFvb2SkxghB',
  PinSize: 441,
  Timestamp: '2023-11-09T08:04:27.454Z'
}


{
  IpfsHash: 'QmeWEGnwjhfgoocm6GyqkMmQ1j1cuyrYciEUrVkNiihQar',
  PinSize: 520,
  Timestamp: '2023-11-09T07:47:45.674Z'
}

 */