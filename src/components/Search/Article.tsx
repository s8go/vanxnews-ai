import React, { useRef, useEffect, useCallback } from "react";

interface Props {
  result: {
    data: any[] | undefined;
    topic: string | undefined;
    current?: number;
  };
}

const Article = ({ result }: Props) => {
  const articleRef = useCallback(
    (node: any) => {
      if (node !== null) node.scrollIntoView({ behaviour: "smooth" });
    },
    [result.current]
  );

  console.log(result.current)

  const otherRef = useRef(null);
  return (
    <>
      {result.data!.map((article, index) => {
        let date: Date = new Date(article.published_at);
        return (
          <a
            className={index === result.current ? "current" : "topic"}
            ref={index === result.current ? articleRef : otherRef}
            href={article.url}
            target={"_blank"}
            key={article.id}
          >
            <img
              src={
                article.image ||
                "https://th.bing.com/th/id/OIP.utkeD7qId04GC_xiYtf_YQHaD6?pid=ImgDet&w=4096&h=2161&rs=1"
              }
              alt="Article Image"
            />
            <h3 className="title">{article.title}</h3>
            <p>
              {article.description.slice(0, 100)}.......<span>continue</span>
            </p>
            <p>
              {date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate()}
            </p>
          </a>
        );
      })}
    </>
  );
};

export default Article;
