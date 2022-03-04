import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      main page{" "}
      <Link href="/about">
        <a>link to about</a>
      </Link>
    </div>
  );
}
