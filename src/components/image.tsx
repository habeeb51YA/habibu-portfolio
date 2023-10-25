import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ref, getDownloadURL } from "firebase/storage";
import { projectStorage } from "@/services/firebase/config";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface IImage {
  className?: string;
  src?: string | StaticImport;
  alt?: string | any;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  imageName?: string | StaticImport | any;
}
export const ImageComponent: React.FC<IImage> = ({
  className,
  src,
  alt,
  width,
  height,
  imageName,
}) => {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageRef = ref(projectStorage, `images/${imageName}`); // Update the path to your image
        const url = await getDownloadURL(imageRef);
        setImageURL(url as any);
      } catch (error) {
        console.error("Error downloading image:", error);
        setImageURL(null);
      }
    };

    fetchImage();
  }, [imageName]);
  return (
    <div>
      <div>
        {imageURL && (
          <Image alt={alt} width={width} height={height} src={imageName} />
        )}
      </div>
    </div>
  );
};
