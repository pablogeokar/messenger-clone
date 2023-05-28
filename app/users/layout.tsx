import Sidebar from "../components/sidebar/Sidebar";
import DesktopSidebar from "../components/sidebar/DesktopSidebar";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <DesktopSidebar />
        <main className="lg:pl-20 h-full">{children}</main>
      </div>
      ;
    </Sidebar>
  );
}
