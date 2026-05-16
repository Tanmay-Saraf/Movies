// mock-data of movies/series

const movies = [
    {
        id: 1,
        title: "Dune: Part Two",
        type: "movie",
        poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
        rating: 8.4,
        year: 2024,
        runtime: 166,
        overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
        genres: ["Science Fiction", "Adventure"],
        votes: 4521,
        popularity: 487.3,
        budget: 190000000
    },
    {
        id: 2,
        title: "The Last of Us",
        type: "series",
        poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/o7uk5ChRt3quPIv8PcvPfzyXdMw.jpg",
        rating: 8.8,
        year: 2023,
        runtime: 60,
        overview: "Twenty years after modern civilization has been destroyed, Joel must smuggle Ellie out of an oppressive quarantine zone, across the country in a brutal journey.",
        genres: ["Drama", "Sci-Fi & Fantasy"],
        votes: 6847,
        popularity: 412.8,
        budget: null
    },
    {
        id: 3,
        title: "Oppenheimer",
        type: "movie",
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        rating: 8.1,
        year: 2023,
        runtime: 180,
        overview: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        genres: ["Drama", "History"],
        votes: 7654,
        popularity: 398.5,
        budget: 100000000
    },
    {
        id: 4,
        title: "Breaking Bad",
        type: "series",
        poster: "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
        rating: 9.3,
        year: 2008,
        runtime: 47,
        overview: "A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family's future.",
        genres: ["Drama", "Crime"],
        votes: 13245,
        popularity: 352.1,
        budget: null
    },
    {
        id: 5,
        title: "Interstellar",
        type: "movie",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/pbrkL804c8yAv3zBZR4QPEafpAR.jpg",
        rating: 8.7,
        year: 2014,
        runtime: 169,
        overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        genres: ["Adventure", "Drama", "Science Fiction"],
        votes: 35890,
        popularity: 289.4,
        budget: 165000000
    },
    {
        id: 6,
        title: "Stranger Things",
        type: "series",
        poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
        rating: 8.6,
        year: 2016,
        runtime: 51,
        overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
        genres: ["Sci-Fi & Fantasy", "Mystery", "Drama"],
        votes: 18945,
        popularity: 445.2,
        budget: null
    },
    {
        id: 7,
        title: "The Dark Knight",
        type: "movie",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
        rating: 9.0,
        year: 2008,
        runtime: 152,
        overview: "Batman raises the stakes in his war on crime with the help of Lt. Jim Gordon and Harvey Dent, but the appearance of the Joker creates chaos.",
        genres: ["Drama", "Action", "Crime"],
        votes: 32456,
        popularity: 378.9,
        budget: 185000000
    },
    {
        id: 8,
        title: "The Bear",
        type: "series",
        poster: "https://image.tmdb.org/t/p/w500/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/6XcC9UWxpOIajJlhyLcDB5chocL.jpg",
        rating: 8.3,
        year: 2022,
        runtime: 35,
        overview: "A young chef from the fine dining world returns to Chicago to run his family's sandwich shop after a heartbreaking death in his family.",
        genres: ["Drama", "Comedy"],
        votes: 892,
        popularity: 198.7,
        budget: null
    },
    {
        id: 9,
        title: "Inception",
        type: "movie",
        poster: "https://image.tmdb.org/t/p/w500/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
        rating: 8.8,
        year: 2010,
        runtime: 148,
        overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        genres: ["Action", "Science Fiction", "Adventure"],
        votes: 37845,
        popularity: 412.6,
        budget: 160000000
    },
    {
        id: 10,
        title: "Wednesday",
        type: "series",
        poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
        rating: 8.5,
        year: 2022,
        runtime: 50,
        overview: "Wednesday Addams is sent to Nevermore Academy where she attempts to master her psychic powers and solve a mystery that plagued her family 25 years ago.",
        genres: ["Sci-Fi & Fantasy", "Mystery", "Comedy"],
        votes: 9234,
        popularity: 523.4,
        budget: null
    },
    {
        id: 11,
        title: "Avatar: The Way of Water",
        type: "movie",
        poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
        rating: 7.7,
        year: 2022,
        runtime: 192,
        overview: "Set more than a decade after the events of the first film, Avatar: The Way of Water tells the story of the Sully family and the trouble that follows them.",
        genres: ["Science Fiction", "Adventure", "Action"],
        votes: 11234,
        popularity: 456.8,
        budget: 350000000
    },
    {
        id: 12,
        title: "The Crown",
        type: "series",
        poster: "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/39FHkTLnNMjMVXdgehHOecPiBZ.jpg",
        rating: 8.2,
        year: 2016,
        runtime: 58,
        overview: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
        genres: ["Drama"],
        votes: 2456,
        popularity: 234.5,
        budget: null
    },
    {
        id: 13,
        title: "Blade Runner 2049",
        type: "movie",
        poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/ilRyazdMJwN05exqhwK4tMKBYZs.jpg",
        rating: 7.6,
        year: 2017,
        runtime: 164,
        overview: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard.",
        genres: ["Science Fiction", "Drama"],
        votes: 14567,
        popularity: 298.3,
        budget: 150000000
    },
    {
        id: 14,
        title: "The Mandalorian",
        type: "series",
        poster: "https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/9ijMGlJKqcslswWUzTEwScm82Gs.jpg",
        rating: 8.4,
        year: 2019,
        runtime: 40,
        overview: "After the fall of the Empire, a lone gunfighter makes his way through the outer reaches of the lawless galaxy.",
        genres: ["Sci-Fi & Fantasy", "Action & Adventure", "Western"],
        votes: 8934,
        popularity: 567.2,
        budget: null
    },
    {
        id: 15,
        title: "Parasite",
        type: "movie",
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
        rating: 8.5,
        year: 2019,
        runtime: 133,
        overview: "A poor family schemes to become employed by a wealthy family and infiltrate their household by posing as unrelated, highly qualified individuals.",
        genres: ["Comedy", "Thriller", "Drama"],
        votes: 17890,
        popularity: 334.1,
        budget: 11400000
    },
    {
        id: 16,
        title: "House of the Dragon",
        type: "series",
        poster: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
        rating: 8.4,
        year: 2022,
        runtime: 65,
        overview: "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. But all things must decline.",
        genres: ["Sci-Fi & Fantasy", "Drama", "Action & Adventure"],
        votes: 4789,
        popularity: 489.6,
        budget: null
    },
    {
        id: 17,
        title: "Everything Everywhere All at Once",
        type: "movie",
        poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/yoSYaRXxQev3tOGi7SoHHEYJnxq.jpg",
        rating: 7.8,
        year: 2022,
        runtime: 140,
        overview: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with parallel universe versions of herself.",
        genres: ["Action", "Adventure", "Science Fiction"],
        votes: 5678,
        popularity: 298.7,
        budget: 25000000
    },
    {
        id: 18,
        title: "Succession",
        type: "series",
        poster: "https://image.tmdb.org/t/p/w500/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/cD5YH6JkaZJRS9Me0fTswYPgRUc.jpg",
        rating: 8.3,
        year: 2018,
        runtime: 60,
        overview: "The Roy family controls one of the biggest media and entertainment conglomerates in the world as they contemplate what the future will hold once their aging father begins to step back.",
        genres: ["Drama"],
        votes: 1987,
        popularity: 267.4,
        budget: null
    },
    {
        id: 19,
        title: "Spider-Man: Across the Spider-Verse",
        type: "movie",
        poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
        rating: 8.6,
        year: 2023,
        runtime: 140,
        overview: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
        genres: ["Animation", "Action", "Adventure"],
        votes: 6234,
        popularity: 512.9,
        budget: 100000000
    },
    {
        id: 20,
        title: "Arcane",
        type: "series",
        poster: "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/rkB4LyZHo1NHXFEDHl9vSD9r1lI.jpg",
        rating: 8.9,
        year: 2021,
        runtime: 41,
        overview: "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
        genres: ["Animation", "Sci-Fi & Fantasy", "Action & Adventure"],
        votes: 3892,
        popularity: 423.8,
        budget: null
    }
];


