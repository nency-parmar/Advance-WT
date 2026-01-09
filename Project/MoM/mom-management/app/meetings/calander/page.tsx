'use client';

export default function Calendar() {
    const cardBlue = {
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #020617 100%)',
        color: '#e5e7eb'
    };
    const headerBlue = {
        backgroundColor: '#0f172a',
        color: '#e5e7eb'
    };
    const accentYellow = '#eab308';
    const primaryBlue = '#1d4ed8';

    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Upcoming meetings
    const upcomingMeetings = [
        {
            id: "MOM-2045",
            title: "Sprint Review Module 4",
            time: "Tomorrow 10:00 AM - 11:30 AM",
            type: "Team Meeting",
            attendees: 12,
            status: "Upcoming",
            color: "#3b82f6"
        },
        {
            id: "MOM-2044",
            title: "Client Feedback UI/UX",
            time: "Today 2:30 PM - 4:00 PM",
            type: "Client Meeting",
            attendees: 6,
            status: "Upcoming",
            color: "#10b981"
        }
    ];

    const pastMeetings = [
        {
            id: "MOM-2043",
            title: "Budget Review Q1",
            time: "Yesterday 11:00 AM",
            type: "Management",
            attendees: 15,
            status: "Completed",
            color: "#f59e0b"
        }
    ];

    return (
        <div className="py-4 py-md-5">
            {/* Header */}
            <div className="row g-4 mb-5">
                <div className="col-lg-8">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
                        <div>
                            <h1 className="h4 fw-bold text-dark mb-1">Meeting Calendar</h1>
                            <p className="text-muted mb-0">Visual overview of scheduled meetings and attendance</p>
                        </div>
                        <div className="mt-3 mt-md-0 d-flex gap-2">
                            <button className="btn btn-sm btn-outline-primary">
                                <i className="bi bi-chevron-left me-1"></i> Prev
                            </button>
                            <button className="btn btn-sm fw-bold text-dark border-0 bg-transparent shadow-none">
                                January 2026
                            </button>
                            <button className="btn btn-sm btn-outline-primary">
                                Next <i className="bi bi-chevron-right ms-1"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-3">
                            <div className="text-center mb-3">
                                <div className="h5 fw-bold text-primary mb-1">{currentDate}</div>
                                <div className="small text-muted">2 meetings today</div>
                            </div>
                            <div className="d-grid gap-2">
                                <a href="/meetings/new" className="btn btn-sm fw-semibold" style={{
                                    backgroundColor: primaryBlue,
                                    color: "white",
                                    border: "none"
                                }}>
                                    <i className="bi bi-plus-circle me-2"></i>+ New Meeting
                                </a>
                                <button className="btn btn-sm btn-outline-secondary">Print Calendar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-4">
                {/* Main Calendar */}
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-header py-3" style={headerBlue}>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="mb-0 fw-semibold">January 2026</h6>
                                <div className="btn-group btn-group-sm" role="group">
                                    <button className="btn btn-outline-light active">Month</button>
                                    <button className="btn btn-outline-light">Week</button>
                                    <button className="btn btn-outline-light">Day</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            {/* Weekday Headers */}
                            <div className="row g-0 border-bottom" style={{ backgroundColor: "#f8fafc" }}>
                                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                    <div key={day} className="col text-center py-3 small fw-semibold text-muted border-end">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            {/* Calendar Days */}
                            <div className="calendar-body" style={{ height: "450px", overflowY: "auto" }}>
                                <div className="row g-0 h-100">
                                    {/* Generate 42 days (6 weeks) */}
                                    {Array.from({ length: 42 }, (_, index) => {
                                        const dayOfMonth = ((index % 7) + 1) % 31 || 31;
                                        const isToday = index === 15; // Mock today
                                        const dayEvents = index === 18 || index === 22 ? 2 : index === 25 ? 3 : 0;

                                        return (
                                            <div key={index} className="col calendar-day position-relative" style={{ height: "71px" }}>
                                                <div className={`day-header p-2 ${isToday ? "today" : ""}`}>
                                                    <span className="small fw-semibold">{dayOfMonth}</span>
                                                    {isToday && (
                                                        <span className="badge bg-primary ms-1 small">Today</span>
                                                    )}
                                                </div>

                                                {/* Events */}
                                                <div className="day-events p-1">
                                                    {Array.from({ length: dayEvents }, (_, i) => (
                                                        <div
                                                            key={i}
                                                            className="event-badge small rounded px-2 py-1 mb-1 d-block text-truncate"
                                                            style={{
                                                                backgroundColor: "#3b82f6" + (i === 0 ? "40" : "20"),
                                                                color: "#3b82f6",
                                                                borderLeft: "2px solid #3b82f6"
                                                            }}
                                                        >
                                                            Sprint Review
                                                        </div>
                                                    ))}
                                                </div>

                                                {dayEvents > 0 && (
                                                    <small className="position-absolute bottom-0 end-0 badge bg-light text-dark me-1 mb-1">
                                                        +{dayEvents}
                                                    </small>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="col-lg-4">
                    {/* Upcoming */}
                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-header py-3 px-4" style={headerBlue}>
                            <h6 className="mb-0 fw-semibold">
                                <i className="bi bi-clock-history me-2"></i>Upcoming (2)
                            </h6>
                        </div>
                        <div className="card-body p-0">
                            {upcomingMeetings.map((meeting) => (
                                <a key={meeting.id} href={`/meetings/${meeting.id}`} className="list-group-item list-group-item-action border-0 px-4 py-3">
                                    <div className="d-flex align-items-start gap-3">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="rounded-circle" style={{
                                                width: 36,
                                                height: 36,
                                                backgroundColor: meeting.color + "40",
                                                color: meeting.color,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: "bold",
                                                fontSize: "0.8rem"
                                            }}>
                                                {meeting.time.split(" ")[0]}
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">{meeting.title}</h6>
                                            <div className="small text-muted mb-1">{meeting.time}</div>
                                            <div className="d-flex gap-2 flex-wrap">
                                                <span className="badge bg-light text-dark small">{meeting.type}</span>
                                                <span className="badge bg-success text-white small">{meeting.attendees} attendees</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="card border-0 shadow-sm">
                        <div className="card-header py-3 px-4" style={headerBlue}>
                            <h6 className="mb-0 fw-semibold">Legend</h6>
                        </div>
                        <div className="card-body p-3">
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <div className="rounded px-2 py-1 small" style={{
                                    backgroundColor: "#3b82f6" + "30",
                                    borderLeft: "3px solid #3b82f6",
                                    minWidth: "60px"
                                }}>
                                    Team Meeting
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <div className="rounded px-2 py-1 small" style={{
                                    backgroundColor: "#10b981" + "30",
                                    borderLeft: "3px solid #10b981",
                                    minWidth: "60px"
                                }}>
                                    Client Meeting
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <div className="rounded px-2 py-1 small" style={{
                                    backgroundColor: "#ef4444" + "30",
                                    borderLeft: "3px solid #ef4444",
                                    minWidth: "60px"
                                }}>
                                    Cancelled
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .calendar-body {
          display: flex;
          flex-wrap: wrap;
        }
        .calendar-day {
          height: 120px;
          border-right: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }
        .calendar-day:hover {
          background-color: #f8fafc;
          transform: scale(1.02);
        }
        .day-header {
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 8px;
          border-bottom: 1px solid #f1f5f9;
          background: #fafbfc;
        }
        .day-header.today {
          background: linear-gradient(135deg, ${primaryBlue}15, ${primaryBlue}25);
          border-bottom-color: ${primaryBlue}30;
        }
        .day-events {
          height: 88px;
          padding: 4px;
          overflow-y: auto;
        }
        .event-badge {
          font-size: 0.7rem !important;
          line-height: 1.2;
          border-radius: 4px;
        }
        .event-badge:hover {
          opacity: 0.9;
          transform: translateX(2px);
        }
      `}</style>
        </div>
    );
}
