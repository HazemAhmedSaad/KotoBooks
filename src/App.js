import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Form";
import Books from "./Components/Books/Book";
import Favorits from "./Components/FavoriteList/FavoriteList";
import BookDetails from "./Components/BookDetails/BookDetails";
import Author from "./Components/Authors/Authors";
import Search from "./Components/Search/SearchPage";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route className="container" path="/books" element={<Books />} />
          <Route
            className="container"
            path="/favorite-books"
            element={<Favorits />}
          />
          <Route
            className="container"
            path="/book-detailes/:id"
            element={<BookDetails />}
          />
          <Route className="container" path="/author" element={<Author />} />
          <Route className="container" path="/login" element={<Login />} />
          <Route
            className="container"
            path="/search/:qeuryName"
            element={<Search />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
