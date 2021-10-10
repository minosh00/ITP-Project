import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddBooks = ({ books }) => {
  return (
    <div>
      <br />
      <h1 style={{ fontSize: "90px", textAlign: "center" }}>Our Books</h1>
      <hr style={{ height: "3px" }}></hr>
      <div className="container">
        <br></br>

        <div class="d-flex justify-content-center">
          <div className="col-12 col-md-7 col-lg-78 mx-0 mb-2">
            <table className="table table-borderless">
              <tbody>
                {books.map((AddBooks, index) => (
                  <tr className="card p-0 overflow-hidden h-100 shadow">
                    <td>
                      <div>
                        <img
                          src={`/uploads/${AddBooks.BookImage}`}
                          alt="..."
                          style={{
                            height: "150px",
                            width: "150px",
                            marginLeft: "200px",
                          }}
                        />
                        <b style={{ fontSize: "40px", marginLeft: "100px" }}>
                          {AddBooks.Book_Name}
                        </b>
                      </div>
                    </td>
                    <td
                      className="card-text"
                      style={{ fontSize: "25px", textAlign: "center" }}
                    >
                      {AddBooks.Author}
                    </td>
                  </tr>
                
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
