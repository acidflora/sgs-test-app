import { Button, Card } from "react-bootstrap";
import "./codeSnippet.css";

const codeSnippet = `USE [SGSDB]
GO
SELECT '[' + 
STUFF((SELECT ',{' 
	+ '"oId":'+CAST(oId AS varchar(10)) + ','
	+ '"oCId":'+CAST(oCId AS varchar(10)) + ','
	+ COALESCE('"oDateStart":"'+ CAST(oDateStart AS varchar(30)) + '",','')
	+ COALESCE('"oDateEnd":"'+ CAST(oDateEnd AS varchar(30)) + '",','')
	+ COALESCE('"oType":"' + oType + '",','')
	+ COALESCE('"oFIO":"' + oFIO + '",','')
	+ COALESCE('"oPlace":"' + oPlace + '",','')
	+ '}'
FROM dbo.Operations
WHERE oCId = 2
FOR XML PATH(''), TYPE).value('.', 'varchar(MAX)'),1,1,'')
    + ']';
GO`;

const Task4 = (props) => {
  return (
    <div>
      <Card.Header>
        Write a query that selects from the first table all container data in
        JSON format without using the built-in function
      </Card.Header>
      <Card.Body>
        <code>{codeSnippet}</code>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" href="/action/3.1">
          Next Task
        </Button>
      </Card.Footer>
    </div>
  );
};

export default Task4;
