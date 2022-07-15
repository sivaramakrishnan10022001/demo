import React, { useState, useEffect } from 'react';
import "./TreeviewTest.css";

export const TreeviewTest = ({ data }) => {

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
        console.log(local)
        setDatas(local);
    }

    return (
        <div className='Treeview-wapper'>
            <div className="Treeview-container">
                <div className="Treeview-navbar">
                    {
                        datas.map((item, index) => {
                            return (
                                <>
                                    <div className="Treeview-main" key={index}>
                                        <div className="main-icon">
                                            <svg class="main-svg" viewBox={item.subtitleone ? item.isOpen ? minus.viewBox : plus.viewBox : x.viewBox}
                                                onClick={() => openclose(index)} >
                                                <path d={item.subtitleone ? item.isOpen ? minus.svgpath : plus.svgpath : x.viewBox}></path>
                                            </svg>
                                        </div>
                                        <div className='main-name'>{item.title}</div>
                                    </div>
                                    {
                                        item.subtitleone ?
                                            item.subtitleone.map((titleone, oneInx) => {
                                                return (
                                                    <div className={`Treeview-vertical ${item.isOpen ? "open" : "close"}`} key={oneInx}>
                                                        <div className="Treeview-ul">
                                                            <div className="Treeview-li">
                                                                <div className="Treeview-li-content">
                                                                    <div className="Treeview-li-icon">
                                                                        <svg class="li-icon-svg" viewBox={titleone.subtitletwo ? titleone.isOpen ? minus.viewBox : plus.viewBox : x.viewBox}
                                                                            onClick={() => subtitleone(index, oneInx)} >
                                                                            <path d={titleone.subtitletwo ? titleone.isOpen ? minus.svgpath : plus.svgpath : x.svgpath}></path>
                                                                        </svg>
                                                                    </div>
                                                                    <div className="Treeview-li-name">{titleone.title}</div>
                                                                </div>
                                                                {
                                                                    titleone.subtitletwo ?
                                                                        titleone.subtitletwo.map((titletwo, twoInx) => {
                                                                            return (
                                                                                <div className={`Treeview-Subtree ${titleone.isOpen ? "open" : "close"}`} key={twoInx}>
                                                                                    <div className="Treeview-Subtree-ul">
                                                                                        <div className="Treeview-Subtree-li">
                                                                                            <div className="Treeview-Subtree-li-content">
                                                                                                <div className="Subtree-li-content-icon">
                                                                                                    <svg class="Subtree-icon-svg" viewBox={titletwo.subtitlethree ? titletwo.isOpen ? minus.viewBox : plus.viewBox : x.viewBox}
                                                                                                        onClick={() => subtitletwo(index, oneInx, twoInx)} >
                                                                                                        <path d={titletwo.subtitlethree ? titletwo.isOpen ? minus.svgpath : plus.svgpath : x.svgpath}></path>
                                                                                                    </svg>
                                                                                                </div>
                                                                                                <div className="Subtree-li-name">{titletwo.title}</div>
                                                                                            </div>
                                                                                            {
                                                                                                titletwo.subtitlethree ?
                                                                                                    titletwo.subtitlethree.map((titlethree, threeInx) => {
                                                                                                        return (
                                                                                                            <div className={`Treeview-children-child  ${titletwo.isOpen === true ? "open" : "close"}`} key={threeInx}>
                                                                                                                <div className="Treeview-children-child-ul">
                                                                                                                    <div className="Treeview-children-child-li">
                                                                                                                        <div className="Treeview-children-child-li-content">
                                                                                                                            <div className="children-child-li-content-icon">
                                                                                                                                <svg class="children-child-li-content-icon-svg" viewBox={x.viewBox} >
                                                                                                                                    <path d={x.svgpath}></path>
                                                                                                                                </svg>
                                                                                                                            </div>
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
