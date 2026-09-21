import Header from "../components/Header";

export default function SectionPlaceholderPage({ eyebrow, title, description }) {
  return (
    <>
      <Header />
      <main className="section-placeholder">
        <div className="section-placeholder-copy">
          <span className="section-placeholder-eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <span className="section-placeholder-note">Section in development</span>
        </div>
      </main>
    </>
  );
}
