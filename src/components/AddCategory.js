import { Button, Grid, Input, InputLabel, Paper } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { slugify } from "../functions";

function AddCategory({ setCategories }) {
  const defaultCategory = {
    name: "",
    slug: "",
  };
  const [newCategory, setNewCategory] = useState(defaultCategory);

  const handleChange = (e) => {
    setNewCategory((old) => {
      let newValue = e.target.value;
      if (e.target.name === "slug") {
        newValue = slugify(e.target.value);
      }
      return { ...old, [e.target.name]: newValue };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      newCategory.slug = slugify(newCategory.name);
      const resp = await axios.post("/categories", newCategory);
      console.log("resp:", resp);
      setNewCategory(defaultCategory);
      const fetchData = async () => {
        const result = await axios.get("/categories");
        const data = await result.data;
        setCategories(data);
      };
      fetchData();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => console.log(newCategory), [newCategory]);

  return (
    <>
      <Paper>
        <form onSubmit={handleSubmit}>
          <Grid container alignItems="left" justify="left" direction="column" padding={2} gap={3}>
            <InputLabel>Category Name</InputLabel>
            <Input name="name" value={newCategory.name} onChange={handleChange} />
            <Grid item>
              <Button variant="contained" color="error" type="submit">
                Add Category
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
}

export default AddCategory;
