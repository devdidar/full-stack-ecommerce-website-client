import React,{useState} from 'react';
import { Typography, Container,Alert } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form"

const AddService = () => {
    const [success,setSuccess] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`https://immense-brushlands-03739.herokuapp.com/addService`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        }).then(res=>res.json())
        .then(data=>{
            setSuccess(true)
            reset()
        })
    };

    return (
        <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 1,
        mt: 5,
      }}
    >
      <Box>
      {success && <Alert severity="success">Successfully Added</Alert>}
        <Typography variant="h5" gutterBottom component="div" sx={{mt:2}}>
          Add A Service
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Enter Service Name"
            style={{ margin: "5px", width: "300px", padding: "5px 8px",border: "1px solid #6029BA",
            outline: "none", }}
          />
          <br />
          <input
            type="text"
            {...register("image", { required: true })}
            placeholder="Enter Img URL"
            style={{ margin: "5px", width: "300px", padding: "5px 8px",border: "1px solid #6029BA",
            outline: "none", }}
          />
          <br />
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Enter Service Price"
            style={{ margin: "5px", width: "300px", padding: "5px 8px",border: "1px solid #6029BA",
            outline: "none", }}
          />
          <br />
          <textarea
          rows='15'
          cols='25'
            {...register("description", { required: true })}
            placeholder="Write here..."
            style={{ margin: "5px", width: "300px", padding: "5px 8px",border: "1px solid #6029BA",
            outline: "none", }}
          />
          <br />
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            type="submit"
            style={{
              margin: "5px",
              padding: "10px 15px",
              cursor: "pointer",
              backgroundColor: "#6029BA",
              borderRadius: "5px",
              color: "white",
              outline: "none",
              border: "none",
            }}
          />
        </form>
      </Box>
    </Container>
    );
};

export default AddService;