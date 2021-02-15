import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import './MathCard.scss';

export const MathCard = () => {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(2);
  const [operator, setOperator] = useState('+');

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='math-card-wrapper'>
        <div className='app'>
          <div className='math-card'>
            <Spot type='number' text={number1} handleDrop={setNumber1} />
            <Spot type='number' text={number2} handleDrop={setNumber2} />
            <Spot type='operator' text={operator} handleDrop={setOperator} />
            <div className='total'>
              {eval(`${number1}${operator}${number2}`)}
            </div>
          </div>

          <div>
            <div className='cards numbers'>
              {Array(10)
                .fill(0)
                .map((n, idx) => (
                  <Card key={idx} type='number' text={idx} />
                ))}
            </div>

            <div className='cards operators'>
              {['*', '-', '+', '/'].map((o, idx) => (
                <Card key={idx} type='operator' text={o} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

const Spot = ({ type, text, handleDrop }) => {
  const [{ canDrop, isOver }, dropRef] = useDrop({
    accept: type,
    drop: (item) => handleDrop(item.text),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  let backgroundColor = '#f2f2f2';
  if (canDrop) backgroundColor = '#3db897';
  if (isOver) backgroundColor = '#4bdcb5';

  return (
    <div className='spot' ref={dropRef} style={{ backgroundColor }}>
      {text}
    </div>
  );
};

const Card = ({ type, text }) => {
  const [{ opacity }, dragRef] = useDrag({
    item: { type, text },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <div className='card' ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  );
};
