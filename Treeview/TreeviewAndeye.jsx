import React, { useState, useEffect } from 'react';
import "./TreeviewAndeye.css";


export const TreeviewAndeye = ({ data, eyeicon, parentIconOnly }) => {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        setDatas(data);
    })

    const minus = {
        viewBox: "0 0 24 24",
        svgpath: "M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z"
    }

    const plus = {
        viewBox: "0 0 24 24",
        svgpath: "M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z"
    }

    const x = {
        viewBox: "0 0 24 24",
        svgpath: "M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z"
    }

    const eyeopen = {
        viewBox: "0 0 24 24",
        svgpath: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
    }

    const eyeclose = {
        viewBox: "0 0 24 24",
        svgpath: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
    }

    const dotdot = {
        viewBox: "0 0 24 24",
        svgpath: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
    }


    const openclose = (index) => {
        const local = [...datas];
        local.map((l, i) => {
            if (index === i) {
                l.isOpen = !l.isOpen;
            }
            return l
        })
        console.log(local)
        setDatas(local);
    }

    const subtitleone = (index, oneInx) => {
        const local = [...datas];
        local.map((l, i) => {
            if (index === i) {
                l.subtitleone.map((one, inx) => {
                    if (oneInx === inx) {
                        one.isOpen = !one.isOpen;
                    }
                })
            }
            return l
        })
        console.log(local)
        setDatas(local);
    }

    const subtitletwo = (index, oneInx, twoInx) => {
        const local = [...datas];
        local.map((l, ind) => {
            if (index === ind) {
                if (l.subtitleone != undefined) {
                    l.subtitleone.map((one, i) => {
                        if (oneInx === i) {
                            if (one.subtitletwo != undefined) {
                                one.subtitletwo.map((two, inx) => {
                                    if (twoInx === inx) {
                                        two.isOpen = !two.isOpen;
                                    }
                                })
                            }
                        }
                    })
                }
            }
            return l
        })
        setDatas(local);
    }

    const eyeclicked = (index) => {
        const local = [...datas];
        local.map((l, i) => {
            if (index === i) {
                l.eyeClose = !l.eyeClose;
            }
            return l
        })
        console.log(local)
        setDatas(local);
    }

    const titleoneeyeclicked = (index, oneInx) => {
        const local = [...datas];
        local.map((l, i) => {
            if (index === i) {
                if (l.subtitleone != undefined) {
                    l.subtitleone.map((one, inx) => {
                        if (oneInx === inx) {
                            one.titleoneeyeClose = !one.titleoneeyeClose;
                        }
                    })
                }
            }
            return l
        })
        setDatas(local);
    }

    const titletwoeyeclicked = (index, oneInx, twoInx) => {
        const local = [...datas];
        local.map((l, i) => {
            if (index === i) {
                if (l.subtitleone != undefined) {
                    l.subtitleone.map((one, inx) => {
                        if (oneInx === inx) {
                            if (one.subtitletwo != undefined) {
                                one.subtitletwo.map((two, InxTwo) => {
                                    if (twoInx === InxTwo) {
                                        two.titletwoeyeClose = !two.titletwoeyeClose;
                                    }
                                })
                            }
                        }
                    })
                }
            }
            return l
        })
        setDatas(local);
    }

    const titlethreeeyeclicked = (index, oneInx, twoInx, threeInx) => {
        const local = [...datas];
        local.map((l, i) => {
            if (index === i) {
                if (l.subtitleone != undefined) {
                    l.subtitleone.map((one, inx) => {
                        if (oneInx === inx) {
                            if (one.subtitletwo != undefined) {
                                one.subtitletwo.map((two, InxTwo) => {
                                    if (twoInx === InxTwo) {
                                        if (two.subtitlethree != undefined) {
                                            two.subtitlethree.map((three, InxThree) => {
                                                if (threeInx === InxThree) {
                                                    three.titlethreeeyeClose = !three.titlethreeeyeClose;
                                                }
                                            })
                                        }
                                    }

                                })
                            }
                        }
                    })
                }
            }
            return l
        })
        setDatas(local);
    }

    return (
        <div className='TreeviewAndeye-wapper'>
            <div className="TreeviewAndeye-container">
                <div className="TreeviewAndeye-navbar">
                    {
                        datas.map((item, index) => {
                            return (
                                <>
                                    <div className="TreeviewAndeye-main" key={index}>
                                        <div className="main-icon">
                                            <svg class="main-svg" viewBox={item.subtitleone ? item.isOpen ? minus.viewBox : plus.viewBox : x.viewBox}
                                                onClick={() => openclose(index)} >
                                                <path d={item.subtitleone ? item.isOpen ? minus.svgpath : plus.svgpath : x.viewBox}></path>
                                            </svg>
                                        </div>
                                        {
                                            eyeicon && parentIconOnly ?
                                                item.subtitleone ?
                                                    <div className="eye-icon">
                                                        <svg className='eye-svg' viewBox={item.eyeClose ? eyeclose.viewBox : eyeopen.viewBox}
                                                            onClick={() => eyeclicked(index)}>
                                                            <path d={item.eyeClose ? eyeclose.svgpath : eyeopen.svgpath}></path>
                                                        </svg>
                                                    </div>
                                                    : ""
                                                :
                                                eyeicon && !parentIconOnly ?
                                                    <div className="eye-icon">
                                                        <svg className='eye-svg' viewBox={item.eyeClose ? eyeclose.viewBox : eyeopen.viewBox}
                                                            onClick={() => eyeclicked(index)}>
                                                            <path d={item.eyeClose ? eyeclose.svgpath : eyeopen.svgpath}></path>
                                                        </svg>
                                                    </div>
                                                    : ""
                                        }
                                        <div className='main-name'>{item.title}</div>
                                    </div>
                                    {
                                        item.subtitleone ?
                                            item.subtitleone.map((titleone, oneInx) => {
                                                return (
                                                    <div className={`TreeviewAndeye-vertical ${item.isOpen ? "open" : "close"}`} key={oneInx}>
                                                        <div className="TreeviewAndeye-ul">
                                                            <div className="TreeviewAndeye-li">
                                                                <div className="TreeviewAndeye-li-content">
                                                                    <div className="TreeviewAndeye-li-icon">
                                                                        <svg class="li-icon-svg" viewBox={titleone.subtitletwo ? titleone.isOpen ? minus.viewBox : plus.viewBox : x.viewBox}
                                                                            onClick={() => subtitleone(index, oneInx)} >
                                                                            <path d={titleone.subtitletwo ? titleone.isOpen ? minus.svgpath : plus.svgpath : x.svgpath}></path>
                                                                        </svg>
                                                                    </div>
                                                                    {
                                                                        eyeicon && parentIconOnly ?
                                                                            titleone.subtitletwo ?
                                                                                <div className="eye-icon">
                                                                                    <svg className='eye-svg' viewBox={titleone.titleoneeyeClose ? eyeclose.viewBox : eyeopen.viewBox}
                                                                                        onClick={() => titleoneeyeclicked(index, oneInx)}>
                                                                                        <path d={titleone.titleoneeyeClose ? eyeclose.svgpath : eyeopen.svgpath}></path>
                                                                                    </svg>
                                                                                </div>
                                                                                : ""
                                                                            :
                                                                            eyeicon && !parentIconOnly ?
                                                                                <div className="eye-icon">
                                                                                    <svg className='eye-svg' viewBox={titleone.titleoneeyeClose ? eyeclose.viewBox : eyeopen.viewBox}
                                                                                        onClick={() => titleoneeyeclicked(index, oneInx)}>
                                                                                        <path d={titleone.titleoneeyeClose ? eyeclose.svgpath : eyeopen.svgpath}></path>
                                                                                    </svg>
                                                                                </div>
                                                                                : ""
                                                                    }
                                                                    <div className="TreeviewAndeye-li-name">{titleone.title}</div>
                                                                </div>
                                                                {
                                                                    titleone.subtitletwo ?
                                                                        titleone.subtitletwo.map((titletwo, twoInx) => {
                                                                            return (
                                                                                <div className={`TreeviewAndeye-Subtree ${titleone.isOpen ? "open" : "close"}`} key={twoInx}>
                                                                                    <div className="TreeviewAndeye-Subtree-ul">
                                                                                        <div className="TreeviewAndeye-Subtree-li">
                                                                                            <div className="TreeviewAndeye-Subtree-li-content">
                                                                                                <div className="Subtree-li-content-icon">
                                                                                                    <svg class="Subtree-icon-svg" viewBox={titletwo.subtitlethree ? titletwo.isOpen ? minus.viewBox : plus.viewBox : x.viewBox}
                                                                                                        onClick={() => subtitletwo(index, oneInx, twoInx)} >
                                                                                                        <path d={titletwo.subtitlethree ? titletwo.isOpen ? minus.svgpath : plus.svgpath : x.svgpath}></path>
                                                                                                    </svg>
                                                                                                </div>
                                                                                                {
                                                                                                    eyeicon && parentIconOnly ?
                                                                                                        titletwo.subtitlethree ?
                                                                                                            <div className="eye-icon">
                                                                                                                <svg className='eye-svg' viewBox={titletwo.titletwoeyeClose ? eyeclose.viewBox : eyeopen.viewBox}
                                                                                                                    onClick={() => titletwoeyeclicked(index, oneInx, twoInx)}>
                                                                                                                    <path d={titletwo.titletwoeyeClose ? eyeclose.svgpath : eyeopen.svgpath}></path>
                                                                                                                </svg>
                                                                                                            </div>
                                                                                                            : ""
                                                                                                        :
                                                                                                        eyeicon && !parentIconOnly ?
                                                                                                            <div className="eye-icon">
                                                                                                                <svg className='eye-svg' viewBox={titletwo.titletwoeyeClose ? eyeclose.viewBox : eyeopen.viewBox}
                                                                                                                    onClick={() => titletwoeyeclicked(index, oneInx, twoInx)}>
                                                                                                                    <path d={titletwo.titletwoeyeClose ? eyeclose.svgpath : eyeopen.svgpath}></path>
                                                                                                                </svg>
                                                                                                            </div>
                                                                                                            : ""
                                                                                                }
                                                                                                <div className="Subtree-li-name">{titletwo.title}</div>
                                                                                            </div>
                                                                                            {
                                                                                                titletwo.subtitlethree ?
                                                                                                    titletwo.subtitlethree.map((titlethree, threeInx) => {
                                                                                                        return (
                                                                                                            <div className={`TreeviewAndeye-children-child  ${titletwo.isOpen === true ? "open" : "close"}`} key={threeInx}>
                                                                                                                <div className="TreeviewAndeye-children-child-ul">
                                                                                                                    <div className="TreeviewAndeye-children-child-li">
                                                                                                                        <div className="TreeviewAndeye-children-child-li-content">
                                                                                                                            <div className="children-child-li-content-icon">
                                                                                                                                <svg class="children-child-li-content-icon-svg" viewBox={x.viewBox} >
                                                                                                                                    <path d={x.svgpath}></path>
                                                                                                                                </svg>
                                                                                                                            </div>
                                                                                                                            {
                                                                                                                                eyeicon && !parentIconOnly ?
                                                                                                                                    <div className="eye-icon">
                                                                                                                                        <svg className='eye-svg' viewBox={titlethree.titlethreeeyeClose ? eyeclose.viewBox : eyeopen.viewBox}
                                                                                                                                            onClick={() => titlethreeeyeclicked(index, oneInx, twoInx, threeInx)}>
                                                                                                                                            <path d={titlethree.titlethreeeyeClose ? eyeclose.svgpath : eyeopen.svgpath}></path>
                                                                                                                                        </svg>
                                                                                                                                    </div>
                                                                                                                                    : ""
                                                                                                                            }
                                                                                                                            <div className="children-child-li-content-name">{titlethree.title}</div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        )
                                                                                                    })
                                                                                                    : ""
                                                                                            }
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        })
                                                                        : ""
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            : ""
                                    }
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}
