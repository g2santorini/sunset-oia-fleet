import { Link } from "react-router-dom";
export default function Header() {
  return <header className="site-header"><div className="header-inner">
    <Link className="brand" to="/" aria-label="Sunset Oia Fleet home"><span className="brand-mark">SO</span><span className="brand-copy"><strong>Sunset Oia</strong><small>Fleet Showcase</small></span></Link>
    <nav className="main-nav" aria-label="Primary navigation"><Link to="/">Our Fleet</Link><a href="#about">About</a><a href="mailto:reservations@sunset-oia.com">Partner support <span aria-hidden="true">↗</span></a></nav>
    <div className="material-badge"><span className="material-dot" aria-hidden="true" />2026 · Official material</div>
  </div></header>;
}
