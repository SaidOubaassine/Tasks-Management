import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body className="d-flex justify-content-center align-items-center vh-100">
        <section>
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <Link href="/">Return Home</Link>
        </section>
      </body>
    </html>
  );
}
