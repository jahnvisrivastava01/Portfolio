export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center py-6 text-gray-400 border-t border-gray-800 mt-10">
      © {year} Jahnvi Srivastava. All rights reserved.
    </footer>
  );
}