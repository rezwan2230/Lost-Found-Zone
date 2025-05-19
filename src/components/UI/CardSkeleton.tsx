import { Card as NextUiCard, CardHeader, CardFooter } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

const CardSkeleton = () => {
  return (
    <Skeleton>
      <NextUiCard
        isFooterBlurred
        className="w-[300px] h-[300px] col-span-12 sm:col-span-5 rounded-lg"
      >
        <CardHeader className="absolute z-10 top-1 flex justify-between ">
          <h4 className="text-black font-medium text-2xl"></h4>
          <p className="text-tiny text-white/60 uppercase font-bold text-center text-black"></p>
        </CardHeader>

        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny"></p>
            <p className="text-black text-tiny"></p>
          </div>
        </CardFooter>
      </NextUiCard>
    </Skeleton>
  );
};

export default CardSkeleton;
