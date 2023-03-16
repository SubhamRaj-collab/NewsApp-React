import React, { Component } from 'react'
import Loader from './Loader';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    pageSize: 1,
    country: "in",
    category: "general"
  }

  static propTypes = {
    pageSize: PropTypes.number,
    number: PropTypes.string,
    category: PropTypes.string
  }

  capitalize = (word) =>{
    let thisWord = word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
    return thisWord;
  }

  constructor(props)
  {
    super(props);
    console.log("Helo bro, I am a constructor from News Component");

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pages: 0,
      pageSize: 0
    }

    document.title = `${this.capitalize(this.props.category)} - NewsMonkey | Your daily dose of news`; 
    
  }

  async componentDidMount()
  {
    // console.log("mounted")
    let pageSize = this.props.pageSize;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${pageSize}`;

    this.setState({
      loading: true
    })

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
      pageSize: pageSize,
      loading: false
    })
  } 

  async updateNews()
  {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);

    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      loading: false
    })
  }

  handlePrevClick = async () =>{
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
    // this.setState({
    //   loading: true
    // })
    // let data = await fetch(url);

    // let parsedData = await data.json()

    // this.setState({
    //   page: this.state.page-1,
    //   articles: parsedData.articles,
    //   loading: false
    // })

    this.setState({ 
      page: this.state.page - 1 }, () => 
        this.updateNews());

    // await this.setState({
    //   page: this.state.page-1
    // })

    // this.updateNews();

  }

  handleNextClick = async () =>{

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
    // this.setState({
    //   loading: true
    // })
    // let data = await fetch(url);

    // let parsedData = await data.json()

    // this.setState({
    //   page: this.state.page+1,
    //   articles: parsedData.articles,
    //   loading: false
    // })

    // await this.setState({
    //   page: this.state.page+1
    // })

    // this.updateNews();

    this.setState({ 
      page: this.state.page + 1 }, () => 
        this.updateNews());

  }
  
  render() {
    // console.log("Rendered")
    return (
      <div className='container my-3'>
        <h2 className='text-center' style={{margin: "35px"}}> News Monkey - Top '{this.capitalize(this.props.category)}' Headlines </h2>
        {this.state.loading && <Loader/>}
        <div className="row my-3">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div key = {element.url} className="col-md-4">
            {/* <NewsItem title = {element.title ? element.title.slice(0, 45): ""} description = {element.description ? element.description.slice(0, 88) : ""} imageUrl = {element.urlToImage} newsUrl = {element.url}/> */}
            <NewsItem title = {element.title ? element.title: ""} description = {element.description ? element.description : ""} imageUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author?element.author:"Unknown Author"} date = {element.publishedAt} source = {element.source}/>
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