// filtering functions 

function getTrending(){
    return movies.slice(0,7);
}
function getMovies(){
    return movies.filter((content)=> content.type === "movie");
}
function getSeries(){
    return movies.filter((content)=> content.type === "series");
}
function getTopRated(){
    return [...movies].sort((a,b)=>b.rating-a.rating).slice(0,10);
}
function searchByTitle(query){
    return movies.filter((content)=>content.title.toLowerCase().includes(query.toLowerCase()));
}
function getByGenre(query){
    return movies.filter((content)=>content.genres.some((genre) => genre.toLowerCase() === query.toLowerCase())).slice(0,8);
}

// rows - rendering 

function createRow(query,data){
    let html = data.map(element => 
        `<article class="card">
                        <div class="card-thumb">
                            <img src="${element.poster}"  alt="poster" class="card-img">
                            <div class="card-overlay">
                                <button class="card-action">
                                    <i class="fas fa-circle-info"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-data">
                            <div class="card-title">${element.title}</div>
                            <div class="card-foot">
                                <div class="card-attrs">
                                    <span class="card-score">
                                        <i class="fas fa-star"></i>
                                        ${element.rating}
                                    </span>
                                    <span class="card-year">${element.year}</span>
                                </div>
                                <button class="card-save">
                                    <i class="far fa-bookmark"></i>
                                </button>
                            </div>
                        </div>
                    </article>`
    ).join('');
    return `<div class="row-header">
                <h2 class="row-title">${query}</h2>
                <span class="row-count">${data.length}</span>
            </div>
            <div class="row-grid">
                ${html}
            </div>`
}

