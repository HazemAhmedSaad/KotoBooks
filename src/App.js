import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Form";
import Books from "./Components/Books/Book";
import BookDetails from "./Components/BookDetails/BookDetails";
import Author from "./Components/Authors/Authors";
import Search from "./Components/Search/SearchPage";
  function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book-detailes/:id" element={<BookDetails />} />
          <Route path="/author" element={<Author />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search/:qeuryName" element={<Search />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
