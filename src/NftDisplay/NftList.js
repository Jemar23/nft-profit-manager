import React from "react";

const KEY = '3953aeb7eb99428fb5e561bc416e85ba';
const OpenSeaUrl = 'https://api.opensea.io/api/v1/assets?owner=0x9B4040a56888dD3BBBcF08d73aA9e0e07F29C0f1'

const Gallery = () => {
    fetch(`${OpenSeaUrl}`,
        { method: 'GET', headers: { 'Accept': 'application/json', 'X-API-KEY': `${KEY}` } }
    ).then((response) => response.json()).then((  { assets } ) => {
        assets.forEach((attributes) => {
            document.getElementById("container").append(attributes.name)
        })
    }) 
}

export function Displaying() {
    return (
      <div>
          <Gallery />
      </div>      
    );
}
export default Gallery;
