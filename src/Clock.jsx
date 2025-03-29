import { useEffect, useState } from "react";

const Clock = ({
  timerDays,
  timerHours,
  timerMinutes,
  timerSeconds,
  setCustomVariants,
  countdown
}) => {
  const timer = [
    {
      time: timerDays,
      prompt: "Days",
    },
    {
      time: timerHours,
      prompt: "Hours",
    },
    {
      time: timerMinutes,
      prompt: "Minutes",
    },
    {
      time: timerSeconds,
      prompt: "Seconds",
    },
  ];

  const handleMouseEntered = () => setCustomVariants("text");
  const handleMouseLeaved = () => setCustomVariants("default");
  return (
    <div>
      <div className={`flex items-center justify-center ${countdown && 'h-[100vh]'}`}>
        {timer.map((item, i) => {
          return (
            <section key={i} className="flex flex-col items-center mx-2 ">
              <div className="md:w-28 md:h-28 sm:h-20 sm:w-20 w-16 h-16 rounded-lg flex items-center justify-center shadow-blue-500 shadow-lg">
                <p
                  onMouseEnter={handleMouseEntered}
                  onMouseLeave={handleMouseLeaved}
                  className="text-white font-bold md:text-7xl sm:text-5xl text-4xl"
                >
                  {item.time}
                </p>
              </div>
              <small className="text-yellow-500 mt-2 text-lg">
                {item.prompt}
              </small>
            </section>
          );
        })}
      </div>
    </div>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};
export default Clock;
