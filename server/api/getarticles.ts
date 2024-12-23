import { IncomingMessage, ServerResponse } from 'http';
import fs from 'fs';

let getArticlesName = () => {
    //get all articles name from
    let articles = fs.readdirSync('./content/articles');
    //remove the file extension
    articles = articles.map(article => article.replace('.md', ''));
    return articles;
}

export default defineEventHandler((event) => {
    /*
        return format:
        [
            {
                "title": "article-1",
                "path": "/articles/article-1.md",
                "pitcure": "~/assets/pictures/article-1.png",
            },
            {
                "title": "article-2",
                "path": "/articles/article-2.md",
                "pitcure": "~/assets/pictures/article-2.png",
            },
        ]
    */

    //step 1: get all articles
    let articles = getArticlesName();

    //step 2: prepare the return format
    let articlesInfo = articles.map(article => {
        return {
            title: article,
            path: `/articles/${article}`,
            picture: `/pictures/${article}.png`
        }
    })
    //step 3: return the articles
    return articlesInfo;
})
