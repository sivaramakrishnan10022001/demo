import React from "react";
import "./LearnFilterAnimation.css";

class LearnFilterAnimation extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        console.log("componentDidMount");
        let genres = [
            { id: 28, name: "Action" },
            { id: 12, name: "Adventure" },
            { id: 16, name: "Animation" },
            { id: 35, name: "Comedy" },
            { id: 80, name: "Crime" },
            { id: 99, name: "Documentary" },
            { id: 18, name: "Drama" },
            { id: 10751, name: "Family" },
            { id: 14, name: "Fantasy" },
            { id: 36, name: "History" },
            { id: 27, name: "Horror" },
            { id: 10402, name: "Music" },
            { id: 9648, name: "Mystery" },
            { id: 10749, name: "Romance" },
            { id: 878, name: "Science Fiction" },
            { id: 10770, name: "TV Movie" },
            { id: 53, name: "Thriller" },
            { id: 10752, name: "War" },
            { id: 37, name: "Western" },
        ];

        let innerhtml = "";
        let genre = [];
        let currentActive = 0;
        let movieList = [];
        let perCoulemn = 6;
        let itemWidth = 200;
        let itemHeight = 250;

        let movieContainer = document.getElementById("item-container");

        this.props.data.map((item) => {
            genres.map((gen) => {
                if (genre.indexOf(gen) === -1) {
                    if (item.genre_ids.indexOf(gen.id) !== -1) {
                        genre.push(gen);
                    }
                }
            });
            innerhtml += `<div class="movie-item">
                                 <p>${item.title.substring(0, 20)}</p>
                                     <div class="image">
                                        <img src="${item.img}" alt="image" />
                                     </div>
                              </div>`;
        })

        genre = genre.slice(0, 4);
        genre = [{ id: -1, name: "All" }, ...genre];

        let menuHtml = document.getElementById("menu").innerHTML;
        // menuHtml = ""

        genre.map((item) => {
            menuHtml += `<div class="item">${item.name}</div>`;
        });

        document.getElementById("menu").innerHTML = menuHtml;
        movieContainer.innerHTML = innerhtml;
        let allItems = document.getElementsByClassName("item");
        let movieItems = document.getElementsByClassName("movie-item");

        for (let i = 0; i < movieItems.length; i++) {
            let left = (i % perCoulemn) * itemWidth;
            let top = parseInt(i / perCoulemn) * itemHeight;
            movieItems[i].style.top = top + "px";
            movieItems[i].style.left = left + "px";
        }
        for (let i = 0; i < allItems.length; i++) {
            allItems[i].addEventListener("click", () => {
                currentActive = i;
                if (i === 0) {
                    showAll();
                } else {
                    showOnly(genre[i].id);
                }
                document.getElementById("active").style.left = `${i * 150 + 5}px`;
            });
        }
        let showAll = () => {
            for (let i = 0; i < movieItems.length; i++) {
                let left = (i % perCoulemn) * itemWidth;
                let top = parseInt(i / perCoulemn) * itemHeight;
                movieItems[i].style.top = top + "px";
                movieItems[i].style.left = left + "px";
                movieItems[i].style.opacity = 1;
            }
        };
        let showOnly = (genre) => {
            let take = 0;
            let remove = 0;
            for (let i = 0; i < movieItems.length; i++) {
                if (this.props.data[i].genre_ids.indexOf(genre) === -1) {
                    movieItems[i].style.opacity = 0;
                    let left = 0;
                    let top = parseInt(i / perCoulemn) * itemHeight;
                    setTimeout(() => {
                        movieItems[i].style.top = top + "px";
                        movieItems[i].style.left = left + "px";
                    }, 500);
                } else {
                    let left = (take % perCoulemn) * itemWidth;
                    let top = parseInt(take / perCoulemn) * itemHeight;
                    setTimeout(() => {
                        movieItems[i].style.top = top + "px";
                        movieItems[i].style.left = left + "px";
                        movieItems[i].style.opacity = 1;
                    }, 500);
                    take++;
                }
            }
        };
    }

    render() {
        return (
            <div className={"filter-container "+this.props.className}>
                <div id="menu" className="menu">
                    <div id="active" className="active"></div>
                </div>
                <div id="item-container" className="item-container">
                </div>
            </div>
        )
    }
}

export default LearnFilterAnimation;