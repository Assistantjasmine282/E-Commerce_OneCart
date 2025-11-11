// backend/config/cloudinary.js

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// ✅ Initialize Cloudinary config once (globally)
cloudinary.config({
  cloud_name:"dnpvqbw7w",
  api_key:"474786897478495",
  api_secret:"gcO4yDg2jZaU4K1Ia4BV8MhywpM",
});

const uploadOnCloudinary = async (filePath) => {
  try {
    if (!filePath) return null;

    // ✅ Upload file with proper options
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "OneCart_Products",
      resource_type: "image",
    });

    // ✅ Remove file from local "public" folder
    fs.unlinkSync(filePath);
    console.log("Cloudinary Upload Success:", result.url);
    return result.secure_url;

    // ✅ Return the uploaded image URL
    
  } catch (error) {
    console.error("Cloudinary Upload Error:", error.message);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath); // prevent crash
    return null;
  }
};

export default uploadOnCloudinary;
