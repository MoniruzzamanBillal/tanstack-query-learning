import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseGetPosts = () => {
  const {
    data: postsData,
    isLoading: postDataLoading,
    refetch: postDataRefetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      return data?.data;
    },
  });

  return [postsData, postDataLoading, postDataRefetch];
};

export default UseGetPosts;
