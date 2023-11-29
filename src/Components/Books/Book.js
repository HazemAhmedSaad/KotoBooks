// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { IoBookmarkOutline } from "react-icons/io5";
import "./Book.css";
import { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

function BasicExample() {
  const [allBooks, SetAllBooks] = useState([]);
  const [numPage, seeNumPage] = useState(1);
  const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(12);

  useEffect(() => {
    axios
      .get(`https://example-data.draftbit.com/books`, {
        params: {
          _limit: 12,
          _page: page,
        },
      })
      .then((response) => {
        console.log(response.data);
        SetAllBooks(response.data);
        seeNumPage(response.data.length);
      }).catch((error) => console.error('Error fetching data:', error));;
  }, [page]);
  const showPev = () => {
    let currentPage = page;
    if (currentPage >= 1) {
      currentPage--;
      setPage(currentPage);
    }
  };
  const showNext = () => {
    let currentPage = page;
    if (currentPage <= numPage) {
      currentPage++;
      setPage(currentPage);
    }
  };
  return (
    <div className="row g-5 mx-auto  mb-5 small-v">
      {allBooks.map((book) => (
        <div className="col-lg-3 col-md-4 col-sm-6 mx-auto d-flex justify-content-center">
          <Card className="card-book">
            <div className="photo-card">
              <Card.Img className="photo" variant="top" src={book.image_url} />
            </div>
            <Card.Body className="cord-size">
              <Card.Title className="book-name" title={book.title}>
                {book.title}
              </Card.Title>
              <Card.Text className="author-name">{book.authors}</Card.Text>
              <div className="sav-rat">
                <p className="rate">{book.rating}</p>
                <IoBookmarkOutline className="save" />
                {/* <Link to={`/books?_page=${page}&_limit=${limit}`}>go</Link> */}
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
      <div className="mt-5 mx-auto">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item" style={{ width: "150px" }}>
              <button
                className="btn  text-white btn-bord"
                style={{ width: "150px", backgroundColor: "#222" }}
                onClick={showPev}
                disabled={page <= 1 ? true : false}
              >
                {"<< Previous"}
              </button>
            </li>
            <li className="page-item" style={{ width: "150px" }}>
              <button
                className="btn  text-white btn-bord"
                style={{ width: "150px", backgroundColor: "#222" }}
                onClick={showNext}
                disabled={page === numPage ? true : false}
              >
                {"Next >>"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default BasicExample;
