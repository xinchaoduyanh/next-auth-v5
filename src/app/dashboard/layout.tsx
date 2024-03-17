import React from "react";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <h1 className="bg-red-300 text-green-300">Layout Dashboard</h1>
      {children}
    </main>
  );
}
