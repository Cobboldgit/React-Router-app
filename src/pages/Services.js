import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <h2>Services page</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <Link to='/Services/210'>Services Details</Link>
    </div>
  );
}

export default Services;
