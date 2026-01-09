// ...existing code...
'use client';

import React, { useState } from "react";

type StaffMember = {
    StaffID: number;
    StaffName: string;
    IsPresent: boolean | null;
    Remarks: string;
};

type Meeting = {
    MeetingID: string;
    MeetingDescription: string;
    MeetingDate: string;
    MeetingTypeName: string;
    Venue: string;
    DocumentPath?: string;
    staffMembers: StaffMember[];
};

export default function MeetingAttendance({ params }: { params: { id?: string } }) {
    const id = params?.id ?? "MOM-2045";
    const today = "Fri, 09 Jan 2026";

    const meeting: Meeting = {
        MeetingID: id,
        MeetingDescription: "Weekly Sprint Review – Module 4",
        MeetingDate: "2026-01-10 10:00:00",
        MeetingTypeName: "Team Meeting",
        Venue: "Conf Room A-101",
        DocumentPath: "/docs/mom-2045.pdf",
        staffMembers: [
            { StaffID: 1, StaffName: "Tejasvi Patel", IsPresent: true, Remarks: "Presenter" },
            { StaffID: 2, StaffName: "Nency Shah", IsPresent: true, Remarks: "Scribe" },
            { StaffID: 3, StaffName: "Khushboo Mehta", IsPresent: false, Remarks: "On leave" },
            { StaffID: 4, StaffName: "Rahul Desai", IsPresent: null, Remarks: "" },
            { StaffID: 5, StaffName: "Amit Patel", IsPresent: true, Remarks: "Developer" },
            { StaffID: 6, StaffName: "Priya Gupta", IsPresent: false, Remarks: "Sick leave" },
            { StaffID: 7, StaffName: "Vikram Singh", IsPresent: null, Remarks: "" },
        ]
    };

    const [staffMembers, setStaffMembers] = useState<StaffMember[]>(meeting.staffMembers);

    const stats = {
        totalStaff: staffMembers.length,
        present: staffMembers.filter(m => m.IsPresent === true).length,
        absent: staffMembers.filter(m => m.IsPresent === false).length,
        pending: staffMembers.filter(m => m.IsPresent === null).length,
        attendanceRate: Math.round((staffMembers.filter(m => m.IsPresent === true).length / Math.max(1, staffMembers.length)) * 100)
    };

    const cardBlue = {
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #020617 100%)',
        color: '#e5e7eb'
    } as const;
    const headerBlue = {
        backgroundColor: '#0f172a',
        color: '#e5e7eb'
    } as const;
    const accentYellow = '#eab308';
    const primaryBlue = '#1d4ed8';

    const updateAttendance = (staffId: number, isPresent: boolean | null) => {
        setStaffMembers(prev =>
            prev.map(s => (s.StaffID === staffId ? { ...s, IsPresent: isPresent } : s))
        );
        // TODO: call API to persist change
        console.log(`Update StaffID ${staffId} IsPresent: ${isPresent}`);
    };

    return (
        <div className="py-3 py-md-4">
            {/* Header */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
                <div>
                    <a href="/attendance" className="btn btn-sm btn-outline-secondary mb-2">
                        <i className="bi bi-arrow-left me-2"></i>Back to All
                    </a>
                    <h1 className="h4 fw-bold text-dark mb-1">
                        {meeting.MeetingDescription} ({meeting.MeetingID})
                    </h1>
                    <p className="text-muted mb-0">
                        {new Date(meeting.MeetingDate).toLocaleString()} • {meeting.MeetingTypeName} • {meeting.Venue}
                    </p>
                </div>
                <div className="d-flex flex-column align-items-md-end mt-3 mt-md-0">
                    <span className="small text-muted">Today</span>
                    <span className="fw-semibold">{today}</span>
                    <div className="mt-2 d-flex gap-2">
                        {meeting.DocumentPath && (
                            <a href={meeting.DocumentPath} className="btn btn-sm btn-outline-primary">
                                📄 MOM Document
                            </a>
                        )}
                        <button className="btn btn-sm" style={{
                            backgroundColor: primaryBlue,
                            borderColor: primaryBlue,
                            color: "#fff",
                        }}>
                            Save All Changes
                        </button>
                    </div>
                </div>
            </div>

            {/* Meeting Stats */}
            <div className="row g-3 mb-5">
                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100" style={cardBlue}>
                        <div className="card-body text-center">
                            <h2 className="display-6 fw-bold mb-1" style={{ color: "#22c55e" }}>
                                {stats.present}
                            </h2>
                            <p className="small mb-1" style={{ color: "#cbd5f5" }}>Present</p>
                            <div className="progress" style={{ height: "4px" }}>
                                <div className="progress-bar bg-success" style={{ width: `${(stats.present / Math.max(1, stats.totalStaff)) * 100}%` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100" style={cardBlue}>
                        <div className="card-body text-center">
                            <h2 className="display-6 fw-bold mb-1" style={{ color: "#f97373" }}>
                                {stats.absent}
                            </h2>
                            <p className="small mb-1" style={{ color: "#cbd5f5" }}>Absent</p>
                            <div className="progress" style={{ height: "4px" }}>
                                <div className="progress-bar bg-danger" style={{ width: `${(stats.absent / Math.max(1, stats.totalStaff)) * 100}%` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100" style={cardBlue}>
                        <div className="card-body text-center">
                            <h2 className="display-6 fw-bold mb-1" style={{ color: accentYellow }}>
                                {stats.pending}
                            </h2>
                            <p className="small mb-1" style={{ color: "#cbd5f5" }}>Pending</p>
                            <div className="progress" style={{ height: "4px" }}>
                                <div className="progress-bar bg-warning" style={{ width: `${(stats.pending / Math.max(1, stats.totalStaff)) * 100}%` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100" style={cardBlue}>
                        <div className="card-body text-center">
                            <h2 className="display-6 fw-bold mb-1" style={{ color: primaryBlue }}>
                                {stats.attendanceRate}%
                            </h2>
                            <p className="small mb-0" style={{ color: "#cbd5f5" }}>Attendance Rate</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Staff Attendance Table */}
            <div className="card border-0 shadow-lg">
                <div className="card-header py-4" style={headerBlue}>
                    <div className="row align-items-center">
                        <div className="col">
                            <h5 className="fw-bold mb-0">Mark Attendance</h5>
                            <small className="text-light opacity-75">Update IsPresent flag and remarks for MeetingMember records</small>
                        </div>
                        <div className="col-auto">
                            <div className="btn-group" role="group">
                                <button className="btn btn-sm btn-outline-light active" data-status="all">All</button>
                                <button className="btn btn-sm btn-outline-light" data-status="pending">Pending</button>
                                <button className="btn btn-sm btn-outline-light" data-status="present">Present</button>
                                <button className="btn btn-sm btn-outline-light" data-status="absent">Absent</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead className="table-dark">
                                <tr>
                                    <th style={{ width: "40%" }}>Staff Name (StaffID)</th>
                                    <th style={{ width: "20%" }} className="text-center">Status (IsPresent)</th>
                                    <th style={{ width: "25%" }}>Remarks</th>
                                    <th style={{ width: "15%" }} className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {staffMembers.map((member) => (
                                    <tr key={member.StaffID}>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="rounded-circle bg-light d-flex align-items-center justify-content-center" style={{
                                                    width: 36, height: 36, fontSize: "0.8rem"
                                                }}>
                                                    {member.StaffName.split(" ").map(n => (n ? n[0] : "")).join("")}
                                                </div>
                                                <div>
                                                    <div className="fw-semibold small">{member.StaffName}</div>
                                                    <small className="text-muted">ID: {member.StaffID}</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <span className={`badge fs-2xs fw-semibold px-3 py-2 rounded-pill ${member.IsPresent === true ? "bg-success text-white" :
                                                member.IsPresent === false ? "bg-danger text-white" :
                                                    "bg-warning text-white"
                                                }`}>
                                                {member.IsPresent === true ? "Present ✓" :
                                                    member.IsPresent === false ? "Absent ✗" : "Pending ?"}
                                            </span>
                                        </td>
                                        <td>
                                            <span className="small badge bg-light text-dark px-2 py-1">
                                                {member.Remarks || "No remarks"}
                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <div className="btn-group btn-group-sm" role="group">
                                                <button
                                                    className={`btn ${member.IsPresent === true ? "btn-success" : "btn-outline-success"}`}
                                                    onClick={() => updateAttendance(member.StaffID, true)}
                                                    title="Mark Present"
                                                    type="button"
                                                >
                                                    ✓
                                                </button>
                                                <button
                                                    className={`btn ${member.IsPresent === false ? "btn-danger" : "btn-outline-danger"}`}
                                                    onClick={() => updateAttendance(member.StaffID, false)}
                                                    title="Mark Absent"
                                                    type="button"
                                                >
                                                    ✗
                                                </button>
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    title="Add Remarks"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#remarksModal"
                                                    type="button"
                                                >
                                                    <i className="bi bi-pencil"></i>
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

            {/* Remarks Modal */}
            <div className="modal fade" id="remarksModal" tabIndex={-1}>
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Remarks</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <textarea className="form-control" rows={3} placeholder="Enter remarks..."></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary">Save Remarks</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Bar */}
            <div className="d-flex gap-3 justify-content-end mt-4 pt-4 border-top">
                <button className="btn btn-outline-secondary" type="button">
                    <i className="bi bi-printer me-2"></i>Print Sheet
                </button>
                <a href="/attendance" className="btn btn-outline-primary">
                    <i className="bi bi-list-ul me-2"></i>All Meetings
                </a>
                <button className="btn btn-lg" style={{
                    backgroundColor: primaryBlue,
                    borderColor: primaryBlue,
                    color: "white"
                }} type="button">
                    <i className="bi bi-check-circle-fill me-2"></i>Save & Finalize
                </button>
            </div>
        </div>
    );
}
// ...existing code...