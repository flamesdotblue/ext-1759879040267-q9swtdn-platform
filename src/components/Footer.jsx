export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-neutral-900">Minimal Grid</p>
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-neutral-700">
          <a className="hover:text-neutral-900" href="#features">Features</a>
          <a className="hover:text-neutral-900" href="#">Privacy</a>
          <a className="hover:text-neutral-900" href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
