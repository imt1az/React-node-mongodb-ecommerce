import {
  Button,
  Divider,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import DashboardLayout from "components/Hoc/dasboardLayout";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get_all_brands } from "store/actions/brand.action";
import { ProductAdd } from "store/actions/products.action";

import Loading from "utls/products/Loading";
import { errorHelper } from "utls/tools";
import { validate } from "./formValue";
import PicUpload from "./PicUpload";





const AddProduct = (props) => {
  const [loading, setLoading] = useState(false);
  const notifications = useSelector((state) => state.notifications);
  const brands = useSelector((state) => state.brands);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      model: "",
      size: "",
      brand: "",

      woodtype: "",
      description: "",
      price: "",
      available: "",
      shipping: false,
      images:[]
    },
    validationSchema: validate,
    onSubmit: (values) => {
      
      handleSubmit(values);
    },
  });
   // handleImage
   const handlePic = (pic)=>{
        const picArray = formik.values.images;
        picArray.push(pic.url);
        formik.setFieldValue('images',picArray)
  }

  const handleSubmit = (values)=>{
    setLoading(true);
    dispatch(ProductAdd(values));
  }

 

  useEffect(()=>{
      if(notifications && notifications.success){
        navigate('/dashboard/admin/admin_products')
      }
      if(notifications && notifications.error){
        setLoading(false)
      }
  },[notifications,navigate])

  useEffect(() => {
    dispatch(get_all_brands());
  }, [dispatch]);

  console.log(formik.values)
  return (
    <div>
      <DashboardLayout title="Add Product">
        {loading ? (
          <Loading />
        ) : (
          <>
          <Divider className="mt-5 mb-5"/>
          <PicUpload picValue={(pic)=>handlePic(pic)}/>
         
          <Divider className="mt-10"/>
       
            <form className="" onSubmit={formik.handleSubmit}>
              <div className="form-group my-5">
                <TextField
                  style={{ width: "100%" }}
                  name="model"
                  label="Enter a model"
                  variant="outlined"
                  {...formik.getFieldProps("model")}
                  {...errorHelper(formik, "model")}
                />
              </div>

              <div className="form-group mb-3">
                <FormControl variant="outlined" style={{ width: "100%" }}>
                  <h5>Select brand</h5>
                  <Select
                    name="brand"
                    {...formik.getFieldProps("brand")}
                    error={
                      formik.errors.brand && formik.touched.brand ? true : false
                    }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {brands && brands.all
                      ? brands.all.map((item) => (
                          <MenuItem key={item._id} value={item._id}>
                            <em>{item.name}</em>
                          </MenuItem>
                        ))
                      : null}
                  </Select>
                  {formik.errors.brand && formik.touched.brand ? (
                    <FormHelperText error={true}>
                      {formik.error.brand}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              </div>

              <div className="form-group mb-3">
                <TextField
                  style={{ width: "100%" }}
                  name="description"
                  label="Enter a description"
                  variant="outlined"
                  {...formik.getFieldProps("description")}
                  {...errorHelper(formik, "description")}
                  multiline
                  rows="4"
                />
              </div>

              <div className="form-group mb-3">
                <TextField
                  style={{ width: "100%" }}
                  name="price"
                  label="Enter a price"
                  variant="outlined"
                  type="number"
                  {...formik.getFieldProps("price")}
                  {...errorHelper(formik, "price")}
                />
              </div>
              <Divider className="mb-9" />
              <div className="form-group mb-3 mt-3">
                <TextField
                  style={{ width: "100%" }}
                  name="available"
                  label="How many we have available in storage?"
                  variant="outlined"
                  type="number"
                  {...formik.getFieldProps("available")}
                  {...errorHelper(formik, "available")}
                />
              </div>
              <Divider className="my-5" />

              <div className="form-group mb-3">
                <FormControl variant="outlined" style={{ width: "100%" }}>
                  <h5>Do we offer free shipping?</h5>
                  <Select
                    name="shipping"
                    {...formik.getFieldProps("shipping")}
                    error={
                      formik.errors.shipping && formik.touched.shipping
                        ? true
                        : false
                    }
                  >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>Nope</MenuItem>
                  </Select>
                  {formik.errors.shipping && formik.touched.shipping ? (
                    <FormHelperText error={true}>
                      {formik.error.shipping}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              </div>
              <Button variant="contained" color="primary" type="submit">
                Add Product
              </Button>
            </form>
          </>
        )}
      </DashboardLayout>
    </div>
  );
};

export default AddProduct;
