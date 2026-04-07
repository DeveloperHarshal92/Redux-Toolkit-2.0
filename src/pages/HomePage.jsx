import { useSelector } from "react-redux";
import ResultGrid from "../components/ResultGrid";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);
  
  return (
    <div className="flex flex-col w-full h-full">
      <SearchBar />
      
      {query && (
        <div className="flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative">
          <Tabs />
          <ResultGrid />
        </div>
      )}
    </div>
  );
};

export default HomePage;