function renderRows(){
    const rowsContainer = document.getElementById("rows");
    rowsContainer.innerHTML = `
                                ${createRow('Trending Now',getTrending())}
                                ${createRow('Top Rated',getTopRated())}
                                ${createRow('Popular Movies',getMovies())}
                                ${createRow('Must Watch Series',getSeries())}
                                ${createRow('Action',getByGenre('Action'))}
                                ${createRow('Comedy',getByGenre('Comedy'))}
                                ${createRow('Thriller',getByGenre('Thriller'))}
                                ${createRow('Drama',getByGenre('Drama'))}
                                `
}

// render hero

function renderHero(){
    let hero = document.querySelector(".hero");
    let heroItem = getTrending()[0];
    hero.innerHTML = `<div class="hero-img" id="hero-img" style="background-image:url('${heroItem.backdrop}')">></div>
            <div class="hero-shade"></div>
            <div class="hero-content">
                <div class="hero-upper">
                    <span id="heroUpper">Trending Now</span>
                </div>
                <h1 class="hero-title" id="heroTitle">${heroItem.title}</h1>
                <p class="hero-tagline" id="hero-tagline">${heroItem.overview}</p>
                <div class="hero-lower" id="heroLower">
                    <span class="hero-lower-data">${heroItem.year}</span>
                    <span class="hero-lower-data">★ ${heroItem.rating}</span>
                </div>
                <div class="hero-actions">
                    <button class="btn-info" id="hero-info">
                        <i class="fas fa-circle-info"></i>
                        <span>More Info</span>
                    </button>
                    <button class="btn-icon" id="heroFav">
                        <i class="far fa-bookmark"></i>
                    </button>
                </div>
            </div>

            <div class="hero-score" id="heroScore" hidden>
                <i class="fas fa-star"></i>
                <span id="heroScoreVal">${heroItem.rating}</span>
            </div>`
}

renderHero();
renderRows();