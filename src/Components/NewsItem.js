import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {

    let {title, description, imageUrl, newsUrl} = this.props;

    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"https://www.iottechnews.com/wp-content/uploads/sites/5/2023/03/apple-ar-vr-mixed-reality-headset-augmented-virtual.jpg"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more...</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem