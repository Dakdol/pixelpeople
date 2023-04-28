import background from "../images/Background.jpeg";

const ranNum = Math.floor(Math.random() * 49);
const imgSrc = `https://gateway.pinata.cloud/ipfs/QmTpidcMZwQ3MGiBZRCcQd615XvrV5sfzB3KAGsrXTjw29/${ranNum}.png`;

const Intro = ({ totalNft, mintedNft, myNft }) => {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <div className="max-w-screen-xl mx-auto relative">
        <div className="relative w-40 h-40">
          <img
            className="ml-5 absolute z-10 rounded-full"
            src={imgSrc}
            alt="NFT"
          />
          <div className="w-40 h-40 ml-5 rounded-full bg-white text-gray-950 absolute top-0 z-0 flex justify-center items-center text-xs">
            Loading...
          </div>
        </div>
        <div className="py-4 text-center flex">
          <div>
            <div className="text-white text-xl">총 NFT</div>
            <div className="font-bold text-white text-xl ">{totalNft}</div>
          </div>
          <div className="ml-4">
            <div className="text-white text-xl">발행된 NFT</div>
            <div className="font-bold text-white text-xl">{mintedNft}</div>
          </div>
          <div className="ml-4">
            <div className="text-white text-xl">내 NFT</div>
            <div className="font-bold text-white text-xl">{myNft}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
