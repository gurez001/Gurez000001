import { UPDATE_ORDER_FAIL } from "../constants/OrderConstants";
import {
  IMAGE_REQUEST,
  IMAGE_SUCCESS,
  IMAGE_FAIL,
  IMAGE_CLEAR,
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAIL,
  UPDATE_IMAGE_RESET,
  UPDATE_IMAGE_SUCCESS,
  UPDATE_IMAGE_REQUEST,
  SET_SELECTED_IMAGE,
  UPLOAD_IMAGE_RESET,
  SET_SELECTED_IMAGE_RESET,
  UPDATE_TEXT_REQUEST,
  UPDATE_TEXT_SUCCESS,
  UPDATE_TEXT_FAIL,
  UPDATE_TEXT_RESET,
} from "../constants/imageGelleryCartConstants";

export const getAllImageReducer = (state = { images: [] }, action) => {
  switch (action.type) {
    case IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
        images: [],
      };
    case IMAGE_SUCCESS:
      return {
        loading: false,
        images: action.payload.images,
        imageCount: action.payload.imageCount,
        resultPerPage: action.payload.resultPerpage,
      };
    case IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case IMAGE_CLEAR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const imageUploadReducer = (state = { }, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
        images: [],
      };
    case UPLOAD_IMAGE_SUCCESS:
      return {
        loading: false,
        images: action.payload,
      };
    case UPLOAD_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case UPLOAD_IMAGE_RESET:
        return {
          ...state,
          loading: false,
          images: null,
        };
  
    case IMAGE_CLEAR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};




export const imageUpdateReducer = (state = { }, action) => {
  switch (action.type) {
      case UPDATE_IMAGE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_IMAGE_SUCCESS:
        return {
          loading: false,
          isUpdate: action.payload,
        };
      case UPDATE_ORDER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case UPDATE_IMAGE_RESET:
        return {
          ...state,
          loading: false,
          isUpdate: false,
        };
  
        case IMAGE_CLEAR:
        return {
          ...state,
          error: null,
        };

    default:
      return state;
  }
};



export const imageTextUpdateReducer = (state = { }, action) => {
  switch (action.type) {
      case UPDATE_TEXT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_TEXT_SUCCESS:
        return {
          loading: false,
          isUpdate: action.payload,
        };

        case UPDATE_TEXT_FAIL:
          return {
            loading: false,
            isUpdate: action.payload,
          };

          case UPDATE_TEXT_RESET:
            return {
              loading: false,
              isUpdate: null,
            };
     
        case IMAGE_CLEAR:
        return {
          ...state,
          error: null,
        };

    default:
      return state;
  }
};


export const selectImageeReducer = (state = { }, action) => {
  switch (action.type) {
    case SET_SELECTED_IMAGE:
      return {
        ...state,
        selectedImage: action.payload,
      };
      case SET_SELECTED_IMAGE_RESET:
        return {
          ...state,
          selectedImage: null,
        };
   
    default:
      return state;
  }
};
