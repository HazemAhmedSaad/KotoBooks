import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import photo from "../Images/home.jpg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./Home.css";
function ImgOverlayExample() {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div>
      <div>
        <Card className="bg-dark text-white border-0 rounded-0 card-home">
          <Card.Img
            src={photo}
            alt="Card image"
            className="object-fit-cover home"
          />
          <Card.ImgOverlay>
            <div
              className="mx-5 ps-2"
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
      </div>
      <div className="catogry row mx-auto g-5">
        <Card
          className="col-lg-4 col-sm-3 mx-auto cat-card"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <Card.Title className="cat-title">Fantasy</Card.Title>
            <Card.Text>
              Fantasy books are a genre of literature that explores imaginative
              and fantastical elements that go beyond the bounds of reality ,
              mythical creatures.{" "}
            </Card.Text>
            <Link className="btn btn-dark" to={`/search/Fantasy`}>
              Show Now
            </Link>
          </Card.Body>
        </Card>
        <Card
          className="col-lg-4 col-sm-3 mx-auto cat-card"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <Card.Title className="cat-title">Novels</Card.Title>
            <Card.Text>
              Novels are a form of literary work that tells a fictional
              narrative through prose. These books typically feature complex
              characters, intricate plots.{" "}
            </Card.Text>
            <Link className="btn btn-dark" to={`/search/Novels`}>
              Show Now
            </Link>
          </Card.Body>
        </Card>
        <Card
          className="co-lg-4 col-sm-3  mx-auto cat-card"
          style={{ width: "18rem", height: "18rem" }}
        >
          <Card.Img variant="top"></Card.Img>
          <Card.Body>
            <Card.Title className="cat-title">Academic</Card.Title>
            <Card.Text>
              Academic books are publications that contribute to scholarly
              discourse and are typically written by experts in a specific field
              of study.
            </Card.Text>
            <Link className="btn btn-dark" to={`/search/Academic`}>
              Show Now
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ImgOverlayExample;
