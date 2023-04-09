
import { useState } from 'react';
import './App.css';

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  const[formData, setFormData] = useState( 
    {
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isVisible:true,
      mode:""
    });

  console.log(formData);

  // console.log(formData.firstName);
  // console.log(formData.lastName);
  // console.log(formData.email);                                                        );

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        // [event.target.name]: event.target.value
        [name]: type === "checkbox" ? checked : value
      }
    });
  }

  // function changeFirstNameHandler(event){
  //   // console.log("first name",event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event){
  //   // console.log("last name",event.target.value);
  //   setLastName(event.target.value);
  // }

  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder='first name'
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />

        <br/>
        <br/>
        
        <input
          type="text"
          placeholder='last name'
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br/>
        <br/>
        
        <input
          type="email"
          placeholder='Enter your email here'
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br/>
        <br/>
        <textarea
          placeholder='Enter your comments here'
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />

       <br/>
       <br/>

       {/* checkboxes */}

       <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}

        />
        <label htmlFor='isVisible'>Am I visible?</label>

       <br/>
       <br/>

       {/* radio button */}

       <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          id="Online-Mode"
          value="Online-Mode"

        />
        <label htmlFor='Online-Mode'>Online Mode</label>
        {/* if all radio button have same name,
         then we can tick all radio button at same time  */}


      </form>
    </div>
  );
}

export default App;
