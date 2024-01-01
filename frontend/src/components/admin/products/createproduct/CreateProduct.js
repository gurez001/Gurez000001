import React, { useEffect, useRef, useState } from "react";
import { Aside } from "../../aside/Aside";
import {
  ClearError,
  createNewProduct,
} from "../../../../actions/ProductAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { NEW_PRODUCT_RESET } from "../../../../constants/ProductConstants";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Loader from "../../../layout/loader/Loader";
import { Helmet } from "react-helmet";

import ImgUploader from "../../ImageGellery/uploadimage/ImageTabToggle";
import { ProductSidebar } from "./ProductSidebar";
import {
  SET_SELECTED_IMAGE_RESET,
  UPDATE_IMAGE_RESET,
} from "../../../../constants/imageGelleryCartConstants";
import MetaData from "../../../layout/metaData/MetaData";

import ProductForm from "../productform/ProductForm";

export const CreateProduct = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [open, setOpen] = useState(false);
  const { loding, error, success } = useSelector((state) => state.newProduct);
  // const { loading, selectedImage } = useSelector((state) => state.selectImage);
  // const { images } = useSelector((state) => state.uploadImage);


  
  // dispatch(
  //   createNewProduct(
  //     name,
  //     price,
  //     maxprice,
  //     content,
  //     article,
  //     parent,

  //     selectedImage,
  //     stock,
  //     metatitle,
  //     keywords,
  //     metaUrl,
  //     metadec,
  //     imageIds
  //   )
  // );
  // dispatch({ type: UPDATE_IMAGE_RESET });
  // dispatch({ type: SET_SELECTED_IMAGE_RESET });
  useEffect(() => {
    // if (avatarPreview.length > 4) {
    //   alert.error("max 4 image is valid");
    //   setBtndisable(true);
    // } else {
    //   setBtndisable(false);
    // }
    // setimgLength(avatarPreview.length);
    if (error) {
      alert.error(error);
      dispatch(ClearError());
    }
    if (success) {
      alert.success("product created");
      Navigate("/admin/all-products");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [
    alert,
    error,
    dispatch,
    success,
    Navigate,
    // avatarPreview
  ]);

  const currentData = (e) => {
    console.log(e);
  };

  //--------------handleImageClickOpen
  const handleImageClickOpen = () => {
    setOpen(true);
  };
  //----------------handleImageClickClose

  const handleImageClickClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MetaData
        title={"Admin create product list"}
        content={"Admin create product list"}
        keywords={"Admin create product list"}
      />
      <div className="admin-page">
        <div className="admin-page-area">
          <Aside />
          <div id="ad-body">
            <div className="ad-cont">
              <section className="ad-section">
                <div className="all-products-cont">
                  <div className="all-products-content-area">
                    <div className="all-products-title">
                      <h1>Create List</h1>
                    </div>
                    {loding ? (
                      <Loader />
                    ) : (
                      <>
                        <div className="create-page-contaionr">
                          <div className="from-contaionr">
                            <ProductForm currentData={currentData} />
                          </div>
                          <div className="product-sidebar-containor">
                            <Button
                              variant="outlined"
                              onClick={handleImageClickOpen}
                            >
                              Image upload
                            </Button>
                            <ImgUploader
                              open={open}
                              close={handleImageClickClose}
                            />
                            <ProductSidebar  />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
