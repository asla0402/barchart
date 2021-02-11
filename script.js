"use strict";

let barSize = getHeight();

function getHeight() {
  return (Math.floor(Math.random() * 32) / 32) * 30 + "vh";
}

document.querySelector("#bar").style.height = barSize;
