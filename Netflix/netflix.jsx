import React from "react";
import { useState } from "react";
import "./netflix.scss";
import logo from "./png/logo.png";
import bg from "./png/bg.jpg";
import name from "./png/name.png";
import play from "./png/play.png";
import video from "./video/movie.mp4";
import close from "./png/close.png";



const Netflix = (props) => {

    const [active, setActive] = useState(false);

    const data = [
        {
            title: "home"
        },
        {
            title: "tv shows"
        },
        {
            title: "movies"
        },
        {
            title: "latest"
        },
        {
            title: "my list"
        },
    ],

       toggleVideo = () => {
            const video = document.querySelector('video');
            video.currentTime = 0;
            video.pause();
            setActive(!active)
        }

    return (
        <div className={"netflix-wapper " + props.className}>
            {console.log("treee")}
            <div className="netflix-header">
                <a href="#" className="logo"> <img src={logo} alt="logo" /></a>
                <ul className="navigation">
                    {
                        data.map((item, inx) => {
                            return (
                                <li className="li" key={inx}>
                                    <a className="a" href="#">{item.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="search">
                    <input className="search-input" type="text" placeholder="Search" />
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                    </svg>
                </div>
            </div>
            <div className="banner">
                <img className="bg" src={bg} alt="bg" />
                <div className="content">
                    <img className="movie-title" src={name} alt="name" />
                    <h4 className="h4">
                        <span className="span">2020</span>
                        <span className="span"><span className="i">12+</span></span>
                        <span className="span">ih 55min</span>
                        <span className="span">Action</span>
                    </h4>
                    <p className="p">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, veniam ratione magnam animi assumenda unde cum soluta ex eligendi recusandae, quis dolorem nostrum vitae corporis atque quisquam placeat. Magni, natus.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad architecto quis reiciendis commodi voluptatibus ullam illo temporibus distinctio suscipit ipsa. Debitis dignissimos omnis pariatur ex quo. Officiis numquam consectetur blanditiis.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae doloribus vitae nesciunt aliquid. Laborum dolore nihil, facere quasi fugit animi numquam alias unde ut totam, suscipit facilis ipsum, corporis molestiae?
                    </p>
                    <div className="buttons">
                        <a className="a" href="#">
                            <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
                            </svg>
                            list
                        </a>
                        <a className="a" href="#">
                            <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                            </svg>
                            my list</a>
                    </div>
                </div>
                <a className="play" href="#" onClick={()=>toggleVideo()}>
                    <img className="img" src={play} alt="play" /> watch trailer
                </a>
            </div>

            <div className={`trailer ${active ? " active" : ""}`}>
                <video className="video" src={video} controls="true"></video>
                <img className="close" src={close} alt="close" onClick={() => toggleVideo()} />
            </div>
        </div>
    )
}

export default Netflix;
