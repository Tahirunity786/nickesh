export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="dashboard-container">
        <aside className="sidebar">
          <nav>
            <ul>
              <li><a href="/dashboard">Home</a></li>
              <li><a href="/dashboard/settings">Settings</a></li>
            </ul>
          </nav>
        </aside>
        <main className="content">{children}</main>
      </div>
    );
  }
  