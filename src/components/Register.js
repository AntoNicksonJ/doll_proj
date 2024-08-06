// import React, { useState } from 'react';
// import axios from '../axios';
// import '../styles/register.css';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     uname1: '',
//     email: '',
//     phoneno: '',
//     upswd1: '',
//     upswd2: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.upswd1 !== formData.upswd2) {
//       alert("Passwords do not match");
//       return;
//     }
//     axios.post('/register', formData)
//       .then(response => {
//         console.log(response.data);
//         // Handle successful registration
//       })
//       .catch(error => {
//         console.error(error);
//         // Handle registration errors
//       });
//   };

//   return (
//     <div className='rg'>
//       <section className="rg_bg">
//         <section className="rg_bgbg"></section>
//       </section>
//       <div className="rg_box">
//         <h1>Register Here</h1>
//         <form onSubmit={handleSubmit}>
//           <p>Username</p>
//           <input type="text" name="uname1" placeholder="Enter Username" value={formData.uname1} onChange={handleChange} required />
//           <p>Email</p>
//           <input type="email" name="email" placeholder="Enter email id" value={formData.email} onChange={handleChange} required />
//           <p>Contact no</p>
//           <input type="text" name="phoneno" placeholder="Enter your number" value={formData.phoneno} onChange={handleChange} required />
//           <p>Password</p>
//           <input type="password" name="upswd1" placeholder="Enter Password" value={formData.upswd1} onChange={handleChange} required />
//           <p>Retype Password</p>
//           <input type="password" name="upswd2" placeholder="Re-Enter Password" value={formData.upswd2} onChange={handleChange} required />
//           <input type="submit" value="Register" />
//         </form>
//         <br />
//         <a href="/login">Existing user, login !?</a>
//       </div>
//     </div>
//   );
// };

// export default Register;
