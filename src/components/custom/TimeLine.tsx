import React, { useState } from 'react';

interface Task {
  time: string;
  description: string;
  date: string;
}

interface DayContent {
  title: string;
  tasks: Task[];
}

const dayData: DayContent[] = [
  {
    title: 'Day 1',
    tasks: [
      { time: '10:00 AM', description: 'Task 1', date: '7 February 2025' },
      { time: '12:00 PM', description: 'Task 2', date: '7 February 2025' },
      { time: '2:00 PM', description: 'Task 3', date: '7 February 2025' },
      { time: '4:00 PM', description: 'Task 4', date: '7 February 2025' },
    ],
  },
  {
    title: 'Day 2',
    tasks: [
      { time: '9:00 AM', description: 'Task 1', date: '8 February 2025' },
      { time: '11:00 AM', description: 'Task 2', date: '8 February 2025' },
      { time: '3:00 PM', description: 'Task 3', date: '8 February 2025' },
    ],
  },
];

const TimeLine: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <div className="p-4 md:pl-24 mt-96">
      <h1 className="md:text-[12rem] font-bebas text-6xl text-pink font-bold mb-[4rem] md:mb-[6rem] text-center">
        EVENT SCHEDULE
      </h1> 

      {/* Horizontal timeline for larger screens */}
      <div className="relative mb-[7rem] hidden md:block">
        {/* Line across the timeline */}
        <div className="absolute bg-pink h-1  left-14 right-14 z-0 transform md:-translate-y-[-0.5rem]"></div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {dayData[selectedDay].tasks.map((task, index) => (
            <div key={index} className="flex flex-col items-center mb-8 md:mb-0 relative">
              <div className="flex flex-col items-center">
                {/* Circles */}
                <div className="bg-white w-8 h-8 rounded-full border-8 border-purple z-10 relative top-[-4px]"></div>
                <span className="text-lg text-white font-bold text-center">{task.description}</span>
                <span className="text-xs text-white text-center mt-1">{`${task.date} | ${task.time}`}</span>
              </div>
              {index < dayData[selectedDay].tasks.length - 1 && (
                <div className="md:hidden h-16 w-1 bg-purple-600"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Vertical timeline for small screens */}
      <div className="block md:hidden relative mb-10">
        <div className="absolute bg-purple-600 w-1 left-[19%] z-0"></div>

        <div className="flex flex-col items-start justify-between pl-[15%] relative">
          {dayData[selectedDay].tasks.map((task, index) => (
            <div key={index} className="relative flex justify-between items-start mb-8">
              <div className="flex-shrink-0 relative">
                {/* Circles */}
                <div className="bg-white w-8 h-8 rounded-full border-8 border-purple z-10"></div>

                {/* Connecting Line */}
                {index < dayData[selectedDay].tasks.length - 1 && (
                  <div className="absolute  left-[50%] transform -translate-x-1/2 w-1 h-[9vh] bg-pink z-0"></div>
                )}
              </div>

              <div className="ml-4">
                <span className="text-lg text-white font-bold">{task.description}</span>
                <br />
                <span className="text-sm text-white mt-1">{`${task.date} | ${task.time}`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Day selection buttons */}
      <div className="flex justify-center space-x-[4rem] mb-[6rem]">
        {dayData.map((day, index) => (
          <button
            key={index}
            onClick={() => setSelectedDay(index)}
            className={`px-6 py-2 w-32 rounded-2xl border-2 border-secondary font-medium 
              ${selectedDay === index ? 'bg-[#FF32F4] text-white' : 'text-white'} 
              hover:bg-[#FF32F4] transition-colors duration-200`}
          >
            {day.title}
          </button>
        ))}
      </div>

      {/* Task list at the bottom */}
      {/*
      <div className="text-white text-lg leading-relaxed items-center">
        <div className="space-y-2">
          {dayData[selectedDay].tasks.map((task, index) => (
            <div key={index} className="px-2">
              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-left w-2/6">{`${task.time}`}</span>
                <span className="text-white font-bold text-left w-3/6">{task.description}</span>
              </div>
              <hr className="my-2 border-t border-white w-full" />
            </div>
          ))}
        </div>
      </div>
      */}
    </div>
  );
};

export default TimeLine;
