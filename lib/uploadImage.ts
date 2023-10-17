import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "6524e8451995f9f53251",
    ID.unique(),
    file
  );
  return fileUploaded;
};

export default uploadImage;
