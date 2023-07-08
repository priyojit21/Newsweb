import React, { Component } from 'react'
export class Newsitem extends Component {
    render() {
        // ei jinish gulo ekhan theke pass korabo talei news.js er line 331 a Newsitem card a render hobe dynamically  
        let {title,description,imageUrl,newsUrl,author} = this.props;
        return (
            <div className="my-3 mx-auto">
                <div className="card mx-auto" style={{width: '300px'}}>
                    <img src = {!imageUrl?"https://cdn.mos.cms.futurecdn.net/CTgcA838bgTbXwysw5Fnyd-1200-80.png":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">By {author}</small> </p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
