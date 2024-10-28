import React from 'react';

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>X</button>
        <h2>{event.name}</h2>
        <p>{event.date} - {event.location}</p>
        <p>{event.description}</p>
        <img src={event.image} alt={event.name} />
      </div>
    </div>
  );
};

export default EventModal;
