import React, { useState, useEffect } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [total, setTotal] = useState(0);
  const [currentNumber, setCurrentNumber] = useState([]);
  const [i, setI] = useState(1);

  // handle number input
  const add = (x) => {
    if (x === "0" && display === "0") {
      setDisplay("0");
    } else if (display === "0" && x !== "0") {
      setDisplay(x);
    } else {
      setDisplay(display + x);
    }
  };

  const deleteVal = () => {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  // handle operators
  const plus = () => {
    setCurrentNumber([...currentNumber, Number(display), "+"]);
    setDisplay("0");
  };

  const sub = () => {
    setCurrentNumber([...currentNumber, Number(display), "-"]);
    setDisplay("0");
  };

  const mul = () => {
    setCurrentNumber([...currentNumber, Number(display), "*"]);
    setDisplay("0");
  };

  const div = () => {
    setCurrentNumber([...currentNumber, Number(display), "/"]);
    setDisplay("0");
  };

  // calculate result
  const showTotal = () => {
    let tempNum;
    if (i === 1) {
      tempNum = [...currentNumber, Number(display)];
      setI(2);
    } else {
      tempNum = [currentNumber[currentNumber.length - 2], currentNumber[currentNumber.length - 1]];
      tempNum.unshift(Number(display));
    }

    const result = calculate(tempNum);
    setTotal(result);
    setDisplay(result.toString());
    setCurrentNumber([]);
  };

  // calculation logic
  const calculate = (num) => {
    let result = num.shift();
    for (let i = 0; i < num.length; i++) {
      if (num[i] === "+") {
        result += num[i + 1];
      } else if (num[i] === "-") {
        result -= num[i + 1];
      } else if (num[i] === "*") {
        result *= num[i + 1];
      } else if (num[i] === "/") {
        result /= num[i + 1];
      }
    }
    return result;
  };

  // handle clear buttons
  const clearAll = () => {
    setDisplay("0");
    setTotal(0);
    setCurrentNumber([]);
    setI(1);
  };

  const clearVal = () => {
    setDisplay("0");
    setI(1);
  };

  // handle keyboard input
  useEffect(() => {
    const checkKeyboard = (event) => {
      if (event.key === "Enter") {
        showTotal();
      } else if (event.key === "Escape") {
        if (display !== "0") {
          clearVal();
        } else {
          clearAll();
        }
      } else if (event.key === "Backspace") {
        deleteVal();
      } else if (event.key === "+") {
        plus();
      } else if (event.key === "-") {
        sub();
      } else if (event.key === "*") {
        mul();
      } else if (event.key === "/") {
        div();
      } else if (event.key >= "0" && event.key <= "9") {
        add(event.key);
      }
    };

    document.addEventListener("keydown", checkKeyboard);
    return () => {
      document.removeEventListener("keydown", checkKeyboard);
    };
  }, [display, currentNumber, i]);

  return (
    <div>
      <table align="center" border="1">
        <tbody>
          <tr>
            <td colSpan="4">
              <input type="text" disabled id="display" value={display} />
            </td>
          </tr>
          <tr>
            <td colSpan="3" align="right" bgcolor="lightgray">
              <button onClick={deleteVal}>&larr;</button>
            </td>
            <td align="right" bgcolor="lightgray">
              <button onClick={clearAll}>AC</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => add("7")}>7</button>
            </td>
            <td>
              <button onClick={() => add("8")}>8</button>
            </td>
            <td>
              <button onClick={() => add("9")}>9</button>
            </td>
            <td>
              <button onClick={div}>/</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => add("4")}>4</button>
            </td>
            <td>
              <button onClick={() => add("5")}>5</button>
            </td>
            <td>
              <button onClick={() => add("6")}>6</button>
            </td>
            <td>
              <button onClick={mul}>*</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => add("1")}>1</button>
            </td>
            <td>
              <button onClick={() => add("2")}>2</button>
            </td>
            <td>
              <button onClick={() => add("3")}>3</button>
            </td>
            <td>
              <button onClick={sub}>-</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => add(".")}>.</button>
            </td>
            <td>
              <button onClick={() => add("0")}>0</button>
            </td>
            <td>
              <button onClick={showTotal}>=</button>
            </td>
            <td>
              <button onClick={plus}>+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;

