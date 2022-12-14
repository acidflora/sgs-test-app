import { Button, Card } from "react-bootstrap";
import "./codeSnippet.css";

const codeSnippet = `USE [SGSDB]
IF OBJECT_ID('dbo.Operations', 'U') IS NOT NULL
DROP TABLE dbo.Operations
GO
--	ИД - тип уникальный идентификатор
--	ИД Контейнера - тип уникальный идентификатор
--	Дата начала операции – тип дата/время
--	Дата окончания операции – тип дата/время
--	Тип операции - тип текстовый
--	ФИО оператора - тип текстовый
--	Место инспекции - тип текстовый
CREATE TABLE dbo.Operations
(
	oId INT PRIMARY KEY,
	oCId INT,
	oDateStart DATETIME,
	oDateEnd DATETIME,
	oType NVARCHAR(50),
	oFIO NVARCHAR(50),
	oPlace NVARCHAR(50),
	FOREIGN KEY (oCId) REFERENCES Containers (cId)
);
GO`;

const Task2 = (props) => {
  return (
    <div>
      <Card.Header>Write scripts to create a table with operations</Card.Header>
      <Card.Body>
        <code>{codeSnippet}</code>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" href="/action/2.3">
          Next Task
        </Button>
      </Card.Footer>
    </div>
  );
};

export default Task2;
