import React from 'react'
import './article.css';

const Article = ({ imgUrl }) => {
    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
                <img src={imgUrl} alt="blog" />
            </div> 
            Article Hlleo
        </div>
    )
}

export default Article 
