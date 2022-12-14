import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import React from "react";

import Filter from "../filter/Filter";
import TablePersons from "../table/TablePersons";

const persons = [
  {
    id: 1,
    city: "Almaty",
    department: "Department 1",
    name: "Person 1",
    brigade: "Brigade 1",
    shift: "Morning",
  },
  {
    id: 2,
    city: "Almaty",
    department: "Department 1",
    name: "Person 2",
    brigade: "Brigade 1",
    shift: "Morning",
  },
  {
    id: 3,
    city: "Almaty",
    department: "Department 2",
    name: "Person 3",
    brigade: "Brigade 2",
    shift: "Evening",
  },
  {
    id: 4,
    city: "Astana",
    department: "Department 3",
    name: "Person 4",
    brigade: "Brigade 3",
    shift: "Evening",
  },
  {
    id: 5,
    city: "Aktobe",
    department: "Department 4",
    name: "Person 5",
    brigade: "Brigade 1",
    shift: "Morning",
  },
  {
    id: 6,
    city: "Aktobe",
    department: "Department 2",
    name: "Person 6",
    brigade: "Brigade 4",
    shift: "Morning",
  },
  {
    id: 7,
    city: "Shymkent",
    department: "Department 5",
    name: "Person 7",
    brigade: "Brigade 1",
    shift: "Morning",
  },
  {
    id: 8,
    city: "Shymkent",
    department: "Department 2",
    name: "Person 8",
    brigade: "Brigade 4",
    shift: "Evening",
  },
];

const Task6 = (props) => {
  const [currentPersons, setCurrentPersons] = useState(persons);

  return (
    <div>
      <Card.Header>
        I have never worked with vue.js, so I changed the technology to
        react.js. Hope it's not critical
      </Card.Header>
      <Card.Body>
        <Filter
          allPersons={persons}
          currentPersons={currentPersons}
          onChangePersons={setCurrentPersons}
        />
        <div>
          <TablePersons persons={currentPersons} />
        </div>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" href="/sgs-test-app/">
          Home
        </Button>
      </Card.Footer>
    </div>
  );
};

export default Task6;
