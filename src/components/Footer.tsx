export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container row">
        <p>© {year} Jan International Realty · All rights reserved.</p>
        <nav className="nav small">
          <a href="#top">Back to top</a>
        </nav>
      </div>
    </footer>
  );
}
