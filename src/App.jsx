import { useEffect, useState } from 'react'
import Clock from './Clock';

function App() {
    const [timerDays, setTimerDays] = useState(0);
    const [timerHours, setTimerHours] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [timerSeconds, setTimerSeconds] = useState(0);

    useEffect(() => {
        const startTimer = () => {
            // Get current date and time
            const now = new Date();
            
            // Create a target date that's exactly 22 hours and 48 minutes from now
            const targetDate = new Date(now.getTime() + (22 * 60 * 60 * 1000) + (48 * 60 * 1000));

            const interval = setInterval(() => {
                const now = new Date().getTime();
                const distance = targetDate.getTime() - now;

                if (distance < 0) {
                    clearInterval(interval);
                    // Timer reached zero
                    setTimerDays(0);
                    setTimerHours(0);
                    setTimerMinutes(0);
                    setTimerSeconds(0);
                } else {
                    const days = Math.floor(distance / (24 * 60 * 60 * 1000));
                    const hours = Math.floor(
                        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
                    );
                    const minutes = Math.floor(
                        (distance % (60 * 60 * 1000)) / (1000 * 60)
                    );
                    const seconds = Math.floor((distance % (60 * 1000)) / 1000);

                    setTimerDays(days);
                    setTimerHours(hours);
                    setTimerMinutes(minutes);
                    setTimerSeconds(seconds);
                }
            }, 1000);

            return () => clearInterval(interval); // Cleanup on unmount
        };

        startTimer();
    }, []);

    // Assuming your image is named "background.jpg" in the public folder
    const backgroundStyle = {
        backgroundImage: `url('/Quasarbg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div>
            <div 
                className="w-[100%] h-[100vh] count fixed" 
                style={backgroundStyle}
            >
                <Clock
                    timerDays={timerDays}
                    timerHours={timerHours}
                    timerMinutes={timerMinutes}
                    timerSeconds={timerSeconds}
                    countdown
                />
            </div>
        </div>
    )
}

export default App