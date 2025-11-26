import React from 'react';
import { Activity, ActivityType } from '../types';
import { ActivityIcons } from '../constants';
import { MapPin, Info } from 'lucide-react';

interface TimelineCardProps {
  activity: Activity;
  isLast: boolean;
  onOpenDetails: (activity: Activity) => void;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ activity, isLast, onOpenDetails }) => {
  const Icon = ActivityIcons[activity.type] || ActivityIcons.sightseeing;

  const openMap = (e: React.MouseEvent) => {
    e.stopPropagation();
    const query = encodeURIComponent(activity.location);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="flex w-full mb-2 relative group animate-fade-in-up">
      {/* Time Column */}
      <div className="w-16 flex-shrink-0 flex flex-col items-center pt-2">
        <span className="text-sm font-bold text-amber-700 font-mono">{activity.time}</span>
        {/* Timeline Line */}
        {!isLast && (
          <div className="w-0.5 h-full bg-gradient-to-b from-amber-400 to-transparent my-2 rounded-full opacity-50"></div>
        )}
      </div>

      {/* Content Card */}
      <div 
        className="flex-1 bg-white rounded-xl shadow-md border border-amber-100 overflow-hidden mb-4 transform transition hover:scale-[1.01] hover:shadow-lg active:scale-95"
        onClick={() => onOpenDetails(activity)}
      >
        <div className="flex">
          {/* Icon Section */}
          <div className="bg-amber-50 p-3 flex flex-col justify-center items-center border-r border-amber-100 min-w-[60px]">
            <Icon className="text-amber-600 w-6 h-6 mb-1" />
            <span className="text-[10px] uppercase tracking-wide text-amber-800 font-semibold">{activity.type}</span>
          </div>

          {/* Details Section */}
          <div className="p-3 flex-1 flex flex-col justify-center">
            <h3 className="font-bold text-gray-800 text-lg leading-tight serif-font mb-1">{activity.title}</h3>
            <div className="flex items-center text-gray-500 text-xs mb-2 cursor-pointer hover:text-blue-600" onClick={openMap}>
              <MapPin className="w-3 h-3 mr-1" />
              <span className="truncate">{activity.location}</span>
            </div>
            <p className="text-gray-600 text-sm line-clamp-2 leading-snug">{activity.description}</p>
          </div>
        </div>
        
        {/* Detail Indicator - Only if details exist */}
        {activity.details && (
           <div className="bg-amber-500 h-1 w-full"></div>
        )}
      </div>
    </div>
  );
};

export default TimelineCard;
