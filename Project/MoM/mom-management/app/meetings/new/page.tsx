'use client';

export default function NewMeeting() {
    const cardBlue = {
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #020617 100%)',
        color: '#e5e7eb'
    };
    const primaryBlue = '#1d4ed8';
    const accentYellow = '#eab308';

    return (
        <div className="py-4 py-md-5">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                    {/* Header */}
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <div>
                            <a href="/meetings" className="btn btn-sm btn-outline-secondary mb-3">
                                <i className="bi bi-arrow-left me-2"></i>Back to Meetings
                            </a>
                            <h1 className="h3 fw-bold text-dark mb-0">New Meeting</h1>
                            <p className="text-muted mt-1 mb-0">Fill details to schedule meeting (MeetingID auto-generated)</p>
                        </div>
                        <div className="text-end">
                            <span className="badge bg-success fs-6 px-3 py-2 mb-2 d-block">
                                Required fields marked *
                            </span>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Left Column - Main Details */}
                        <div className="col-lg-8">
                            <div className="card border-0 shadow-sm">
                                <div className="card-header py-3" style={{
                                    backgroundColor: "#f8fafc",
                                    borderBottom: "1px solid #e2e8f0"
                                }}>
                                    <h6 className="fw-semibold mb-0">
                                        <i className="bi bi-calendar-event me-2 text-primary"></i>Meeting Details
                                    </h6>
                                </div>
                                <div className="card-body p-4">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold small text-dark mb-2">
                                                Meeting Type * <span className="text-danger">(MeetingTypeID)</span>
                                            </label>
                                            <select className="form-select" required>
                                                <option value="">Select Type...</option>
                                                <option value="1">Team Meeting</option>
                                                <option value="2">Client Meeting</option>
                                                <option value="3">Management Meeting</option>
                                                <option value="4">Technical Review</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold small text-dark mb-2">
                                                Venue
                                            </label>
                                            <select className="form-select">
                                                <option value="">Select Venue...</option>
                                                <option>Conference Room A-101 (12 seats)</option>
                                                <option>Board Room 201 (20 seats)</option>
                                                <option>Lab B-205 (8 seats)</option>
                                                <option>Online (Zoom)</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label fw-semibold small text-dark mb-2">
                                                Meeting Date & Time * <span className="text-danger">(MeetingDate)</span>
                                            </label>
                                            <div className="input-group">
                                                <input
                                                    type="datetime-local"
                                                    className="form-control"
                                                    required
                                                    defaultValue="2026-01-15T10:00"
                                                />
                                                <span className="input-group-text">
                                                    <i className="bi bi-clock"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label fw-semibold small text-dark mb-2">
                                                Description * <span className="text-danger">(MeetingDescription)</span>
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows={3}
                                                placeholder="Agenda, objectives, expected outcomes..."
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Participants & Advanced */}
                        <div className="col-lg-4">
                            {/* Participants */}
                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-header py-3" style={{
                                    backgroundColor: "#f8fafc",
                                    borderBottom: "1px solid #e2e8f0"
                                }}>
                                    <h6 className="fw-semibold mb-0">
                                        <i className="bi bi-people me-2 text-success"></i>Participants (MeetingMember)
                                    </h6>
                                </div>
                                <div className="card-body p-4">
                                    <div className="d-flex gap-2 mb-3">
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Search staff..."
                                        />
                                        <button className="btn btn-sm btn-outline-primary">
                                            <i className="bi bi-plus"></i>
                                        </button>
                                    </div>
                                    <div className="selected-participants" style={{ maxHeight: "200px", overflowY: "auto" }}>
                                        <div className="d-flex align-items-center gap-2 p-2 bg-light rounded mb-2">
                                            <img src="/api/placeholder/32/32" alt="Staff" className="rounded-circle" width="32" height="32" />
                                            <span className="small fw-medium">Tejasvi Patel</span>
                                            <button className="btn btn-sm btn-outline-danger ms-auto">
                                                <i className="bi bi-x"></i>
                                            </button>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 p-2 bg-light rounded mb-2">
                                            <img src="/api/placeholder/32/32" alt="Staff" className="rounded-circle" width="32" height="32" />
                                            <span className="small fw-medium">Nency Shah</span>
                                            <button className="btn btn-sm btn-outline-danger ms-auto">
                                                <i className="bi bi-x"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <small className="text-muted">0/50 selected (IsPresent marked later)</small>
                                </div>
                            </div>

                            {/* Document Upload */}
                            <div className="card border-0 shadow-sm">
                                <div className="card-header py-3" style={{
                                    backgroundColor: "#f8fafc",
                                    borderBottom: "1px solid #e2e8f0"
                                }}>
                                    <h6 className="fw-semibold mb-0">
                                        <i className="bi bi-file-earmark-text me-2 text-warning"></i>MOM Document
                                    </h6>
                                </div>
                                <div className="card-body p-4 text-center">
                                    <div className="border-dashed border-2 border-primary rounded-3 p-5 mb-3 hover-pointer" style={{
                                        borderStyle: "dashed",
                                        cursor: "pointer",
                                        transition: "all 0.2s"
                                    }}>
                                        <i className="bi bi-cloud-upload display-4 text-primary opacity-50 mb-3 d-block"></i>
                                        <h6 className="text-muted mb-1">Upload Agenda/MOM</h6>
                                        <small className="text-muted">(DocumentPath - PDF/DOCX)</small>
                                        <input type="file" className="d-none" accept=".pdf,.docx,.doc" />
                                    </div>
                                    <small className="text-muted">Optional - attach after meeting</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex gap-3 justify-content-end mt-5 pt-4 border-top">
                        <button className="btn btn-outline-secondary px-4">
                            <i className="bi bi-x-circle me-2"></i>Cancel
                        </button>
                        <button className="btn btn-lg px-5" style={{
                            backgroundColor: primaryBlue,
                            borderColor: primaryBlue,
                            color: "white"
                        }}>
                            <i className="bi bi-check-circle me-2"></i>Create Meeting
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .hover-pointer:hover {
          border-color: ${primaryBlue} !important;
          background-color: ${primaryBlue}05;
          transform: scale(1.02);
        }
        .selected-participants::-webkit-scrollbar {
          width: 4px;
        }
        .selected-participants::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .selected-participants::-webkit-scrollbar-thumb {
          background: ${primaryBlue};
          border-radius: 2px;
        }
      `}</style>
        </div>
    );
}
