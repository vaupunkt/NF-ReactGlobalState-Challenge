import Link from "../components/Link";

export default function HomePage({ numberlightsOn }) {
  return (
    <div>
      <h1>Home</h1>
      <p>{numberlightsOn} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
