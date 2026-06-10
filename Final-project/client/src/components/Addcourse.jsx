import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Addcourse = () => {

  const navigate = useNavigate();

  const [course, setCourse] = useState({
    title: "",
    price:""
  });
  
  const hc = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value
    });
  };

  const hs = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post("http://localhost:5600/api/courses", course);
      alert("course added sucessfully");
      setCourse({
        title: "",
        price: ""
      });
      navigate("/about");
    } catch (err) {
      console.error(err);
    }
}



  return <>
    <div>
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Add course</h2> 
      <form className="space-y-4" onSubmit={hs}>
        
        <input
          type="text"
          name="title"
          placeholder="course title"
          value={course.title}
          className="w-full border px-4 py-2 rounded"
          onChange={hc}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="course price"
          value={course.price}
          className="w-full border px-4 py-2 rounded"
          onChange={hc}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-900"
        
        >
          Add Course
        </button>
      </form>
  </div>
  
  
  </>
}

export default Addcourse