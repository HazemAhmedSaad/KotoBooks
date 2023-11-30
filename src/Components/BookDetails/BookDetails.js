import { Link, useParams } from "react-router-dom";
import "./BookDetails.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const BookDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [book, setBook] = useState([]);
  useEffect(() => {
    axios
      .get(`https://example-data.draftbit.com/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div>
      <div className="row mx-auto my-5 pt-4">
        <div className="col-lg-3 col-md-4 col-sm-10 mx-auto text-center pb-4">
          <img className="photo-details" src={book.image_url} alt="book" />
        </div>
        <div className="col-lg-9 col-md-8 col-sm-10 mx-auto ps-4 book-info">
          <h2 className="head-title">{book.title}</h2>
          <p className="p-info"><Link  to={`/search/${book.authors}`}>{book.authors}</Link></p>
          <p className="p-info">{book.genre_list}</p>
          <ul className="nav book-table-info align-items-center">
            <li>
              <p>Pages</p>
              <p>
                <span>{book.num_pages}</span>
              </p>
            </li>
            <li>
              <p>Language</p>
              <p>
                <span>English</span>
              </p>
            </li>
            <li>
              <p>Rating</p>
              <p>
                <span>{book.rating}</span>
              </p>
            </li>
          </ul>
          <ul className="nav book-table-info align-items-center">
            <li>
              <p>Rating Count</p>
              <p>
                <span>{book.rating_count}</span>
              </p>
            </li>
            <li>
              <p>Review Count</p>
              <p>
                <span>{book.review_count}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="description">
        <div>
          <p>
            <strong>{book.description}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
