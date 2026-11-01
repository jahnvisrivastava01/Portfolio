import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-8 text-xs text-faint sm:flex-row sm:px-8 lg:px-12">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="font-mono">Built with React, Vite & Tailwind CSS</p>
      </div>
    </footer>
  );
}