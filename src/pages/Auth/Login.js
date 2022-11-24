import { useState } from "react";

function Login() {
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
        console.log("CHECK DB AND LOG IN");
      }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        E-Mail:
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
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
        />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  )
}

export default Login