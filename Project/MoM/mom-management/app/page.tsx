export default function Home() {
  const stats = {
    upcoming: 6,
    completed: 24,
    cancelled: 3,
    pendingFollowups: 9,
  };

  const today = "Wed, 07 Jan 2026";

  const recentMeetings = [
    {
      id: "MOM-2041",
      title: "Sprint Planning – Module 3",
      date: "07 Jan 2026 · 10:00 AM",
      type: "Team Meeting",
      owner: "Tejasvi",
      status: "Upcoming",
    },
    {
      id: "MOM-2039",
      title: "Client Demo – Release 1.2",
      date: "06 Jan 2026 · 04:00 PM",
      type: "Client Meeting",
      owner: "Nency",
      status: "Completed",
    },
    {
      id: "MOM-2037",
      title: "Department Budget Review",
      date: "05 Jan 2026 · 11:30 AM",
      type: "Management",
      owner: "Khushboo",
      status: "Completed",
    },
  ];

  const followups = [
    {
      id: "FU-3101",
      meeting: "Client Demo – Release 1.2",
      owner: "Nency",
      due: "09 Jan 2026",
      item: "Share finalized MOM & action plan",
    },
    {
      id: "FU-3099",
      meeting: "Sprint Planning – Module 3",
      owner: "Tejasvi",
      due: "08 Jan 2026",
      item: "Confirm team availability and lock dates",
    },
    {
      id: "FU-3095",
      meeting: "Department Budget Review",
      owner: "Khushboo",
      due: "10 Jan 2026",
      item: "Update CAPEX sheet and resend",
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


  return (
    <div className="py-3 py-md-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
        <div>
          <p className="text-uppercase small text-muted mb-1">
            Minutes of Meeting Management
          </p>
          <h1 className="h4 fw-bold text-dark mb-1">Dashboard</h1>
          <p className="text-muted small mb-0">
            Overview of meetings, attendance, and pending follow‑ups for this week. [file:1]
          </p>
        </div>

        <div className="d-flex flex-column align-items-md-end mt-3 mt-md-0">
          <span className="small text-muted">Today</span>
          <span className="fw-semibold">{today}</span>
          <div className="mt-2 d-flex gap-2">
            <a
              href="/meetings/new"
              className="btn btn-sm"
              style={{
                backgroundColor: "#1d4ed8",
                borderColor: "#1d4ed8",
                color: "#fff",
              }}
            >
              + Schedule Meeting
            </a>
            <a
              href="/reports/summary"
              className="btn btn-sm btn-outline-secondary"
            >
              View Reports
            </a>
          </div>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-6 col-md-3">
          <div className="card border-0 shadow-sm h-100" style={cardBlue}>
            <div className="card-body">
              <p className="text-uppercase small mb-1" style={{ color: "#9ca3af" }}>
                Upcoming
              </p>
              <h2 className="display-6 fw-bold mb-0">{stats.upcoming}</h2>
              <p className="small mb-0" style={{ color: "#cbd5f5" }}>
                Meetings scheduled
              </p>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="card border-0 shadow-sm h-100" style={cardBlue}>
            <div className="card-body">
              <p className="text-uppercase small mb-1" style={{ color: "#9ca3af" }}>
                Completed
              </p>
              <h2
                className="display-6 fw-bold mb-0"
                style={{ color: "#22c55e" }}
              >
                {stats.completed}
              </h2>
              <p className="small mb-0" style={{ color: "#cbd5f5" }}>
                MOM recorded and shared
              </p>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="card border-0 shadow-sm h-100" style={cardBlue}>
            <div className="card-body">
              <p className="text-uppercase small mb-1" style={{ color: "#9ca3af" }}>
                Cancelled
              </p>
              <h2
                className="display-6 fw-bold mb-0"
                style={{ color: "#f97373" }}
              >
                {stats.cancelled}
              </h2>
              <p className="small mb-0" style={{ color: "#cbd5f5" }}>
                With reasons logged [file:1]
              </p>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="card border-0 shadow-sm h-100" style={cardBlue}>
            <div className="card-body">
              <p className="text-uppercase small mb-1" style={{ color: "#9ca3af" }}>
                Pending follow‑ups
              </p>
              <h2
                className="display-6 fw-bold mb-0"
                style={{ color: accentYellow }}
              >
                {stats.pendingFollowups}
              </h2>
              <p className="small mb-0" style={{ color: "#cbd5f5" }}>
                Action items due this week
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm h-100">
            <div
              className="card-header d-flex justify-content-between align-items-center"
              style={{ backgroundColor: "#0f172a", color: "#e5e7eb" }}
            >
              <h2 className="h6 fw-semibold mb-0">Recent Meetings & MOM</h2>
              <a
                href="/meetings"
                className="small text-decoration-none"
                style={{ color: accentYellow }}
              >
                View all
              </a>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-sm align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Meeting</th>
                      <th>Date & time</th>
                      <th>Type</th>
                      <th>Owner</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentMeetings.map((m) => (
                      <tr key={m.id}>
                        <td>
                          <div className="fw-semibold small">{m.title}</div>
                          <div className="text-muted small">{m.id}</div>
                        </td>
                        <td className="small text-nowrap">{m.date}</td>
                        <td className="small">{m.type}</td>
                        <td className="small">{m.owner}</td>
                        <td className="small">
                          <span
                            className={
                              "badge rounded-pill " +
                              (m.status === "Completed"
                                ? "text-bg-success"
                                : m.status === "Upcoming"
                                  ? "text-bg-primary"
                                  : "text-bg-secondary")
                            }
                          >
                            {m.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted small mt-2 mb-0">
                Use this list to quickly open meeting details, MOM documents, and
                attendance. [file:1]
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm mb-3">
            <div
              className="card-header"
              style={{ backgroundColor: "#0f172a", color: "#e5e7eb" }}
            >
              <h2 className="h6 fw-semibold mb-0">Pending Follow‑ups</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {followups.map((f) => (
                  <li
                    key={f.id}
                    className="list-group-item px-0 border-0 border-bottom small"
                  >
                    <div className="d-flex justify-content-between">
                      <span className="fw-semibold">{f.meeting}</span>
                      <span
                        className="badge rounded-pill"
                        style={{
                          backgroundColor: accentYellow,
                          color: "#1f2933",
                        }}
                      >
                        Due {f.due}
                      </span>
                    </div>
                    <div className="text-muted">Owner: {f.owner}</div>
                    <div className="text-secondary">{f.item}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h2 className="h6 fw-semibold mb-3">Quick actions</h2>
              <div className="d-grid gap-2">
                <a
                  href="/meetings/new"
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "#1d4ed8",
                    borderColor: "#1d4ed8",
                    color: "#fff",
                  }}
                >
                  + Create new meeting
                </a>
                <a
                  href="/attendance"
                  className="btn btn-sm btn-outline-primary"
                  style={{ borderColor: "#0f172a", color: "#0f172a" }}
                >
                  Mark attendance
                </a>
                <a
                  href="/reports/meeting-wise"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Meeting‑wise report
                </a>
              </div>
              <p className="text-muted small mt-3 mb-0">
                These shortcuts open the key modules: Meetings, Attendance, and
                Reports defined in the project brief. [file:1]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
