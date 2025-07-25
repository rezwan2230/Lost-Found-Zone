"use client";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";
import Image from "next/image";

interface IProps {
  images: string[];
}

const ImageGallery = ({ images }: IProps) => {
  return (
    <LightGallery
      elementClassNames={`mt-2 gap-2 grid place-items-center ${images?.length == 1 ? "grid-cols-1" : "grid-cols-2"}`}
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
    >
      {images?.map((image, index) => (
        <Link
          className={`w-full object-cover ${images.length == 3 && index == 0 ? "col-span-2" : "col-span-1"}`}
          key={index}
          href={image}
        >
          <Image
            className="h-[400px] w-full object-cover"
            src={image}
            height={500}
            width={500}
            alt={`image-${index}`}
          />
        </Link>
      ))}
    </LightGallery>

  );
};

export default ImageGallery;
