export default function AboutPage() {
    return (
        <div className="container py-4 py-md-5">
            {/* Header */}
            <section className="mb-4 mb-md-5">
                <h1 className="h2 fw-bold text-dark mb-2">
                    About MoM Management
                </h1>
                <p className="text-uppercase text-muted small mb-3">
                    Minutes of Meeting · Scheduling · Attendance · Reports
                </p>
                <p className="text-secondary">
                    MoM Management is a web application that helps organizations schedule
                    meetings, record key decisions, and track follow‑up action items in
                    one centralized place, reducing manual work and making MOM records
                    easy to search and share. [file:1]
                </p>
            </section>

            {/* Cards */}
            <section className="row g-3 g-md-4 mb-4 mb-md-5">
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body">
                            <h2 className="text-uppercase small fw-semibold text-muted mb-2">
                                Why we built it
                            </h2>
                            <p className="small text-secondary mb-0">
                                Many teams lose important decisions in chats or paper notes.
                                This system keeps all minutes, documents, and attendance
                                organized in one structured platform. [file:1]
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body">
                            <h2 className="text-uppercase small fw-semibold text-muted mb-2">
                                What it can do
                            </h2>
                            <ul className="small text-secondary mb-0">
                                <li>Schedule team, client, and management meetings.</li>
                                <li>Record discussions, decisions, and action items. [file:1]</li>
                                <li>Track attendance of all participants. [file:1]</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body">
                            <h2 className="text-uppercase small fw-semibold text-muted mb-2">
                                Project scope
                            </h2>
                            <p className="small text-secondary mb-0">
                                The app includes modules for master configuration, meeting
                                management, attendance tracking, and analytics reports such as
                                meeting summary and meeting‑wise reports. [file:1]
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech section */}
            <section className="card border-0 bg-dark text-white">
                <div className="card-body p-4 p-md-5">
                    <h2 className="h5 fw-semibold mb-3">Technology stack</h2>
                    <p className="small mb-0">
                        The frontend uses Next.js with the App Router and Bootstrap 5 to
                        create a clean, responsive dashboard for managing meetings,
                        attendance, and reports.
                    </p>
                </div>
            </section>
        </div>
    );
}
