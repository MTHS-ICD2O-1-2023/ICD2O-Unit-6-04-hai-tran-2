// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  // this calculates volume of a sphere
  const params = new URLSearchParams(document.location.search)

  // input
  const radiusOfSphere = params.get("radiusOfSphere")
  console.log(radiusOfSphere)

  // process
  const volumeOfSphere = (4 * Math.PI * radiusOfSphere ** 3) / 3
  console.log(volumeOfSphere)

  // output
  document.getElementById("dimension").innerHTML =
    "The radius of sphere is: " + radiusOfSphere
  document.getElementById("result").innerHTML =
    "The volume is: " + volumeOfSphere.toFixed(2) + " mm³"
}
