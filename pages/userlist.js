import fetcher from "@/lib/fetch-json";
import React from "react";
import useSWR from "swr";

export default function UserList() {
  const { data, error } = useSWR("/api/search-user", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h1>Top 20 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul>
        {data.map((movie) => (
          <li key={movie.name}>
            <h2>{movie.name}</h2>
            <h3>{movie.email}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
