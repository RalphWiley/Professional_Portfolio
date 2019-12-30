const main = document.getElementById('main');
const content = "";

const projectData = [
    {
        title: "Connect 4",
        img: "img/connect_4.png",
        skills: "JavaScript - Using Classes",
        url: "https://ralphwiley.github.io/Connect_Four/",
        repo: "https://github.com/RalphWiley/Connect_Four"
    },
    {
        title: "Mini-Jeopardy!",
        img: "img/Jeopardy.png",
        skills: "JavaScript - Bootstrap - Heroku - Firebase",
        url: "http://mini-jeopardy-app.herokuapp.com/",
        repo: "https://github.com/RalphWiley/Jeopardy"
    },
    {
        title: "Employee Directory",
        img: "img/Employee-API.png",
        skills: "JavaScript - Sass - Fetch - RandomUser API",
        url: "https://ralphwiley.github.io/Employee-Directory-API/",
        repo: "https://github.com/RalphWiley/Employee-Directory-API"
    },
    {
        title: "Ru Paul's Memory Game",
        img: "img/rupaul.png",
        skills: "React - JSON - Yarn",
        url: "https://ralphwiley.github.io/reactMemory/",
        repo: "https://github.com/RalphWiley/reactMemory"
    },
    {
        title: "Movie Trivia",
        img: "img/movie-trivia.png",
        skills: "JavaScript - jQuery - GIPHY API",
        url: "https://ralphwiley.github.io/TriviaGame/",
        repo: "https://github.com/RalphWiley/TriviaGame"
    },
    {
        title: "Interactive Photo Gallery",
        img: "img/InteractivePhoto.png",
        skills: "JavaScript - Sass",
        url: "https://ralphwiley.github.io/Interactive-Photo-Gallery/",
        repo: "https://github.com/RalphWiley/Interactive-Photo-Gallery"
    },
    {
        title: "Bob's Burger Eater",
        img: "img/bob-burger.png",
        skills: "Node - Express - Handlebars - Heroku - MySQL",
        url: "https://burger-d.herokuapp.com/",
        repo: "https://github.com/RalphWiley/burger"
    }
]


projectData.forEach( (data, i) => {
    const card = document.createElement('div');
    card.classList = 'card-body';

    const html = `
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div class="card mb-3 myStyles" id="heading-${i}">
            <div class="container">
                <img src="${data.img}" class="card-img-top" alt="${data.title}">
                <div class="overlay">
                    <a href="${data.url}" role="button" class="btn btn-primary text">Play!</a>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">${data.skills}</p>
                <a href="${data.repo}" class="btn btn-primary">Go to Repository</a>
            </div>
        </div>
    </div>
    `;
    main.innerHTML += html;
});

$(document).ready(function () {
    $('body').scrollspy({ target: ".home", offset: 150 });
    //smoothscroll
    $('a[href^="#"]').on('click', function () {
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
    });
});

// Use Your Class or ID For Selection 
