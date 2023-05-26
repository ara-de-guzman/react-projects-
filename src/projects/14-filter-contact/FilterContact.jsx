import React, { useRef, useEffect, useState } from "react";
import Title from "../components/Title";
import DataContact from "./Data.json";
import Contact from "./Contact";

function FilterContact() {
  const [searchContact, setSearchContact] = useState("");

  let inputSearch = useRef(null);
  useEffect(() => {
    inputSearch.current.focus();
  });
  return (
    <div className="text-center">
      <Title text={"Filter Contact"} btnClass={""} />
      <input
        type="text"
        placeholder="Search by first name"
        className="mb-2 p-1"
        style={{ padding: ".3rem .5rem" }}
        ref={inputSearch}
        onChange={(e) => setSearchContact(e.target.value)}
      />
      <section
        className="d-flex"
        style={{
          gap: 15,
          maxWidth: "1600px",
          margin: "auto",
          flexWrap: "wrap",
        }}
      >
        {DataContact.filter((contact) => {
          if (searchContact === "") {
            return contact;
          } else if (
            contact.first_name
              .toLocaleLowerCase()
              .includes(searchContact.toLocaleLowerCase())
          ) {
            return contact;
          }
        }).map((contact, id) => (
          <Contact
            contact={contact}
            key={contact.id}
            cardColor={"card-danger"}
            textColor={"text-danger"}
          />
        ))}
      </section>
    </div>
  );
}

export default FilterContact;
