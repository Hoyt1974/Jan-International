// src/components/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-row">
        <div className="footer-col">
          <strong>Jan International</strong>
          <div className="muted">Smoky Mountain Realty (FSBO)</div>
        </div>
        <div className="footer-col small muted">
          © {year} • Fair Housing &amp; FSBO friendly • All rights reserved
        </div>
      </div>
    </footer>
  );
}
