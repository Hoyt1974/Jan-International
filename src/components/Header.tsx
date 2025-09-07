import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container row">
        <div className="brand">
          <strong>Jan International</strong>
          <span>Smoky Mountain Realty</span>
        </div>
        <nav className="nav">
          <Link href="#gallery">Gallery</Link>
          <Link href="#services">Services</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
