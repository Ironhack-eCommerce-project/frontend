import { useEffect, useState } from "react";

function Signup() {
  const defaultUser = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(defaultUser);

  function handleChange(event) {
    setUser((old) => {
      let newValue = event.target.value;
      return { ...old, [event.target.name]: newValue };
    });
  }

  function handleSubmit(event) {
    //check Username + PW
    //save User in DB
    //log User in
    setUser(defaultUser);
  }

  function checkIfEmailUnique(username) {
    console.log("check DB")
  }

  function validEmail(str){
    return /\S+@\S+\.\S+/.test(str);
  }

  //PW should have at least 6 characters, incl a number, one uppercase letter and one lowercase
  function checkPasswordStrength(str){
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(str);
  }

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        E-Mail:
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          style={{backgroundColor: validEmail(user.email) ? "green" : "red"}}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          style={{backgroundColor: checkPasswordStrength(user.password) ? "green" : "red"}}
        />
      </label>
      <br />
      <button type="submit">Sign up</button>
    </form>
  );
}

export default Signup;
