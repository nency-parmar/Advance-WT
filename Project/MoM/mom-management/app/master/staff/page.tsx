export default function Staff() {
    return (
        <div className="py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h4 fw-bold mb-0">Staff Directory</h1>
                <button className="btn btn-sm btn-primary">+ Add Staff</button>
            </div>
            <div className="card shadow-sm">
                <div className="card-body">
                    <p className="text-muted">StaffID, StaffName, MobileNo, EmailAddress table coming soon...</p>
                </div>
            </div>
        </div>
    );
}
