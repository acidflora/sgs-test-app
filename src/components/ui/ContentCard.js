import Card from "react-bootstrap/Card";

const ContentCard = (props) => {
  return (
    <Card
      className="my-4"
      // className="text-center"
      style={{ width: "65%", marginLeft: "auto", marginRight: "auto" }}
    >
      {props.children}
    </Card>
  );
};

export default ContentCard;
