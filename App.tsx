import React, { useState, useEffect, useRef } from 'react';
import { ITINERARY } from './constants';
import { Activity } from './types';
import TimelineCard from './components/TimelineCard';
import Modal from './components/Modal';
import { ThaiRoof, ElephantIcon } from './components/ThaiDecoration';
import { getWeather } from './services/weatherService';
import { CloudSun, Navigation } from 'lucide-react';

export default function App() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [weather, setWeather] = useState<{temp: string, condition: string} | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when day changes
    if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
    }
  }, [activeDayIndex]);

  useEffect(() => {
    // Fetch initial weather
    const fetchWeather = async () => {
        const data = await getWeather();
        setWeather({ temp: data.temp, condition: data.condition });
    };
    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenDetails = (activity: Activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  const activeDay = ITINERARY[activeDayIndex];

  return (
    <div className="flex flex-col h-screen bg-slate-50 text-gray-800 overflow-hidden max-w-md mx-auto shadow-2xl relative">
      
      {/* --- Hero Section --- */}
      <header className="relative bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white pt-8 pb-10 px-6 rounded-b-[2.5rem] shadow-xl z-10 shrink-0">
        <ThaiRoof className="absolute top-0 left-0 w-full text-white/10 h-32 pointer-events-none" />
        <ElephantIcon className="absolute bottom-4 right-4 w-24 h-24 text-white/10 pointer-events-none" />
        
        <div className="relative z-10 flex justify-between items-start">
            <div>
                <p className="text-amber-100 uppercase tracking-widest text-xs font-semibold mb-1">Thailand Trip</p>
                <h1 className="text-3xl font-bold serif-font text-shadow-sm">Bangkok</h1>
                <div className="flex items-center mt-2 text-amber-50 text-sm bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-sm">
                    <CloudSun className="w-4 h-4 mr-2" />
                    <span>
                        {weather ? `${weather.temp === "Current" ? "" : weather.temp} ${weather.condition}` : "Loading..."}
                    </span>
                </div>
            </div>
            <div className="text-right">
                <div className="text-3xl font-bold font-mono">{activeDay.date}</div>
                <div className="text-sm opacity-80">{activeDay.dayLabel}</div>
            </div>
        </div>
      </header>

      {/* --- Timeline Scroll Area --- */}
      <main 
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 pt-6 pb-24 no-scrollbar scroll-smooth"
      >
        <div className="relative">
             {/* Decorative vertical line base */}
             <div className="absolute left-[31px] top-4 bottom-0 w-0.5 bg-gray-200 -z-10"></div>
             
             {activeDay.activities.map((activity, index) => (
                <TimelineCard 
                    key={activity.id} 
                    activity={activity} 
                    isLast={index === activeDay.activities.length - 1}
                    onOpenDetails={handleOpenDetails}
                />
             ))}
             
             <div className="text-center py-6 text-gray-400 text-sm">
                <p>End of {activeDay.dayLabel}</p>
                <div className="w-2 h-2 bg-gray-300 rounded-full mx-auto mt-2"></div>
             </div>
        </div>
      </main>

      {/* --- Sticky Bottom Nav --- */}
      <nav className="absolute bottom-0 w-full bg-white border-t border-amber-100 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] pb-safe z-20">
        <div className="flex overflow-x-auto no-scrollbar py-3 px-2 gap-2">
            {ITINERARY.map((day, idx) => (
                <button
                    key={day.dayLabel}
                    onClick={() => setActiveDayIndex(idx)}
                    className={`flex-shrink-0 flex flex-col items-center justify-center min-w-[4rem] py-2 rounded-xl transition-all duration-300 ${
                        activeDayIndex === idx 
                        ? 'bg-amber-500 text-white shadow-lg scale-105' 
                        : 'bg-white text-gray-400 hover:bg-gray-50'
                    }`}
                >
                    <span className="text-[10px] uppercase font-bold tracking-wider">{day.date}</span>
                    <span className={`text-sm font-bold ${activeDayIndex === idx ? 'text-white' : 'text-gray-600'}`}>
                        {day.dayLabel}
                    </span>
                </button>
            ))}
        </div>
      </nav>

      {/* --- Detail Modal --- */}
      <Modal 
        activity={selectedActivity} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      {/* PWA Install Prompt Placeholder (optional functionality) */}
      {/* <div className="hidden">Install App</div> */}
    </div>
  );
}
