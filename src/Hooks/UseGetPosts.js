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
      const data = await axios.get("http://localhost:5000/api/posts");

      return data?.data?.data;
    },
  });

  return [postsData, postDataLoading, postDataRefetch];
};

export default UseGetPosts;
