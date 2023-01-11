import {
  Button,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextareaAutosize,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_ORIGIN } from "../consts";
import { slugify } from "../functions";

function AddProduct({ setProducts, categories }) {
  const defaultProduct = {
    name: "",
    description: "",
    price: 0.0,
    image: "",
    slug: "",
  };

  const [newProduct, setNewProduct] = useState(defaultProduct);

  const [fileInput, setFileInput] = useState("");
  const [previewSource, setPreviewSource] = useState();
  const [selectedFile, setSelectedFile] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setFileInput(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const uploadImage = async () => {
    const uploadUrl = SERVER_ORIGIN + "/images/upload";
    const formData = new FormData();
    formData.append("file", fileInput);
    const resp = await axios.post(uploadUrl, formData, {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(resp.data);
    setSelectedFile(resp.data);
  };

  /* Not sure that is the perfect solution, but now for the slug every whitespace is immediatly turned into a "-", already while typing  */
  const handleChange = (e) => {
    setNewProduct((old) => {
      let newValue = e.target.value;
      if (typeof old[e.target.name] === "number") {
        newValue = parseFloat(e.target.value);
      }
      return { ...old, [e.target.name]: newValue };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      newProduct.slug = slugify(newProduct.name);
      if (!newProduct.category) newProduct.category = categories[0].name;
      if (!previewFile) return;
      newProduct.image = selectedFile;
      const resp = await axios.post("/products", newProduct);
      console.log("resp:", resp);
      setNewProduct(defaultProduct);
      const fetchData = async () => {
        const result = await axios.get("/products");
        const data = await result.data;
        setProducts(data);
      };
      fetchData();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => console.log(newProduct), [newProduct]);

  return (
    <>
      <Paper>
        <form onSubmit={handleSubmit}>
          <Grid container alignItems="left" justify="left" direction="column" padding={2} gap={3}>
            <InputLabel>Name</InputLabel>
            <Input name="name" value={newProduct.name} onChange={handleChange} />

            <InputLabel>Description</InputLabel>
            <TextareaAutosize
              minRows={3}
              name="description"
              value={newProduct.description}
              onChange={handleChange}
            />

            <InputLabel>Price</InputLabel>
            <Input
              type="number"
              min="0"
              step="0.01"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
            />

            <Grid item>
              <InputLabel>Image</InputLabel>
              {/*<Input
                type="file"
                accept="image/*"
                hidden
                name="image"
                value={fileInput}
                onChange={handleFileInputChange}
              /> */}
              <Input
                // hidden
                accept="image/*"
                name="image"
                type="file"
                value={newProduct.image}
                onChange={handleFileInputChange}
              />
              <Button
                variant="contained"
                component="label"
                color="error"
                onClick={() => uploadImage()}
              >
                Upload
              </Button>
            </Grid>
            <Grid item>
              {previewSource && (
                <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
              )}
            </Grid>

            <Grid item>
              <InputLabel>Category</InputLabel>
              {categories[0] && (
                <Select value={newProduct.category} onChange={handleChange} name="category">
                  {categories.map((category) => (
                    <MenuItem key={category.slug} value={category.name}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            </Grid>
            <Grid item>
              <Button variant="contained" color="error" type="submit">
                Add New Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
}

export default AddProduct;
