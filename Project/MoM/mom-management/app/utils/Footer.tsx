export default function Footer() {
    return (
        <footer className="border-top bg-white mt-4">
            <div className="container py-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
                <span className="small text-muted">
                    © {new Date().getFullYear()} MoM Management. All rights reserved.
                </span>
                <div className="small text-muted">
                    <a href="/about" className="text-decoration-none me-3">
                        About
                    </a>
                    <a href="/contact" className="text-decoration-none me-3">
                        Contact
                    </a>
                    <a href="/services" className="text-decoration-none">
                        Services
                    </a>
                </div>
            </div>
        </footer>
    );
}
