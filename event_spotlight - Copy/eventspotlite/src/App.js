import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import eventsData from './data/events';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = eventsData.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="event-list">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} onClick={setSelectedEvent} />
        ))}
      </div>
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
};

export default App;
