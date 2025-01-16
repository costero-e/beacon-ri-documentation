import React, { useEffect, useState } from "react";
import "../index.css";

const OnThisPage = () => {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    // Select all headings with an ID
    const headingElements = Array.from(
      document.querySelectorAll("h2[id], h3[id], h4[id]")
    );

    // Extract IDs and text
    const headingsArray = headingElements.map((heading) => ({
      id: heading.id,
      text: heading.textContent || "",
    }));

    setHeadings(headingsArray);
  }, []);

  return (
    <div className="onThisPageContainer">
      <h3 className="onThisPageTitle">On this page</h3>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`} className="onThisPageLink">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;
