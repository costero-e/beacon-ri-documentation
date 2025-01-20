import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../index.css";
import "../App.css";

const OnThisPage = () => {
  const location = useLocation();
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("h2[id], h3[id], h4[id]")
    );

    const headingsArray = headingElements.map((heading) => ({
      id: heading.id,
      text: heading.textContent || "",
    }));

    setHeadings(headingsArray);
  }, [location.pathname]);

  const handleClick = (id: string) => {
    setActiveId(id);
  };
  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="onThisPageContainer sidebarColumn">
      <h3 className="onThisPageTitle">On this page</h3>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`onThisPageLink ${
                activeId === heading.id ? "active" : ""
              }`}
              onClick={() => handleClick(heading.id)}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;
