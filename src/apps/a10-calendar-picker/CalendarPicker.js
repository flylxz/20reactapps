import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import './CalendarPicker.scss';

const calendarDates = Array(31)
  .fill(0)
  .map((e, i) => i);

export const CalendarPicker = () => {
  const [choosingType, setChoosingType] = useState('start');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);

  const updateDate = (choosenDay) => {
    if (startDate && choosenDay < startDate) {
      setStartDate(choosenDay);
      return setChoosingType('end');
    }

    if (endDate && choosenDay > endDate) {
      setEndDate(choosenDay);
      return setChoosingType('end');
    }

    if (choosingType === 'start') {
      setStartDate(choosenDay);
      return setChoosingType('end');
    }
    if (choosingType === 'end') {
      setEndDate(choosenDay);
    }
  };

  const checkInBetween = (day) => {
    if (startDate && !endDate) return day > startDate && day < hoverDate;
    return day > startDate && day < endDate;
  };

  return (
    <div className='data-chooser-wrapper'>
      <StyledDateChooser>
        <StyledDateChooserButton
          onClick={() => setChoosingType('start')}
          isChoosing={choosingType === 'start'}
        >
          Start Date <span>{startDate}</span>
        </StyledDateChooserButton>
        <StyledDateChooserButton
          onClick={() => setChoosingType('end')}
          isChoosing={choosingType === 'end'}
        >
          End Date <span>{endDate}</span>
        </StyledDateChooserButton>
      </StyledDateChooser>

      <StyledCalendar>
        {calendarDates.map((day, index) => {
          const dayNumber = day + 1;

          let isInBetween = checkInBetween(dayNumber);
          let isSelected = dayNumber === startDate || dayNumber === endDate;

          return (
            <StyledCalendarDay
              key={index}
              isInBetween={isInBetween}
              isSelected={isSelected}
              onClick={() => updateDate(dayNumber)}
              onMouseOver={() => setHoverDate(dayNumber)}
            >
              {dayNumber}
            </StyledCalendarDay>
          );
        })}
      </StyledCalendar>
    </div>
  );
};

const StyledDateChooser = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const StyledDateChooserButton = styled.button`
  color: #0b204c;
  text-transform: uppercase;
  flex: 1 1 auto;
  padding: 15px;
  background: none;
  cursor: pointer;
  border: none;
  border-bottom: 2px solid rgba(11, 32, 76, 0.2);
  outline: none;
  border-color: ${(props) => (props.isChoosing ? '#0b204c' : 'none')};

  span {
    display: block;
    min-height: 60px;
    font-size: 50px;
  }
`;

const StyledCalendar = styled.div`
  max-width: 60vw;
  width: 50vw;
  height: 50vh;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background: #0b204c;
  color: #fff;
  padding: 20px;
`;

const StyledCalendarDay = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: 0.3s ease background;
  border: none;
  outline: none;
  cursor: pointer;
  color: #8096c1;
  font-size: 1.5rem;
  background: none;

  ${(props) =>
    props.isSelected &&
    css`
      background: #1a1a1a !important;
      color: #eee;
    `}

  ${(props) =>
    props.isInBetween &&
    css`
      color: #eee;
      background: #254381;
    `}

  &:hover {
    color: #eee;
    background: #254381;
  }
`;
