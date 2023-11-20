import UserNav from "./user-nav";

export default async function Header() {
  return (
    <div className="flex h-16 items-center px-4 border-b">
      <div className="text-semibold text-lg">TOMPI Console</div>
      <div className="ml-auto">
        <UserNav />
      </div>
    </div>
  );
}
