import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";

const Editcourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    title: "",
    price: "",
  });

  const getcourse = async () => {
    try {
      const res = await axios.get(`http://localhost:5600/api/courses/${id}`);
      setCourse(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getcourse();
  }, [id]);

  const hc = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const hs = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5600/api/courses/${id}`, course);
      alert("course updated sucessfully");
      navigate("/about");
  
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Edit course
        </h2>
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
            update Course
          </button>
        </form>
      </div>
    </>
  );
};

export default Editcourse;
