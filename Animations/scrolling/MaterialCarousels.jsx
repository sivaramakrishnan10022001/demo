import React, { Component } from 'react';
// import { Component } from 'react/cjs/react.production.min';
import './materialcarousels.css';


export class Carousel3 extends Component {
    constructor(props) {
        super(props);
        this.widthRef = React.createRef();
        this.state = {
            data: [],
            slideIndex: 0,
            cardsToShow: 3,
            withArrows: true,
            withPagination: true,
            withAutoScroll: true,
            translateX: 0,
            noOfCircles: 0,
            interval: null,
            isScrolling: false,
            scrollX: 0,
            clientX: 0,
        }
    }

    // ===================================================

    componentDidMount() {
        this.setState(
            {
                data: this.props.value,
                withArrows: this.props.withArrows,
                withPagination: this.props.withPagination,
                withAutoScroll: this.props.withAutoScroll,
                noOfCircles: Math.ceil(this.props.value.length / this.state.cardsToShow),
                interval: setInterval(() => {
                    this.changeIndex(0, "auto");
                }, this.props.slideTimer),
            }
        );

        window.addEventListener('resize', this.checkSize.bind(this));
    }

    // ====================================================

    checkSize() {
        if (this.widthRef !== null && this.widthRef !== undefined && this.widthRef) {
            var carouselWidth = this.widthRef.getBoundingClientRect().width;
            this.setState({
                cardsToShow: parseInt(carouselWidth / this.props.cardWidth),
            });
        }
    }

    changeToNext() {
        if (this.widthRef.getBoundingClientRect().width) {
            this.changeIndex(0, "auto");
            var width = this.widthRef.getBoundingClientRect().width;
            this.setState({
                translateX: this.state.translateX + parseInt(this.props.cardWidth * this.state.cardsToShow),
                slideIndex: this.state.slideIndex + 1,
            })
        }
    }

    changeToPrev() {
        if (this.state.slideIndex === Math.ceil(this.state.data.length / this.state.cardsToShow)) {
            this.setState({
                translateX: 0,
                slideIndex: 0,
            })
        } else if (this.state.slideIndex - 1 < 0) {
            this.setState({
                translateX: parseInt(this.props.cardWidth * this.state.data.length),
                slideIndex: Math.ceil(this.state.data.length / this.state.cardsToShow),
            })
        } else {
            this.setState(
                {
                    translateX: this.state.translateX - parseInt(this.props.cardWidth * this.state.cardsToShow),
                    slideIndex: this.state.slideIndex - 1,
                },
            );
        }
    }

    changeIndex(slideIndex, key) {
        if (key === "auto") {
            slideIndex = this.state.slideIndex + 1;
        }
        if (Math.ceil(this.state.data.length / this.state.cardsToShow) === slideIndex) {
            this.setState({
                slideIndex: 0,
                translateX: 0,
            });
        } else if (slideIndex < 0) {
            this.setState({
                slideIndex: this.state.data.length - 1,
                translateX: this.state.translateX - parseInt(this.props.cardWidth * this.state.cardsToShow),
            });
        } else {
            this.setState({
                slideIndex: slideIndex,
                translateX: this.state.translateX + parseInt(this.props.cardWidth * this.state.cardsToShow),
            });
        }
    }

    pauseAutoTimer() {
        this.setState({
            interval: clearInterval(this.state.interval),
        })
    }

    resumeAutoTimer() {
        this.setState({
            interval: setInterval(() => {
                this.changeIndex(0, "auto");
            }, this.props.slideTimer),
        })
    }

    dragStart(e) {

        this.setState({
            isScrolling: true,
            clientX: e.clientX,
            prevTranslateX: this.state.translateX,
        })
    }

    dragMove(e) {
        if (this.state.isScrolling && this.widthRef !== null && this.widthRef !== undefined && this.widthRef) {
            this.widthRef.scrollLeft = this.state.scrollX + e.clientX - this.state.clientX;
            this.state.scrollX = this.state.scrollX + e.clientX - this.state.clientX;
            this.state.clientX = e.clientX;
            // this.setState({
            //     translateX: this.state.prevTranslateX + e.clientX - this.widthRef.getBoundingClientRect().left,
            // })
        }
    }

    dragEnd(e) {
        this.setState({
            isScrolling: false,
        })
    }

    // =====================================================

