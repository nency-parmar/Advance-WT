'use client';

export default function Meetings() {
    const today = "Fri, 09 Jan 2026";

    // Mock data matching your DB schema exactly
    const meetingsData = [
        {
            MeetingID: "MOM-2045",
            MeetingDate: "2026-01-10 10:00:00",
            MeetingTypeID: 1,
            MeetingTypeName: "Team Meeting",
            MeetingDescription: "Weekly Sprint Review – Module 4 Planning",
            DocumentPath: "/docs/mom-2045.pdf",
            IsCancelled: false,
            CancellationReason: null,
            staffCount: 12,
            presentCount: 11,
            ownerName: "Tejasvi Patel",
        },
        {
            MeetingID: "MOM-2044",
            MeetingDate: "2026-01-09 14:30:00",
            MeetingTypeID: 2,
            MeetingTypeName: "Client Meeting",
            MeetingDescription: "Client Feedback Session – UI/UX Improvements",
            DocumentPath: "/docs/mom-2044.docx",
            IsCancelled: false,
            CancellationReason: null,
            staffCount: 6,
            presentCount: 0,
            ownerName: "Nency Shah",
        },
        {
            MeetingID: "MOM-2043",
            MeetingDate: "2026-01-08 11:00:00",
            MeetingTypeID: 3,
            MeetingTypeName: "Management",
            MeetingDescription: "Q1 2026 Budget Allocation Review",
            DocumentPath: null,
            IsCancelled: false,
            CancellationReason: null,
            staffCount: 15,
            presentCount: 14,
            ownerName: "Khushboo Mehta",
        },
        {
            MeetingID: "MOM-2041",
            MeetingDate: "2026-01-07 15:00:00",
            MeetingTypeID: 1,
            MeetingTypeName: "Team Meeting",
            MeetingDescription: "Database Optimization Technical Review",
            DocumentPath: "/docs/mom-2041.pdf",
            IsCancelled: true,
            CancellationReason: "Technical issues - rescheduled to next week",
            CancellationDateTime: "2026-01-07 14:30:00",
            staffCount: 8,
            presentCount: 0,
            ownerName: "Rahul Desai",
        },
    ];

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

    const meetingTypes = [
        { MeetingTypeID: 1, MeetingTypeName: "Team Meeting" },
        { MeetingTypeID: 2, MeetingTypeName: "Client Meeting" },
        { MeetingTypeID: 3, MeetingTypeName: "Management" },
        { MeetingTypeID: 4, MeetingTypeName: "Technical" },
    ];

    return (
        <div className="py-3 py-md-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
                <div>
                    <h1 className="h4 fw-bold text-dark mb-1">Meetings Management</h1>
                    <p className="text-muted mb-0">
                        Create, schedule, track attendance, and manage MOM documents for all meetings.
                    </p>
                </div>

                <div className="d-flex flex-column align-items-md-end mt-3 mt-md-0">
                    <span className="small text-muted">Today</span>
                    <span className="fw-semibold">{today}</span>
                    <div className="mt-2 d-flex gap-2">
                        <a href="/meetings/new" className="btn btn-sm" style={{
                            backgroundColor: primaryBlue,
                            borderColor: primaryBlue,
                            color: "#fff",
                        }}>
                            + New Meeting
                        </a>
                        <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button">
                            Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Search & Filters */}
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                    <div className="row g-3 align-items-end">
                        <div className="col-md-4">
                            <label className="form-label small text-muted">Search Meetings</label>
                            <input type="text" className="form-control form-control-sm" placeholder="MOM-2045, Sprint Review..." />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label small text-muted">Meeting Type</label>
                            <select className="form-select form-select-sm">
                                <option>All Types</option>
                                {meetingTypes.map(type => (
                                    <option key={type.MeetingTypeID} value={type.MeetingTypeID}>{type.MeetingTypeName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label className="form-label small text-muted">Status</label>
                            <select className="form-select form-select-sm">
                                <option>All</option>
                                <option>Upcoming</option>
                                <option>Completed</option>
                                <option>Cancelled</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <div className="d-grid">
                                <button className="btn btn-sm" style={{ backgroundColor: accentYellow, color: '#1f2933' }}>
                                    Apply Filters
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meetings Table */}
            <div className="card border-0 shadow-sm">
                <div className="card-header d-flex justify-content-between align-items-center" style={headerBlue}>
                    <h2 className="h6 fw-semibold mb-0">All Meetings ({meetingsData.length})</h2>
                    <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-light active">List</button>
                        <button className="btn btn-outline-light">Calendar</button>
                        <button className="btn btn-outline-light">Export</button>
                    </div>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-sm mb-0 align-middle">
                            <thead className="table-dark">
                                <tr>
                                    <th>Meeting ID</th>
                                    <th>Description</th>
                                    <th>Date & Time</th>
                                    <th>Type</th>
                                    <th>Staff</th>
                                    <th>Attendance</th>
                                    <th>Document</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {meetingsData.map((meeting) => (
                                    <tr key={meeting.MeetingID}>
                                        <td className="fw-semibold small">{meeting.MeetingID}</td>
                                        <td>
                                            <div className="small">{meeting.MeetingDescription}</div>
                                            <small className="text-muted">Owner: {meeting.ownerName}</small>
                                        </td>
                                        <td className="small">{new Date(meeting.MeetingDate).toLocaleString()}</td>
                                        <td className="small">
                                            <span className="badge bg-light text-dark fs-2xs">{meeting.MeetingTypeName}</span>
                                        </td>
                                        <td className="small">{meeting.staffCount}</td>
                                        <td className="small">
                                            <span className="badge bg-success fs-2xs">
                                                {meeting.presentCount}/{meeting.staffCount}
                                            </span>
                                        </td>
                                        <td className="small">
                                            {meeting.DocumentPath ? (
                                                <a href={meeting.DocumentPath} className="text-primary">MOM</a>
                                            ) : (
                                                <span className="text-muted">-</span>
                                            )}
                                        </td>
                                        <td>
                                            {meeting.IsCancelled ? (
                                                <>
                                                    <span className="badge bg-danger text-white fs-2xs">Cancelled</span>
                                                    <div className="small text-muted">{meeting.CancellationReason}</div>
                                                </>
                                            ) : (
                                                <span className="badge bg-primary text-white fs-2xs">Active</span>
                                            )}
                                        </td>
                                        <td>
                                            <div className="btn-group btn-group-sm" role="group">
                                                <a href={`/meetings/${meeting.MeetingID}`} className="btn btn-outline-primary btn-sm">View</a>
                                                <a href={`/meetings/${meeting.MeetingID}/edit`} className="btn btn-outline-secondary btn-sm">Edit</a>
                                                {!meeting.IsCancelled && (
                                                    <button className="btn btn-outline-danger btn-sm">Cancel</button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer bg-light border-0 py-2">
                    <small className="text-muted">
                        Showing 1-4 of 156 meetings. Use filters above or pagination to view more.
                    </small>
                </div>
            </div>

            {/* Quick Actions Sidebar */}
            <div className="card border-0 shadow-sm mt-4">
                <div className="card-body">
                    <h2 className="h6 fw-semibold mb-3">Quick Links</h2>
                    <div className="d-grid gap-2">
                        <a href="/meetings/new" className="btn btn-sm" style={{ backgroundColor: primaryBlue, borderColor: primaryBlue, color: "#fff" }}>
                            + Create New Meeting
                        </a>
                        <a href="/master/meeting-type" className="btn btn-sm btn-outline-primary">
                            Manage Meeting Types
                        </a>
                        <a href="/master/staff" className="btn btn-sm btn-outline-primary">
                            Staff Directory
                        </a>
                        <a href="/attendance" className="btn btn-sm btn-outline-secondary">
                            Mark Attendance
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
