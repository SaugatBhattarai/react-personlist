import React from "react";
import "./App.css";

const App = () => {
  return <PersonList />;
};

const PersonList = () => {
  const people = [
    { img: 22, name: "Saugat", job: "Developer" },
    { img: 24, name: "Tilak", job: "Designer" },
    { img: 54, name: "Manisha", job: "Artist" }
  ];
  // console.log("length ", people.length);
  return (
    <section>
      <Person person={people[0]} />;
      <Person person={people[1]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        aut, obcaecati quas nam veritatis laboriosam.
      </Person>
      ;
      <Person person={people[2]} />;
    </section>
  );
};

const Person = props => {
  const { img, name, job } = props.person;
  const { children } = props;
  console.log(props);
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt={name} />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </div>
  );
};

export default App;
