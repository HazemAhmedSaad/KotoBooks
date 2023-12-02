// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { IoBookmark } from "react-icons/io5";
import "../Books/Book.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { changeFavorites } from "../Store/Actions";
import { changeCounter } from "../Store/Actions";
function BasicExample() {
  const myDispatcher = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const counter = useSelector((state) => state.counter);
  console.log(favorites);
  console.log(counter);

  return (
    <div className="app-b-style">
      <div className="row g-5 mx-auto container my-5 small-v">
        {favorites.map((book) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mx-auto d-flex justify-content-center">
            <Card className="card-book">
              <Link to={`/book-detailes/${book.id}`}>
                <div className="photo-card">
                  <Card.Img
                    className="photo"
                    variant="top"
                    src={book.image_url}
                  />
                </div>
              </Link>
              <Card.Body className="cord-size">
                <Card.Title className="book-name" title={book.title}>
                  {book.title}
                </Card.Title>
                <Link
                  className="link-dicor"
                  title={book.authors}
                  to={`/search/${book.authors}`}
                >
                  <Card.Text className="author-name">{book.authors}</Card.Text>
                </Link>
                <div className="sav-rat">
                  <p className="rate">{book.rating}</p>
                  <button
                    className="btn-icon"
                    onClick={(change) => {
                      let deletitem;
                      for (const key in favorites) {
                        if (book.id === favorites[key].id) {
                          deletitem = key;
                        }
                      }
                      // favorites.splice(deletitem, 1);
                      delete favorites[deletitem];
                      myDispatcher(changeCounter(counter - 1));
                    }}
                  >
                    <IoBookmark className="save saved" />
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasicExample;
