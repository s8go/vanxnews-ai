import React from "react";
import Article from "./Article";

interface Props {
  result: { data: any[] | undefined; topic: string | undefined; current?: number};
}
const SearchResult = ({ result }: Props) => {
  return (
    <div className="searchResult">
      <h1 className="head">{result.topic}</h1>
      <div className="topics">
        {result!.data && result.data.length > 0 ? (
          <Article result={result} />
        ) : (
          <h1>No element to display</h1>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
