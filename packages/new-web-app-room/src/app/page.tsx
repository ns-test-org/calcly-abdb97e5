'use client';

import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-sky-800 mb-2">Sky Calculator</h1>
          <div className="w-16 h-1 bg-sky-400 mx-auto rounded-full"></div>
        </div>

        {/* Display */}
        <div className="bg-sky-50 rounded-2xl p-6 mb-6 border-2 border-sky-200">
          <div className="text-right text-3xl font-mono text-sky-900 min-h-[40px] flex items-center justify-end overflow-hidden">
            {display}
          </div>
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-3">
          {/* Row 1 */}
          <button
            onClick={clear}
            className="col-span-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-lg"
          >
            Clear
          </button>
          <button
            onClick={() => performOperation('÷')}
            className="bg-sky-400 hover:bg-sky-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-lg"
          >
            ÷
          </button>
          <button
            onClick={() => performOperation('×')}
            className="bg-sky-400 hover:bg-sky-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-lg"
          >
            ×
          </button>

          {/* Row 2 */}
          <button
            onClick={() => inputNumber('7')}
            className="bg-sky-100 hover:bg-sky-200 text-sky-800 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-lg"
          >
            7
          </button>
          <button
            onClick={() => inputNumber('8')}
            className="bg-sky-100 hover:bg-sky-200 text-sky-800 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-lg"
          >
            8
          </button>
          <button
            onClick={() => inputNumber('9')}
            className="bg-sky-100 hover:bg-sky-200 text-sky-800 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-lg"
          >
            9
          </button>
          <button
            onClick={() => performOperation('-')}
            className="bg-sky-400 hover:bg-sky-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-lg"
          >
            -
          </button>

          {/* Row 3 */}
          <button
            onClick={() => inputNumber('4')}
            className="bg-sky-100 hover:bg-sky-200 text-sky-800 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-lg"
          >
            4
          </button>
          <button
            onClick={() => inputNumber('5')}
            className="bg-sky-100 hover:bg-sky-200 text-sky-800 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-lg"
          >
            5
          </button>
          <button
            onClick={() => inputNumber('6')}
            className="bg-sky-100 hover:bg-sky-200 text-sky-800 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-lg"
          >
            6
          </button>
          <button
            onClick={() => performOperation('+')}
            className="bg-sky-400 hover:bg-sky-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-lg"
          >
            +
          </button>

          {/* Row 4 */}
          <button
            onClick={() => inputNumber('1')}
            className="bg-sky-100 hover:bg-sky-200 text-sky-800 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-lg"
          >
            1
          </button>
          <button
            onClick={() => inputNumber('2')}
            className="bg-sky-100 hover:bg-sky-200 text-sky-800 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-lg"
          >
            2
          </button>
          <button
            onClick={() => inputNumber('3')}
            className="bg-sky-100 hover:bg-sky-200 text-sky-800 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-lg"
          >
            3
          </button>
          <button
            onClick={handleEquals}
            className="row-span-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-lg"
          >
            =
          </button>

          {/* Row 5 */}
          <button
            onClick={() => inputNumber('0')}
            className="col-span-2 bg-sky-100 hover:bg-sky-200 text-sky-800 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-lg"
          >
            0
          </button>
          <button
            onClick={inputDecimal}
            className="bg-sky-100 hover:bg-sky-200 text-sky-800 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-lg"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}


