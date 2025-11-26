import React from 'react';
import { Activity } from '../types';
import { X, Calendar, MapPin, Ticket } from 'lucide-react';

interface ModalProps {
  activity: Activity | null;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ activity, isOpen, onClose }) => {
  if (!isOpen || !activity) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-scale-in">
        
        {/* Header Image */}
        <div className="h-40 bg-gray-200 relative">
          <img 
            src={activity.imageUrl} 
            alt={activity.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
             <h2 className="text-2xl font-bold text-white serif-font text-shadow">{activity.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full p-2 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
            <div className="flex items-start mb-4 space-x-3">
                <Calendar className="w-5 h-5 text-amber-500 mt-0.5" />
                <div>
                    <p className="font-semibold text-gray-800">Time</p>
                    <p className="text-gray-600">{activity.time}</p>
                </div>
            </div>

            <div className="flex items-start mb-4 space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5" />
                <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">{activity.location}</p>
                    <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.location)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 text-sm hover:underline mt-1 block"
                    >
                        Open in Maps
                    </a>
                </div>
            </div>

            {activity.details && (
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100 mt-2">
                    <div className="flex items-center mb-2">
                        <Ticket className="w-4 h-4 text-amber-600 mr-2" />
                        <h4 className="font-bold text-amber-800 uppercase text-xs tracking-wider">Travel Details</h4>
                    </div>
                    <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700 leading-relaxed">
                        {activity.details}
                    </pre>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
