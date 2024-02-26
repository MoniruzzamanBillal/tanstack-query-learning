import { useState } from "react";
import UseGetPosts from "../Hooks/UseGetPosts";
import useAddPost from "../Hooks/UseAddPost";

const Home = () => {
  const [title, setTitle] = useState(null);
  const [postsData, postDataLoading, postDataRefetch] = UseGetPosts();
  const [addPostMutateAsync] = useAddPost(title);

  const handleNewTitle = async () => {
    await addPostMutateAsync(title);
    postDataRefetch();
  };

  if (postDataLoading) {
    return (
      <div className="loadingContainer h-screen flex justify-center items-center ">
        <p className="  text-4xl font-semibold  ">Loading....</p>
      </div>
    );
  }

  return (
    <div>
      {/* new posts add section starts  */}
      <div className="addNew flex flex-col justify-center items-center ">
        <input
          placeholder=" Enter title  "
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className=" outline-none py-2 px-3 my-3 bg-gray-100 border border-gray-200                                    "
        />

        <button
          className=" py-2 px-4 bg-sky-500 rounded text-gray-50 font-medium hover:scale-105 active:scale-100  "
          onClick={() => handleNewTitle()}
        >
          Add post
        </button>
      </div>
      {/* new posts add section ends  */}

      <div className="postDataContainer">
        {postsData &&
          postsData.map((data, ind) => (
            <p
              key={ind}
              className=" bg-sky-300 my-2 text-xl w-[50%] m-auto font-medium "
            >
              title : {data?.title}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Home;
