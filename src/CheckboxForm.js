// import React, { useState } from 'react';
// import './CheckboxForm.css';

// function CheckboxForm(){
//   const options = ['Remove null Attributes', 'Cloud of Words', 'Language Distribution', 'Data Distribution', 'Stance Distribution', 'Localisation Distribution'];

//   return(
//     <div className="form-container">
//       <form>
//         <label className="form-label"htmlFor="name">Title:</label>
//         <input className="form-input" type="text" id="name" name="name"/>


//         {options.map((option, index) => (
//           <label key={index} className="checkbox-label" id={`checkbox-label-${index+1}`}>
//             <input type="checkbox" name={`option${index+1}`}/> {option}
//           </label>
//         ))}


//         <div className="submit-button-wrapper">
//           <button className="submit-button" type="submit">Submit</button>
//         </div>

//       </form>
//     </div>
//   );
// }

// export default CheckboxForm;


//____________________________________________________________________________

// const CheckboxForm = () => {
//   const options = ['Remove null Attributes', 'Cloud of Words', 'Language Distribution', 'Data Distribution', 'Stance Distribution', 'Localisation Distribution'];
//   const [images, setImages] = useState([]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     const selectedOptions = Array.from(formData.keys()).filter((key) => formData.get(key) === 'on');

//     const response = await fetch('localhost:8000/image_processing/', {
//       method: 'POST',
//       body: formData,
//     });

//     const data = await response.json();
//     const images = data.images;

//     setImages(images);
//   };

//   return (
//     <div className="form-container">

//       <form onSubmit={handleSubmit}>
//         <label className="form-label"htmlFor="name">Title:</label>
//         <input className="form-input" type="text" id="name" name="name"/>

//         {options.map((option, index) => (
//           <label key={index} className="checkbox-label" id={`checkbox-label-${index+1}`}>
//             <input type="checkbox" name={`option${index+1}`}/> {option}
//           </label>
//         ))}

//         <div className="submit-button-wrapper">
//           <button className="submit-button" type="submit">Submit</button>
//         </div>
//       </form>

//       <div className="image-container">
//         {images.map((image, index) => {
//           <img key={index} src={`/static/images/${image}`} alt={`Image ${index}`} />
//         })}
//       </div>

//     </div>
//   );
// }

// export default CheckboxForm;



//____________________________________________________________________________

// import React, { Component } from 'react';

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       images: [],
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }


//   handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     fetch('/process_image/', {
//       method: 'POST',
//       headers: {
//         'X-CSRFToken': getCookie('csrftoken') // Get the CSRF token from the cookie
//       },
//       body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       this.setState({ images: data });
//     })
//     .catch(error => console.error(error));
//   }

//   render() {
//     const options = ['Remove null Attributes', 'Cloud of Words', 'Language Distribution', 'Data Distribution', 'Stance Distribution', 'Localisation Distribution'];
//     return (
//       <div>
//         <h1>React App</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Input:
//             <input type="text" name="input" />
//           </label>
//           <br />
//           {options.map((option, index) => (
//             <label key={index} className="checkbox-label" id={`checkbox-label-${index+1}`}>
//               <input type="checkbox" name={`option${index+1}`}/> {option}
//             </label>
//           ))}
//           <button type="submit">Submit</button>
//         </form>
//         {this.state.images.map(image => (
//           <img key={image.id} src={image.url} alt={image.name} />
//         ))}
//       </div>
//     );
//   }
// }


// function getCookie(name) {
//   let cookieValue = null;
//   if (document.cookie && document.cookie !== ''){
//     let cookies = document.cookie.split(';');
//     for (let i=0 ; i<cookies.length ; i++){
//       let cookie = cookies[i].trim();
//       if (cookie.substring(0, name.length+1) === (name + '=')) {
//         cookieValue = decodeURIComponent(cookie.substring(name.length+1));
//         break
//       }
//     }
//   }
//   return cookieValue;
// }


// export default App


import React, { useState } from 'react';
// import axios from 'axios';


const CheckboxForm = () => {
  const options = ['Remove null Attributes', 'Cloud of Words', 'Language Distribution', 'Data Distribution', 'Stance Distribution', 'Localisation Distribution'];
  // const [images, setImages] = useState([]);

  // const [title, setTitle] = useState("");
  // const [remove_null_attr, setRemove_null_attr] = useState(false);

  const handleSubmit = () => {
    console.log("hello")
    // let formField = new FormData();
    // formField.append('name', title)
    // formField.append('option1', remove_null_attr)

    // await axios({
    //   method: 'post',
    //   url: 'http://localhost:8000/image_processing/',
    //   data: formField
    // }).then((response) => {
    //   console.log(response.data)
    // })
  }
  

  return (
    <div className="form-container">

      <form>
        <label className="form-label"htmlFor="name">Title:</label>
        <input className="form-input" type="text" id="name" name="name"/>

        {options.map((option, index) => (
          <label key={index} className="checkbox-label" id={`checkbox-label-${index+1}`}>
            <input type="checkbox" name={`option${index+1}`}/> {option}
          </label>
        ))}

        <div className="submit-button-wrapper">
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
      </form>

      <div className="image-container">
        {images.map((image, index) => {
          <img key={index} src={`/static/images/${image}`} alt={`Image ${index}`} />
        })}
      </div>

    </div>
  );
}

export default CheckboxForm;