    render() {
        return (
            <div className={"mf-carousel1 " + this.props.className} ref={(elem) => this.widthRef = elem}
                onMouseOver={this.pauseAutoTimer.bind(this)} onMouseLeave={this.resumeAutoTimer.bind(this)}>
                {this.state.withArrows && (
                    <span className="prev" onClick={this.changeToPrev.bind(this)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 8">
                            <g><g transform="translate(0 0)"><path d="M56.306,7.855a.3.3,0,0,0,.453.072l4.354-3.641a.389.389,0,0,0,0-.58L56.759.072a.3.3,0,0,0-.453.072.394.394,0,0,0,.065.507L60.38,4,56.371,7.354A.386.386,0,0,0,56.306,7.855Z" transform="translate(-56.242 0)" /></g></g>
                        </svg>
                    </span>
                )}
                <div className="cards" ref={(elem) => this.widthRef = elem} style={{ transform: `translate(-${this.state.translateX}px)` }}
                    onMouseDown={this.dragStart.bind(this)} onMouseMove={this.dragMove.bind(this)}
                    onMouseUp={this.dragEnd.bind(this)} onMouseLeave={this.dragEnd.bind(this)}>
                    {this.props.children.map((row, key) => {
                        return <div className="card" key={key}>{row}</div>
                    })}
                </div>
                {this.state.withArrows && (
                    <span className="next" onClick={this.changeToNext.bind(this)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 8">
                            <g><g transform="translate(0 0)"><path d="M56.306,7.855a.3.3,0,0,0,.453.072l4.354-3.641a.389.389,0,0,0,0-.58L56.759.072a.3.3,0,0,0-.453.072.394.394,0,0,0,.065.507L60.38,4,56.371,7.354A.386.386,0,0,0,56.306,7.855Z" transform="translate(-56.242 0)" /></g></g>
                        </svg>
                    </span>
                )}
                <span className="pagination-container">
                    {this.props.value && this.state.withPagination
                        ? new Array(this.state.noOfCircles).fill(" ").map((row, key) => {
                            return (
                                <div className={this.state.slideIndex === key ? "circle active" : "circle"}
                                    key={key} onClick={this.changeIndex.bind(this, key, "circle")}
                                ></div>
                            );
                        })
                        : ""
                    }
                </span>
            </div>
        )
    }
}

// ================================================================

export class SampleCarouselItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <span>{this.props.value}</span>
            </div>
        )
    }
}

// ================================================================

