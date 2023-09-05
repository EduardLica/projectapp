import Card from "react-bootstrap/Card";
import beekeepingImage from "./../assets/img/beekeeping.jpg";

function ImgOverlayExample() {
  return (
    <div style={{ paddingTop: "1%", maxWidth: "100%" }}>
      <Card className="bg-dark text-white">
        <Card.Img
          src={beekeepingImage}
          alt="Card image"
          style={{
            width: "100%",
            height: "530px",
            objectFit: "cover",
            opacity: "0.5",
          }}
        />
        <Card.ImgOverlay>
          <Card.Text style={{ fontSize: "2rem", fontWeight: "bold" }}>
            „O albină este un chimist rafinat.”
          </Card.Text>
          <Card.Text>William Longgood</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default ImgOverlayExample;
