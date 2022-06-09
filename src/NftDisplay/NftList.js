import { render } from '@testing-library/react';
import React from 'react';
import NftCard from './NftCard';

//   const Gallery = () => {
//       fetch(`${OpenSeaUrl}`,
//           { method: 'GET', headers: { 'Accept': 'application/json', 'X-API-KEY': `${KEY}` } }
//       ).then((response) => response.json()).then((  { assets } ) => {
//           assets.forEach((attributes) => {
//               document.getElementById("container").append(attributes.name)
//           })
//           Gallery()
//           debugger
//       }) 
//   }
//  console.log(Gallery());

// async function Gallery() {
//     const container = document.getElementById("example")

//     const items = await fetch(`${OpenSeaUrl}`)
//     .then((res) => res.json())
//     .then((res) => {
//         return res.assets
//     })
//     .catch((e) => {
//         console.log(e)
//         console.error("Could not talk to opensea")
//         return null;
//     })

//     if (items.length === 0) {
//         return;
//     }

//     items.forEach((nft) => {
//         const {name, image_url, description, permalink} = nft

//         const newElement = document.createElement("div")
//         newElement.innerHTML = `
//         <a href="${permalink}" target="_blank" />
//         <div className="flex flex-col">
//             <img src"${image_url}" className="w-full rounded-lg" />
//             </div>
//         <div className="flex-col w-full space-y-1">
//             <p className="text-gray-800" text-lg>    
//                ${name} />
//             <p className="text-gray-500 text-sm word-wrap">
//                ${description} /> ` 

        

//         container.appendChild(newElement)
    
//     })
    
// }

export function Displaying({ assets }) {
    return (
      <div>
         {assets.forEach(nft => {
           return <NftCard nft={nft} key={nft.key}/>
         })}
      </div>      
    );
}
export default Displaying;
