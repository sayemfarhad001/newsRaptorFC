import React from 'react'

const NewsItem = (props)=> {
    
    let {title, description, imageUrl, newsUrl, author, date, source} = props;

    return (
    <div className="my-3">
        <div className="card">
            <div className='d-flex justify-content-end position-absolute end-0'>
                <span className='badge rounded-pill bg-danger'>{source}
                    <span className='visually-hidden'>unread messages</span>
                </span>
            </div>
            <img src={imageUrl ? imageUrl:"https://compote.slate.com/images/22ce4663-4205-4345-8489-bc914da1f272.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1280"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toUTCString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
    </div>
    )
    
}

export default NewsItem
