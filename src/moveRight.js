import React from 'react'

const  = () => {
  return (
  )
}



const moveRight = () => {
    return (
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
            setColSq0(colBG);
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
            setColSq0(colBG);
            setColSq1(colBG);
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
            setColSq12(colBG);
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
    )
};

  export default moveRight
