console.log('wazzup');


import { getMaxDigit } from "../../../homework-03/homework-03.js"
console.log( getMaxDigit(598234));

import  { makePairs } from "../../../homework-04/homework-04.js"
console.log(makePairs(["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]));

import { getRandomArray } from "../../../homework-05/homework-05.js"
console.log(getRandomArray(14, 1, 10));

import { calculateWordLetters } from "../../../homework-06/homework-06.js"
console.log(calculateWordLetters('test'));

import { getTotalTaxes, ukraine } from "../../../homework-07/homework-07.js"
console.log(getTotalTaxes.call(ukraine));

import { student1 } from "../../../homework-08/homework-08.js"
console.log(student1.getInfo());


import Image from "../../../homework-10/background/bgimg.jpg"
const img = document.createElement("img")
img.classList.add("bg-container")
img.setAttribute('id','bg-img');
img.setAttribute("src", Image)
document.body.append(img)
document.getElementById("bg-img").style.backgroundSize = "100px 50px";

import { getRandomChinese } from "../../../homework-11/homework-11.js"
console.log(getRandomChinese(4));

const container = document.querySelector('.container')
const grid = document.querySelector('.grid')
import { generateBlocksInterval } from "../../../homework-09/homework-09.js"
console.log(generateBlocksInterval());

import "../../../homework-09/homework-09.css";