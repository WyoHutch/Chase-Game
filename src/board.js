import React, { useState, useEffect } from "react";
import axios from "axios";
import "./board.css";
import Squares from "./square";
import up_arrow from "./Images/u_arrow.png";
import down_arrow from "./Images/d_arrow.png";
import left_arrow from "./Images/l_arrow.png";
import right_arrow from "./Images/r_arrow.png";

const Board = () => {
  const [position, setPosition] = useState(8);
  const [moveDir, setMoveDir] = useState(0);
  const [userMoves, setUserMoves] = useState([0, 0, 0]);
  const [moveNum, setMoveNum] = useState(0);
  const [totMoves, setTotMoves] = useState(0);
  const [posKnife, setPosKnife] = useState(0);
  const [showKnife, setShowKnife] = useState(true);
  const [knifeTime, setKnifeTime] = useState(0);
  var tmpsqrs = [9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0];
  const [squares, setSquares] = useState(tmpsqrs);
  const [showArrow, setShowArrow] = useState([1, 0, 0, 1]);
  const [gameMess, setGameMess] = useState("Good Luck");
  var colBG = "#707070";
  var colYel0 = "#d0d000";
  var colYel1 = "#c0c000";
  var colYel2 = "#b0b000";
  var colYel3 = "#a0a000";
  var colYel4 = "#909000";
  const [upArrowBG, setUpArrowBG] = useState(colBG);
  const [downArrowBG, setDownArrowBG] = useState(colBG);
  const [leftArrowBG, setLeftArrowBG] = useState(colBG);
  const [rightArrowBG, setRightArrowBG] = useState(colBG);
  const [colSq0, setColSq0] = useState(colBG);
  const [colSq1, setColSq1] = useState(colBG);
  const [colSq2, setColSq2] = useState(colBG);
  const [colSq3, setColSq3] = useState(colBG);
  const [colSq4, setColSq4] = useState(colBG);
  const [colSq5, setColSq5] = useState(colBG);
  const [colSq6, setColSq6] = useState(colBG);
  const [colSq7, setColSq7] = useState(colBG);
  const [colSq8, setColSq8] = useState(colBG);
  const [colSq9, setColSq9] = useState(colBG);
  const [colSq10, setColSq10] = useState(colBG);
  const [colSq11, setColSq11] = useState(colBG);
  const [colSq12, setColSq12] = useState(colBG);
  const [colSq13, setColSq13] = useState(colBG);
  const [colSq14, setColSq14] = useState(colBG);
  const [colSq15, setColSq15] = useState(colBG);

  useEffect(() => {
    game_end();
  }, [posKnife]);

  const moveUp = () => {
    setMoveNum(moveNum + 1);
    setTotMoves(totMoves + 1);
    switch (position) {
      case 5:
        setDownArrowBG(colBG);
        if (moveDir === -1) {
          setColSq5(colBG);
          setColSq4(colYel0);
          setColSq3(colYel1);
          setColSq2(colYel2);
          setColSq1(colYel3);
          setColSq0(colYel4);
          if (posKnife >= 0 && posKnife < 4) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setShowArrow([0, 0, 1, 1]);
          setLeftArrowBG(colYel0);
          squareMod(-2);
          break;
        } else {
          setColSq8(colBG);
          setColSq7(colBG);
          setColSq6(colBG);
          setColSq5(colYel0);
          setColSq4(colYel1);
          if (posKnife === 4) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setUpArrowBG(colYel0);
          setMoveDir(-1);
          squareMod(-1);
          break;
        }
      case 6:
        setUpArrowBG(colYel0);
        setDownArrowBG(colBG);
        if (moveDir === -1) {
          setColSq6(colBG);
          setColSq5(colYel0);
          setColSq4(colYel1);
          if (posKnife === 4) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          squareMod(-2);
          break;
        } else {
          setColSq8(colBG);
          setColSq7(colBG);
          setColSq6(colYel0);
          setColSq5(colYel1);
          setColSq4(colYel2);
          if (posKnife >= 4 && posKnife < 6) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setMoveDir(-1);
          squareMod(-1);
          break;
        }
      case 7:
        setUpArrowBG(colYel0);
        setDownArrowBG(colBG);
        if (moveDir === -1) {
          setColSq7(colBG);
          setColSq6(colYel0);
          setColSq5(colYel1);
          setColSq4(colYel2);
          if (posKnife >= 4 && posKnife < 6) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          squareMod(-2);
          break;
        } else {
          setColSq8(colBG);
          setColSq7(colYel0);
          setColSq6(colYel1);
          setColSq5(colYel2);
          setColSq4(colYel3);
          if (posKnife >= 4 && posKnife < 7) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setMoveDir(-1);
          squareMod(-1);
          break;
        }
      case 8:
        setUpArrowBG(colYel0);
        if (moveDir === -1) {
          setColSq8(colBG);
          setColSq7(colYel0);
          setColSq6(colYel1);
          setColSq5(colYel2);
          setColSq4(colYel3);
          if (posKnife >= 4 && posKnife < 7) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setShowArrow([1, 0, 1, 0]);
          setDownArrowBG(colBG);
          squareMod(-2);
          break;
        } else {
          setColSq12(colBG);
          setColSq11(colBG);
          setColSq10(colBG);
          setColSq9(colBG);
          setColSq8(colYel0);
          setColSq7(colYel1);
          setColSq6(colYel2);
          setColSq5(colYel3);
          setColSq4(colYel4);
          if (posKnife >= 4 && posKnife < 8) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setLeftArrowBG(colBG);
          setMoveDir(-1);
          squareMod(-1);
          break;
        }
      case 12:
        setUpArrowBG(colYel0);
        if (moveDir === 1) {
          setColSq12(colBG);
          setColSq13(colYel0);
          setColSq14(colYel1);
          setColSq15(colYel2);
          setColSq0(colYel3);
          if ((posKnife > 13 && posKnife <= 15) || posKnife === 0) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setShowArrow([1, 0, 1, 0]);
          setDownArrowBG(colBG);
          squareMod(2);
          break;
        } else {
          setColSq8(colBG);
          setColSq9(colBG);
          setColSq10(colBG);
          setColSq11(colBG);
          setColSq12(colYel0);
          setColSq13(colYel1);
          setColSq14(colYel2);
          setColSq15(colYel3);
          setColSq0(colYel4);
          if ((posKnife > 12 && posKnife <= 15) || posKnife === 0) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setRightArrowBG(colBG);
          setMoveDir(1);
          squareMod(1);
          break;
        }
      case 13:
        setUpArrowBG(colYel0);
        setDownArrowBG(colBG);
        if (moveDir === 1) {
          setColSq13(colBG);
          setColSq14(colYel0);
          setColSq15(colYel1);
          setColSq0(colYel2);
          if (posKnife === 15 || posKnife === 0) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          squareMod(2);
          break;
        } else {
          setColSq12(colBG);
          setColSq13(colYel0);
          setColSq14(colYel1);
          setColSq15(colYel2);
          setColSq0(colYel3);
          if ((posKnife > 13 && posKnife <= 15) || posKnife === 0) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setMoveDir(1);
          squareMod(1);
          break;
        }
      case 14:
        setUpArrowBG(colYel0);
        setDownArrowBG(colBG);
        if (moveDir === 1) {
          setColSq14(colBG);
          setColSq15(colYel0);
          setColSq0(colYel1);
          if (posKnife === 0) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          squareMod(2);
          break;
        } else {
          setColSq12(colBG);
          setColSq13(colBG);
          setColSq14(colYel0);
          setColSq15(colYel1);
          setColSq0(colYel2);
          if (posKnife === 15 || posKnife === 0) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setMoveDir(1);
          squareMod(1);
          break;
        }
      case 15:
        setDownArrowBG(colBG);
        if (moveDir === 1) {
          setColSq12(colBG);
          setColSq13(colBG);
          setColSq14(colBG);
          setColSq15(colBG);
          setColSq0(colYel0);
          setColSq1(colYel1);
          setColSq2(colYel2);
          setColSq3(colYel3);
          setColSq4(colYel4);
          if (posKnife >= 1 && posKnife <= 4) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setShowArrow([0, 1, 1, 0]);
          setRightArrowBG(colYel0);
          squareMod(2);
          break;
        } else {
          setColSq12(colBG);
          setColSq13(colBG);
          setColSq14(colBG);
          setColSq15(colYel0);
          setColSq0(colYel1);
          if (posKnife === 0) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setUpArrowBG(colYel0);
          setMoveDir(1);
          squareMod(1);
          break;
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
        if (moveDir === 1) {
          setColSq4(colBG);
          setColSq5(colYel0);
          setColSq6(colYel1);
          setColSq7(colYel2);
          setColSq8(colYel3);
          if (posKnife > 5 && posKnife <= 8) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setShowArrow([1, 0, 1, 0]);
          setUpArrowBG(colBG);
          squareMod(2);
          break;
        } else {
          setColSq0(colBG);
          setColSq1(colBG);
          setColSq2(colBG);
          setColSq3(colBG);
          setColSq4(colYel0);
          setColSq5(colYel1);
          setColSq6(colYel2);
          setColSq7(colYel3);
          setColSq8(colYel4);
          if (posKnife > 4 && posKnife <= 8) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setLeftArrowBG(colBG);
          setMoveDir(1);
          squareMod(1);
          break;
        }
      case 5:
        setUpArrowBG(colBG);
        setDownArrowBG(colYel0);
        if (moveDir === 1) {
          setColSq5(colBG);
          setColSq6(colYel0);
          setColSq7(colYel1);
          setColSq8(colYel2);
          if (posKnife > 6 && posKnife <= 8) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          squareMod(2);
          break;
        } else {
          setColSq4(colBG);
          setColSq5(colYel0);
          setColSq6(colYel1);
          setColSq7(colYel2);
          setColSq8(colYel3);
          if (posKnife > 5 && posKnife <= 8) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setMoveDir(1);
          squareMod(1);
          break;
        }
      case 6:
        setUpArrowBG(colBG);
        setDownArrowBG(colYel0);
        if (moveDir === 1) {
          setColSq6(colBG);
          setColSq7(colYel0);
          setColSq8(colYel1);
          if (posKnife === 8) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          squareMod(2);
          break;
        } else {
          setColSq4(colBG);
          setColSq5(colBG);
          setColSq6(colYel0);
          setColSq7(colYel1);
          setColSq8(colYel2);
          if (posKnife > 6 && posKnife <= 8) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setMoveDir(1);
          squareMod(1);
          break;
        }
      case 7:
        setUpArrowBG(colBG);
        if (moveDir === 1) {
          setColSq7(colBG);
          setColSq8(colYel0);
          setColSq9(colYel1);
          setColSq10(colYel2);
          setColSq11(colYel3);
          setColSq12(colYel4);
          if (posKnife > 8 && posKnife <= 12) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setShowArrow([1, 0, 0, 1]);
          setLeftArrowBG(colYel0);
          squareMod(2);
          break;
        } else {
          setColSq4(colBG);
          setColSq5(colBG);
          setColSq6(colBG);
          setColSq7(colYel0);
          setColSq8(colYel1);
          if (posKnife === 8) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setDownArrowBG(colYel0);
          setMoveDir(1);
          squareMod(1);
          break;
        }
      case 13:
        setUpArrowBG(colBG);
        if (moveDir === -1) {
          setColSq0(colBG);
          setColSq15(colBG);
          setColSq14(colBG);
          setColSq13(colBG);
          setColSq12(colYel0);
          setColSq11(colYel1);
          setColSq10(colYel2);
          setColSq9(colYel3);
          setColSq8(colYel4);
          if (posKnife >= 8 && posKnife < 12) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setShowArrow([1, 1, 0, 0]);
          setRightArrowBG(colYel0);
          squareMod(-2);
          break;
        } else {
          setColSq0(colBG);
          setColSq15(colBG);
          setColSq14(colBG);
          setColSq13(colYel0);
          setColSq12(colYel1);
          if (posKnife === 12) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setDownArrowBG(colYel0);
          setMoveDir(-1);
          squareMod(-1);
          break;
        }
      case 14:
        setUpArrowBG(colBG);
        setDownArrowBG(colYel0);
        if (moveDir === -1) {
          setColSq14(colBG);
          setColSq13(colYel0);
          setColSq12(colYel1);
          if (posKnife === 12) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          squareMod(-2);
          break;
        } else {
          setColSq0(colBG);
          setColSq15(colBG);
          setColSq14(colYel0);
          setColSq13(colYel1);
          setColSq12(colYel2);
          if (posKnife >= 12 && posKnife < 14) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setMoveDir(-1);
          squareMod(-1);
          break;
        }
      case 15:
        setUpArrowBG(colBG);
        setDownArrowBG(colYel0);
        if (moveDir === -1) {
          setColSq15(colBG);
          setColSq14(colYel0);
          setColSq13(colYel1);
          setColSq12(colYel2);
          if (posKnife >= 12 && posKnife < 14) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          squareMod(-2);
          break;
        } else {
          setColSq0(colBG);
          setColSq15(colYel0);
          setColSq14(colYel1);
          setColSq13(colYel2);
          setColSq12(colYel3);
          if (posKnife >= 12 && posKnife < 15) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setMoveDir(-1);
          squareMod(-1);
          break;
        }
      default:
        setDownArrowBG(colYel0);
        if (moveDir === -1) {
          setColSq0(colBG);
          setColSq15(colYel0);
          setColSq14(colYel1);
          setColSq13(colYel2);
          setColSq12(colYel3);
          if (posKnife >= 12 && posKnife <= 14) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setShowArrow([1, 0, 1, 0]);
          setUpArrowBG(colBG);
          squareMod(-2);
          break;
        } else {
          setColSq1(colBG);
          setColSq2(colBG);
          setColSq3(colBG);
          setColSq4(colBG);
          setColSq0(colYel0);
          setColSq15(colYel1);
          setColSq14(colYel2);
          setColSq13(colYel3);
          setColSq12(colYel4);
          if (posKnife >= 12 && posKnife <= 15) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setRightArrowBG(colBG);
          setMoveDir(-1);
          squareMod(-1);
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
        if (moveDir === 1) {
          setColSq0(colBG);
          setColSq1(colYel0);
          setColSq2(colYel1);
          setColSq3(colYel2);
          setColSq4(colYel3);
          if (posKnife > 1 && posKnife <= 4) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setShowArrow([0, 1, 0, 1]);
          setLeftArrowBG(colBG);
          squareMod(2);
          break;
        } else {
          setColSq15(colBG);
          setColSq14(colBG);
          setColSq13(colBG);
          setColSq12(colBG);
          setColSq0(colYel0);
          setColSq1(colYel1);
          setColSq2(colYel2);
          setColSq3(colYel3);
          setColSq4(colYel4);
          if (posKnife > 0 && posKnife <= 4) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setDownArrowBG(colBG);
          setMoveDir(1);
          squareMod(1);
          break;
        }
      case 1:
        setRightArrowBG(colYel0);
        setLeftArrowBG(colBG);
        if (moveDir === 1) {
          setColSq1(colBG);
          setColSq2(colYel0);
          setColSq3(colYel1);
          setColSq4(colYel2);
          if (posKnife > 2 && posKnife <= 4) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          squareMod(2);
          break;
        } else {
          setColSq0(colBG);
          setColSq1(colYel0);
          setColSq2(colYel1);
          setColSq3(colYel2);
          setColSq4(colYel3);
          if (posKnife > 1 && posKnife <= 4) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setMoveDir(1);
          squareMod(1);
          break;
        }
      case 2:
        setRightArrowBG(colYel0);
        setLeftArrowBG(colBG);
        if (moveDir === 1) {
          setColSq2(colBG);
          setColSq3(colYel0);
          setColSq4(colYel1);
          if (posKnife === 4) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          squareMod(2);
          break;
        } else {
          setColSq0(colBG);
          setColSq1(colBG);
          setColSq2(colYel0);
          setColSq3(colYel1);
          setColSq4(colYel2);
          if (posKnife > 2 && posKnife <= 4) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setMoveDir(1);
          squareMod(1);
          break;
        }
      case 3:
        setLeftArrowBG(colBG);
        if (moveDir === 1) {
          setColSq3(colBG);
          setColSq4(colYel0);
          setColSq5(colYel1);
          setColSq6(colYel2);
          setColSq7(colYel3);
          setColSq8(colYel4);
          if (posKnife > 4 && posKnife <= 8) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setShowArrow([0, 0, 1, 1]);
          setDownArrowBG(colYel0);
          squareMod(2);
          break;
        } else {
          setColSq0(colBG);
          setColSq1(colBG);
          setColSq2(colBG);
          setColSq3(colYel0);
          setColSq4(colYel1);
          if (posKnife === 4) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setRightArrowBG(colYel0);
          setMoveDir(1);
          squareMod(1);
          break;
        }
      case 9:
        setLeftArrowBG(colBG);
        if (moveDir === -1) {
          setColSq9(colBG);
          setColSq8(colYel0);
          setColSq7(colYel1);
          setColSq6(colYel2);
          setColSq5(colYel3);
          setColSq4(colYel4);
          if (posKnife >= 4 && posKnife < 8) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setShowArrow([1, 0, 0, 1]);
          setUpArrowBG(colYel0);
          squareMod(-2);
          break;
        } else {
          setColSq12(colBG);
          setColSq11(colBG);
          setColSq10(colBG);
          setColSq9(colYel0);
          setColSq8(colYel1);
          setRightArrowBG(colYel0);
          if (posKnife === 8) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setMoveDir(-1);
          squareMod(-1);
          break;
        }
      case 10:
        setLeftArrowBG(colBG);
        setRightArrowBG(colYel0);
        if (moveDir === -1) {
          setColSq10(colBG);
          setColSq9(colYel0);
          setColSq8(colYel1);
          if (posKnife === 8) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          squareMod(-2);
          break;
        } else {
          setColSq12(colBG);
          setColSq11(colBG);
          setColSq10(colYel0);
          setColSq9(colYel1);
          setColSq8(colYel2);
          if (posKnife >= 8 && posKnife < 10) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setMoveDir(-1);
          squareMod(-1);
          break;
        }
      case 11:
        setLeftArrowBG(colBG);
        setRightArrowBG(colYel0);
        if (moveDir === -1) {
          setColSq11(colBG);
          setColSq10(colYel0);
          setColSq9(colYel1);
          setColSq8(colYel2);
          if (posKnife >= 8 && posKnife < 10) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          squareMod(-2);
          break;
        } else {
          setColSq12(colBG);
          setColSq11(colYel0);
          setColSq10(colYel1);
          setColSq9(colYel2);
          setColSq8(colYel3);
          if (posKnife >= 8 && posKnife < 11) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setMoveDir(-1);
          squareMod(-1);
          break;
        }
      case 12:
        setRightArrowBG(colYel0);
        if (moveDir === -1) {
          setColSq12(colBG);
          setColSq11(colYel0);
          setColSq10(colYel1);
          setColSq9(colYel2);
          setColSq8(colYel3);
          if (posKnife >= 8 && posKnife < 11) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setShowArrow([0, 1, 0, 1]);
          setLeftArrowBG(colBG);
          squareMod(-2);
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
          if (posKnife >= 8 && posKnife < 12) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setUpArrowBG(colBG);
          setMoveDir(-1);
          squareMod(-1);
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
        if (moveDir === -1) {
          setColSq1(colBG);
          setColSq0(colYel0);
          setColSq15(colYel1);
          setColSq14(colYel2);
          setColSq13(colYel3);
          setColSq12(colYel4);
          if (posKnife >= 12 && posKnife <= 15) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setShowArrow([0, 1, 1, 0]);
          setDownArrowBG(colYel0);
          squareMod(-2);
          break;
        } else {
          setColSq4(colBG);
          setColSq3(colBG);
          setColSq2(colBG);
          setColSq1(colYel0);
          setColSq0(colYel1);
          if (posKnife === 0) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setLeftArrowBG(colYel0);
          setMoveDir(-1);
          squareMod(-1);
          break;
        }
      case 2:
        setLeftArrowBG(colYel0);
        setRightArrowBG(colBG);
        if (moveDir === -1) {
          setColSq2(colBG);
          setColSq1(colYel0);
          setColSq0(colYel1);
          if (posKnife === 0) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          squareMod(-2);
          break;
        } else {
          setColSq4(colBG);
          setColSq3(colBG);
          setColSq2(colYel0);
          setColSq1(colYel1);
          setColSq0(colYel2);
          if (posKnife >= 0 && posKnife < 2) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setMoveDir(-1);
          squareMod(-1);
          break;
        }
      case 3:
        setLeftArrowBG(colYel0);
        setRightArrowBG(colBG);
        if (moveDir === -1) {
          setColSq3(colBG);
          setColSq2(colYel0);
          setColSq1(colYel1);
          setColSq0(colYel2);
          if (posKnife >= 0 && posKnife < 2) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          squareMod(-2);
          break;
        } else {
          setColSq4(colBG);
          setColSq3(colYel0);
          setColSq2(colYel1);
          setColSq1(colYel2);
          setColSq0(colYel3);
          if (posKnife >= 0 && posKnife < 3) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setMoveDir(-1);
          squareMod(-1);
          break;
        }
      case 4:
        setLeftArrowBG(colYel0);
        if (moveDir === -1) {
          setColSq4(colBG);
          setColSq3(colYel0);
          setColSq2(colYel1);
          setColSq1(colYel2);
          setColSq0(colYel3);
          if (posKnife >= 0 && posKnife < 3) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setShowArrow([0, 1, 0, 1]);
          setRightArrowBG(colBG);
          squareMod(-2);
          break;
        } else {
          setColSq8(colBG);
          setColSq7(colBG);
          setColSq6(colBG);
          setColSq5(colBG);
          setColSq4(colYel0);
          setColSq3(colYel1);
          setColSq2(colYel2);
          setColSq1(colYel3);
          setColSq0(colYel4);
          if (posKnife >= 0 && posKnife < 4) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setDownArrowBG(colBG);
          setMoveDir(-1);
          squareMod(-1);
          break;
        }
      case 8:
        setLeftArrowBG(colYel0);
        if (moveDir === 1) {
          setColSq8(colBG);
          setColSq9(colYel0);
          setColSq10(colYel1);
          setColSq11(colYel2);
          setColSq12(colYel3);
          if (posKnife > 9 && posKnife <= 12) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setShowArrow([0, 1, 0, 1]);
          setRightArrowBG(colBG);
          squareMod(2);
          break;
        } else {
          setColSq4(colBG);
          setColSq5(colBG);
          setColSq6(colBG);
          setColSq7(colBG);
          setColSq8(colYel0);
          setColSq9(colYel1);
          setColSq10(colYel2);
          setColSq11(colYel3);
          setColSq12(colYel4);
          if (posKnife > 8 && posKnife <= 12) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setUpArrowBG(colBG);
          setMoveDir(1);
          squareMod(1);
          break;
        }
      case 9:
        setLeftArrowBG(colYel0);
        setRightArrowBG(colBG);
        if (moveDir === 1) {
          setColSq9(colBG);
          setColSq10(colYel0);
          setColSq11(colYel1);
          setColSq12(colYel2);
          if (posKnife > 10 && posKnife <= 12) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          squareMod(2);
          break;
        } else {
          setColSq8(colBG);
          setColSq9(colYel0);
          setColSq10(colYel1);
          setColSq11(colYel2);
          setColSq12(colYel3);
          if (posKnife > 9 && posKnife <= 12) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setMoveDir(1);
          squareMod(1);
          break;
        }
      case 10:
        setLeftArrowBG(colYel0);
        setRightArrowBG(colBG);
        if (moveDir === 1) {
          setColSq10(colBG);
          setColSq11(colYel0);
          setColSq12(colYel1);
          if (posKnife === 12) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          squareMod(2);
          break;
        } else {
          setColSq8(colBG);
          setColSq9(colBG);
          setColSq10(colYel0);
          setColSq11(colYel1);
          setColSq12(colYel2);
          if (posKnife > 10 && posKnife <= 12) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setMoveDir(1);
          squareMod(1);
          break;
        }
      case 11:
        setRightArrowBG(colBG);
        if (moveDir === 1) {
          setColSq11(colBG);
          setColSq12(colYel0);
          setColSq13(colYel1);
          setColSq14(colYel2);
          setColSq15(colYel3);
          setColSq0(colYel4);
          if ((posKnife > 12 && posKnife <= 15) || posKnife === 0) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setShowArrow([1, 1, 0, 0]);
          setUpArrowBG(colYel0);
          squareMod(2);
          break;
        } else {
          setColSq8(colBG);
          setColSq9(colBG);
          setColSq10(colBG);
          setColSq11(colYel0);
          setColSq12(colYel1);
          if (posKnife === 12) {
            setShowKnife(true);
          } else {
            setShowKnife(false);
          }
          setLeftArrowBG(colYel0);
          setMoveDir(1);
          squareMod(1);
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
    setUserMoves([...userMoves]);
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
        squares[position] = 0;
        squares[position + dir / 2] = 1;
        setSquares([...squares]);
        for (let i = 0; i < 16; i++) {
          if (squares[i] === 1) {
            setPosition(i);
          }
        }
        setShowKnife(false);
        console.log("New position:", position);
      }
    }
  };

  const staylook = () => {
    const arr_stay = [0, 0, 0];
    let bool_stay = true;
    for (let i = 0; i < 3; i++) {
      if (userMoves[i] !== arr_stay[i]) {
        bool_stay = false;
      }
    }
    if (bool_stay) {
      setShowKnife(bool_stay);
      setMoveDir(0);
      setColSq0(colBG);
      setColSq1(colBG);
      setColSq2(colBG);
      setColSq3(colBG);
      setColSq4(colBG);
      setColSq5(colBG);
      setColSq6(colBG);
      setColSq7(colBG);
      setColSq8(colBG);
      setColSq9(colBG);
      setColSq10(colBG);
      setColSq11(colBG);
      setColSq12(colBG);
      setColSq13(colBG);
      setColSq14(colBG);
      setColSq15(colBG);
      setUpArrowBG(colBG);
      setRightArrowBG(colBG);
      setDownArrowBG(colBG);
      setLeftArrowBG(colBG);
    }
  };

  const knifeTurn = () => {
    setShowKnife(false);
    staylook();
    for (var j = 1; j <= 3; j++) {
      (function(j) {
        setTimeout(function() {
          setKnifeTime(j);
        }, 500 * j);
      })(j);
    }
    setTimeout(function() {
      setMoveNum(0);
    }, 2200);
    let user_position = -1;
    for (let i = 0; i < 16; i++) {
      if (squares[i] === 1) {
        user_position = i;
        setPosition(i);
        break;
      }
    }
    axios
      .post("http://localhost:5000/moves", {
        umoves: userMoves,
        uposition: user_position,
        kposition: posKnife
      })
      .then(response => {
        let kpos = 0;
        kpos = Number(response.data);
        squares[posKnife] = 0;
        squares[kpos] = 9;
        setSquares([...squares]);
        setPosKnife(kpos);
      });
    setUserMoves([0, 0, 0]);
    console.log("Call Game end knife position", posKnife, position);
    game_end();
  };

  const game_end = () => {
    console.log("Game end knife position", posKnife, position);
    if (position === posKnife) {
      setShowKnife(true);
      setShowArrow([0, 0, 0, 0]);
      setGameMess("Game Over");
    }
  };

  return (
    <div className="Layout">
      <div
        id="pos0"
        className="square-pos"
        style={{ gridColumnStart: 2, gridRowStart: 2, backgroundColor: colSq0 }}
      >
        <Squares objSqrs={squares} posSqr={0} showKnife={showKnife} />
      </div>
      <div
        id="pos1"
        className="square-pos"
        style={{ gridColumnStart: 3, gridRowStart: 2, backgroundColor: colSq1 }}
      >
        <Squares objSqrs={squares} posSqr={1} showKnife={showKnife} />
      </div>
      <div
        id="pos2"
        className="square-pos"
        style={{ gridColumnStart: 4, gridRowStart: 2, backgroundColor: colSq2 }}
      >
        <Squares objSqrs={squares} posSqr={2} showKnife={showKnife} />
      </div>
      <div
        id="pos3"
        className="square-pos"
        style={{ gridColumnStart: 5, gridRowStart: 2, backgroundColor: colSq3 }}
      >
        <Squares objSqrs={squares} posSqr={3} showKnife={showKnife} />
      </div>
      <div
        id="pos4"
        className="square-pos"
        style={{ gridColumnStart: 6, gridRowStart: 2, backgroundColor: colSq4 }}
      >
        <Squares objSqrs={squares} posSqr={4} showKnife={showKnife} />
      </div>
      <div
        id="pos5"
        className="square-pos"
        style={{ gridColumnStart: 6, gridRowStart: 3, backgroundColor: colSq5 }}
      >
        <Squares objSqrs={squares} posSqr={5} showKnife={showKnife} />
      </div>
      <div
        id="pos6"
        className="square-pos"
        style={{ gridColumnStart: 6, gridRowStart: 4, backgroundColor: colSq6 }}
      >
        <Squares objSqrs={squares} posSqr={6} showKnife={showKnife} />
      </div>
      <div
        id="pos7"
        className="square-pos"
        style={{ gridColumnStart: 6, gridRowStart: 5, backgroundColor: colSq7 }}
      >
        <Squares objSqrs={squares} posSqr={7} showKnife={showKnife} />
      </div>
      <div
        id="pos8"
        className="square-pos"
        style={{ gridColumnStart: 6, gridRowStart: 6, backgroundColor: colSq8 }}
      >
        <Squares objSqrs={squares} posSqr={8} showKnife={showKnife} />
      </div>
      <div
        id="pos9"
        className="square-pos"
        style={{ gridColumnStart: 5, gridRowStart: 6, backgroundColor: colSq9 }}
      >
        <Squares objSqrs={squares} posSqr={9} showKnife={showKnife} />
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
        <Squares objSqrs={squares} posSqr={10} showKnife={showKnife} />
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
        <Squares objSqrs={squares} posSqr={11} showKnife={showKnife} />
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
        <Squares objSqrs={squares} posSqr={12} showKnife={showKnife} />
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
        <Squares objSqrs={squares} posSqr={13} showKnife={showKnife} />
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
        <Squares objSqrs={squares} posSqr={14} showKnife={showKnife} />
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
        <Squares objSqrs={squares} posSqr={15} showKnife={showKnife} />
      </div>
      <div className="message1-area">
        <h3> Moves : {totMoves}</h3>
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
      <div className="message2-area">
        <h4>{gameMess}</h4>
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
