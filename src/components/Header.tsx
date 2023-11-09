import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <nav className=" py-5">
      <main className="container flex space-x-5 text-xl">
        <Button asChild>
          <Link href="/add-employee">New Employee</Link>
        </Button>
        <Button asChild>
          <Link href="/view-employee">View Employee</Link>
        </Button>
      </main>
    </nav>
  );
}
