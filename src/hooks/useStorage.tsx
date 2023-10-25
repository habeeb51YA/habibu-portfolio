import { useState, useEffect } from "react";
import {
  uploadBytesResumable,
  getDownloadURL,
  UploadTask,
} from "firebase/storage";
import { projectStorage, ref } from "src/services/firebase/config";

export const useStorage = (
  file: Blob | Uint8Array | ArrayBuffer | null,
  fileName: string,
  storageLocation: string
) => {
  const [progress, setProgress] = useState<number | null>(0);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");

  let uploadTask: UploadTask | null;

  if (file) {
    const storageRef = ref(projectStorage, `${storageLocation}/${fileName}`);
    uploadTask = uploadBytesResumable(storageRef, file);
  }

  // runs every time the file value changes
  useEffect(() => {
    if (file && uploadTask) {
      uploadTask.on(
        "state_changed",
        (snapshot: {
          bytesTransferred: number;
          totalBytes: number;
          state: string;
        }) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          setUploading(true);
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setProgress(progress);
        },
        (error: any) => {
          setUploading(false);
          setError(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL((uploadTask as UploadTask).snapshot.ref).then(
            (url: string) => {
              setUrl(url);
              uploadTask?.cancel();
              uploadTask = null;
              setUploading(false);
            }
          );
        }
      );
    }

    return () => {
      if (file && uploadTask) {
        uploadTask.cancel();
        setProgress(null);
        setUploading(false);
        uploadTask = null;
      }
    };
  }, [file]);

  return { progress, url, error, uploading };
};

export const downloadImage = async (gsUrl: string) => {
  try {
    const imageRef = ref(projectStorage, `images/${gsUrl}`);
    const imageUrl = await getDownloadURL(imageRef);
    return imageUrl;
  } catch (error) {
    console.error("Error downloading image:", error);
    return null;
  }
};
// const BackgroundReference = ref(
//   projectStorage,
//   "gs://habibu-portfolio.appspot.com/background1.jpg"
// );

// export const getDownloadUrl = getDownloadURL(BackgroundReference).then(
//   (url) => {
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = "blob";
//     xhr.onload = (event) => {
//       const blob = xhr.response;
//     };
//     xhr.open("GET", url);
//     xhr.send();
//   }
// );
