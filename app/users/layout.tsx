import Sidebar from "../components/sidebar/Sidebar";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <main className="lg:pl-20 h-full">{children}</main>
      </div>
      ;
    </Sidebar>
  );
}
