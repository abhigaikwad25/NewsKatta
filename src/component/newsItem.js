// this file is only for a one item of news

import React, { Component } from 'react'

export class newsItem extends Component {
    render() {
        let {title,description,imgUrl,newsUrl}=this.props;
        return (
            <div>
                <div className="card my-3">
                    <img src={imgUrl} className="card-img-top " alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More...</a>
                        </div>
                </div>  
            </div>
        )
    }
}

export default newsItem
