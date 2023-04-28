import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [metadata, setMetadata] = useState();

  const { tokenId } = useParams();

  const getNft = async () => {
    try {
      const response = await axios.get(
        `https://gateway.pinata.cloud/ipfs/QmSQ4e4TNshKaQ5kh1GeYT4nELvDztuijXEqctQnF5JSTd/${tokenId}.json`
      );

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNft();
  }, []);

  useEffect(() => console.log(metadata), [metadata]);

  return (
    <div>
      {metadata && (
        <>
          <img src={metadata.image} alt={metadata.name} />
          <div className="text-white text-xl">{metadata.name}</div>
          <div className="text-gray-900">{metadata.description}</div>
          <ul>
            {metadata.attributes.map((v, i) => {
              return (
                <li>
                  <div className="text-white text-xl">{v.trait_type}</div>
                  <div className="text-yellow-400 text-xl">{v.value}</div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Detail;
