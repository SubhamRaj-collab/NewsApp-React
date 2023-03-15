import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor()
  {
    super();
    console.log("Helo bro, I am a constructor from News Component");

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pages: 0,
      pageSize:0
    }
    
  }

  async componentDidMount()
  {
    // console.log("mounted")
    let pageSize = 6;
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0073dba0dd5a486c9dcbf5c025e7fa33&page=1&pageSize=${pageSize}`;

    let data = await fetch(url);

    let parsedData = await data.json()
    // console.log(parsedData);
    let totalResults = parsedData.totalResults;
    
    console.log(totalResults);

    let pages = Math.ceil(totalResults/pageSize);

    console.log(pages);

    this.setState({
      articles: parsedData.articles,
      pages: pages,
      pageSize: pageSize
    })
  } 

  handlePrevClick = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0073dba0dd5a486c9dcbf5c025e7fa33&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);

    let parsedData = await data.json()

    this.setState({
      page: this.state.page-1,
      articles: parsedData.articles
    })

  }

  handleNextClick = async () =>{

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0073dba0dd5a486c9dcbf5c025e7fa33&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);

    let parsedData = await data.json()

    this.setState({
      page: this.state.page+1,
      articles: parsedData.articles
    })

  }
  
  render() {
    console.log("Rendered")
    return (
      <div className='container my-3'>
        <h2>News Monkey - Top Headlines</h2>
        <div className="row my-3">
        { this.state.articles.map((element)=>{
          return <div key = {element.url} className="col-md-4">
            <NewsItem title = {element.title ? element.title.slice(0, 45): ""} description = {element.description ? element.description.slice(0, 88) : ""} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
          </div>
        })}
        </div>

        <div className="container d-flex justify-content-between my-5">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&laquo; Previous</button>
          <button disabled={this.state.page >= this.state.pages} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
        </div>

      </div>
    )
  }
}

export default News