import Link from "next/link";

export default function ProfilePage() {
    const user = {
        name: "Asha Sharma",
        role: "Coordinator",
        email: "asha.sharma@example.com",
        phone: "+91 98765 43210",
        location: "Mumbai, India",
    };

    return (
        <section>
            <div className="profile-grid">
                <aside className="card">
                    <div className="d-flex flex-column align-items-center text-center">
                        <div className="profile-avatar mb-3">AS</div>
                        <h3 style={{ margin: 0 }}>{user.name}</h3>
                        <p className="muted">{user.role}</p>
                        <div style={{ width: "100%", marginTop: "1rem" }}>
                            <div className="mb-2">
                                <strong>Email:</strong>
                                <div className="muted">{user.email}</div>
                            </div>
                            <div className="mb-2">
                                <strong>Phone:</strong>
                                <div className="muted">{user.phone}</div>
                            </div>
                            <div className="mb-3">
                                <strong>Location:</strong>
                                <div className="muted">{user.location}</div>
                            </div>
                            <div className="d-flex gap-2">
                                <Link href="#" className="btn-theme">Edit Profile</Link>
                                <Link href="#" className="btn-outline-theme">Settings</Link>
                            </div>
                        </div>
                    </div>
                </aside>

                <div className="card">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 style={{ margin: 0 }}>Overview</h4>
                        <div className="muted">Member since 2023</div>
                    </div>

                    <section style={{ marginBottom: "1rem" }}>
                        <h6>Recent Activity</h6>
                        <ul className="muted" style={{ paddingLeft: "1rem" }}>
                            <li>Created meeting: Parent-Teacher Meeting — 2 days ago</li>
                            <li>Updated attendance policy — 1 week ago</li>
                            <li>Uploaded report: Annual Summary — 3 weeks ago</li>
                        </ul>
                    </section>

                    <section>
                        <h6>Profile Details</h6>
                        <div className="row">
                            <div className="col-6">
                                <p><strong>Department</strong></p>
                                <p className="muted">Student Affairs</p>
                            </div>
                            <div className="col-6">
                                <p><strong>Reports</strong></p>
                                <p className="muted">12 created</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <div className="card" style={{ marginTop: '1rem' }}>
                    <h6 style={{ marginBottom: '0.5rem' }}>Quick Links</h6>
                    <div className="d-flex gap-2">
                        <Link href="#" className="btn-theme">New Meeting</Link>
                        <Link href="#" className="btn-outline-theme">Upload Report</Link>
                        <Link href="#" className="btn-outline-theme">Attendance</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
