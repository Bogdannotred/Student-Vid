import React, { use, useEffect, useState } from "react";
import Header from "../components/Header";




export default function HomePage() {

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-8 text-black">
        <h2 className="text-3xl font-bold mb-4">Home Page</h2>
        <p>Welcome to the Home Page!</p>
      </main>
    </div>
  );
}