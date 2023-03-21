import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {

    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    // Destructuring

    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display: "flex", 
              position: "absolute",
              right: "0"}}>
            <span className="badge rounded-pill bg-success">{source.name}</span>
          </div>
          <img src={imageUrl?imageUrl:"https://img.freepik.com/free-vector blue-futuristic-networking-technology_53876-100679.jpg"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more...</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem