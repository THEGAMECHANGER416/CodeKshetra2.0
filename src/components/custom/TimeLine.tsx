import React, { useState, useEffect } from 'react';

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
      { time: '09:00 AM', description: 'Entry for the participants', date: '21 February 2025' },
      { time: '10:00 AM', description: 'Breakfast', date: '21 February 2025' },
      { time: '10:45 AM', description: 'Hacking Starts', date: '21 February 2025' },
      { time: '11:30 AM', description: 'Coding Workshop', date: '21 February 2025' },
      { time: '13:30 PM', description: 'Lunch+Dance', date: '21 February 2025' },
      { time: '16:00 PM', description: 'Mentoring Round 1', date: '21 February 2025' },
      { time: '20:00 PM', description: 'Dinner', date: '21 February 2025' },
      { time: '00:00 PM', description: 'Midnight DJ', date: '21 February 2025' },
    ],
  },
  {
    title: 'Day 2',
    tasks: [
      { time: '06:00 AM', description: 'Early Morning Tea', date: '22 February 2025' },
      { time: '08:30 AM', description: 'Breakfast', date: '22 February 2025' },
      { time: '11:00 AM', description: 'Mentoring Round 2', date: '22 February 2025' },
      { time: '13:00 PM', description: 'Lunch', date: '22 February 2025' },
      { time: '15:00 PM', description: 'Result Declaration for top 15', date: '22 February 2025' },
      { time: '16:30 PM', description: 'Judgement Round Begins', date: '22 February 2025' },
      { time: '18:30 PM', description: 'Winner Declaration', date: '22 February 2025' },
    ],
  },
];

const TimeLine: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [isBetween768And900, setIsBetween768And900] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsBetween768And900(width >= 768 && width <= 900);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="p-4 md:pl-24 mt-48">
      <h1 className="md:text-[13rem] font-bebas text-6xl text-pink font-bold mb-[4rem] md:mb-[6rem] text-center">
        EVENT SCHEDULE
      </h1>

      {/* Horizontal Timeline */}
      <div className="relative mb-[5rem] hidden md:flex between-768-900:hidden">
        <div className="absolute bg-pink h-2 top-1/2 left-[5rem] right-16 z-0 transform md:translate-y-[-4.5rem]"></div>
        {dayData[selectedDay].tasks.map((task, index) => (
          <div key={index} className="flex flex-col items-center relative px-4">
            <div className="bg-white w-8 h-8 rounded-full border-8 border-purple z-10 relative -translate-y-1/2"></div>
            <div className="flex flex-col items-center mt-4">
              <span className="text-lg text-white font-bold text-center">{task.description}</span>
              <span className="text-xs text-white mt-1">{`${task.date} | ${task.time}`}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Day Selector Buttons */}
      <div className="flex justify-center space-x-[3rem] mb-8 md:block between-768-900:hidden">
        {dayData.map((day, index) => (
          <button
            key={index}
            onClick={() => setSelectedDay(index)}
            className={`px-6 py-2 font-bold rounded-[3rem] ${selectedDay === index ? 'bg-pink text-white' : 'bg-gray-200 text-gray-600'}`}
          >
            {day.title}
          </button>
        ))}
      </div>

      {/* Vertical Timeline for Small Screens */}
      <div className="block md:hidden relative mb-10 between-768-900:hidden">
        <div className="absolute bg-purple-600 w-2 left-[19%] z-0"></div>
        <div className="flex flex-col items-start justify-between pl-[15%] relative">
          {dayData[selectedDay].tasks.map((task, index) => (
            <div key={index} className="relative flex justify-between items-start mb-6">
              <div className="flex-shrink-0 relative">
                <div className="bg-white w-8 h-8 rounded-full border-8 border-purple z-10"></div>
                {index < dayData[selectedDay].tasks.length - 1 && (
                  <div className="absolute left-[50%] transform -translate-x-1/2 w-2 h-[7vh] bg-pink z-0"></div>
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
    </div>
  );
};

export default TimeLine;
