import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nfts = ({ page, mintedNft }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [nfts, setNfts] = useState();

  const getNfts = async (p) => {
    try {
      let nftArray = [];

      setNfts();

      for (let i = 0; i < 10; i++) {
        const tokenId = i + 1 + (p - 1) * 10;

        let response = await axios.get(
          `https://gateway.pinata.cloud/ipfs/QmSQ4e4TNshKaQ5kh1GeYT4nELvDztuijXEqctQnF5JSTd/${tokenId}.json`
        );

        nftArray.push({ tokenId, metadata: response.data });
      }

      setNfts(nftArray);
    } catch (error) {
      console.error(error);
    }
  };

  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button
          className={`${i !== 0 && "ml-4 "} ${
            i + 1 === selectedPage ? "text-white" : "text-gray-500"
          }`}
          key={i}
          onClick={() => {
            setSelectedPage(i + 1);
            getNfts(i + 1);
          }}
        >
          {i + 1} 페이지
        </button>
      );
    }

    return pageArray;
  };

  useEffect(() => {
    getNfts(1);
  }, []);

  useEffect(() => console.log(nfts), [nfts]);

  return (
    <div>
      <div>{pageComp()}</div>
      {nfts?.map((v, i) => {
        return (
          <div key={i}>
            {parseInt(mintedNft) < v.tokenId && <div>Not Minted</div>}
            <img src={v.metadata.image} alt={v.metadata.name} />
            <div className="text-white text-4xl"># {v.tokenId}</div>
            <Link to={`/${v.tokenId}`}>
              <button
                className="text-yellow-400 text-xl"
                disabled={parseInt(mintedNft) < v.tokenId}
              >
                Detail
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Nfts;
