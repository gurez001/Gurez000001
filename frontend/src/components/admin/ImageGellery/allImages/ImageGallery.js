import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAllImages,
  getImageId,
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

const ImageGallery = () => {
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
    setSelectIds((old) => [...old, index]);
  };

  const newImageIds = [];
  function SelectImageIds(index) {
    const countMap = {};
    const evenStrings = [];
    const oddStrings = [];

    for (let i = 0; i < index.length; i++) {
      const str = index[i];
      countMap[str] = (countMap[str] || 0) + 1;
    }

    for (const key in countMap) {
      if (countMap[key] % 2 === 0) {
        evenStrings.push(key);
      } else {
        oddStrings.push(key);
      }
    }

    dispatch(getImageId(oddStrings));
  }
  SelectImageIds(selectIds);

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
      <section className="ad-section">
        <div className="all-img-cont">
          <div className="admin-img-title">
            <div className="gallery-header">
              <div className="page-title-action">
                <NavLink to={"/admin/upload/media-new"}>
                  Add New Media File
                </NavLink>
              </div>
              <h1>Image Gellery</h1>
            </div>
            <p>No of media {images && images.length}</p>

            <div className="gallery-containor">
              <div>
                <p>
                  <button onClick={toggleSelectAll}>Toggle Select All</button>
                </p>
              </div>
              {loading ? (
                <Loader />
              ) : (
                <>
                  <Gallery
                    photos={imagesWithParams}
                    renderImage={imageRenderer}
                  />
                </>
              )}
            </div>
          </div>
          {resultPerPage < imageCount && (
            <div className="pagination-box">
              <Pagination
                totalItemsCount={imageCount}
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                onChange={handlePageChange}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-items"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ImageGallery;
