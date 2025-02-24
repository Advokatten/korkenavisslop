document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');

    const fetchNewsArticles = async () => {
        try {
            const response = await fetch('https://api.example.com/news'); // Replace with a real API endpoint
            const articles = await response.json();
            displayArticles(articles);
        } catch (error) {
            console.error('Error fetching news articles:', error);
        }
    };

    const displayArticles = (articles) => {
        newsContainer.innerHTML = '';
        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article');
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            newsContainer.appendChild(articleElement);
        });
    };

    fetchNewsArticles();
});