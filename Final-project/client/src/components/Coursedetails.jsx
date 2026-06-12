import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Coursedetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

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

  //fixed
  if (!course) {
    return <h2>Loading course details...</h2>;
  }

  return (
    <div>
      <h2>Course Details</h2>

      <div>
        <h3>{course.title}</h3>
        <p>{course.price}</p>

        <Link to="/about">Back</Link>
      </div>
    </div>
  );
};

export default Coursedetails;
