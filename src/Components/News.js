import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalize = (word) =>{
    let thisWord = word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
    return thisWord;
  }

  const mountApp = async () =>{

    props.setProgress(10);

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${1}&pageSize=${props.pageSize}`;

    setPage(1)
    setLoading(true)

    let data = await fetch(url);

    props.setProgress(30);

    let parsedData = await data.json()

    props.setProgress(50);

    let totalResults = parsedData.totalResults;
    
    console.log(totalResults);

    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(totalResults)

    props.setProgress(100);

  }

  useEffect(() => {

    document.title = `${capitalize(props.category)} - NewsMonkey | Your daily dose of news`; 
    mountApp();
    // This will give a warning reagarding adding updateNews as a dependency in useEffect. But, we are simulating componentDidMount here, so we will ignore the warning.
    // To remove the warning, we use the comment as 'eslint...'. Warning was coming from line 57, so we had to add it at line 56.

    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    // React will take time to update the page, put page+1 in the url and then later change page with setPage, as useState takes few milliseconds to change state.
    
    console.log(page+1)
    setPage(page+1)

    let data = await fetch(url);

    props.setProgress(30);

    let parsedData = await data.json();

    props.setProgress(70);

    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)

    props.setProgress(100);

  };

  return (
    <>
      <h2 className='text-center' style={{margin: "100px 35px 25px 35px"}}> News Monkey - Top '{capitalize(props.category)}' Headlines </h2>

        {/* {loading && <Loader/>} */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={page !== Math.ceil(totalResults/props.pageSize)}
          loader={<Loader/>} > 

          <div className="container">

            <div className="row my-3">
            {articles.map((element, index)=>{
              return <div key = {index} className="col-md-4">
                <NewsItem title = {!element.title ? "": element.title} description = {element.description ? element.description : ""} imageUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author?element.author:"Unknown Author"} date = {element.publishedAt} source = {element.source.name}/>
              </div>
            })}
            </div>

          </div>

        </InfiniteScroll>

    </>
  )
}

News.defaultProps = {
  pageSize: 1,
  country: "in",
  category: "general"
}

News.propTypes = {
  pageSize: PropTypes.number,
  number: PropTypes.string,
  category: PropTypes.string
}

export default News