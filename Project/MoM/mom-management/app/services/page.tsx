export default function Services() {
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

    const services = [
        {
            title: "Meeting Scheduling",
            description: "Schedule team, client, and management meetings with calendar integration, venue booking, and automated reminders.",
            icon: "📅",
            stats: "156+ meetings scheduled",
            link: "/meetings/new"
        },
        {
            title: "Attendance Tracking",
            description: "Mark staff attendance (IsPresent flag), track participation, and generate attendance summaries per meeting.",
            icon: "👥",
            stats: "95% attendance rate",
            link: "/attendance"
        },
        {
            title: "MOM Documentation",
            description: "Upload and manage meeting documents, action items, decisions, and follow-up tasks with document versioning.",
            icon: "📄",
            stats: "124 MOMs stored",
            link: "/meetings"
        },
        {
            title: "Master Data Management",
            description: "Configure meeting types, staff directory, departments, and venues from centralized master tables.",
            icon: "⚙️",
            stats: "28 staff + 12 venues",
            link: "/master/meeting_types"
        },
        {
            title: "Reports & Analytics",
            description: "Generate meeting-wise reports, attendance summaries, and export to Excel/PDF for management review.",
            icon: "📊",
            stats: "45 reports generated",
            link: "/reports/summary"
        },
        {
            title: "Role-Based Access",
            description: "Admin, Convener, and Staff roles with secure authentication and permission-based access control.",
            icon: "🔐",
            stats: "3 user roles",
            link: "/profile"
        }
    ];

    return (
        <div className="py-3 py-md-5 bg-light min-vh-100">
            <div className="container">
                {/* Hero Section */}
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bold text-dark mb-3">MoM Management Services</h1>
                    <p className="lead text-muted mb-4">
                        Streamline meeting lifecycle from scheduling to documentation and follow-ups.
                    </p>
                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <a href="/meetings/new" className="btn btn-lg" style={{
                            backgroundColor: primaryBlue,
                            borderColor: primaryBlue,
                            color: "#fff",
                        }}>
                            Start Scheduling
                        </a>
                        <a href="/auth/login" className="btn btn-lg btn-outline-secondary">
                            Get Started Free
                        </a>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="row g-4 mb-5">
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="card border-0 shadow-sm h-100 hover-lift">
                                <div className="card-body d-flex flex-column p-4">
                                    <div className="mb-4">
                                        <div className="display-1 mb-3 text-primary opacity-75">{service.icon}</div>
                                        <h3 className="h5 fw-bold mb-2">{service.title}</h3>
                                        <p className="text-muted flex-grow-1">{service.description}</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-end flex-wrap gap-2">
                                        <div className="small text-success fw-semibold">{service.stats}</div>
                                        <a href={service.link} className="btn btn-sm btn-outline-primary">
                                            Go to {service.icon === "📅" ? "Schedule" : "Service"}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="row g-4 mb-5">
                    <div className="col-md-3 col-sm-6 mb-4">
                        <div className="card border-0 shadow-sm h-100 text-center p-4" style={cardBlue}>
                            <div className="display-4 fw-bold mb-2" style={{ color: accentYellow }}>500+</div>
                            <p className="small mb-0" style={{ color: "#cbd5f5" }}>Meetings Managed</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <div className="card border-0 shadow-sm h-100 text-center p-4" style={cardBlue}>
                            <div className="display-4 fw-bold mb-2" style={{ color: "#22c55e" }}>98%</div>
                            <p className="small mb-0" style={{ color: "#cbd5f5" }}>Attendance Accuracy</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <div className="card border-0 shadow-sm h-100 text-center p-4" style={cardBlue}>
                            <div className="display-4 fw-bold mb-2" style={{ color: primaryBlue }}>150+</div>
                            <p className="small mb-0" style={{ color: "#cbd5f5" }}>Active Users</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <div className="card border-0 shadow-sm h-100 text-center p-4" style={cardBlue}>
                            <div className="display-4 fw-bold mb-2" style={{ color: "#f97316" }}>24/7</div>
                            <p className="small mb-0" style={{ color: "#cbd5f5" }}>Support Available</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center py-5 border-top">
                    <h2 className="h3 fw-bold mb-3">Ready to Streamline Your Meetings?</h2>
                    <p className="text-muted mb-4">Join 150+ teams using MoM Management System.</p>
                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <a href="/meetings/new" className="btn btn-xl" style={{
                            backgroundColor: primaryBlue,
                            borderColor: primaryBlue,
                            color: "#fff",
                        }}>
                            Schedule First Meeting
                        </a>
                        <a href="/auth/login" className="btn btn-xl btn-outline-primary">
                            Login to Dashboard
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
