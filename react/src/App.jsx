// import { useState } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import EventForm from "./components/EventForm";
// import EventSection from "./components/EventSection";
// import Footer from "./components/Footer";
// import { initialEvents } from "./data/events";

// function App() {
//   const [events, setEvents] = useState(initialEvents);

//   function handleAddEvent(newEvent) {
//     setEvents([...events, newEvent]);
//   }

//   return (
//     <div>
//       <Navbar />

//       <main id="home">
//         <Hero
//           title="Discover What Is Happening on Campus"
//           description="Find workshops, sports activities, club meetings, and opportunities to connect with other students."
//         />

//         <EventForm onAddEvent={handleAddEvent} />

//         <EventSection events={events} />
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import AboutPage from "./pages/AboutPage";
import { initialEvents } from "./data/events";

function App() {
  const [events, setEvents] = useState(initialEvents);

  function handleAddEvent(newEvent) {
    setEvents([...events, newEvent]);
  }

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage events={events} onAddEvent={handleAddEvent} />
          }
        />

        <Route path="/events" element={<EventsPage events={events} />} />

        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;