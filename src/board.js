import React, { useState, useEffect } from "react";
import "./board.css";
import Squares from "./square";
import up_arrow from "./Images/u_arrow.png";
import down_arrow from "./Images/d_arrow.png";
import left_arrow from "./Images/l_arrow.png";
import right_arrow from "./Images/r_arrow.png";

const Board = () => {
  const [position, setPosition] = React.useState(8);
  const [moveDir, setMoveDir] = React.useState(0);
  const [userMoves, setUserMoves] = React.useState([0, 0, 0]);
  const [moveNum, setMoveNum] = React.useState(0);
  const [totMoves, setTotMoves] = React.useState(0);
  const [knife, setKnife] = React.useState(0);
  const [knifeTime, setKnifeTime] = React.useState(0);
  var tmpsqrs = [9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0];
  const [squares, setSquares] = React.useState(tmpsqrs);
  const [showArrow, setShowArrow] = React.useState([1, 0, 0, 1]);
  var colBG = "#606060";
  var colYel0 = "#d0d000";
  var colYel1 = "#c0c000";
  var colYel2 = "#b0b000";
  var colYel3 = "#a0a000";
  var colYel4 = "#909000";
  const [upArrowBG, setUpArrowBG] = React.useState(colBG);
  const [downArrowBG, setDownArrowBG] = React.useState(colBG);
  const [leftArrowBG, setLeftArrowBG] = React.useState(colBG);
  const [rightArrowBG, setRightArrowBG] = React.useState(colBG);
  const [colSq0, setColSq0] = React.useState(colBG);
  const [colSq1, setColSq1] = React.useState(colBG);
  const [colSq2, setColSq2] = React.useState(colBG);
  const [colSq3, setColSq3] = React.useState(colBG);
  const [colSq4, setColSq4] = React.useState(colBG);
  const [colSq5, setColSq5] = React.useState(colBG);
  const [colSq6, setColSq6] = React.useState(colBG);
  const [colSq7, setColSq7] = React.useState(colBG);
  const [colSq8, setColSq8] = React.useState(colBG);
  const [colSq9, setColSq9] = React.useState(colBG);
  const [colSq10, setColSq10] = React.useState(colBG);
  const [colSq11, setColSq11] = React.useState(colBG);
  const [colSq12, setColSq12] = React.useState(colBG);
  const [colSq13, setColSq13] = React.useState(colBG);
  const [colSq14, setColSq14] = React.useState(colBG);
  const [colSq15, setColSq15] = React.useState(colBG);

  const moveUp = () => {
    setMoveNum(moveNum + 1);
    setTotMoves(totMoves + 1);
    switch (position) {
      case 5:
        setDownArrowBG(colBG);
        if (moveDir === 1) {
          setColSq8(colBG);
          setColSq7(colBG);
          setColSq6(colBG);
          setColSq5(colYel0);
          setColSq4(colYel1);
          setUpArrowBG(colYel0);
          setMoveDir(-1);
          squareMod(-1);
          break;
        } else {
          setColSq5(colBG)
          setColSq4(colYel0);
          setColSq3(colYel1);
          setColSq2(colYel2);
          setColSq1(colYel3);
          setColSq0(colYel4);
          setShowArrow([0, 0, 1, 1]);
          setLeftArrowBG(colYel0)
          squareMod(-2);
          break;
        }
      case 6:
        setUpArrowBG(colYel0);
        setDownArrowBG(colBG);
        if (moveDir === 1) {
          setColSq8(colBG);
          setColSq7(colBG);
          setColSq6(colYel0);
          setColSq5(colYel1);
          setColSq4(colYel2);
          setMoveDir(-1);
          squareMod(-1);
          break;
        } else {
          setColSq6(colBG);
          setColSq5(colYel0);
          setColSq4(colYel1);
          squareMod(-2);
          break;
        }
      case 7:
        setUpArrowBG(colYel0);
        setDownArrowBG(colBG);
        if (moveDir === 1) {
          setColSq8(colBG);
          setColSq7(colYel0);
          setColSq6(colYel1);
          setColSq5(colYel2);
          setColSq4(colYel3);
          setMoveDir(-1);
          squareMod(-1);
          break;
        } else {
          setColSq7(colBG);
          setColSq6(colYel0);
          setColSq5(colYel1);
          setColSq4(colYel2);
          squareMod(-2);
          break;
        }
      case 8:
        setUpArrowBG(colYel0);
        if (moveDir === 0 || moveDir === 1) {
          setColSq12(colBG);
          setColSq11(colBG);
          setColSq10(colBG);
          setColSq9(colBG);
          setColSq8(colYel0);
          setColSq7(colYel1);
          setColSq6(colYel2);
          setColSq5(colYel3);
          setColSq4(colYel4);
          setLeftArrowBG(colBG);
          setMoveDir(-1);
          squareMod(-1);
          break;
        } else {
          setColSq8(colBG);
          setColSq7(colYel0);
          setColSq6(colYel1);
          setColSq5(colYel2);
          setColSq4(colYel3);
          setShowArrow([1, 0, 1, 0]);
          setDownArrowBG(colBG);
          squareMod(-2);
          break;
        }
      case 12:
        setUpArrowBG(colYel0);
        if (moveDir === -1) {
          setColSq8(colBG);
          setColSq9(colBG);
          setColSq10(colBG);
          setColSq11(colBG);
          setColSq12(colYel0);
          setColSq13(colYel1);
          setColSq14(colYel2);
          setColSq15(colYel3);
          setColSq0(colYel4);
          setRightArrowBG(colBG);
          setMoveDir(1);
          squareMod(1)
          break;
        } else {
          setColSq12(colBG);
          setColSq13(colYel0);
          setColSq14(colYel1);
          setColSq15(colYel2);
          setColSq0(colYel3);
          setShowArrow([1, 0, 1, 0]);
          setDownArrowBG(colBG);
          squareMod(2);
          break;
        }
      case 13:
        setUpArrowBG(colYel0);
        setDownArrowBG(colBG);
        if (moveDir === -1) {
          setColSq12(colBG);
          setColSq13(colYel0);
          setColSq14(colYel1);
          setColSq15(colYel2);
          setColSq0(colYel3);
          setMoveDir(1);
          squareMod(1);
          break;
        } else {
          setColSq13(colBG);
          setColSq14(colYel0);
          setColSq15(colYel1);
          setColSq0(colYel2);
          squareMod(2);
          break;
        }
      case 14:
        setUpArrowBG(colYel0);
        setDownArrowBG(colBG);
        if (moveDir === -1) {
          setColSq12(colBG);
          setColSq13(colBG);
          setColSq14(colYel0);
          setColSq15(colYel1);
          setColSq0(colYel2);
          setMoveDir(1);
          squareMod(1);
          break;
        } else {
          setColSq14(colBG);
          setColSq15(colYel0);
          setColSq0(colYel1);
          squareMod(2);
          break;
        }
      case 15:
        setDownArrowBG(colBG);
        if (moveDir === -1) {
          setColSq12(colBG);
          setColSq13(colBG);
          setColSq14(colBG);
          setColSq15(colYel0);
          setColSq0(colYel1);
          setUpArrowBG(colYel0);
          setMoveDir(1);
          squareMod(1)
          break;
        } else {
          setColSq12(colBG);
          setColSq13(colBG);
          setColSq14(colBG);
          setColSq15(colBG);
          setColSq0(colYel0);
          setColSq1(colYel1);
          setColSq2(colYel2);
          setColSq3(colYel3);
          setColSq4(colYel4);
          setShowArrow([0, 1, 1, 0]);
          setRightArrowBG(colYel0);
          squareMod(2)
        }
      default:
    }
    if (moveNum === 2) {
      knifeTurn();
    }
  };

  const moveDown = () => {
    setMoveNum(moveNum + 1);
    setTotMoves(totMoves + 1);
    switch (position) {
      case 4:
        setDownArrowBG(colYel0);
        if (moveDir === -1) {
          setColSq0(colBG);
          setColSq1(colBG);
          setColSq2(colBG);
          setColSq3(colBG);
          setColSq4(colYel0);
          setColSq5(colYel1);
          setColSq6(colYel2);
          setColSq7(colYel3);
          setColSq8(colYel4);
          setLeftArrowBG(colBG);
          setMoveDir(1);
          squareMod(1);
          break;
        } else {
          setColSq4(colBG);
          setColSq5(colYel0);
          setColSq6(colYel1);
          setColSq7(colYel2);
          setColSq8(colYel3);
          setShowArrow([1, 0, 1, 0]);
          setUpArrowBG(colBG);
          squareMod(2);
          break;
        }
      case 5:
        setUpArrowBG(colBG);
        setDownArrowBG(colYel0);
        if (moveDir === -1) {
          setColSq4(colBG);
          setColSq5(colYel0);
          setColSq6(colYel1);
          setColSq7(colYel2);
          setColSq8(colYel3);
          setMoveDir(1);
          squareMod(1);
          break;
        } else {
          setColSq5(colBG);
          setColSq6(colYel0);
          setColSq7(colYel1);
          setColSq8(colYel2);
          squareMod(2);
          break;
        }
      case 6:
        setUpArrowBG(colBG);
        setDownArrowBG(colYel0);
        if (moveDir === -1) {
          setColSq4(colBG);
          setColSq5(colBG);
          setColSq6(colYel0);
          setColSq7(colYel1);
          setColSq8(colYel2);
          setMoveDir(1);
          squareMod(1);
          break;
        } else {
          setColSq6(colBG);
          setColSq7(colYel0);
          setColSq8(colYel1);
          squareMod(2);
          break;
        }
      case 7:
        setUpArrowBG(colBG);
        if (moveDir === -1) {
          setColSq4(colBG);
          setColSq5(colBG);
          setColSq6(colBG);
          setColSq7(colYel0);
          setColSq8(colYel1);
          setDownArrowBG(colYel0);
          setMoveDir(1);
          squareMod(1);
          break;
        } else {
          setColSq7(colBG)
          setColSq8(colYel0);
          setColSq9(colYel1);
          setColSq10(colYel2);
          setColSq11(colYel3);
          setColSq12(colYel4);
          setShowArrow([1, 0, 0, 1]);
          setLeftArrowBG(colYel0);
          squareMod(2);
          break;
        }
      case 13:
        setUpArrowBG(colBG);
        if (moveDir === 1) {
          setColSq0(colBG);
          setColSq15(colBG);
          setColSq14(colBG);
          setColSq13(colYel0);
          setColSq12(colYel1);
          setDownArrowBG(colYel0);
          setMoveDir(-1);
          squareMod(-1)
          break;
        } else {
          setColSq0(colBG);
          setColSq15(colBG);
          setColSq14(colBG);
          setColSq13(colBG);
          setColSq12(colYel0);
          setColSq11(colYel1);
          setColSq10(colYel2);
          setColSq9(colYel3);
          setColSq8(colYel4);
          setShowArrow([1, 1, 0, 0]);
          setRightArrowBG(colYel0);
          squareMod(-2);
          break;
        }
      case 14:
        setUpArrowBG(colBG);
        setDownArrowBG(colYel0);
        if (moveDir === 1) {
          setColSq0(colBG);
          setColSq15(colBG);
          setColSq14(colYel0);
          setColSq13(colYel1);
          setColSq12(colYel2);
          setMoveDir(-1);
          squareMod(-1);
          break;
        } else {
          setColSq14(colBG);
          setColSq13(colYel0);
          setColSq12(colYel1);
          squareMod(-2);
          break;
        }
      case 15:
        setUpArrowBG(colBG);
        setDownArrowBG(colYel0);
        if (moveDir === 1) {
          setColSq0(colBG);
          setColSq15(colYel0);
          setColSq14(colYel1);
          setColSq13(colYel2);
          setColSq12(colYel3);
          setMoveDir(-1);
          squareMod(-1);
          break;
        } else {
          setColSq15(colBG);
          setColSq14(colYel0);
          setColSq13(colYel1);
          setColSq12(colYel2);
          squareMod(-2);
          break;
        }
      default:
        setDownArrowBG(colYel0);
        if (moveDir === 1) {
          setColSq1(colBG);
          setColSq2(colBG);
          setColSq3(colBG);
          setColSq4(colBG);
          setColSq0(colYel0);
          setColSq15(colYel1);
          setColSq14(colYel2);
          setColSq13(colYel3);
          setColSq12(colYel4);
          setRightArrowBG(colBG);
          setMoveDir(-1);
          squareMod(-1);
          break;
        } else {
          setColSq0(colBG);
          setColSq15(colYel0);
          setColSq14(colYel1);
          setColSq13(colYel2);
          setColSq12(colYel3);
          setShowArrow([1, 0, 1, 0]);
          setUpArrowBG(colBG);
          squareMod(-2);
          break;
        }
    }
    if (moveNum === 2) {
      knifeTurn();
    }
  };

  const moveRight = () => {
    setMoveNum(moveNum + 1);
    setTotMoves(totMoves + 1);
    switch (position) {
      case 0:
        setRightArrowBG(colYel0);
        if (moveDir === -1) {
          setColSq15(colBG);
          setColSq14(colBG);
          setColSq13(colBG);
          setColSq12(colBG);
          setColSq0(colYel0);
          setColSq1(colYel1);
          setColSq2(colYel2);
          setColSq3(colYel3);
          setColSq4(colYel4);
          setDownArrowBG(colBG);
          setMoveDir(1);
          squareMod(1);
          break;
        } else {
          setColSq0(colBG);
          setColSq1(colYel0);
          setColSq2(colYel1);
          setColSq3(colYel2);
          setColSq4(colYel3);
          setShowArrow([0, 1, 0, 1]);
          setLeftArrowBG(colBG);
          squareMod(2);
          break;
        }
      case 1:
        setRightArrowBG(colYel0);
        setLeftArrowBG(colBG);
        if (moveDir === -1) {
          setColSq0(colBG)
          setColSq1(colYel0);
          setColSq2(colYel1);
          setColSq3(colYel2);
          setColSq4(colYel3);
          setMoveDir(1);
          squareMod(1);
          break;
        } else {
          setColSq1(colBG);
          setColSq2(colYel0);
          setColSq3(colYel1);
          setColSq4(colYel2);
          squareMod(2);
          break;
        }
      case 2:
        setRightArrowBG(colYel0);
        setLeftArrowBG(colBG);
        if (moveDir === -1) {
          setColSq0(colBG)
          setColSq1(colBG)
          setColSq2(colYel0);
          setColSq3(colYel1);
          setColSq4(colYel2);
          setMoveDir(1);
          squareMod(1);
          break;
        } else {
          setColSq2(colBG);
          setColSq3(colYel0);
          setColSq4(colYel1);
          squareMod(2);
          break;
        }
      case 3:
        setLeftArrowBG(colBG);
        if (moveDir === -1) {
          setColSq0(colBG);
          setColSq1(colBG);
          setColSq2(colBG);
          setColSq3(colYel0);
          setColSq4(colYel1);
          setRightArrowBG(colYel0);
          setMoveDir(1);
          squareMod(1);
          break;
        } else {
          setColSq3(colBG);
          setColSq4(colYel0);
          setColSq5(colYel1);
          setColSq6(colYel2);
          setColSq7(colYel3);
          setColSq8(colYel4);
          setShowArrow([0, 0, 1, 1]);
          setDownArrowBG(colYel0);
          squareMod(2);
          break;
        }
      case 9:
        setLeftArrowBG(colBG);
        if (moveDir === 1) {
          setColSq12(colBG);
          setColSq11(colBG);
          setColSq10(colBG);
          setColSq9(colYel0);
          setColSq8(colYel1);
          setRightArrowBG(colYel0);
          setMoveDir(-1);
          squareMod(-1);
          break;
        } else {
          setColSq9(colBG);
          setColSq8(colYel0);
          setColSq7(colYel1);
          setColSq6(colYel2);
          setColSq5(colYel3);
          setColSq4(colYel4);
          setShowArrow([1, 0, 0, 1]);
          setUpArrowBG(colYel0);
          squareMod(-2);
          break;
        }
      case 10:
        setLeftArrowBG(colBG);
        setRightArrowBG(colYel0);
        if (moveDir === 1) {
          setColSq12(colBG);
          setColSq11(colBG);
          setColSq10(colYel0);
          setColSq9(colYel1);
          setColSq8(colYel2);
          setMoveDir(-1);
          squareMod(-1);
          break;
        } else {
          setColSq10(colBG);
          setColSq9(colYel0);
          setColSq8(colYel1);
          squareMod(-2);
          break;
        }
      case 11:
        setLeftArrowBG(colBG);
        setRightArrowBG(colYel0);
        if (moveDir === 1) {
          setColSq12(colBG)
          setColSq11(colYel0);
          setColSq10(colYel1);
          setColSq9(colYel2);
          setColSq8(colYel3);
          setMoveDir(-1);
          squareMod(-1);
          break;
        } else {
          setColSq11(colBG);
          setColSq10(colYel0);
          setColSq9(colYel1);
          setColSq8(colYel2);
          squareMod(-2);
          break;
        }
      case 12:
        setRightArrowBG(colYel0);
        if (moveDir === 1) {
          setColSq0(colBG);
          setColSq15(colBG);
          setColSq14(colBG);
          setColSq13(colBG);
          setColSq12(colYel0);
          setColSq11(colYel1);
          setColSq10(colYel2);
          setColSq9(colYel3);
          setColSq8(colYel4);
          setUpArrowBG(colBG);
          setMoveDir(-1);
          squareMod(-1);
          break;
        } else {
          setColSq12(colBG);
          setColSq11(colYel0);
          setColSq10(colYel1);
          setColSq9(colYel2);
          setColSq8(colYel3);
          setShowArrow([0, 1, 0, 1]);
          setLeftArrowBG(colBG);
          squareMod(-2);
          break;
        }
      default:
    }
    if (moveNum === 2) {
      knifeTurn();
    }
  };

  const moveLeft = () => {
    setMoveNum(moveNum + 1);
    setTotMoves(totMoves + 1);
    switch (position) {
      case 1:
        setRightArrowBG(colBG);
        if (moveDir === 1) {
          setColSq4(colBG);
          setColSq3(colBG);
          setColSq2(colBG);
          setColSq1(colYel0);
          setColSq0(colYel1);
          setLeftArrowBG(colYel0);
          setMoveDir(-1);
          squareMod(-1);
          break;
        } else {
          setColSq1(colBG);
          setColSq0(colYel0);
          setColSq15(colYel1);
          setColSq14(colYel2);
          setColSq13(colYel3);
          setColSq12(colYel4);
          setShowArrow([0, 1, 1, 0]);
          setDownArrowBG(colYel0);
          squareMod(-2);
          break;
        }
      case 2:
        setLeftArrowBG(colYel0);
        setRightArrowBG(colBG);
        if (moveDir === 1) {
          setColSq4(colBG);
          setColSq3(colBG);
          setColSq2(colYel0);
          setColSq1(colYel1);
          setColSq0(colYel2);
          setMoveDir(-1);
          squareMod(-1);
          break;
        } else {
          setColSq2(colBG);
          setColSq1(colYel0);
          setColSq0(colYel1);
          squareMod(-2);
          break;
        }
      case 3:
        setLeftArrowBG(colYel0);
        setRightArrowBG(colBG);
        if (moveDir === 1) {
          setColSq4(colBG);
          setColSq3(colYel0);
          setColSq2(colYel1);
          setColSq1(colYel2);
          setColSq0(colYel3);
          setMoveDir(-1);
          squareMod(-1);
          break;
        } else {
          setColSq3(colBG);
          setColSq2(colYel0);
          setColSq1(colYel1);
          setColSq0(colYel2);
          squareMod(-2);
          break;
        }
      case 4:
        setLeftArrowBG(colYel0);
        if (moveDir === 1) {
          setColSq8(colBG);
          setColSq7(colBG);
          setColSq6(colBG);
          setColSq5(colBG);
          setColSq4(colYel0);
          setColSq3(colYel1);
          setColSq2(colYel2);
          setColSq1(colYel3);
          setColSq0(colYel4);
          setDownArrowBG(colBG);
          setMoveDir(-1);
          squareMod(-1);
          break;
        } else {
          setColSq4(colBG);
          setColSq3(colYel0);
          setColSq2(colYel1);
          setColSq1(colYel2);
          setColSq0(colYel3);
          setShowArrow([0, 1, 0, 1]);
          setRightArrowBG(colBG);
          squareMod(-2);
          break;
        }
      case 8:
        setLeftArrowBG(colYel0);
        if (moveDir === 0 || moveDir === -1) {
          setColSq4(colBG);
          setColSq5(colBG);
          setColSq6(colBG);
          setColSq7(colBG);
          setColSq8(colYel0);
          setColSq9(colYel1);
          setColSq10(colYel2);
          setColSq11(colYel3);
          setColSq12(colYel4);
          setUpArrowBG(colBG);
          setMoveDir(1);
          squareMod(1);
          break;
        } else {
          setColSq8(colBG);
          setColSq9(colYel0);
          setColSq10(colYel1);
          setColSq11(colYel2);
          setColSq12(colYel3);
          setShowArrow([0, 1, 0, 1]);
          setRightArrowBG(colBG);
          squareMod(2);
          break;
        }
      case 9:
        setLeftArrowBG(colYel0);
        setRightArrowBG(colBG);
        if (moveDir === -1) {
          setColSq8(colBG)
          setColSq9(colYel0);
          setColSq10(colYel1);
          setColSq11(colYel2);
          setColSq12(colYel3);
          setMoveDir(1);
          squareMod(1);
          break;
        } else {
          setColSq9(colBG);
          setColSq10(colYel0);
          setColSq11(colYel1);
          setColSq12(colYel2);
          squareMod(2);
          break;
        }
      case 10:
        setLeftArrowBG(colYel0);
        setRightArrowBG(colBG);
        if (moveDir === -1) {
          setColSq8(colBG);
          setColSq9(colBG);
          setColSq10(colYel0);
          setColSq11(colYel1);
          setColSq12(colYel2);
          setMoveDir(1);
          squareMod(1);
          break;
        } else {
          setColSq10(colBG);
          setColSq11(colYel0);
          setColSq12(colYel1);
          squareMod(2);
          break;
        }
      case 11:
        setRightArrowBG(colBG);
        if (moveDir === -1) {
          setColSq8(colBG);
          setColSq9(colBG);
          setColSq10(colBG);
          setColSq11(colYel0);
          setColSq12(colYel1);
          setLeftArrowBG(colYel0);
          setMoveDir(1);
          squareMod(1);
          break;
        } else {
          setColSq11(colBG);
          setColSq12(colYel0);
          setColSq13(colYel1);
          setColSq14(colYel2);
          setColSq15(colYel3);
          setColSq0(colYel4);
          setShowArrow([1, 1, 0, 0]);
          setUpArrowBG(colYel0);
          squareMod(2);
          break;
        }
      default:
    }
    if (moveNum === 2) {
      knifeTurn();
    }
  };

  const moveStay = () => {
    setMoveNum(moveNum + 1);
    setTotMoves(totMoves + 1);
    squareMod(0);
    if (moveNum === 2) {
      knifeTurn();
    }
  };

  const squareMod = dir => {
    userMoves[moveNum] = dir;
    setUserMoves([...userMoves])
    console.log(userMoves)
    if (dir === -2 || dir === 2) {
      if (position === 15 && dir === 2) {
        squares[15] = 0;
        squares[0] = 1;
        setPosition(0);
        setSquares([...squares]);
      } else if (position === 0 && dir === -2) {
        squares[0] = 0;
        squares[15] = 1;
        setPosition(15);
        setSquares([...squares]);
      } else {
        setPosition(position + dir / 2);
        squares[position] = 0;
        squares[position + dir / 2] = 1;
        setSquares([...squares]);
      }
    }
  };

  const knifeTurn = async () => {
    for (var j = 1; j <= 3; j++) {
      (function(j) {
        setTimeout(function() {
          setKnifeTime(j);
        }, 600 * j);
      })(j);
    }
    await setTimeout(function() {
      setMoveNum(0);
    }, 2700);
    setUserMoves([0, 0, 0]);
  };

  return (
    <div className="Layout">
      <div
        id="pos0"
        className="square-pos"
        style={{ gridColumnStart: 2, gridRowStart: 2, backgroundColor: colSq0 }}
      >
        <Squares objSqrs={squares} posSqr={0} />
      </div>
      <div
        id="pos1"
        className="square-pos"
        style={{ gridColumnStart: 3, gridRowStart: 2, backgroundColor: colSq1 }}
      >
        <Squares objSqrs={squares} posSqr={1} />
      </div>
      <div
        id="pos2"
        className="square-pos"
        style={{ gridColumnStart: 4, gridRowStart: 2, backgroundColor: colSq2 }}
      >
        <Squares objSqrs={squares} posSqr={2} />
      </div>
      <div
        id="pos3"
        className="square-pos"
        style={{ gridColumnStart: 5, gridRowStart: 2, backgroundColor: colSq3 }}
      >
        <Squares objSqrs={squares} posSqr={3} />
      </div>
      <div
        id="pos4"
        className="square-pos"
        style={{ gridColumnStart: 6, gridRowStart: 2, backgroundColor: colSq4 }}
      >
        <Squares objSqrs={squares} posSqr={4} />
      </div>
      <div
        id="pos5"
        className="square-pos"
        style={{ gridColumnStart: 6, gridRowStart: 3, backgroundColor: colSq5 }}
      >
        <Squares objSqrs={squares} posSqr={5} />
      </div>
      <div
        id="pos6"
        className="square-pos"
        style={{ gridColumnStart: 6, gridRowStart: 4, backgroundColor: colSq6 }}
      >
        <Squares objSqrs={squares} posSqr={6} />
      </div>
      <div
        id="pos7"
        className="square-pos"
        style={{ gridColumnStart: 6, gridRowStart: 5, backgroundColor: colSq7 }}
      >
        <Squares objSqrs={squares} posSqr={7} />
      </div>
      <div
        id="pos8"
        className="square-pos"
        style={{ gridColumnStart: 6, gridRowStart: 6, backgroundColor: colSq8 }}
      >
        <Squares objSqrs={squares} posSqr={8} />
      </div>
      <div
        id="pos9"
        className="square-pos"
        style={{ gridColumnStart: 5, gridRowStart: 6, backgroundColor: colSq9 }}
      >
        <Squares objSqrs={squares} posSqr={9} />
      </div>
      <div
        id="pos10"
        className="square-pos"
        style={{
          gridColumnStart: 4,
          gridRowStart: 6,
          backgroundColor: colSq10
        }}
      >
        <Squares objSqrs={squares} posSqr={10} />
      </div>
      <div
        id="pos11"
        className="square-pos"
        style={{
          gridColumnStart: 3,
          gridRowStart: 6,
          backgroundColor: colSq11
        }}
      >
        <Squares objSqrs={squares} posSqr={11} />
      </div>
      <div
        id="pos12"
        className="square-pos"
        style={{
          gridColumnStart: 2,
          gridRowStart: 6,
          backgroundColor: colSq12
        }}
      >
        <Squares objSqrs={squares} posSqr={12} />
      </div>
      <div
        id="pos13"
        className="square-pos"
        style={{
          gridColumnStart: 2,
          gridRowStart: 5,
          backgroundColor: colSq13
        }}
      >
        <Squares objSqrs={squares} posSqr={13} />
      </div>
      <div
        id="pos14"
        className="square-pos"
        style={{
          gridColumnStart: 2,
          gridRowStart: 4,
          backgroundColor: colSq14
        }}
      >
        <Squares objSqrs={squares} posSqr={14} />
      </div>
      <div
        id="pos15"
        className="square-pos"
        style={{
          gridColumnStart: 2,
          gridRowStart: 3,
          backgroundColor: colSq15
        }}
      >
        <Squares objSqrs={squares} posSqr={15} />
      </div>
      <div className="message1-area">
        <h3>Moves : {totMoves}</h3>
      </div>
      <div className="message2-area">
        <h4>Position : {position} </h4>
      </div>
      <div className="knifeTurn">
        <div className="knife1">
          {knifeTime > 0 && moveNum === 3 ? "@" : null}
        </div>
        <div className="knife2">
          {knifeTime > 1 && moveNum === 3 ? "@" : null}
        </div>
        <div className="knife3">
          {knifeTime > 2 && moveNum === 3 ? "@" : null}
        </div>
      </div>
      <div
        className="showButtons"
        style={moveNum === 3 ? { visibility: "hidden" } : null}
      >
        {showArrow[0] === 1 ? (
          <img
            id="butUp"
            src={up_arrow}
            style={{ backgroundColor: upArrowBG }}
            onClick={() => moveUp()}
            alt="arrow"
          />
        ) : null}
        {showArrow[1] === 1 ? (
          <img
            id="butRight"
            src={right_arrow}
            style={{ backgroundColor: rightArrowBG }}
            onClick={() => moveRight()}
            alt="arrow"
          />
        ) : null}
        {showArrow[2] === 1 ? (
          <img
            id="butDown"
            src={down_arrow}
            style={{ backgroundColor: downArrowBG }}
            onClick={() => moveDown()}
            alt="arrow"
          />
        ) : null}
        {showArrow[3] === 1 ? (
          <img
            id="butLeft"
            src={left_arrow}
            style={{ backgroundColor: leftArrowBG }}
            onClick={() => moveLeft()}
            alt="arrow"
          />
        ) : null}
        <button id="butStay" onClick={() => moveStay()}></button>
      </div>
    </div>
  );
};
export default Board;
