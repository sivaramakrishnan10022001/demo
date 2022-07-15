import React, { useEffect } from 'react';
import { useRef } from 'react';
import "./CompressFile.css"

export const CompressFile = ({ className }) => {

  const uploadBtnRef = useRef(null)

  useEffect(() => {
    document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
      if (!button.classList.contains('compress')) {
        button.classList.add('compress');
        setTimeout(() => button.classList.remove('compress'), 4000);
      }
      e.preventDefault();
    }));


  })

  const onClickUpload = () => {
    uploadBtnRef.current.click();
    // const inputbtn =document.getElementById('file-upload');
    // inputbtn.click()
  }

  const filechange = () => {

  }

  return (
    <div className={'compressfile-wapper ' + className}>

      <input type="file" id="file-upload" ref={uploadBtnRef} onChange={() => filechange()} />
      <button className="button" onClick={onClickUpload}>
        <div className="paper left"></div>
        <div className="paper middle"></div>
        <div className="paper right"></div>
        <div className="inner">
          <div className="zipper">
            <div className="line"></div>
            <div className="gradient"></div>
          </div>
          <span>Compress files</span>
          <svg viewBox="0 0 20 16">
            <polyline points="3 8.75 7.75 13.5 17 2.5"></polyline>
          </svg>
        </div>
      </button>
    </div>
  )
}