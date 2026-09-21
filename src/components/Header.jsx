import { useState } from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { label: "Our Fleet", to: "/" },
  { label: "Cruises", to: "/cruises" },
  { label: "Rates & Availability", to: "/rates-availability", featured: true },
  { label: "Thirasia Experiences", to: "/thirasia" },
  { label: "Nearby Islands", to: "/nearby-islands" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink
          className="showcase-brand"
          to="/"
          aria-label="Sunset Oia Fleet Showcase home"
          onClick={() => setMenuOpen(false)}
        >
          <img
            className="showcase-brand-logo"
            src="/images/sunset-oia-logo.webp"
            alt="Sunset Oia Sailing Cruises"
          />
        </NavLink>

        <nav className="showcase-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                [
                  "showcase-nav-link",
                  item.featured ? "showcase-nav-link--featured" : "",
                  isActive ? "is-active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="showcase-menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="showcase-mobile-nav"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav
        id="showcase-mobile-nav"
        className={`showcase-mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="showcase-mobile-nav-inner">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                [
                  "showcase-mobile-link",
                  item.featured ? "showcase-mobile-link--featured" : "",
                  isActive ? "is-active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")
              }
              onClick={() => setMenuOpen(false)}
            >
              <span>{item.label}</span>
              <span aria-hidden="true">↗</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
