import React from "react";
import '../styles/Article.css';

const Article = ({title, author, content, id}) => {
    return (
            <div className="block">
                <h3 className="block__header">{title} {id}</h3>
                <p className="block__author">{author}</p>
                <p className="block__content">{content}</p>
            </div>
        );
};

export default Article;