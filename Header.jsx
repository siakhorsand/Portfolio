import React from "react";
import MagnetLines from "./MagnetLines"; // adjust the path as needed
import "./Header.css"; // for any extra header styling

export default function Header() {
  return (
    <header className="header-container">
      {/* Render the magnet lines as a background element */}
      <div className="magnet-lines-wrapper">
        <MagnetLines
          rows={9}
          columns={9}
          containerSize="80vmin"
          lineColor="#efefef"
          lineWidth="1vmin"
          lineHeight="6vmin"
          baseAngle={-10}
          className="magnet-lines"
        />
      </div>
      {/* Header content over the magnet lines */}
      <div className="header-content">
        <h1 className="text-4xl font-title text-primary-950 text-center sm:text-left">
          Sia Khorsand
        </h1>
        <p className="mt-2 text-neutral-700 text-center sm:text-left">
          Showcasing my projects, experiences, and journey in tech and computation.
        </p>
      </div>
    </header>
  );
}