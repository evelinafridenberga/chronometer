"use strict";

import { Hronometrs } from "./Hronometrs.js";

const stop = document.querySelector(".stop");
const start = document.querySelector(".start");
const loop = document.querySelector(".loop");
const clear = document.querySelector(".clear");
const history = document.querySelector(".history");

const chronometer = new Hronometrs();
let interval;

start.addEventListener("click", () => {
  interval = chronometer.start();
  start.disabled = true;
});

stop.addEventListener("click", () => {
  chronometer.stop(interval);
  start.disabled = false;
});

loop.addEventListener("click", () => {
  chronometer.loop(history);
  start.disabled = true;
});

clear.addEventListener("click", () => {
  chronometer.clear(interval);
  start.disabled = false;
});
