import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAllImages,
} from "../../../../actions/imageGelleryAction";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";

import MetaData from "../../../layout/metaData/MetaData";
import { Aside } from "../../aside/Aside";
import Gallery from "react-photo-gallery";
import SelectedImage from "./SelectedImage";
import "./allImage.css";
import { NavLink } from "react-router-dom";
import Loader from "../../../layout/loader/Loader";
import ImageGallery from "./ImageGallery";

const AllImages = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, images, resultPerPage, imageCount, error } = useSelector(
    (state) => state.images
  );
  const [selectIds, setSelectIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  // Function to handle individual image selection
  const handleImageSelection = (index) => {
    setSelectIds((old)=>[...old,index])
  };
  
  const imageRenderer = ({ index, left, top, key, photo }) => (
    <SelectedImage
      selected={selectAll ? true : false}
      key={photo._id}
      margin={"2px"}
      index={index}
      photo={photo}
      left={left}
      top={top}
      handleImageSelection={handleImageSelection}
      className={selectAll ? "gallery-image selected" : "gallery-image"}
    />
  );

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getAllImages(currentPage));
  }, [alert, error, dispatch, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const itemsPerPage = resultPerPage || 10; // Number of images per page
  // const indexOfLastImage = currentPage * itemsPerPage;
  // const indexOfFirstImage = indexOfLastImage - itemsPerPage;
  // const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const imagesWithParams =
    images &&
    images.map((image) => {
      const updatedImage = {
        ...image,
        src: `http://localhost:8000/${image.path}`,
        width: 100,
        height: 100,
      };
      return updatedImage;
    });
  return (
    <>
      <MetaData
        title={"Admin all images"}
        content={"Admin all images"}
        keywords={"Admin all images"}
      />

      <div className="admin-page">
        <div className="admin-page-area">
          <Aside />
          <div id="ad-body">
            <div className="ad-cont">
              <div className="all-img-cont-containor">
                <>
                  <div className="all-img-cont-containor">
                    
                    <ImageGallery/>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllImages;
