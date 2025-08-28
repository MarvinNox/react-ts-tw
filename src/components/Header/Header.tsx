import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b border-b-gray-300 text-white">
      <div className="container mx-auto flex justify-between p-2">
        <a
          href="/"
          className="text-[var(--context-text-overlay-white-primary-text-overlay-w-primary)]"
        >
          Cochefy
        </a>
        <nav className="md:ml-auto">
          <ul className="flex gap-2 text-[var(--context-text-overlay-white-primary-text-overlay-w-primary)]">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign-up</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign-in</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <svg
            className="fill-white md:hidden"
            width="20"
            height="16"
            viewBox="0 0 20 16"
          >
            <path d="M0 1.5C0 0.947715 0.447716 0.5 1 0.5H19C19.5523 0.5 20 0.947715 20 1.5V2.5C20 3.05228 19.5523 3.5 19 3.5H1C0.447715 3.5 0 3.05228 0 2.5V1.5Z" />
            <path d="M0 7.5C0 6.94772 0.447716 6.5 1 6.5H19C19.5523 6.5 20 6.94772 20 7.5V8.5C20 9.05228 19.5523 9.5 19 9.5H1C0.447715 9.5 0 9.05229 0 8.5V7.5Z" />
            <path d="M1 12.5C0.447716 12.5 0 12.9477 0 13.5V14.5C0 15.0523 0.447715 15.5 1 15.5H19C19.5523 15.5 20 15.0523 20 14.5V13.5C20 12.9477 19.5523 12.5 19 12.5H1Z" />
          </svg>
        </div>
      </div>
    </header>
  );
}
