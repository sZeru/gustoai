import React, { useState, useEffect } from "react";
import "../css/mainpage.css";
import axios from "axios";

function MainPage() {
  const token = localStorage.getItem("token");
  const [course, setCourse] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [recipeTime, setRecipeTime] = useState("");
  const [numServings, setNumServings] = useState("");
  const [pantryItemNames, setPantryItemNames] = useState([]);

  axios
    .get("http://127.0.0.1:5000/mainpage", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  const handleCourseChange = async (e) => {
    const value = e.target.value;
    setCourse(value);
  };

  const handleCuisineChange = async (e) => {
    const value = e.target.value;
    setCuisine(value);
  };

  const handleTimeChange = async (e) => {
    const value = e.target.value;
    setRecipeTime(value);
  };

  const handleServingsChange = async (e) => {
    const value = e.target.value;
    setNumServings(value);
  };

  const fetchPantryItemNames = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/pantry/names", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching pantry item names:", error);
      return [];
    }
  };

  useEffect(() => {
    const loadPantryItemNames = async () => {
      const itemNames = await fetchPantryItemNames();
      setPantryItemNames(itemNames);
    };

    loadPantryItemNames();
  }, []);

  return (
    <div>
      <h1 style={{ marginBottom: 40, marginTop: 20 }}>Welcome!</h1>
      <h2 style={{ marginBottom: 40 }}>Generate a Recipe:</h2>

      <select
        style={{ marginRight: 10, height: 30 }}
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      >
        <option value="">Select Course</option>
        <option value="appetizer">Appetizer</option>
        <option value="main course">Main Course</option>
        <option value="dessert">Dessert</option>
      </select>

      <select
        style={{ marginRight: 10, height: 30 }}
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
      >
        <option value="">Select Cuisine</option>
        <option value="American">American</option>
        <option value="Chinese">Chinese</option>
        <option value="Cuban">Cuban</option>
        <option value="Greek">Greek</option>
        <option value="Indian">Indian</option>
        <option value="Italian">Italian</option>
        <option value="Japanese">Japanese</option>
        <option value="Korean">Korean</option>
        <option value="Mexican">Mexican</option>
        <option value="Thai">Thai</option>
        <option value="Vietnamese">Vietnamese</option>
      </select>

      <select
        style={{ marginRight: 10, height: 30 }}
        value={recipeTime}
        onChange={(e) => setRecipeTime(e.target.value)}
      >
        <option value="">Time for Recipe</option>
        <option value="5 minutes or less">5 minutes or less</option>
        <option value="10 minutes or less">10 minutes or less</option>
        <option value="30 minutes or less">30 minutes or less</option>
        <option value="1 hour or less">1 hour or less</option>
        <option value="1 hour or more">1 hour or more</option>
      </select>

      <input
        style={{ marginRight: 10, width: 150 }}
        type="text"
        value={numServings}
        onChange={(e) => setNumServings(e.target.value)}
        placeholder="Enter # of Servings"
      />

      <div className="list">
        <div className="title" style={{ marginTop: 10 }}>
          Your pantry items:
        </div>
        <div className="form-check">
          <table width="100%" align="center">
            <tr>
              <td>
                {pantryItemNames.map((item, index) => (
                  <div key={index}>
                    <input value={item} type="checkbox" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      <span>&nbsp;&nbsp;&nbsp;{item}</span>
                    </label>
                  </div>
                ))}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
