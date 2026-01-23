'use client'

import { useState } from 'react'
import events from '@/data/events.json'
import type { Event } from '@/types'
import SectionHeader from '@/components/ui/SectionHeader'

const eventsData: Event[] = events

export default function RushTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(eventsData[0])

  return (
    <section id="timeline" className="py-16 md:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Rush Timeline"
          subtitle="Your journey to joining Alpha Zeta"
        />

        {/* Desktop Timeline */}
        <div className="hidden md:block mt-16">
          {/* Timeline bar */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-secondary/10 -translate-y-1/2" />

            <div className="relative flex justify-between">
              {eventsData.map((event, index) => (
                <button
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className="group flex flex-col items-center"
                >
                  {/* Dot */}
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      selectedEvent?.id === event.id
                        ? 'bg-accent border-accent scale-125'
                        : 'bg-primary border-white/30 group-hover:border-accent'
                    }`}
                  />

                  {/* Date */}
                  <span
                    className={`mt-3 text-sm transition-colors ${
                      selectedEvent?.id === event.id
                        ? 'text-accent'
                        : 'text-secondary/50 group-hover:text-secondary/70'
                    }`}
                  >
                    {event.date.split(',')[0]}
                  </span>

                  {/* Event name */}
                  <span
                    className={`mt-1 text-xs max-w-[100px] text-center transition-colors ${
                      selectedEvent?.id === event.id
                        ? 'text-secondary-light'
                        : 'text-secondary/40 group-hover:text-secondary/60'
                    }`}
                  >
                    {event.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Selected event details */}
          {selectedEvent && (
            <div className="mt-12 p-8 bg-primary-light border border-secondary/10 rounded-2xl transition-all duration-300">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-secondary-light mb-2">
                    {selectedEvent.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-secondary/60 text-sm mb-4">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {selectedEvent.date}
                    </span>
                    {selectedEvent.time && (
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {selectedEvent.time}
                      </span>
                    )}
                    {selectedEvent.location && (
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {selectedEvent.location}
                      </span>
                    )}
                  </div>
                  <p className="text-secondary/70 leading-relaxed max-w-2xl">
                    {selectedEvent.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden mt-12 space-y-4">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="p-6 bg-primary-light border border-secondary/10 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-accent rounded-full" />
                <span className="text-accent text-sm font-medium">{event.date}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-secondary-light mb-2">
                {event.name}
              </h3>
              <div className="flex flex-wrap gap-3 text-secondary/50 text-sm mb-3">
                {event.time && <span>{event.time}</span>}
                {event.location && <span>@ {event.location}</span>}
              </div>
              <p className="text-secondary/60 text-sm leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
