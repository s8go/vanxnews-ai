import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import Header from "./components/Head/Header";
import SearchResult from "./components/Search/SearchResult";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";

function App() {
  // console.log(wordsToNumbers("five"))
  const alanKey: string =
    "d191f064bcdbcebf51ef83a983d7f7fe2e956eca572e1d8b807a3e2338fdd0dc/stage";
  const [searchResults, setSearchResult] = useState<{
    data: any[] | undefined;
    topic: string | undefined;
    current?: number;
    profile?: string;
  }>({ data: undefined, topic: undefined, profile: "show profile"});

  useEffect(() => {

    alanBtn({
      key: alanKey,
      onCommand({
        command,
        data,
        topic,
        article,
        number,
        articles,
      }: Partial<{
        command: string;
        data: any[];
        topic: string;
        article: number;
        articles: any[];
        number: string;
      }>) {
        if (command === "searchArticle") {
          let id: number = 0;

          let result: any[] = [];
          data!.forEach((item) => {
            result.push({ ...item, id: id++ });
          });

          setSearchResult({ data: result, topic, profile: "" });
        } else if (command === "highlight") {
          setSearchResult((curr) => {
            return { ...curr, current: article };
          });
          
        } else if (command === "open") {
          let article;
          if (number!.length <= 2 && articles !== undefined) {
            article = articles[Number(number) - 1];
            window.open(article!.url, "_blank");
          }
        } else if (command === "back") {
          setSearchResult({ data: undefined, topic: undefined, profile: ""});
        } else if (command === "show profile") {
          setSearchResult({ data: undefined, topic: undefined, profile:"show profile"});
        } 
      },
    });
  }, []);

  // console.log(searchResults.current);

  return (
    <div className={"head"}>
      {searchResults.data === undefined && searchResults.topic === undefined && searchResults.profile !== "show profile" && (
        <Header />
      ) }

      {searchResults.data !== undefined && searchResults.profile !== "show profile" &&
         (
          <SearchResult result={searchResults}></SearchResult>
        )
      }

      {
        searchResults.profile === "show profile" && <Profile/>
      }



     
      <Footer />
    </div>
  );
}

export default App;
