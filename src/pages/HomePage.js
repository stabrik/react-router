import React from "react";
import Article from "../componets/Article";

const HomePage = () => {

    const articles = [
        {id: 1, author: 'Jan Nowak', title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis dicta dolorem eligendi, est illo in incidunt iure magni, natus nemo nihil nobis quod rem saepe sit tempora tempore, vitae.'},
        {id: 2, author: 'Jan Nowak', title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis dicta dolorem eligendi, est illo in incidunt iure magni, natus nemo nihil nobis quod rem saepe sit tempora tempore, vitae.'},
        {id: 3, author: 'Jan Nowak', title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis dicta dolorem eligendi, est illo in incidunt iure magni, natus nemo nihil nobis quod rem saepe sit tempora tempore, vitae.'},
        {id: 4, author: 'Jan Nowak', title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis dicta dolorem eligendi, est illo in incidunt iure magni, natus nemo nihil nobis quod rem saepe sit tempora tempore, vitae.'},
    ];

    const ArticleList = articles.map( article => ( <Article key={article.id} {...article}/> ));
    return (
        <>
            <h1>Lista artykułów</h1>
            {ArticleList}
        </>
    )
};

export default HomePage;