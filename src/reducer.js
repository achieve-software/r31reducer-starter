export const initialState = {
  loading: false,
  catImage: "",
  error: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, loading: true };

    case "SUCCESS":
      return {
        ...state,
        loading: true,
        error: false,
        catImage: action.payload,
      };

    case "FAİL":
      return {
        ...state,
        loading: false,
        error: action.payload,
        catImage:"",
      };

    default:
      break;
  }
};
