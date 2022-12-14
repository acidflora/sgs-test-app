import { Button, Card } from "react-bootstrap";
import "./codeSnippet.css";

const codeSnippet = `USE [SGSDB]
GO
SELECT '[' + 
STUFF((SELECT ',{' 
	+ '"cId":'+CAST(cId AS varchar(10)) + ','
	+ COALESCE('"cNumber":'+CAST(cNumber AS varchar(10)) + ',','')
	+ COALESCE('"cType":"' + cType + '",','')
	+ COALESCE('"cLength":'+CAST(cLength AS varchar(10)) + ',','')
	+ COALESCE('"cWidth":'+CAST(cWidth AS varchar(10)) + ',','')
	+ COALESCE('"cTall":'+CAST(cTall AS varchar(10)) + ',','')
	+ COALESCE('"cWeight":'+CAST(cWeight AS varchar(10)) + ',','')
	+ COALESCE('"cIsEmpty":'+CAST(cIsEmpty AS varchar(10)) + ',','')
	+ COALESCE('"cDate":"'+ CAST(cDate AS varchar(30)) + '",','')
	+ '}'
FROM dbo.Containers
FOR XML PATH(''), TYPE).value('.', 'varchar(MAX)'),1,1,'')
    + ']';
GO`;

const Task3 = (props) => {
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
        <Button variant="primary" href="/action/2.4">
          Next Task
        </Button>
      </Card.Footer>
    </div>
  );
};

export default Task3;
