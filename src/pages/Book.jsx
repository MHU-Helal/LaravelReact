console.clear();

import React, { useEffect } from "react";
// import jQuery from "./jquery.min.js";
// const $ = require('jquery');
// import $ from "./jquery.min.js";
import "./Book.css";
import "./turn.min.js";

const $= jQuery;
const pages = [
    "Welcome to Our School! Learn about our vision and values.",
    "Explore our curriculum designed to foster creativity and knowledge.",
    "Meet our dedicated faculty committed to student success.",
    "Discover our extracurricular activities and programs.",
    "Admissions information and how to join our community.",
  ];
  
  const Book = () => {
    useEffect(() => {
        // Initialize Turn.js after the component mounts
        $("#book").turn({
          width: 800,
          height: 500,
          autoCenter: true,
          pages: pages.length, // Ensure Turn.js knows the total page count
        });
    
        return () => {
          $("#book").turn("destroy");
        };
      }, []);
    
      const handleNextPage = () => {
        const totalPages = $("#book").turn("pages");
        const currentPage = $("#book").turn("page");
        if (currentPage < totalPages) {
          $("#book").turn("next");
        }
      };
    
      const handlePreviousPage = () => {
        const currentPage = $("#book").turn("page");
        if (currentPage > 1) {
          $("#book").turn("previous");
        }
      };
    
      const handleKeyDown = (event) => {
        if (event.key === "ArrowRight") {
          handleNextPage();
        } else if (event.key === "ArrowLeft") {
          handlePreviousPage();
        }
      };
    
      useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, []);
    
      return (
        <div className="book-container">
          <div id="book">
            {pages.map((content, index) => (
              <div key={index} className="page" data-page={index + 1}>
                <div className="page-content">{content}</div>
              </div>
            ))}
          </div>
          <button className="arrow-button left" onClick={handlePreviousPage}>
            &#8592;
          </button>
          <button className="arrow-button right" onClick={handleNextPage}>
            &#8594;
          </button>
        </div>
      );
    };
    
  
  export default Book;
  