import React from 'react';
import { useState, useEffect } from 'react';
import "./Testing.css";




const Testing = ({ className, logo, data, profile, userName, job }) => {

    const [datas, setDatas] = useState([]);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        setDatas(data)
    })

    return (


        <div className={`sidebar ${className}`} >
            <div className="logo-details">
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox={logo.viewBox}><path d={logo.svgpath} /></svg>
                <span className="logo-name">{logo.name}</span>
            </div>
            <div className={`nav-links ${menu ? "open" : "close"}`}>
                {datas.map((item, inx) => {
                    return (
                        <>
                            {
                                item.submenu != "" ?
                                    <div className={`column `} key={inx} >
                                        <div className="iocn-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox={item.viewBox}> <path d={item.svgpath} /> </svg>
                                            <div className="link-name">{item.linkname}</div>
                                            {
                                                item.submenu != "" ?
                                                    <svg className='arrow' viewBox="0 0 24 24">  <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
                                                    : ""
                                            }
                                        </div>
                                        <div className={`sub-menu `} >
                                            {item.submenu.map((submenu, subInx) => {
                                                return (
                                                    <>
                                                        <div className="sub-item" key={subInx} >
                                                            <div className="item">
                                                                {submenu ?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={submenu.viewBox}>
                                                                        <path d={submenu.svgpath} />
                                                                    </svg> : ""
                                                                }
                                                                <span> {submenu.subtitleName}</span>
                                                                {submenu.subchildmenu != "" ?
                                                                    <svg className='arrow' viewBox="0 0 24 24">  <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
                                                                    : ""}

                                                            </div>

                                                            {submenu.subchildmenu != '' ?

                                                                <div className='child-container'>
                                                                    {submenu.subchildmenu.map((child, childInx) => {
                                                                        return (
                                                                            <div className="child" key={childInx}>
                                                                                {child.svgpath ?
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={submenu.viewBox}>
                                                                                        <path d={submenu.svgpath} />
                                                                                    </svg> : ""
                                                                                }
                                                                                <span> {child.childname}</span>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>

                                                                : null}

                                                        </div>
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </div> :
                                    <div className="inline" key={inx}>
                                        <div className="inline-iocn-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox={item.viewBox}> <path d={item.svgpath} /> </svg>
                                            <div className="link-name">{item.linkname}</div>
                                        </div>
                                    </div>
                            }
                        </>
                    )
                })}
            </div>
            <div className="menu">
                <svg onClick={() => setMenu(!menu)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" /></svg>
            </div>
        </div>
    )
}

export default Testing;