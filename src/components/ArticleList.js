import React from "react";
import Article from "./Article"; // Adjust the import path if necessary

function ArticleList({ posts }) {
    const articles = posts.map((post) => (
        <Article
            key={post.id} // Ensure post.id is unique for each article
            title={post.title}
            date={post.date}
            preview={post.preview}
            minutes={post.minutes}
        />
    ));

    return <main>{articles}</main>;
}

export default ArticleList;
