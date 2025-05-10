import {
    Users,
    Calendar,
    Bell,
    FileText,
    BarChart2,
    Settings,
  } from "lucide-react";
  
  export const sections = [
    { id: "users", label: "User Management", icon: Users },
    { id: "events", label: "Events Calendar", icon: Calendar },
    { id: "announcements", label: "Announcements", icon: Bell },
    { id: "content", label: "Content Management", icon: FileText },
    { id: "analytics", label: "Analytics", icon: BarChart2 },
    { id: "settings", label: "Settings", icon: Settings },
  ];