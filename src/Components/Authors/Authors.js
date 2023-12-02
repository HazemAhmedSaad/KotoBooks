import Card from "react-bootstrap/Card";
import User from "../Images/user.png";
import "./Authors.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { PiBooksThin } from "react-icons/pi";
import { Link } from "react-router-dom";

function BasicExample() {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    axios
      .get(`https://example-data.draftbit.com/books`, {
        params: {
          _limit: 12,
          _page: 1,
        },
      })
      .then((response) => {
        setAllBooks(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="app-style row container mx-auto mb-5">
      {allBooks.map((book) => (
        <Card
          className="card-author col-lg-3 col-md-4 col-sm-6 mx-auto"
          style={{ width: "18rem" }}
        >
          <Link className="link-dicor" to={`/search/${book.authors}`}>
            <Card.Img className="athour-photo" variant="top" src={User} />
            <Card.Body>
              <Card.Title className="author-title">{book.authors}</Card.Title>
              <Card.Text className="book-style">
                Book {Math.floor(Math.random() * 10) + 1}
                <PiBooksThin className="icon-book" />
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default BasicExample;
