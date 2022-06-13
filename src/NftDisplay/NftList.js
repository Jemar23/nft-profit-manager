import { render } from '@testing-library/react';
import React from 'react';
import NftCard from './NftCard';


function Displaying({ nft }) {
    return (
      <div>
         {nft.map((asset, index) => {
           return <NftCard nft={asset} key={index} />;
         })}
      </div>      
    );
}


export default Displaying;
