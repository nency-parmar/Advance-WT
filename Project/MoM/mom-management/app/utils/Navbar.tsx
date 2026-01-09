// ...existing code...
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type ChildNav = { href: string; label: string };
type NavItem = {
    href?: string;
    label: string;
    children?: ChildNav[];
};

const navItems: NavItem[] = [
    { href: "/", label: "Dashboard" },
    {
        href: "/meetings",
        label: "Meetings",
        children: [
            { href: "/meetings", label: "All Meetings" },
            { href: "/meetings/new", label: "New Meeting" },
            { href: "/meetings/calander", label: "Calendar View" },
        ],
    },
    {
        href: "/attendance",
        label: "Attendance",
        children: [
            { href: "/attendance", label: "Attendance List" },
            { href: "/attendance/2045", label: "Meeting 2045" },
        ],
    },
    {
        label: "Master",
        children: [
            { href: "/master/meeting_types", label: "Meeting Types" },
            { href: "/master/staff", label: "Staff" },
            { href: "/master/departments", label: "Departments" },
            { href: "/master/venues", label: "Venues" },
        ],
    },
    {
        href: "/reports/summary",
        label: "Reports",
        children: [
            { href: "/reports/summary", label: "Meeting Summary" },
            { href: "/reports/meeting_wise", label: "Meeting Wise" },
        ],
    },
    { href: "/profile", label: "Profile" },
];

export default function Navbar() {
    const pathname = usePathname() ?? "";
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setOpenDropdown(index);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    return (
        <nav className="bg-white shadow-sm border-bottom sticky-top">
            <div className="container d-flex align-items-center justify-content-between" style={{ height: "64px" }}>
                {/* Logo */}
                <Link href="/" className="d-flex align-items-center text-decoration-none">
                    <div className="d-flex align-items-center justify-content-center rounded-3 bg-primary text-white fw-bold me-2" style={{ width: 36, height: 36 }}>
                        M
                    </div>
                    <span className="fw-bold text-dark fs-5 mb-0">MoM</span>
                </Link>

                {/* Nav links with Hover Dropdowns */}
                <div className="d-none d-md-flex gap-2 position-relative">
                    {navItems.map((item: NavItem, index: number) => {
                        const active = item.href
                            ? (pathname === item.href || pathname.startsWith(item.href + "/"))
                            : item.children?.some(child =>
                                pathname === child.href || pathname.startsWith(child.href + "/")
                            );

                        if (item.children && item.children.length > 0) {
                            const isOpen = openDropdown === index;
                            return (
                                <div
                                    key={item.href || item.label}
                                    className="dropdown position-relative"
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {/* Button/Link for trigger */}
                                    {item.href !== undefined ? (
                                        <Link
                                            href={item.href}
                                            className={`btn btn-sm dropdown-toggle-no-caret ${active ? "btn-outline-primary" : "btn-light border-0 text-secondary"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <button
                                            className={`btn btn-sm dropdown-toggle-no-caret ${active ? "btn-outline-primary" : "btn-light border-0 text-secondary"
                                                }`}
                                        >
                                            {item.label}
                                        </button>
                                    )}

                                    {/* Hover Dropdown */}
                                    <ul
                                        className={`dropdown-menu shadow-lg border-0 fade ${isOpen ? "show" : ""
                                            }`}
                                        style={{
                                            minWidth: "220px",
                                            position: "absolute",
                                            top: "100%",
                                            left: 0,
                                            zIndex: 1050,
                                            marginTop: "4px",
                                            borderRadius: "8px"
                                        }}
                                    >
                                        {item.children.map((child: ChildNav) => {
                                            const childActive = pathname === child.href || pathname.startsWith(child.href + "/");
                                            return (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className={`dropdown-item py-2 ${childActive ? "active bg-primary text-white" : "hover-primary"
                                                        }`}
                                                    onClick={() => setOpenDropdown(null)}
                                                >
                                                    {child.label}
                                                </Link>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        } else {
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href ?? "#"}
                                    className={
                                        "btn btn-sm " +
                                        (pathname === item.href || pathname.startsWith((item.href ?? "") + "/")
                                            ? "btn-outline-primary"
                                            : "btn-light border-0 text-secondary")
                                    }
                                >
                                    {item.label}
                                </Link>
                            );
                        }
                    })}
                </div>

                {/* Right side */}
                <div className="d-flex align-items-center gap-2">
                    <Link
                        href="/profile"
                        className="d-flex align-items-center text-decoration-none text-secondary"
                    >
                        <div
                            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-2"
                            style={{ width: 32, height: 32, fontSize: 12 }}
                        >
                            UN
                        </div>
                        <span className="d-none d-lg-inline small fw-medium">
                            User Name
                        </span>
                    </Link>
                    <Link href="/auth/login" className="btn btn-sm btn-outline-secondary">
                        Logout
                    </Link>
                </div>
            </div>
        </nav>
    );
}
// ...existing code...