import { Link } from "react-router-dom";

const Header = ({ account, setAccount }) => {
  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="bg-gray-900 max-w-screen-xl mx-auto p-4 flex justify-between font-bold">
      <Link to="/">
        <div className="ml-1 text-4xl text-white">Pixel People</div>
      </Link>
      <div className="flex items-center">
        {account ? (
          <div className="text-4xl text-white">
            {account.substring(0, 4)}...{account.substring(account.length - 4)}
          </div>
        ) : (
          <button
            className="p-2 bg-gray-800 text-3xl rounded-full ml-1 text-white"
            onClick={onClickAccount}
          >
            Connect
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
