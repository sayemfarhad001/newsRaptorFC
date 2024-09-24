import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // document.title = `${capitalize(props.category)} - NewsRaptor`;

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    
    let parsedData = await data.json();
    props.setProgress(50);
    
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(()=>{
    updateNews();
  }, [])

  // async componentDidMount() {
  //   this.updateNews();
  // }

  const fetchMoreData = async () => {
    setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

    return (
      <>
        <h1 className={`text-center text-${ props.mode === "light" ? "dark" : "light"}`}
          style={{ margin: "35px 0px" }}
        >
          {" "}
          NewsRaptor - Top {capitalize(props.category)} Headlines
        </h1>

        {loading && <Spinner/>}


          <InfiniteScroll dataLength={articles.length} next={fetchMoreData} 
            hasMore={articles.length !== totalResults} loader={<Spinner/>}>
                <div className="container">    
                    <div className="row">
                        {articles.map((element) => {
                            return (<div key={element.id + element.url + element.title} className="col-md-4">
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 45) : ""}
                                    description={element.description ? element.description.slice(0, 88) : ""}
                                    newsUrl={element.url}
                                    imageUrl={element.urlToImage}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                />
                                </div>
                            );
                        })}
                    </div>
                </div>
          </InfiniteScroll>
      </>
    );
  
}

News.defaultProps = {
  country: "stranger",
  pageSize: 18,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
