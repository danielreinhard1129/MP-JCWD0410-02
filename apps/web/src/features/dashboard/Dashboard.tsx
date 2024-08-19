import React from 'react';
import Link from 'next/link';


const recentEvents = [
  { id: 1, name: "Summer Music Festival", date: "2024-09-15" },
  { id: 2, name: "Tech Conference 2024", date: "2024-08-22" },
];

const upcomingEvents = [
  { id: 3, name: "Fall Art Exhibition", date: "2024-11-12" },
  { id: 4, name: "Annual Charity Gala", date: "2024-12-22" },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Event Organizer Dashboard</h1>
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="font-semibold">Total Events</h3>
          <p className="text-2xl">24</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="font-semibold">Total Attendees</h3>
          <p className="text-2xl">1,234</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="font-semibold">Revenue</h3>
          <p className="text-2xl">$45,678</p>
        </div>
      </div>

      {/* Recent Events */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Recent Events</h2>
        <div className="bg-white shadow rounded-lg p-4">
          {recentEvents.map(event => (
            <div key={event.id} className="mb-2">
              <Link href={`/events/${event.id}`} className="text-blue-600 hover:underline">
                {event.name}
              </Link>
              <span className="text-gray-500 ml-2">{event.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Upcoming Events</h2>
        <div className="bg-white shadow rounded-lg p-4">
          {upcomingEvents.map(event => (
            <div key={event.id} className="mb-2">
              <Link href={`/events/${event.id}`} className="text-blue-600 hover:underline">
                {event.name}
              </Link>
              <span className="text-gray-500 ml-2">{event.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Quick Actions</h2>
        <div className="flex space-x-4">
          <Link href="/events/create" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Create New Event
          </Link>
          <Link href="/reports" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            View Reports
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;