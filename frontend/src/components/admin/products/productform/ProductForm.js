import React, { useState } from "react";
import MyEditor from "../../../layout/classiceditor/MyEditor";
import SelectCategore from "../../category/allCategory/assets/SelectCategore";
import { Button } from "@material-ui/core";
import { CharCount } from "../../../layout/CharCount/CharCount";
const ProductForm = (

    {currentData}
) => {
  const [inputValue, setinputValue] = useState({
    parent: "",
  });

  const [tags, setTags] = useState([]);
  const [open, setOpen] = useState(false);
  //   const editor = useRef(null);

  const [avatarPreview, setAvatarPreview] = useState([]);
  const [avatar, setAvatar] = useState([]);
  const [imgLength, setimgLength] = useState(0);
  const [btndisable, setBtndisable] = useState(false);

  //----------editor event

  const contentHeandle = (e) => {
    setContent(e);
  };

  //----------article editor event--
  const articleContentHeandle = (e) => {
    setArticle(e);
  };

  const createProductInputHandle = (e) => {
    // if (e.target.name === "avatar") {
    //   const files = Array.from(e.target.files);
    //   setAvatar(files); // Store the array of files
    //   setAvatarPreview([]); // Clear existing image previews
    //   files.forEach((item, i) => {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //       if (reader.readyState === 2) {
    //         setAvatarPreview((old) => [...old, reader.result]);
    //         // const originalFileName = e.target.files[0].name;
    //       }
    //     };
    //     //   setAvatar((old) => [...old, item]);
    //     reader.readAsDataURL(item);
    //   });
    // } else {
    const { name, value } = e.target;
    setinputValue({
      ...inputValue,
      [name]: value,
    });
    // }
  };

  //   const createProduct = (e) => {
  //     e.preventDefault();
  //  console.log(inputValue);
  // const {
  //   name,
  //   price,
  //   maxprice,
  //   parent,
  //   stock,
  //   metatitle,
  //   keywords,
  //   metalink,
  //   metadec,
  // } = inputValue;
  // let metaUrl = metalink.split(" ").join("-").toLowerCase();
  // //     const imageIds = selectedImage && selectedImage.map((item) => item._id);

  // if (
  //   name.trim() === "" ||
  //   price.trim() === "" ||
  //   maxprice.trim() === "" ||
  //   parent.trim() === "" ||
  //   stock.trim() === "" ||
  //   metatitle.trim() === "" ||
  //   keywords.trim() === "" ||
  //   metalink.trim() === "" ||
  //   metadec.trim() === "" ||
  //   metaUrl.trim() === ""
  // ) {
  //   //(imageIds ?? []).length === 0)
  //   return alert.error(
  //     "Please fill out all required fields and upload at least one image. "
  //   );
  // }

  //   };
  const handleInputKeyDown = (e) => {
    // // e.target.value
    //  console.log(e.target.value)
  };

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [parent, setparent] = useState("");
  const [metalink, setMetalink] = useState("");
  const [metadec, setMetadec] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [metatitle, setMetatitle] = useState("");
  const [article, setArticle] = useState("");
  const [content, setContent] = useState("");

  console.log(
    name,
    price,
    stock,
    maxPrice,
    metalink,
    metadec,
    keywords,
    inputValue.parent,
    metatitle,
    content,
    article
  );

  const createProduct = (e) => {
e.preventDefault();
const obj = {
    name,
    price,
    stock,
    maxPrice,
    metalink,
    metadec,
    keywords,
    parent:inputValue.parent,
    metatitle,
    content,
    article
}
currentData(obj)
  };

  return (
    <>
      <form
        className="product-form"
        onSubmit={createProduct}
        encType="multipart/from-data"
      >
        <div className="input-field-area">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name-input"
            onBlur={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-field-area input-field-width-cont">
          <label htmlFor="price">price</label>
          <input
            type="number"
            name="price"
            id="price"
            onBlur={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="input-field-area input-field-width-cont">
          <label htmlFor="maxprice">Max price</label>
          <input
            type="number"
            name="maxprice"
            id="maxpricee"
            onBlur={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <div className="input-field-area input-field-width-cont">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            name="stock"
            id="stock"
            onBlur={(e) => setStock(e.target.value)}
          />
        </div>
        <div className="input-field-area input-field-width-cont">
          <label htmlFor="category">category</label>
          <SelectCategore
            parent={inputValue.parent}
            handelInputValue={createProductInputHandle}
          />
        </div>

        <div className="input-field-area">
          <label htmlFor="description">description</label>

          <div>
            <MyEditor event={contentHeandle} />
          </div>
        </div>
        <div className="input-field-area">
          <label htmlFor="article ">Article </label>

          <div>
            <MyEditor event={articleContentHeandle} />
          </div>
        </div>
        <h2>SEO</h2>
        <div className="input-field-area">
          <label htmlFor="keyword">Keyword</label>
          <input
            type="text"
            name="keywords"
            autoComplete="off"
            id="keywords"
            // onKeyDown={handleInputKeyDown}
            onBlur={(e) => setKeywords(e.target.value)}
          />
        </div>
        <div className="input-field-area">
          <label htmlFor="metatitle">Meta Title</label>
          <input
            type="metatitle"
            name="metatitle"
            autoComplete="off"
            id="metatitle"
            onBlur={(e) => setMetatitle(e.target.value)}
          />
          <CharCount char={metatitle} limit={60} />
        </div>
        <div className="input-field-area">
          <label htmlFor="metalink">Meta link</label>
          <input
            type="metalink"
            name="metalink"
            autoComplete="off"
            id="metalink"
            onBlur={(e) => setMetalink(e.target.value)}
          />
          <CharCount char={metalink} limit={60} />
        </div>
        <div className="input-field-area">
          <label htmlFor="metadec">Meta description</label>
          <textarea
            type="metadec"
            name="metadec"
            autoComplete="off"
            id="metadec"
            onBlur={(e) => setMetadec(e.target.value)}
          ></textarea>
          <CharCount char={metadec} limit={160} />
        </div>
        <div>
          <Button
            // disabled={loding || btndisable ? true : false}
            type="submit"
            value="Singup"
          >
            Create list
          </Button>
        </div>
      </form>
      {/*   <form
        className="product-form"
        onSubmit={createProduct}
        encType="multipart/from-data"
      >
        <div className="input-field-area">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            autoComplete="on"
            id="name-input"
            value={inputValue.name}
            onBlur={createProductInputHandle}
          />
        </div>
        <div className="input-field-area input-field-width-cont">
          <label htmlFor="price">price</label>
          <input
            type="number"
            name="price"
            autoComplete="on"
            id="price"
            value={inputValue.price}
            onBlur={createProductInputHandle}
          />
        </div>
        <div className="input-field-area input-field-width-cont">
          <label htmlFor="maxprice">Max price</label>
          <input
            type="number"
            name="maxprice"
            id="maxpricee"
            value={inputValue.maxpricee}
            onBlur={createProductInputHandle}
          />
        </div>
        <div className="input-field-area input-field-width-cont">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            name="stock"
            autoComplete="on"
            id="stock"
            value={inputValue.stock}
            onBlur={createProductInputHandle}
          />
        </div>
        <div className="input-field-area input-field-width-cont">
          <label htmlFor="category">category</label>
          <SelectCategore
            parent={inputValue.parent}
            handelInputValue={createProductInputHandle}
          />
        </div>

        <div className="input-field-area">
          <label htmlFor="description">description</label>

          <div>
            <MyEditor event={contentHeandle} />
          </div>
        </div>
        <div className="input-field-area">
          <label htmlFor="article ">Article </label>

          <div>
            <MyEditor event={articleContentHeandle} />
          </div>
        </div>
        <h2>SEO</h2>
        <div className="input-field-area">
          <label htmlFor="keyword">Keyword</label>
          <input
            type="text"
            name="keywords"
            autoComplete="off"
            id="keywords"
            value={inputValue.keywords}
            // onKeyDown={handleInputKeyDown}
            onBlur={createProductInputHandle}
          />
        </div>
        <div className="input-field-area">
          <label htmlFor="metatitle">Meta Title</label>
          <input
            type="metatitle"
            name="metatitle"
            autoComplete="off"
            id="metatitle"
            value={inputValue.metatitle}
            onBlur={createProductInputHandle}
          />
          <CharCount char={inputValue.metatitle} limit={60} />
        </div>
        <div className="input-field-area">
          <label htmlFor="metalink">Meta link</label>
          <input
            type="metalink"
            name="metalink"
            autoComplete="off"
            id="metalink"
            value={inputValue.metalink}
            onBlur={createProductInputHandle}
          />
          <CharCount char={inputValue.metalink} limit={60} />
        </div>
        <div className="input-field-area">
          <label htmlFor="metadec">Meta description</label>
          <textarea
            type="metadec"
            name="metadec"
            autoComplete="off"
            id="metadec"
            value={inputValue.metadec}
            onBlur={createProductInputHandle}
          ></textarea>
          <CharCount char={inputValue.metadec} limit={160} />
        </div>
        <div>
          <Button
            // disabled={loding || btndisable ? true : false}
            type="submit"
            value="Singup"
          >
            Create list
          </Button>
        </div>
      </form> */}
    </>
  );
};

export default ProductForm;
