import Filtering from "@/src/components/modules/found-items/Filtering";
import Container from "@/src/components/UI/Container";
import Post from "@/src/components/UI/Post";
import axiosInstance from "@/src/lib/AxiosInstance";
import { IPost } from "@/src/types";

export default async function FoundItems({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const params = await searchParams;
  const query = params.query || "";

  const searchTerm = decodeURIComponent(query.replace(/\+/g, " "));

  const { data } = await axiosInstance.get(`/items`, {
    params: { searchTerm },
  });

  return (
    <Container>
      <Filtering />
      <div className="mx-auto my-3 max-w-[720px]">
        {data?.data?.map((post: IPost) => <Post key={post?._id} post={post} />)}
      </div>
    </Container>
  );
}
