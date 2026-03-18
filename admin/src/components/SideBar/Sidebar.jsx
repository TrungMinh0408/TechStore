import {
    LayoutDashboard,
    Users,
    Settings2,
    Store,
    Layers,
    Package,
    Tag,
    FileText,
    Truck,
    Boxes
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function sidebar() {
    const location = useLocation();

    return (
        <aside className="w-64 min-h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800">
            <div className="px-4 py-6">
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                    Admin Panel
                </h1>
            </div>

            <nav className="mt-4 px-3 space-y-1">

                {/* ===== DASHBOARD ===== */}
                <sidebarItem
                    to="/"
                    icon={LayoutDashboard}
                    label="Dashboard"
                    active={location.pathname === "/"}
                />

                {/* ===== USER MANAGEMENT ===== */}
                <div className="pt-4 pb-2 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    User Management
                </div>

                <sidebarItem
                    to="/accounts"
                    icon={Users}
                    label="Accounts"
                    active={location.pathname.startsWith("/accounts")}
                />

                {/* ===== INVENTORY MANAGEMENT ===== */}
                <div className="pt-4 pb-2 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Inventory
                </div>

                <sidebarItem
                    to="/categories"
                    icon={Layers}
                    label="Categories"
                    active={location.pathname.startsWith("/categories")}
                />

                <sidebarItem
                    to="/brands"
                    icon={Tag}
                    label="Brands"
                    active={location.pathname.startsWith("/brands")}
                />

                <sidebarItem
                    to="/suppliers"
                    icon={Truck}
                    label="Suppliers"
                    active={location.pathname.startsWith("/suppliers")}
                />

                <sidebarItem
                    to="/products"
                    icon={Package}
                    label="Products"
                    active={location.pathname.startsWith("/products")}
                />

                <sidebarItem
                    to="/inventories"
                    icon={Boxes}
                    label="Inventories"
                    active={location.pathname.startsWith("/inventories")}
                />

                {/* ===== ORGANIZATION ===== */}
                <div className="pt-4 pb-2 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Organization
                </div>

                <sidebarItem
                    to="/branches"
                    icon={Store}
                    label="Branches"
                    active={location.pathname.startsWith("/branches")}
                />

                {/* ===== SYSTEM ===== */}
                <div className="pt-4 pb-2 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Activity Logs
                </div>

                <sidebarItem
                    to="/activity"
                    icon={FileText}
                    label="Activity Logs"
                    active={location.pathname.startsWith("/activity")}
                />

                {/* ===== SETTINGS ===== */}
                <sidebarItem
                    to="/settings"
                    icon={Settings2}
                    label="Settings"
                    active={location.pathname.startsWith("/settings")}
                />

            </nav>
        </aside>
    );
}

function sidebarItem({ icon: Icon, label, active, to }) {
    return (
        <Link
            to={to}
            className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                transition-all duration-200 no-underline
                ${active
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }
            `}
        >
            <Icon
                className={`w-5 h-5 ${active ? "stroke-[2.5px]" : "stroke-[2px]"}`}
            />
            <span>{label}</span>
        </Link>
    );
}

export default sidebar;