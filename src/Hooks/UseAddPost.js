import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useAddPost = (title) => {
  const { mutateAsync: addPostMutateAsync } = useMutation({
    mutationFn: async () => {
      await axios.post("http://localhost:5000/api/post/add", { title: title });
    },
  });

  return [addPostMutateAsync];
};

export default useAddPost;
