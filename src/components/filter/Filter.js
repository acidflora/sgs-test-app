import Form from "react-bootstrap/Form";
import { React, useState, useRef } from "react";
import { Alert, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";

const Filter = (props) => {
  let coockieJSON = useRef("");
  const [cookies, setCookie] = useCookies(["options"]);

  const basicUniqueCitys = [];
  const basicUniqueDepartments = [];
  const basicUniquePersons = [];
  props.allPersons.map((x) => {
    if (!basicUniqueCitys.includes(x.city)) {
      basicUniqueCitys.push(x.city);
    }
    if (!basicUniqueDepartments.includes(x.department)) {
      basicUniqueDepartments.push(x.department);
    }
    if (!basicUniquePersons.includes(x.name)) {
      basicUniquePersons.push(x.name);
    }
  });
  const [uniqueCitys, setUniqueCitys] = useState(basicUniqueCitys);
  const [uniqueDepartments, setUniqueDepartments] = useState(
    basicUniqueDepartments
  );
  const [uniquePersons, setUniquePersons] = useState(basicUniquePersons);

  const any = "All";
  let selectedCity = useRef("All");
  let selectedName = useRef("All");
  let selectedDepartment = useRef("All");
  let selectedBrigade = useRef("All");
  let selectedShift = useRef("All");

  const filterPersons = () => {
    props.onChangePersons(
      props.allPersons.filter(
        (x) =>
          (x.city === selectedCity.current || selectedCity.current === any) &&
          (x.name === selectedName.current || selectedName.current === any) &&
          (x.department === selectedDepartment.current ||
            selectedDepartment.current === any) &&
          (x.brigade === selectedBrigade.current ||
            selectedBrigade.current === any) &&
          (x.shift === selectedShift.current || selectedShift.current === any)
      )
    );
  };

  const onFilterChange = (e) => {
    if (e.target.id === "City") {
      selectedCity.current = e.target.value;
    } else if (e.target.id === "Department") {
      selectedDepartment.current = e.target.value;
    } else if (e.target.id === "Person") {
      selectedName.current = e.target.value;
    } else if (e.target.id === "Brigade") {
      selectedBrigade.current = e.target.value;
    } else if (e.target.id === "Shift") {
      selectedShift.current = e.target.value;
    } else {
      alert("Error [filter]");
    }
    filterPersons();
  };

  const onButtonClick = () => {
    const tempArray = [
      {
        city: selectedCity.current,
        department: selectedDepartment.current,
        name: selectedName.current,
        brigade: selectedBrigade.current,
        shift: selectedShift.current,
      },
    ];
    coockieJSON.current = JSON.stringify(tempArray);
    setCookie("options", coockieJSON.current, {
      path: "/",
    });
  };

  const onLoadClick = () => {
    cookies.options.forEach((element) => {
      selectedCity.current = element.city;
      selectedDepartment.current = element.department;
      selectedName.current = element.name;
      selectedBrigade.current = element.brigade;
      selectedShift.current = element.shift;
      filterPersons();
    });
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="Select">City</Form.Label>
          <Form.Select onChange={onFilterChange} id="City">
            <option defaultChecked>All</option>
            {uniqueCitys.map((x, i) => (
              <option key={i}>{x}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="Select">Department</Form.Label>
          <Form.Select onChange={onFilterChange} id="Department">
            <option defaultChecked>All</option>
            {uniqueDepartments.map((x, i) => (
              <option key={i}>{x}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="Select">Person</Form.Label>
          <Form.Select onChange={onFilterChange} id="Person">
            <option defaultChecked>All</option>
            {uniquePersons.map((x, i) => (
              <option key={i}>{x}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="Select">Brigade</Form.Label>
          <Form.Select onChange={onFilterChange} id="Brigade">
            <option defaultChecked>All</option>
            <option>Brigade 1</option>
            <option>Brigade 2</option>
            <option>Brigade 3</option>
            <option>Brigade 4</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="Select">Shift</Form.Label>
          <Form.Select onChange={onFilterChange} id="Shift">
            <option defaultChecked>All</option>
            <option>Morning</option>
            <option>Evening</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <Button variant="light mb-3 me-3" size="sm" onClick={onButtonClick}>
        Save Coockies
      </Button>
      <Button variant="light mb-3" size="sm" onClick={onLoadClick}>
        Load Coockiess
      </Button>
      <Alert variant="info">
        {coockieJSON.current != "" ? coockieJSON.current : "Nothing to display"}
      </Alert>
    </div>
  );
};

export default Filter;
