import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ( props ) => { 
  const [image, setImage] = useState(null); 
  

  const removeBg = async (image) => {
    try {
      // Implement your background removal logic here
      // For example, you could send the image to a serverless function
      // or use a client-side library to remove the background

      console.log("Removing background for:", image); 
      // ... your background removal logic ...

    } catch (error) {
      console.error(error); 
      // Assuming you have a toast library installed
      // toast.error(error.message); 
    }
  };

  const value = {
    image,
    setImage,
    removeBg,
  };

  return (
  <AppContext.Provider value={value}>{props.children}
  </AppContext.Provider>
  )
};

export default AppContextProvider;