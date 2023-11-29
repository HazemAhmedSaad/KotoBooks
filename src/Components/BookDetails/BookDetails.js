import { useParams } from "react-router-dom";
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
      <div>
        <div>
          <img
            className="photo-details"
            src={book.image_url}
            alt="book"
          />
        </div>
      </div>
      <div>
        <h2>{book.title}</h2>
        <p>{book.authors}</p>
        <p>{book.genre_list}</p>
        <ul>
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
        <ul>
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
        <div>
            <div>
                <p>
                    <strong>
                        {book.description}
                    </strong>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
