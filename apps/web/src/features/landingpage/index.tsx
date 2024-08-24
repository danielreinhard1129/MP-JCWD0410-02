"use client";

import React, { useState, useEffect } from "react";
import { debounce } from "lodash";

type Event = {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  price: number;
  seats: number;
  category: string;
  location: string;
};

type LandingPageProps = {
  events: Event[];
};

const LandingPage: React.FC<LandingPageProps> = ({ events }) => {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleSearch = debounce((term: string) => {
    setFilteredEvents(
      events.filter((event) =>
        event.name.toLowerCase().includes(term.toLowerCase()),
      ),
    );
  }, 300);

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    let filtered = events;

    if (selectedCategory) {
      filtered = filtered.filter(
        (event) => event.category === selectedCategory,
      );
    }

    if (selectedLocation) {
      filtered = filtered.filter(
        (event) => event.location === selectedLocation,
      );
    }

    setFilteredEvents(filtered);
  }, [selectedCategory, selectedLocation]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Upcoming Events</h1>

      <input
        type="text"
        placeholder="Search events..."
        className="mb-4 w-full rounded border px-4 py-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="mb-4 flex space-x-4">
        <select
          className="rounded border px-4 py-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Music">Music</option>
          <option value="Art">Art</option>
          <option value="Tech">Tech</option>
        </select>

        <select
          className="rounded border px-4 py-2"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="New York">New York</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Chicago">Chicago</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <div key={event.id} className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">{event.name}</h2>
            <p className="mb-2 text-gray-600">{event.description}</p>
            <p className="mb-2 text-gray-800">
              Start Date: {new Date(event.startDate).toLocaleDateString()}
            </p>
            <p className="mb-2 text-gray-800">
              End Date: {new Date(event.endDate).toLocaleDateString()}
            </p>
            <p className="mb-2 text-gray-800">
              Price: {event.price > 0 ? `IDR ${event.price}` : "Free"}
            </p>
            <p className="mb-2 text-gray-800">Location: {event.location}</p>
            <p className="text-gray-800">Category: {event.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
