import EventCard from "./EventCard";

function EventSection({ events }) {
  return (
    <section id="events" className="events-section">
      <p className="section-label">Upcoming Activities</p>

      <h2>Explore Campus Events</h2>

      <div className="event-grid">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            category={event.category}
            date={event.date}
            time={event.time}
            location={event.location}
            description={event.description}
          />
        ))}
      </div>
    </section>
  );
}

export default EventSection;