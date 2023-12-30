import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from "../allImages/LazyLoadImage";
import Loader from "../../../layout/loader/Loader";
import { uploadImage } from "../../../../actions/imageGelleryAction";
import { Dropzone, FileMosaic } from "@files-ui/react";
import { Aside } from "../../aside/Aside";
import { NavLink } from "react-router-dom";
import { ImageUploaderForm } from "./ImageUploaderForm";
const ImageUploader = () => {

    const dispatch = useDispatch();
  const alert = useAlert();
  const [filterImage, setFilterImage] = useState([]);
  const [avatarPreview, setAvatarPreview] = useState([]);
  const [avatar, setAvatar] = useState([]);
  const [tabValue, setTabValue] = useState(true);

  const { loading: allImgLoading } = useSelector((state) => state.images);
  const { loading: uploadLoading, images } = useSelector(
    (state) => state.uploadImage
  );

  const { user } = useSelector((state) => state.user);
  const [progress, setProgress] = useState(0);
  const [loadingStates, setLoadingStates] = useState([]);
  const [letestImage, setLetestImage] = useState([]);

  const imgHandler = async (e) => {
    if (e.target.name === "avatar") {
      const files = Array.from(e.target.files);

      setAvatar(files); // Store the array of files

      setAvatarPreview([]); // Clear existing image previews
      files.forEach((item, i) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setAvatarPreview((old) => [...old, reader.result]);
            // const originalFileName = e.target.files[0].name;
          }
        };
        //   setAvatar((old) => [...old, item]);
        reader.readAsDataURL(item);
      });
      console.log(files);
      // Upload each image individually
      files.forEach((file, index) => {
        dispatch(uploadImage([file], user && user._id))
          .then(() => {
            setLoadingStates((prevStates) =>
              prevStates.map((state, i) => (i === index ? false : state))
            );
          })
          .catch((error) => {
            // Handle error if image upload fails
            setLoadingStates((prevStates) =>
              prevStates.map((state, i) => (i === index ? false : state))
            );
            console.error("Image upload failed:", error);
          });
      });
      // dispatch(uploadImage(files, user && user._id));
    }
  };

  //----------------------------------------------

  const [currentImageData, setCurrentImageData] = useState([]);
  const handleImageClick = (imageData) => {
    console.log(imageData);
    // // Do something with the clicked image data
    // const isSelected = currentImageData.some(
    //   (item) => item._id === imageData._id
    // );

    // setFilterImage([imageData]);

    // if (isSelected) {
    //   // If selected, remove it from the array
    //   const updatedData = currentImageData.filter(
    //     (item) => item._id !== imageData._id
    //   );
    //   console.log(updatedData);
    //   setCurrentImageData(updatedData);
    // } else {
    //   // If not selected, add it to the array
    //   setCurrentImageData((prevData) => [...prevData, imageData]);
    // }
  };

  // useEffect(()=>{
  //   if(error){
  //     alert.error(error);
  //     dispatch(clearErrors())
  //   }
  // },[error,alert,dispatch])

  const currentImgData = (i) => {
    // // const filterImg = avatar.filter((item, index) => {
    // //   return i === index;
    // // });
    // const id =
    //   images && images.images && images.images[i] ? images.images[i]._id : null;
    // setFilterImage([i, id]);
  };

  useEffect(() => {
    if (images && images.length > 0) {
      setLetestImage([...letestImage, ...images]);
    }
  }, [images]);

  const [files, setFiles] = useState([]);
  const updateFiles = async (incomingFiles) => {
    setFiles(incomingFiles);

    for (const file of incomingFiles) {
      try {
        await dispatch(uploadImage([file], user && user._id));
        // Wait for the dispatch to complete before moving to the next iteration
      } catch (error) {
        console.error("Error dispatching image upload:", error);
        // Handle error if dispatch fails
      }
    }
  };

  return (
    <>
    <div className="admin-page">
      <div className="admin-page-area">
        <Aside />
        <div id="ad-body">
          <div className="ad-cont">
            <section className="ad-section">
              <div className="all-img-cont">
                <div className="admin-img-title">
                  <div className="gallery-header">
                    <div className="page-title-action">
                      <p>
                        <NavLink to={"/admin/upload/library"}>
                          Library
                        </NavLink>
                      </p>
                    </div>
                  </div>
                  <ImageUploaderForm/>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>

    {/* <form encType="multipart/form-data">
    <div className="input-field-">
      <div className="-input-upload">
        <label htmlFor="avatar">avatar</label>

        <input
          type="file"
          name="avatar"
          id="avatar"
          accept="image/"
          multiple
          onChange={(e) => imgHandler(e)}
        />
      </div>
      <div className="input-img-area">
        <ul>
          {letestImage.length > 0 ? (
            <ul>
              {letestImage.map((item, i) => (
                <li
                  className="input-img-area-list"
                  key={i}
                  onClick={(e) => currentImgData(i)}
                >
                  {loadingStates[i] ? (
                    <span>Loading...</span>
                  ) : (
                    <LazyLoadImage
                      src={item.path}
                      alt="avatar"
                      handleImageClick={handleImageClick}
                    />
                  )}
                </li>
              ))}
            </ul>
          ) : null}
        </ul>
      </div>
    </div>
  </form> */}
  </>
  )
}

export default ImageUploader
