import { useState } from "react";
import "./index.css";

export function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((data, index) => (
        <AccordionItems
          index={index}
          title={data.title}
          content={data.text}
          key={index}
        />
      ))}
    </div>
  );
}

function AccordionItems({ index, title, content }) {
  const [isopen, setIsopen] = useState(false);

  function handleOpen() {
    setIsopen((isopen) => !isopen);
  }

  return (
    <div className={`item ${isopen ? "open" : ""}`} onClick={handleOpen}>
      <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>
      <p className="text">{title}</p>
      <p className="icon">{isopen ? "-" : "+"}</p>

      {isopen && <p className="content-box">{content}</p>}
    </div>
  );
}
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
