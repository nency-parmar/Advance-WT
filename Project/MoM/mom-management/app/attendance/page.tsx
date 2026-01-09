'use client';

export default function Attendance() {
    const today = "Fri, 09 Jan 2026";

    // Mock data from MeetingMember table joined with Meetings + Staff
    const meetingsWithAttendance = [
        {
            MeetingID: "MOM-2045",
            MeetingDescription: "Weekly Sprint Review – Module 4",
            MeetingDate: "2026-01-10 10:00:00",
            MeetingTypeName: "Team Meeting",
            staffMembers: [
                { StaffID: 1, StaffName: "Tejasvi Patel", IsPresent: true, Remarks: "Presenter" },
                { StaffID: 2, StaffName: "Nency Shah", IsPresent: true, Remarks: "" },
                { StaffID: 3, StaffName: "Khushboo Mehta", IsPresent: false, Remarks: "On leave" },
                { StaffID: 4, StaffName: "Rahul Desai", IsPresent: true, Remarks: "Note taker" },
            ],
        },
        {
            MeetingID: "MOM-2044",
            MeetingDescription: "Client Feedback Session – UI/UX",
            MeetingDate: "2026-01-09 14:30:00",
            MeetingTypeName: "Client Meeting",
            staffMembers: [
                { StaffID: 2, StaffName: "Nency Shah", IsPresent: null, Remarks: "" },
                { StaffID: 5, StaffName: "Amit Patel", IsPresent: null, Remarks: "" },
                { StaffID: 6, StaffName: "Priya Gupta", IsPresent: null, Remarks: "" },
            ],
        },
        {
            MeetingID: "MOM-2043",
            MeetingDescription: "Q1 2026 Budget Allocation Review",
            MeetingDate: "2026-01-08 11:00:00",
            MeetingTypeName: "Management",
            staffMembers: [
                { StaffID: 3, StaffName: "Khushboo Mehta", IsPresent: true, Remarks: "" },
                { StaffID: 7, StaffName: "Vikram Singh", IsPresent: true, Remarks: "Finance head" },
                { StaffID: 8, StaffName: "Sneha Rao", IsPresent: false, Remarks: "Travel" },
            ],
        },
    ];

    const stats = {
        totalPresent: 28,
        totalAbsent: 5,
        pendingMark: 9,
        totalMeetingsPending: 2,
    };

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

    return (
        <div className="py-3 py-md-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
                <div>
                    <h1 className="h4 fw-bold text-dark mb-1">Attendance Management</h1>
                    <p className="text-muted mb-0">
                        Mark attendance for staff members (IsPresent flag) per meeting. View summaries and remarks.
                    </p>
                </div>

                <div className="d-flex flex-column align-items-md-end mt-3 mt-md-0">
                    <span className="small text-muted">Today</span>
                    <span className="fw-semibold">{today}</span>
                    <div className="mt-2 d-flex gap-2">
                        <button className="btn btn-sm" style={{
                            backgroundColor: primaryBlue,
                            borderColor: primaryBlue,
                            color: "#fff",
                        }}>
                            Bulk Mark Attendance
                        </button>
                        <button className="btn btn-sm btn-outline-secondary">Export Report</button>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="row g-3 mb-4">
                <div className="col-6 col-md-3">
                    <div className="card border-0 shadow-sm h-100" style={cardBlue}>
                        <div className="card-body">
                            <p className="text-uppercase small mb-1" style={{ color: "#9ca3af" }}>
                                Total Present
                            </p>
                            <h2 className="display-6 fw-bold mb-0" style={{ color: "#22c55e" }}>
                                {stats.totalPresent}
                            </h2>
                            <p className="small mb-0" style={{ color: "#cbd5f5" }}>
                                Marked ✓
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="card border-0 shadow-sm h-100" style={cardBlue}>
                        <div className="card-body">
                            <p className="text-uppercase small mb-1" style={{ color: "#9ca3af" }}>
                                Absent
                            </p>
                            <h2 className="display-6 fw-bold mb-0" style={{ color: "#f97373" }}>
                                {stats.totalAbsent}
                            </h2>
                            <p className="small mb-0" style={{ color: "#cbd5f5" }}>
                                Marked ✗
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="card border-0 shadow-sm h-100" style={cardBlue}>
                        <div className="card-body">
                            <p className="text-uppercase small mb-1" style={{ color: "#9ca3af" }}>
                                Pending Mark
                            </p>
                            <h2 className="display-6 fw-bold mb-0" style={{ color: accentYellow }}>
                                {stats.pendingMark}
                            </h2>
                            <p className="small mb-0" style={{ color: "#cbd5f5" }}>
                                Staff/Meetings
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="card border-0 shadow-sm h-100" style={cardBlue}>
                        <div className="card-body">
                            <p className="text-uppercase small mb-1" style={{ color: "#9ca3af" }}>
                                Meetings Pending
                            </p>
                            <h2 className="display-6 fw-bold mb-0" style={{ color: primaryBlue }}>
                                {stats.totalMeetingsPending}
                            </h2>
                            <p className="small mb-0" style={{ color: "#cbd5f5" }}>
                                Attendance
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meetings with Attendance */}
            <div className="card border-0 shadow-sm">
                <div className="card-header d-flex justify-content-between align-items-center" style={headerBlue}>
                    <h2 className="h6 fw-semibold mb-0">Meetings & Attendance</h2>
                    <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-light active">All</button>
                        <button className="btn btn-outline-light">Pending Only</button>
                        <button className="btn btn-outline-light">Today</button>
                    </div>
                </div>
                <div className="card-body p-0">
                    {meetingsWithAttendance.map((meeting) => (
                        <div key={meeting.MeetingID} className="border-bottom">
                            <div className="p-4">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <div>
                                        <h5 className="fw-bold mb-1">{meeting.MeetingDescription}</h5>
                                        <div className="small text-muted">
                                            {meeting.MeetingID} • {new Date(meeting.MeetingDate).toLocaleString()} • {meeting.MeetingTypeName}
                                        </div>
                                    </div>
                                    <span className="badge bg-primary fs-2xs">
                                        {meeting.staffMembers.filter(s => s.IsPresent === true).length}/{meeting.staffMembers.length}
                                    </span>
                                </div>

                                {/* Staff Attendance Table */}
                                <div className="table-responsive">
                                    <table className="table table-sm mb-0">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Staff</th>
                                                <th>Present</th>
                                                <th>Remarks</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {meeting.staffMembers.map((member) => (
                                                <tr key={member.StaffID}>
                                                    <td className="small fw-medium">{member.StaffName}</td>
                                                    <td className="small">
                                                        <span className={
                                                            member.IsPresent === true ? "badge bg-success text-white fs-2xs" :
                                                                member.IsPresent === false ? "badge bg-danger text-white fs-2xs" :
                                                                    "badge bg-warning text-white fs-2xs"
                                                        }>
                                                            {member.IsPresent === true ? "Present" : member.IsPresent === false ? "Absent" : "Pending"}
                                                        </span>
                                                    </td>
                                                    <td className="small">{member.Remarks || '-'}</td>
                                                    <td>
                                                        <div className="btn-group btn-group-sm">
                                                            <button className="btn btn-sm btn-outline-success" title="Mark Present">
                                                                ✓
                                                            </button>
                                                            <button className="btn btn-sm btn-outline-danger" title="Mark Absent">
                                                                ✗
                                                            </button>
                                                            <button className="btn btn-sm btn-outline-secondary" title="Remarks">
                                                                📝
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="card border-0 shadow-sm mt-4">
                <div className="card-body">
                    <h2 className="h6 fw-semibold mb-3">Quick Actions</h2>
                    <div className="d-grid gap-2">
                        <a href="/master/staff" className="btn btn-sm btn-outline-primary">
                            Manage Staff Directory
                        </a>
                        <a href="/reports/summary" className="btn btn-sm btn-outline-secondary">
                            Attendance Reports
                        </a>
                        <button className="btn btn-sm" style={{ backgroundColor: accentYellow, color: '#1f2933' }}>
                            Bulk Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
