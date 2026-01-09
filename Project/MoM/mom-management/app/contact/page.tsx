export default function ContactPage() {
    return (
        <div className="container py-4 py-md-5">
            <div className="row g-4">
                {/* Form */}
                <section className="col-lg-8">
                    <h1 className="h2 fw-bold text-dark mb-2">Contact Us</h1>
                    <p className="text-secondary mb-4">
                        Have questions about the MoM Management system, new features, or
                        issues with meetings and attendance? Send a message and the project
                        team will get back to you.
                    </p>

                    <form className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="row g-3 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label small fw-semibold">
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label small fw-semibold">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control form-control-sm"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label small fw-semibold">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Eg. Feedback about meeting reports"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label small fw-semibold">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    className="form-control form-control-sm"
                                    placeholder="Describe your question or issue in detail..."
                                />
                            </div>

                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
                                <p className="text-muted small mb-0">
                                    This form is frontend‑only; later you can connect it to an API
                                    or email service.
                                </p>
                                <button type="submit" className="btn btn-primary btn-sm px-4">
                                    Send message
                                </button>
                            </div>
                        </div>
                    </form>
                </section>

                {/* Side info */}
                <aside className="col-lg-4 d-flex flex-column gap-3">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h2 className="text-uppercase small fw-semibold text-muted mb-2">
                                Project contact
                            </h2>
                            <p className="small text-secondary mb-0">
                                This MoM system is built as an academic project to demonstrate
                                meeting scheduling, minutes recording, attendance tracking, and
                                reporting workflows. [file:1]
                            </p>
                        </div>
                    </div>

                    <div className="card border-0 bg-dark text-white">
                        <div className="card-body">
                            <h3 className="small fw-semibold mb-2">Need quick help?</h3>
                            <p className="small mb-3">
                                For UI issues, first check your Next.js and Bootstrap setup
                                before changing individual components.
                            </p>
                            <ul className="small mb-0">
                                <li>App Router structure in the <code>app/</code> folder.</li>
                                <li>Bootstrap imported once in your root layout.</li>
                                <li>All pages share the same navbar and shell layout.</li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
