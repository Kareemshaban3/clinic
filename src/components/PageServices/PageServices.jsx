/** @format */

import React from "react";
import PageChang from "../PageChang/PageChang";
import { Link } from "react-router-dom";
import "./PageServices.css";

import doctor from '../../img/pic2.2c21a722397dfc7d2854s.jpg'
import doctor2 from '../../img/member3.0d822ecc51b2532abe0e.jpg'
import doctor3 from '../../img/member1.22ac1d594f69ddaf3e08.jpg'
import kafer from '../../img/download (1).png'
import kafer2 from '../../img/download (2).png'
import Experience from "../Experience/Experience";
import LatestNews from "../Latest News/LatestNews";
export default function PageServices() {
  return (
    <>
      <PageChang title='Services' />
      <section id='PageServices'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-4 '>
              <div className='card'>
                <div className='card-icon'>
                  <svg
                    width='131px'
                    height='131px'
                    viewBox='-102.4 -102.4 1228.80 1228.80'
                    class='icon'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#000000'
                    stroke='#000000'
                    stroke-width='0.01024'
                    transform='rotate(0)matrix(1, 0, 0, 1, 0, 0)'
                  >
                    <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke='#CCCCCC'
                      stroke-width='8.192'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      <path
                        d='M309.673 657.944l28.284-28.284 59.396 59.396-28.284 28.284z'
                        fill='#e2c4ff'
                      ></path>
                      <path
                        d='M311.115 604.195l153.44-153.44 127.278 127.277-153.44 153.44z'
                        fill='#e2c4ff'
                      ></path>
                      <path
                        d='M365.328 664.026l5.656-5.657 36.628 36.628-5.657 5.657zM309.751 608.427l5.657-5.657 36.628 36.628-5.657 5.657z'
                        fill='#07078a'
                      ></path>
                      <path
                        d='M447.478 507.89l5.657-5.656 65.124 65.123-5.657 5.657z'
                        fill='#07078a'
                      ></path>
                      <path
                        d='M407.79 548.304l5.657-5.656 65.123 65.124-5.656 5.656z'
                        fill='#07078a'
                      ></path>
                      <path
                        d='M367.72 588.349l5.656-5.657 65.124 65.124-5.657 5.657zM307.687 662.024l5.657-5.657 54.941 54.942-5.657 5.657z'
                        fill='#07078a'
                      ></path>
                      <path
                        d='M834.9 321.4l-12.2-12.2-27.3-27.3 41-41 45.2 45.2 10.6-10.6-45.2-45.2-54-54-43.2-43.2-10.6 10.6 43.2 43.2-41 41-111.7-111.8-10.6 10.6 59.1 59.1c-1.1 0.7-2.2 1.6-3.1 2.5l-384 384c-3.6 3.6-5.6 8.4-5.6 13.4s2 9.9 5.6 13.4l33.4 33.4-15.7 15.7c-3.3 3.3-5.3 7.7-5.5 12.3l-55.8 91.6 7.2 7.2-65.4 65.4 10.6 10.6 65.4-65.4 6.6 6.6 92-56.7c4.2-0.5 8.1-2.4 11.1-5.4l15.7-15.7 33.4 33.4c3.6 3.6 8.4 5.6 13.4 5.6 5.1 0 9.9-2 13.4-5.6l384-384c1-1 1.8-2 2.5-3.1l61.2 61.2 10.6-10.6-74.3-74.2zM793 197.5l32.8 32.8-41 41-32.8-32.8 41-41z m31.3 140.2l-384 384c-1 1-2.2 1.2-2.8 1.2-0.6 0-1.8-0.2-2.8-1.2l-44-44-26.3 26.3c-1 1-2.2 1.2-2.8 1.2h-2.1l-83.9 51.7-8.3-8.3 51.2-84-0.2-2.4c-0.1-1.2 0.3-2.4 1.1-3.2l26.3-26.3-44-44c-1-1-1.2-2.2-1.2-2.8s0.2-1.8 1.2-2.8l384-384c1.5-1.5 4.1-1.5 5.7 0l133 133c1.4 1.4 1.4 4-0.1 5.6z'
                        fill='#07078a'
                      ></path>
                      <path
                        d='M548.5 520.5l-45-45 240-240 45 45-240 240z m-33.7-45l33.7 33.7 228.7-228.7-33.7-33.7-228.7 228.7z'
                        fill='#07078a'
                      ></path>
                      <path
                        d='M584.7 577.3L446.2 438.7l15.6-15.6 138.6 138.6-15.7 15.6zM457.5 438.7L584.7 566l4.2-4.2-127.2-127.3-4.2 4.2z'
                        fill='#e2c4ff'
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className='card-body'>
                  <h5 className='card-title'>Vaccine</h5>
                  <p className='card-text'>
                    Phasellus venenatis porta rhoncus. Integer et viverra
                    felis..
                  </p>
                  <Link to='details'>View More</Link>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 '>
              <div className='card'>
                <div className='card-icon'>
                  <svg
                    width='130px'
                    height='130px'
                    viewBox='0 0 1024 1024'
                    class='icon'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#000000'
                  >
                    <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      <path
                        d='M408.9 410.3V381c0-4.4-3.6-8-8-8h-53c-4.4 0-8 3.6-8 8v26.2c0 12.1-9.8 21.9-21.9 21.9h-25.2c-4.4 0-8 3.6-8 8v53c0 4.4 3.6 8 8 8h15.1c5.2 0 13.3 4.2 13.3 9.4l1 39.1c0 9.7 2.9 17.5 12.6 17.5h12.3c4 0 7.6 1.3 10.5-0.6 0.3-0.2 0.7-0.4 1.1-0.4H398c6 0 10.9-4.9 10.9-10.9v-33.4c0-11.4 9.2-20.7 20.7-20.7H464c4.4 0 8-3.6 8-8v-62.7c0-8.3-6.8-15.1-15.1-15.1H411c-1.2 0-2.1-0.9-2.1-2z'
                        fill='#b2f0fb'
                      ></path>
                      <path
                        d='M107.6 663.7h88.2v8h-88.2zM358.2 663.7h308.7v8H358.2zM830.4 663.7h80.7v8h-80.7z'
                        fill='#000000'
                      ></path>
                      <path
                        d='M396.9 567.9h-60.2c-9.3 0-16.9-7.6-16.9-16.9v-38.7c0-4.9-4-8.9-8.9-8.9h-38.7c-9.3 0-16.9-7.6-16.9-16.9v-60.2c0-9.3 7.6-16.9 16.9-16.9h0.7v8h-0.7c-4.9 0-8.9 4-8.9 8.9v60.2c0 4.9 4 8.9 8.9 8.9h38.7c9.3 0 16.9 7.6 16.9 16.9V551c0 4.9 4 8.9 8.9 8.9h60.2c4.9 0 8.9-4 8.9-8.9v-38.7c0-9.3 7.6-16.9 16.9-16.9h38.7c4.9 0 8.9-4 8.9-8.9v-60.2c0-4.9-4-8.9-8.9-8.9h-38.7c-9.3 0-16.9-7.6-16.9-16.9v-38.7c0-4.9-4-8.9-8.9-8.9h-60.2c-4.9 0-8.9 4-8.9 8.9v38.7c0 9.3-7.6 16.9-16.9 16.9h-9.7v-8h9.7c4.9 0 8.9-4 8.9-8.9v-38.7c0-9.3 7.6-16.9 16.9-16.9h60.2c9.3 0 16.9 7.6 16.9 16.9v38.7c0 4.9 4 8.9 8.9 8.9h38.7c9.3 0 16.9 7.6 16.9 16.9v60.2c0 9.3-7.6 16.9-16.9 16.9h-38.7c-4.9 0-8.9 4-8.9 8.9V551c0 9.3-7.6 16.9-16.9 16.9zM671.7 251.9h-73.1v-41.6c0-17.3 14.1-31.4 31.4-31.4h10.2c17.3 0 31.4 14.1 31.4 31.4v41.6z m-58.1-15h43.1v-26.6c0-9.1-7.4-16.4-16.4-16.4h-10.2c-9.1 0-16.4 7.4-16.4 16.4v26.6z'
                        fill='#000000'
                      ></path>
                      <path
                        d='M937.7 751H846v-7.5c0-55.2-44.9-100.1-100.1-100.1s-100.1 44.9-100.1 100.1v7.5H377.1v-7.5c0-55.2-44.9-100.1-100.1-100.1s-100.1 44.9-100.1 100.1v7.5H85.8c-11.3 0-20.4-9.2-20.4-20.4v-53.8c0-11.3 9.2-20.4 20.4-20.4h14V257.3c0-11.3 9.2-20.4 20.4-20.4h600.6c52.3 0 103.9 36.7 145.3 103.2 34.9 56.2 57.5 127.8 57.5 182.4v133.8h14c11.3 0 20.4 9.2 20.4 20.4v53.8c0.1 11.3-9.1 20.5-20.3 20.5z m-76.9-15h76.9c3 0 5.4-2.4 5.4-5.4v-53.8c0-3-2.4-5.4-5.4-5.4h-29V522.5c0-52-21.7-120.5-55.2-174.5-52-83.7-105.4-96.2-132.6-96.2H120.2c-3 0-5.4 2.4-5.4 5.4v414.1h-29c-3 0-5.4 2.4-5.4 5.4v53.8c0 3 2.4 5.4 5.4 5.4h76.4c3.9-60 53.9-107.6 114.8-107.6s110.9 47.6 114.8 107.6h239.3c3.9-60 53.9-107.6 114.8-107.6S856.9 676 860.8 736z'
                        fill='#000000'
                      ></path>
                      <path
                        d='M275.9 830.6c-48 0-87.1-39.1-87.1-87.1 0-48 39.1-87.1 87.1-87.1 48 0 87.1 39.1 87.1 87.1 0 48-39.1 87.1-87.1 87.1z m0-159.2c-39.8 0-72.1 32.3-72.1 72.1s32.3 72.1 72.1 72.1 72.1-32.3 72.1-72.1-32.3-72.1-72.1-72.1z'
                        fill='#000000'
                      ></path>
                      <path
                        d='M275.9 766.8c-12.9 0-23.4-10.5-23.4-23.4S263 720 275.9 720s23.4 10.5 23.4 23.4-10.5 23.4-23.4 23.4z m0-38.7c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4 15.4-6.9 15.4-15.4-6.9-15.4-15.4-15.4zM747 766.8c-12.9 0-23.4-10.5-23.4-23.4S734.1 720 747 720s23.4 10.5 23.4 23.4-10.5 23.4-23.4 23.4z m0-38.7c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4 15.4-6.9 15.4-15.4-6.9-15.4-15.4-15.4z'
                        fill='#000000'
                      ></path>
                      <path
                        d='M747 830.6c-48 0-87.1-39.1-87.1-87.1 0-48 39.1-87.1 87.1-87.1 48 0 87.1 39.1 87.1 87.1 0 48-39.1 87.1-87.1 87.1z m0-159.2c-39.8 0-72.1 32.3-72.1 72.1s32.3 72.1 72.1 72.1 72.1-32.3 72.1-72.1-32.3-72.1-72.1-72.1zM842 535.1H652.2c-3.6 0-6.6-2.9-6.6-6.6V315.4c0-8.8 7.2-16 16-16H690c44.7 0 86.8 17.5 118.6 49.3 31.8 31.8 49.3 73.9 49.3 118.6V519c0.1 8.9-7 16.1-15.9 16.1z m-188.3-8H842c4.4 0 8-3.6 8-8v-51.7c0-42.6-16.7-82.7-47-113-30.3-30.3-70.4-47-113-47h-28.4c-4.4 0-8 3.6-8 8v211.7zM596.7 244.4h8v419.5h-8z'
                        fill='#000000'
                      ></path>
                    </g>
                  </svg>
                  <div className='card-body'>
                    <h5 className='card-title'>Emergency</h5>
                    <p className='card-text'>
                      Phasellus venenatis porta rhoncus. Integer et viverra
                      felis..
                    </p>
                    <Link to='details'>View More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 '>
              <div className='card'>
                <div className='card-icon'>
                  <svg
                    width='129px'
                    height='129px'
                    viewBox='0 0 1024 1024'
                    class='icon'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#000000'
                  >
                    <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      <path
                        d='M272.2 696.2m-59.3 0a59.3 59.3 0 1 0 118.6 0 59.3 59.3 0 1 0-118.6 0Z'
                        fill='#b2f0fb'
                      ></path>
                      <path
                        d='M392.1 485.4l-62.5-253v-0.1c-0.6-3-1.4-6.3-2.2-9.8-7.2-31.8-18.1-79.8 7.2-111.5 15.8-19.7 43.3-29.7 81.9-29.7v15c-33.8 0-57.4 8.1-70.2 24.1-20.8 26.1-10.9 69.8-4.3 98.8 0.8 3.5 1.6 6.8 2.2 9.9l62.4 252.8-14.5 3.5zM731.5 485.1l-14.6-3.6 62.4-252.4c0.9-4.6 2-9.5 3.1-14.6 6.6-29.7 15.6-70.4-3.8-94.6-12.6-15.7-36.6-23.7-71.5-23.7v-15c40.2 0 67.4 9.6 83.2 29.3 23.9 29.8 14 74.5 6.8 107.2-1.1 5.2-2.2 10-3.1 14.4l-0.1 0.4-62.4 252.6zM645.6 952.4c-22.4 0-44.1-7.9-61.5-22.6-21.3-18.1-33.6-44.6-33.6-72.6l0.5-254.6h21.5l-0.2 84.8h188.1c20.1 0 38.4 8.4 51.4 23.8 12.4 14.5 19.3 34.1 19.5 55 0.4 39.7-20.4 82.6-58.6 120.8-33.8 33.8-76.6 58.4-111.7 64.1-5.1 0.9-10.2 1.3-15.4 1.3zM559 610.6l-0.4 246.6c0 25.6 11.2 49.9 30.7 66.5s45.2 23.7 70.5 19.6c33.5-5.5 74.7-29.2 107.4-61.9 36.7-36.7 56.7-77.5 56.3-115-0.2-19.1-6.5-36.8-17.6-49.9-11.7-13.7-27.4-21-45.3-21H572.4v5.5h180.8c40.8 0 63.4 24.3 63.7 68.4 0.2 33.1-18.8 71.6-51.9 105.7-30.2 31-68.7 54.6-100.5 61.5-26.1 5.7-50.6 0.5-69.1-14.4-19.9-16-31.2-42.4-31.2-72.3l0.4-239.3H559z m13.4 98.4l-0.3 140.9c0 27.5 10.3 51.5 28.2 66 16.6 13.4 38.7 17.9 62.3 12.8 30.4-6.6 67.4-29.3 96.5-59.2 31.7-32.6 49.8-69.1 49.7-100.1-0.1-27.6-9.9-60.4-55.7-60.4H572.4z'
                        fill='#07078a'
                      ></path>
                      <path
                        d='M557.3 709h-216v-21.5h215.8v8H349.3v5.5h208zM272.2 728.3c-17.7 0-32.1-14.4-32.1-32.1 0-17.7 14.4-32.1 32.1-32.1s32.1 14.4 32.1 32.1c0.1 17.7-14.3 32.1-32.1 32.1z m0-56.3c-13.3 0-24.1 10.8-24.1 24.1s10.8 24.1 24.1 24.1 24.1-10.8 24.1-24.1c0.1-13.2-10.8-24.1-24.1-24.1z'
                        fill='#07078a'
                      ></path>
                      <path
                        d='M272.2 780.7c-46.6 0-84.5-37.9-84.5-84.5s37.9-84.5 84.5-84.5 84.5 37.9 84.5 84.5c0.1 46.6-37.8 84.5-84.5 84.5z m0-154.1c-38.3 0-69.5 31.2-69.5 69.5s31.2 69.5 69.5 69.5 69.5-31.2 69.5-69.5-31.1-69.5-69.5-69.5z'
                        fill='#07078a'
                      ></path>
                      <path
                        d='M581.4 615.7h-38.9v-52.5h38.9v52.5z m-24-15h8.9v-22.5h-8.9v22.5z'
                        fill='#07078a'
                      ></path>
                      <path
                        d='M657.1 570H466.4c-37.2 0-63.8-25-78.9-74.3v-0.2l-2-7.9c-0.6-2.4-0.1-4.9 1.4-6.9s3.8-3.1 6.3-3.1h14.5c3 0 5.6 2 6.4 4.8 11 37.9 24.6 59.8 62 59.8h171.5c36.6 0 49.2-19.3 62.3-59.9 0.9-2.8 3.5-4.7 6.4-4.7h14.4c2.5 0 4.8 1.1 6.3 3.1s2 4.5 1.4 6.9l-2 7.6c-14.1 48.3-42.2 74.8-79.3 74.8z m-261.9-76.5c14.2 46.1 37.5 68.6 71.2 68.6h190.7c18 0 33.6-6.9 46.3-20.6 10.7-11.6 19.5-28.3 25.3-48.3l1.9-7.4h-13.5c-13.9 42.8-28.6 64.5-69.6 64.5H476.1c-41.7 0-58-25.8-69.4-64.5h-13.6l2.1 7.7zM494.2 86.6V91h-72v-4.4h72m3-15h-78c-6.6 0-12 5.4-12 12V94c0 6.6 5.4 12 12 12h78c6.6 0 12-5.4 12-12V83.6c0-6.6-5.4-12-12-12zM702.4 86.6V91h-72v-4.4h72m3-15h-78c-6.6 0-12 5.4-12 12V94c0 6.6 5.4 12 12 12h78c6.6 0 12-5.4 12-12V83.6c0-6.6-5.4-12-12-12z'
                        fill='#07078a'
                      ></path>
                    </g>
                  </svg>{" "}
                  <div className='card-body'>
                    <h5 className='card-title'>Diagnostice</h5>
                    <p className='card-text'>
                      Phasellus venenatis porta rhoncus. Integer et viverra
                      felis..
                    </p>
                    <Link to='details'>View More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 '>
              <div className='card'>
                <div className='card-icon'>
                  <svg
                    width='129px'
                    height='129px'
                    viewBox='0 0 1024 1024'
                    class='icon'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#000000'
                  >
                    <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      <path
                        d='M776 239l-48-13 48-13 13-49 13 49 48 13-48 13-13 48-13-48zM824 292l-19-5 19-4 4-19 5 19 18 4-18 5-5 18-4-18z'
                        fill='#AFBCF3'
                      ></path>
                      <path
                        d='M184 562l-21-5 21-5 5-21 5 21 21 5-21 5-5 21-5-21z'
                        fill='#AFBCF3'
                      ></path>
                      <path
                        d='M212 255m-9 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0Z'
                        fill='#5546CB'
                      ></path>
                      <path
                        d='M805 754a25 25 0 1 1 25-25 25 25 0 0 1-25 25z m0-36a10 10 0 1 0 10 10 10 10 0 0 0-10-10z'
                        fill='#5546CB'
                      ></path>
                      <path
                        d='M747.553228 751.6268l51.618795 51.618795-125.942789 125.942788-51.618795-51.618795 125.942789-125.942788Z'
                        fill='#a4fcc4'
                      ></path>
                      <path
                        d='M695 820l-40 40c-10 10-10 27 1 38 9 8 25 9 36-1l40-40zM232 847l-27-6 27-7 6-27 7 27 27 7-27 6-7 27-6-27z'
                        fill='#AFBCF3'
                      ></path>
                      <path
                        d='M723 677V460H308v217zM459 559h49v-49h20v49h49v20h-49v49h-20v-49h-49z'
                        fill='#FFFFFF'
                      ></path>
                      <path
                        d='M632 765a47 47 0 0 1 66 0l11 11 5-5 9-7v-67H307v132a34 34 0 0 0 34 34h288a47 47 0 0 1 11-19l3-3-11-11a47 47 0 0 1 0-65zM723 369a34 34 0 0 0-34-34H544v-74h-58v73H341a34 34 0 0 0-34 34v71h416zM508 628h20v-49h49v-20h-49v-49h-20v49h-49v20h49v49z'
                        fill='#a4fcc4'
                      ></path>
                      <path
                        d='M424 153h19v87.98h-19zM464 153h19v87.98h-19zM385 154v87h19v-88h-19zM645 240v-86h-24v88h23zM582 153h19v87.98h-19zM503 153h19v87.98h-19zM543 153h19v87.98h-19z'
                        fill='#AFBCF3'
                      ></path>
                      <path
                        d='M724 893a27 27 0 0 0 37-37zM695 790l-11-11a27 27 0 0 0-38 38l11 11z'
                        fill='#AFBCF3'
                      ></path>
                      <path
                        d='M650 889l-2-6zM748 777a26 26 0 0 0-18 8l-48 48 13-13 37 36-20 20 55-55a26 26 0 0 0-18-44z'
                        fill='#a4fcc4'
                      ></path>
                      <path
                        d='M781 836a47 47 0 0 0-38-80V369a54 54 0 0 0-54-54H564v-54h80a21 21 0 0 0 21-21v-86a21 21 0 0 0-21-21H386a21 21 0 0 0-21 21v87a21 21 0 0 0 21 21h80v54H341a54 54 0 0 0-54 54v459a54 54 0 0 0 54 54h286a47 47 0 0 0 80 28l3-3a47 47 0 0 0 66-66zM621 153h23v87h-23z m-39 0h19v88h-19z m141 307v217H308V460zM543 153h19v88h-19z m-39 0h19v88h-20z m-99 88h-20v-87h19z m39 0h-20v-88h19z m20 0v-88h19v88zM307 369a34 34 0 0 1 34-34h145v-74h59v73h144a34 34 0 0 1 34 34v71H307z m333 475a47 47 0 0 0-11 19H341a34 34 0 0 1-34-34V697h416v66l-9 7-5 5-11-11a47 47 0 0 0-66 66l11 11z m7-65a27 27 0 0 1 38 0l11 11-38 38-11-11a27 27 0 0 1 0-38z m111 112a27 27 0 0 1-34 3l37-37a27 27 0 0 1-3 34z m8-69l-55 55-20 20c-10 10-27 9-36 1l-5-7-2-6a26 26 0 0 1 7-23l27-26 48-48a26 26 0 0 1 37 37z'
                        fill='#5546CB'
                      ></path>
                      <path
                        d='M695 819l-13 13-27 26a26 26 0 0 0-7 23l2 6 5 7c9 8 25 9 36-1l20-20 20-20z'
                        fill='#AFBCF3'
                      ></path>
                    </g>
                  </svg>{" "}
                  <div className='card-body'>
                    <h5 className='card-title'>Treatment</h5>
                    <p className='card-text'>
                      Phasellus venenatis porta rhoncus. Integer et viverra
                      felis..
                    </p>
                    <Link to='details'>View More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 '>
              <div className='card'>
                <div className='card-icon'>
                  <svg
                    width='122px'
                    height='122px'
                    viewBox='-51.2 -51.2 1126.40 1126.40'
                    class='icon'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#07078a'
                    stroke='#07078a'
                    stroke-width='8.192'
                  >
                    <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      <path
                        d='M558.4 511.9v-31.2c0-4.7-3.8-8.5-8.5-8.5h-56.4c-4.7 0-8.5 3.8-8.5 8.5v27.9c0 12.9-10.5 23.4-23.4 23.4h-26.9c-4.7 0-8.5 3.8-8.5 8.5v56.4c0 4.7 3.8 8.5 8.5 8.5h16.1c5.5 0 14.2 4.5 14.2 10l1 41.7c0 10.3 3.1 18.6 13.4 18.6h13.1c4.2 0 8.1 1.4 11.2-0.6 0.4-0.2 0.8-0.4 1.2-0.4h41.7c6.4 0 11.7-5.2 11.7-11.7v-35.6c0-12.2 9.8-22 22-22H617c4.7 0 8.5-3.8 8.5-8.5v-66.8c0-8.9-7.2-16.1-16.1-16.1h-48.8c-1.2 0.1-2.2-0.9-2.2-2.1z'
                        fill='#F9C0C0'
                      ></path>
                      <path
                        d='M855.4 289.3c15.1 0 29.4 6 40.2 16.8s16.8 25.1 16.8 40.2V750c0 15.1-6 29.4-16.8 40.2-10.7 10.8-25 16.8-40.2 16.8H170c-15.1 0-29.4-6-40.2-16.8S113 765.1 113 750V346.3c0-15.1 6-29.4 16.8-40.2 10.8-10.8 25.1-16.8 40.2-16.8h685.4m0-15H170c-39.6 0-72 32.4-72 72V750c0 39.6 32.4 72 72 72h685.4c39.6 0 72-32.4 72-72V346.3c0-39.6-32.4-72-72-72z'
                        fill='#07078a'
                      ></path>
                      <path
                        d='M630.7 213.3v98.8h-236v-98.8h236m3-15h-242c-6.6 0-12 5.4-12 12v104.8c0 6.6 5.4 12 12 12h242c6.6 0 12-5.4 12-12V210.3c0-6.6-5.4-12-12-12zM275.3 259.3V274h-61.7v-14.7h61.7m3-15h-67.7c-6.6 0-12 5.4-12 12V277c0 6.6 5.4 12 12 12h67.7c6.6 0 12-5.4 12-12v-20.7c0-6.6-5.4-12-12-12zM811.8 259.3V274h-61.7v-14.7h61.7m3-15h-67.7c-6.6 0-12 5.4-12 12V277c0 6.6 5.4 12 12 12h67.7c6.6 0 12-5.4 12-12v-20.7c0-6.6-5.4-12-12-12zM513.3 409.4c40.8 0 79.1 15.9 108 44.7 28.8 28.8 44.7 67.2 44.7 108s-15.9 79.1-44.7 108c-28.8 28.8-67.2 44.7-108 44.7s-79.1-15.9-108-44.7c-28.8-28.8-44.7-67.2-44.7-108s15.9-79.1 44.7-108c28.9-28.8 67.2-44.7 108-44.7m0-15c-92.6 0-167.7 75.1-167.7 167.7s75.1 167.7 167.7 167.7S681 654.7 681 562.1s-75.1-167.7-167.7-167.7z'
                        fill='#07078a'
                      ></path>
                      <path
                        d='M198.6 289h91.7v518h-91.7zM735.2 289h91.7v518h-91.7z'
                        fill='#F9C0C0'
                      ></path>
                    </g>
                  </svg>
                  <div className='card-body'>
                    <h5 className='card-title'>Surgery</h5>
                    <p className='card-text'>
                      Phasellus venenatis porta rhoncus. Integer et viverra
                      felis..
                    </p>
                    <Link to='details'>View More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 '>
              <div className='card'>
                <div className='card-icon'>
                  <svg
                    width='121px'
                    height='121px'
                    viewBox='0 0 1024 1024'
                    class='icon'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#000000'
                  >
                    <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      <path
                        d='M404.1 666.5m-215.3 0a215.3 215.3 0 1 0 430.6 0 215.3 215.3 0 1 0-430.6 0Z'
                        fill='#a4fcc4'
                      ></path>
                      <path
                        d='M395.3 888.2c-61.5 0-119.3-23.9-162.7-67.4-43.5-43.5-67.4-101.3-67.4-162.7s23.9-119.3 67.4-162.7c43.5-43.5 101.3-67.4 162.7-67.4s119.3 23.9 162.7 67.4c43.5 43.5 67.4 101.3 67.4 162.7S601.5 777.4 558 820.8c-43.4 43.5-101.2 67.4-162.7 67.4z m0-452.3c-59.3 0-115.1 23.1-157.1 65.1s-65.1 97.7-65.1 157.1 23.1 115.1 65.1 157.1 97.7 65.1 157.1 65.1 115.1-23.1 157.1-65.1 65.1-97.7 65.1-157.1S594.4 543 552.4 501c-41.9-42-97.7-65.1-157.1-65.1z'
                        fill='#999999'
                      ></path>
                      <path
                        d='M395.3 658.1m-41.1 0a41.1 41.1 0 1 0 82.2 0 41.1 41.1 0 1 0-82.2 0Z'
                        fill='#a4fcc4'
                      ></path>
                      <path
                        d='M395.3 703.2c-24.9 0-45.1-20.2-45.1-45.1s20.2-45.1 45.1-45.1 45.1 20.2 45.1 45.1-20.2 45.1-45.1 45.1z m0-82.2c-20.5 0-37.1 16.7-37.1 37.1s16.7 37.1 37.1 37.1 37.1-16.7 37.1-37.1-16.6-37.1-37.1-37.1zM402.5 382.3h-15V264.1L306 114.4h-82.3v-15h91.2l87.6 160.9z'
                        fill='#999999'
                      ></path>
                      <path
                        d='M727.4 495.9H598.2v-15h129.2c3.4 0 6.2-2.8 6.2-6.2V342.2c0-3.4-2.8-6.2-6.2-6.2H408.7c-3.4 0-6.2 2.8-6.2 6.2v51.4h-15v-51.4c0-11.7 9.5-21.2 21.2-21.2h318.7c11.7 0 21.2 9.5 21.2 21.2v132.5c0 11.6-9.5 21.2-21.2 21.2z'
                        fill='#999999'
                      ></path>
                      <path
                        d='M837 655.8H659.3v-15H837c3.4 0 6.2-2.8 6.2-6.2V502.1c0-3.4-2.8-6.2-6.2-6.2H598.2v-15H837c11.7 0 21.2 9.5 21.2 21.2v132.5c0 11.7-9.5 21.2-21.2 21.2z'
                        fill='#999999'
                      ></path>
                      <path
                        d='M843.2 537.5h15v269.6h-15zM230.51 817.465l40.37-40.382 5.657 5.656-40.37 40.381zM514.84 533.233l40.375-40.375 5.657 5.657-40.375 40.375zM231.08 499.356l5.657-5.656 37.97 37.97-5.656 5.658zM516.172 784.453l5.657-5.656 37.971 37.97-5.657 5.658zM395.3 685.2c-14.9 0-27.1-12.1-27.1-27.1 0-14.9 12.1-27.1 27.1-27.1s27.1 12.1 27.1 27.1c0 14.9-12.1 27.1-27.1 27.1z m0-46.2c-10.5 0-19.1 8.6-19.1 19.1s8.6 19.1 19.1 19.1 19.1-8.6 19.1-19.1-8.5-19.1-19.1-19.1z'
                        fill='#999999'
                      ></path>
                      <path
                        d='M850.3 927.9c-35.6 0-64.6-29-64.6-64.6s29-64.6 64.6-64.6 64.6 29 64.6 64.6c0 35.6-29 64.6-64.6 64.6z m0-114.2c-27.4 0-49.6 22.3-49.6 49.6s22.3 49.6 49.6 49.6 49.6-22.3 49.6-49.6-22.3-49.6-49.6-49.6z'
                        fill='#999999'
                      ></path>
                      <path
                        d='M850.3 889c-14.2 0-25.8-11.6-25.8-25.8s11.6-25.8 25.8-25.8 25.8 11.6 25.8 25.8c-0.1 14.3-11.6 25.8-25.8 25.8z m0-43.5c-9.8 0-17.8 8-17.8 17.8s8 17.8 17.8 17.8 17.8-8 17.8-17.8c-0.1-9.8-8-17.8-17.8-17.8z'
                        fill='#999999'
                      ></path>
                      <path
                        d='M395.3 929.4c-72.5 0-140.6-28.2-191.9-79.5-51.2-51.2-79.4-119.3-79.4-191.8s28.2-140.6 79.5-191.9 119.4-79.5 191.9-79.5S536 415 587.2 466.2c51.3 51.3 79.5 119.4 79.5 191.9S638.5 798.7 587.2 850c-51.2 51.2-119.4 79.4-191.9 79.4z m0-527.7c-68.5 0-132.8 26.7-181.3 75.1-48.3 48.4-75 112.8-75 181.3s26.7 132.8 75.1 181.3c48.4 48.4 112.8 75.1 181.3 75.1s132.8-26.7 181.3-75.1c48.4-48.4 75.1-112.8 75.1-181.3s-26.7-132.8-75.1-181.3c-48.5-48.4-112.9-75.1-181.4-75.1z'
                        fill='#a4fcc4'
                      ></path>
                    </g>
                  </svg>{" "}
                  <div className='card-body'>
                    <h5 className='card-title'>Qualified Doctors</h5>
                    <p className='card-text'>
                      Phasellus venenatis porta rhoncus. Integer et viverra
                      felis..
                    </p>
                    <Link to='details'>View More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Experience />
      <section id='doctor'>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                    <div className="content text-center">
                    <div className="img-big">
                        <img  className='doctor' src={doctor3} alt="" />
                        <div className="img-small">
                        <img className='kafer' src={kafer} alt="" />
                        <img className='kafer2' src={kafer2} alt="" />
                        </div>
                        </div> 
                        <h2>Dr. Addition Smith</h2>
                        <h3>Dentist</h3>
                        <div className="button">
                        <button><i class="fa-brands fa-twitter"></i></button>
                        <button><i class="fa-brands fa-linkedin"></i></button>
                        <button><i class="fa-brands fa-instagram"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                <div className="content text-center">
                       <div className="img-big">
                        <img  className='doctor' src={doctor} alt="" />
                        <div className="img-small">
                        <img className='kafer' src={kafer} alt="" />
                        <img className='kafer2' src={kafer2} alt="" />
                        </div>
                        </div> 
                        <h2>Dr. Addition Smith</h2>
                        <h3>Dentist</h3>
                        <div className="button">
                        <button><i class="fa-brands fa-twitter"></i></button>
                        <button><i class="fa-brands fa-linkedin"></i></button>
                        <button><i class="fa-brands fa-instagram"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                    <div className="content text-center">
                     <div className="img-big">
                        <img  className='doctor' src={doctor2} alt="" />
                        <div className="img-small">
                        <img className='kafer' src={kafer} alt="" />
                        <img className='kafer2' src={kafer2} alt="" />
                        </div>
                        </div> 
                        <h2>Dr. Addition Smith</h2>
                        <h3>Dentist</h3>
                        <div className="button">
                        <button><i class="fa-brands fa-twitter"></i></button>
                        <button><i class="fa-brands fa-linkedin"></i></button>
                        <button><i class="fa-brands fa-instagram"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <LatestNews/>
    </>
  );
}
