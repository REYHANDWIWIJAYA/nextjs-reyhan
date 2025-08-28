import SideNav from '@/app/ui/dashboard/sidenav';
import { auth } from "@/auth";

export const experimental_ppr = true;

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Unauthorized. Please login first.</p>
      </div>
    );
  }
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
