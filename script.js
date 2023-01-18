'use strict';

const scoreHole1 = document.getElementById('h1');
const scoreHole2 = document.getElementById('h2');
const scoreHole3 = document.getElementById('h3');
const scoreHole4 = document.getElementById('h4');
const scoreHole5 = document.getElementById('h5');
const scoreHole6 = document.getElementById('h6');
const scoreHole7 = document.getElementById('h7');
const scoreHole8 = document.getElementById('h8');
const scoreHole9 = document.getElementById('h9');
const scoreHole10 = document.getElementById('h10');
const scoreHole11 = document.getElementById('h11');
const scoreHole12 = document.getElementById('h12');
const scoreHole13 = document.getElementById('h13');
const scoreHole14 = document.getElementById('h14');
const scoreHole15 = document.getElementById('h15');
const scoreHole16 = document.getElementById('h16');
const scoreHole17 = document.getElementById('h17');
const scoreHole18 = document.getElementById('h18');

const strokesHole1 = document.getElementById('s1');
const strokesHole2 = document.getElementById('s2');
const strokesHole3 = document.getElementById('s3');
const strokesHole4 = document.getElementById('s4');
const strokesHole5 = document.getElementById('s5');
const strokesHole6 = document.getElementById('s6');
const strokesHole7 = document.getElementById('s7');
const strokesHole8 = document.getElementById('s8');
const strokesHole9 = document.getElementById('s9');
const strokesHole10 = document.getElementById('s10');
const strokesHole11 = document.getElementById('s11');
const strokesHole12 = document.getElementById('s12');
const strokesHole13 = document.getElementById('s13');
const strokesHole14 = document.getElementById('s14');
const strokesHole15 = document.getElementById('s15');
const strokesHole16 = document.getElementById('s16');
const strokesHole17 = document.getElementById('s17');
const strokesHole18 = document.getElementById('s18');

const btnOut = document.getElementById('button');
const btnIn = document.getElementById('button1');
const btnTotal = document.getElementById('button2');
const btnSave = document.getElementById('button3');

let frontNineOut = document.getElementById('out');
let backNineIn = document.getElementById('in');
let total = document.getElementById('total');
let frontNineStrokes = document.getElementById('sOUT');
let backNineStrokes = document.getElementById('sIN');
let totalStrokes = document.getElementById('sTOTAL');

// let calcScore = function (arr) {
//   arr.reduce((acc, score) => acc + score, 0);
// };

//SAVE BUTTON

//FRONT 9 SCORE
btnSave.addEventListener('click', function (e) {
  e.preventDefault();

  let frontArray = [
    Number(scoreHole1.value),
    Number(scoreHole2.value),
    Number(scoreHole3.value),
    Number(scoreHole4.value),
    Number(scoreHole5.value),
    Number(scoreHole6.value),
    Number(scoreHole7.value),
    Number(scoreHole8.value),
    Number(scoreHole9.value),
  ];

  const frontNineScore = frontArray.reduce((acc, score) => acc + score, 0);

  frontNineOut.textContent = `${frontNineScore}`;

  //BACK NINE SCORE
  let backArray = [
    Number(scoreHole10.value),
    Number(scoreHole11.value),
    Number(scoreHole12.value),
    Number(scoreHole13.value),
    Number(scoreHole14.value),
    Number(scoreHole15.value),
    Number(scoreHole16.value),
    Number(scoreHole17.value),
    Number(scoreHole18.value),
  ];

  const backNineScore = backArray.reduce((acc, score) => acc + score, 0);
  backNineIn.textContent = `${backNineScore}`;

  //TOTAL SCORE
  const totalScore = frontNineScore + backNineScore;
  total.textContent = `${totalScore}`;

  //STROKES TO PAR
  let parArray = [4, 4, 3, 5, 4, 3, 5, 4, 4, 3, 4, 5, 4, 4, 5, 3, 4, 4];

  let totalArray = frontArray.concat(backArray);

  let strokes = [
    strokesHole1,
    strokesHole2,
    strokesHole3,
    strokesHole4,
    strokesHole5,
    strokesHole6,
    strokesHole7,
    strokesHole8,
    strokesHole9,
    strokesHole10,
    strokesHole11,
    strokesHole12,
    strokesHole13,
    strokesHole14,
    strokesHole15,
    strokesHole16,
    strokesHole17,
    strokesHole18,
  ];

  totalArray.map(function (score, index) {
    let stroke = strokes[index];
    let par = parArray[index];
    if (score > 0 && score === par) {
      strokes[index].textContent = `${0}`;
      return (strokes[index] = 0);
    } else if (score > 0 && score > par) {
      strokes[index].textContent = `+${score - par}`;
      return (strokes[index] = score - par);
    } else if (score > 0 && score < par) {
      strokes[index].textContent = `-${par - score}`;
      return (strokes[index] = -Math.abs(par - score));
    }
  });

  //UPDATE STROKES OUT
  let frontNineDifference = strokes
    .slice(0, 9)
    .reduce((acc, stroke) => acc + stroke, 0);

  frontNineStrokes.textContent = `${frontNineDifference}`;

  //UPDATE STROKES IN
  let backNineDifference = strokes
    .slice(9, 18)
    .reduce((acc, stroke) => acc + stroke, 0);

  backNineStrokes.textContent = `${backNineDifference}`;

  //UPDATE STROKES TOTAL
  const totalStrokesPar = frontNineDifference + backNineDifference;
  totalStrokes.textContent = `${totalStrokesPar}`;
});

//OUT BUTTON
btnOut.addEventListener('click', function (e) {
  e.preventDefault();

  let frontArray = [
    Number(scoreHole1.value),
    Number(scoreHole2.value),
    Number(scoreHole3.value),
    Number(scoreHole4.value),
    Number(scoreHole5.value),
    Number(scoreHole6.value),
    Number(scoreHole7.value),
    Number(scoreHole8.value),
    Number(scoreHole9.value),
  ];

  const frontNineScore = frontArray.reduce((acc, score) => acc + score, 0);
  frontNineOut.textContent = `${frontNineScore}`;
});

//IN BUTTON
btnIn.addEventListener('click', function (e) {
  e.preventDefault();

  let backArray = [
    Number(scoreHole10.value),
    Number(scoreHole11.value),
    Number(scoreHole12.value),
    Number(scoreHole13.value),
    Number(scoreHole14.value),
    Number(scoreHole15.value),
    Number(scoreHole16.value),
    Number(scoreHole17.value),
    Number(scoreHole18.value),
  ];

  const backNineScore = backArray.reduce((acc, score) => acc + score, 0);
  backNineIn.textContent = `${backNineScore}`;
});

//TOTAL BUTTON
btnTotal.addEventListener('click', function (e) {
  e.preventDefault();

  let totalArray = [
    Number(scoreHole1.value),
    Number(scoreHole2.value),
    Number(scoreHole3.value),
    Number(scoreHole4.value),
    Number(scoreHole5.value),
    Number(scoreHole6.value),
    Number(scoreHole7.value),
    Number(scoreHole8.value),
    Number(scoreHole9.value),
    Number(scoreHole10.value),
    Number(scoreHole11.value),
    Number(scoreHole12.value),
    Number(scoreHole13.value),
    Number(scoreHole14.value),
    Number(scoreHole15.value),
    Number(scoreHole16.value),
    Number(scoreHole17.value),
    Number(scoreHole18.value),
  ];

  const totalScore = totalArray.reduce((acc, score) => acc + score, 0);
  total.textContent = `${totalScore}`;
});