export class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            slideIndex: 0,
            withArrows: true,
            withPagination: true,
            withAutoScroll: true,
            translateX: 0,
        };
    }

    // ================================================================

    componentDidMount() {
        this.setState(
            {
                data: this.props.data,
                withArrows: this.props.withArrows,
                withPagination: this.props.withPagination,
                withAutoScroll: this.props.withAutoScroll,
            },
            () => {
                setInterval(() => {
                    this.changeIndex2(this.state.slideIndex + 2, "auto");
                    this.changeIndex(0, "auto");
                }, this.props.slideTimer);
            }
        );
    }

    // ================================================================

    changeToNext() {
        this.changeIndex2(this.state.slideIndex + 2, "next");
        this.changeIndex(0, "auto");
    }

    changeToPrev() {
        this.setState(
            {
                translateX: this.state.translateX - (this.props.width * 72) / 100,
            },
        );
        this.changeIndex(this.state.slideIndex - 1, "prev");
        this.changeIndex2(this.state.slideIndex - 1, "prev");
    }

    changeIndex(slideIndex, key) {
        if (key === "auto") {
            slideIndex = this.state.slideIndex + 1;
        }
        if (this.state.data.length === slideIndex) {
            this.setState({
                slideIndex: 0,
            });
        } else if (slideIndex < 0) {
            this.setState({
                slideIndex: this.state.data.length - 1,
            });
        } else {
            this.setState({
                slideIndex: slideIndex,
            });
        }
        if (key === "circle") {
            if (slideIndex === 0) {
                this.setState({
                    translateX: 0,
                })
            } else if (slideIndex === this.state.data.length - 1) {
                this.setState({
                    translateX: ((this.state.data.length - 2) * (this.props.width * 72) / 100) + (0.75 * (this.props.width * 58) / 100),
                })
            } else if (slideIndex < this.state.data.length) {
                this.setState({
                    translateX: (slideIndex - 1) * (this.props.width * 72) / 100 + (this.props.width * 58) / 100,
                })
            }
        }
    }

    changeIndex2(value, key) {
        if (key !== "prev") {
            if (this.state.translateX === 0) {
                this.setState({
                    translateX: this.state.translateX + (this.props.width * 58) / 100,
                });
            } else if (this.state.data.length > value) {
                this.setState({
                    translateX: this.state.translateX + (this.props.width * 72) / 100,
                });
            } else if (this.state.data.length < value) {
                this.setState({
                    translateX: 0,
                });
            } else if (this.state.data.length === value) {
                this.setState({
                    translateX: this.state.translateX + (this.props.width * 58) / 100,
                });
            }
        } else if (key === 'prev') {
            console.log(value);
            if (value === -1) {
                this.setState({
                    translateX: ((this.state.data.length - 2) * (this.props.width * 72) / 100) + (0.75 * (this.props.width * 58) / 100),
                }, console.log(this.state))
            } else if (value === 0) {
                this.setState({
                    translateX: 0,
                })
            } else if (value === this.state.data.length - 2) {
                this.setState({
                    translateX: this.state.translateX - (this.props.width * 58) / 100,
                })
            } else if (value < this.state.data.length) {
                this.setState({
                    translateX: this.state.translateX - (this.props.width * 72) / 100,
                })
            }
        }
    }

    // ================================================================

    render() {
        if (this.props.option === 1) {
            return (
                <div className="m-carousel">
                    <div className="slides-container">
                        {this.state.withArrows && (
                            <span className="prev"
                                onClick={this.changeIndex.bind(this, this.state.slideIndex - 1, "prev")} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8">
                                    <g><g transform="translate(0 0)"><path d="M56.306,7.855a.3.3,0,0,0,.453.072l4.354-3.641a.389.389,0,0,0,0-.58L56.759.072a.3.3,0,0,0-.453.072.394.394,0,0,0,.065.507L60.38,4,56.371,7.354A.386.386,0,0,0,56.306,7.855Z" transform="translate(-56.242 0)" /></g></g>
                                </svg>
                            </span>
                        )}
                        {this.state.data
                            ? this.props.data.map((row, key) => {
                                if (this.state.slideIndex === key) {
                                    return (
                                        <div className="slide" key={key}>
                                            <img src={row.source} alt={row.title}></img>
                                        </div>
                                    );
                                }
                            })
                            : ""}
                        {this.state.withArrows && (
                            <span
                                className="next"
                                onClick={this.changeIndex.bind(
                                    this,
                                    this.state.slideIndex + 1,
                                    "next"
                                )}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="5"
                                    height="8"
                                    viewBox="0 0 5 8"
                                >
                                    <g>
                                        <g transform="translate(0 0)">
                                            <path
                                                d="M56.306,7.855a.3.3,0,0,0,.453.072l4.354-3.641a.389.389,0,0,0,0-.58L56.759.072a.3.3,0,0,0-.453.072.394.394,0,0,0,.065.507L60.38,4,56.371,7.354A.386.386,0,0,0,56.306,7.855Z"
                                                transform="translate(-56.242 0)"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        )}
                        <span className="pagination-container">
                            {this.props.data && this.state.withPagination
                                ? this.props.data.map((row, key) => {
                                    return (
                                        <div
                                            className={
                                                this.state.slideIndex === key
                                                    ? "circle active"
                                                    : "circle"
                                            }
                                            key={key}
                                            onClick={this.changeIndex.bind(this, key, "circle")}
                                        ></div>
                                    );
                                })
                                : ""}
                        </span>
                    </div>
                </div>
            );
        } else if (this.props.option === 2) {
            return (
                <div className="m-carousel">
                    <div className="slides-container2">
                        {this.state.withArrows && (
                            <span className="prev"
                                onClick={this.changeToPrev.bind(this)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8">
                                    <g><g transform="translate(0 0)"><path d="M56.306,7.855a.3.3,0,0,0,.453.072l4.354-3.641a.389.389,0,0,0,0-.58L56.759.072a.3.3,0,0,0-.453.072.394.394,0,0,0,.065.507L60.38,4,56.371,7.354A.386.386,0,0,0,56.306,7.855Z" transform="translate(-56.242 0)" /></g></g>
                                </svg>
                            </span>
                        )}
                        <div
                            className="slides"
                            style={{ transform: `translate(-${this.state.translateX}px)` }}
                        >
                            {this.props.data
                                ? this.props.data.map((row, key) => {
                                    return (
                                        <div class="slide" key={key}>
                                            {<this.props.itemTemplate datum={row} />}
                                        </div>
                                    );
                                }) : ""
                            }
                        </div>
                        {this.state.withArrows && (
                            <span className="next" onClick={this.changeToNext.bind(this)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8">
                                    <g><g transform="translate(0 0)"><path d="M56.306,7.855a.3.3,0,0,0,.453.072l4.354-3.641a.389.389,0,0,0,0-.58L56.759.072a.3.3,0,0,0-.453.072.394.394,0,0,0,.065.507L60.38,4,56.371,7.354A.386.386,0,0,0,56.306,7.855Z" transform="translate(-56.242 0)" /></g></g>
                                </svg>
                            </span>
                        )}
                    </div>
                    <div className="circles">
                        {this.props.data && this.props.withPagination
                            ? this.props.data.map((row, key) => {
                                return (
                                    <div
                                        className={this.state.slideIndex === key ? "circle active" : "circle"}
                                        key={key} onClick={this.changeIndex.bind(this, key, "circle")}>
                                    </div>
                                );
                            }) : ""
                        }
                    </div>
                </div>
            );
        }
    }
}