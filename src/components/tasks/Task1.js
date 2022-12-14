import { Button, Card } from "react-bootstrap";
import "./codeSnippet.css";
import React from "react";

const codeSnippet = `USE [SGSDB]
IF OBJECT_ID('dbo.Containers', 'U') IS NOT NULL
DROP TABLE dbo.Containers
GO
--	ИД - тип уникальный идентификатор
--	Номер - тип числовой
--	Тип – тип текстовый
--	Длина – тип числовой
--	Ширина – тип числовой
--	Высота – тип числовой
--	Вес – тип числовой
--	Пустой/не пустой – тип бит
--	Дата поступления – тип дата/время
CREATE TABLE dbo.Containers
(
	cId INT PRIMARY KEY,
	cNumber INT NOT NULL,
	cType NVARCHAR(50),
	cLength INT,
	cWidth INT,
	cTall INT,
	cWeight INT,
	cIsEmpty BIT NOT NULL,
	cDate DATETIME
);
GO`;

const Task1 = (props) => {
  return (
    <div>
      <Card.Header>Write scripts to create a table with containers</Card.Header>
      <Card.Body>
        <code>{codeSnippet}</code>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" href="/sgs-test-app/action/2.2">
          Next Task
        </Button>
      </Card.Footer>
    </div>
  );
};

export default Task1;
