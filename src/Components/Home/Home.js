import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import photo from "../Images/home.jpg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import './Home.css'
function ImgOverlayExample() {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <Card className="bg-dark text-white border-0 rounded-0 card-home">
      <Card.Img
        src={photo}
        alt="Card image"
        className="object-fit-cover home"
      />
      <Card.ImgOverlay>
        <div
          className="mx-5"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <Card.Title
            className="display-1"
            style={{
              fontWeight: "bold",
            }}
          >
            KotoBooks
          </Card.Title>
          <hr />
          <Card.Text className="display-6 mb-4">
            We have a lot of textbooks
          </Card.Text>
          <Form className="d-flex  mt-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 inpt-form "
              aria-label="Search"
              value={searchValue}
              onChange={(e) => handleChange(e)}
            />
            <Link
            variant="outline-light"
              className="btn btn-outline-light rounded-0 text-light botn-form"
              to={`/search/${searchValue}`}
            >
              Search
            </Link>
          </Form>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;
