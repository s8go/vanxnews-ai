import React from "react";
import Profile from "../Profile/Profile";
import Article from "./Article";

interface Props {
  result: { data: any[] | undefined; topic: string | undefined; current?: number};
}


const SearchResult = ({ result }: Props) => {
  
  return (
    <div className="searchResult">
      <img src="https://th.bing.com/th/id/OIP.utkeD7qId04GC_xiYtf_YQHaD6?pid=ImgDet&w=4096&h=2161&rs=1" alt="vanx" id="logo"/>
      <h1 className="head">{result.topic}</h1>
      <div className="topics">
      {result!.data && result.data.length > 0 ? (
          <Article result={result} />
        ) : (
          <div>
          <h1>No element to display</h1>
          <p>something went wrong...</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default SearchResult;
