import { IPost } from "@/src/types";
import { Button } from "@heroui/button";
import { Card as NextUiCard, CardHeader, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { format } from "date-fns";

const Card = ({ post } : {post : IPost}) => {
  const {title, category, images, city, dateFound, _id } = post || {};

  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <NextUiCard
        isFooterBlurred
        className="w-[300px] h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex justify-between ">
          <h4 className="text-black font-medium text-2xl">{title}</h4>
          <p className="text-tiny text-white/60 uppercase font-bold text-center text-black">{category.name}</p>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={images[0]}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">{city}</p>
            <p className="text-black text-tiny">{format(new Date(dateFound),"PP")}</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </NextUiCard>
    </div>
  );
};

export default Card;
