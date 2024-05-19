import { useState } from "react";
import { send } from "../assets";
import NavHeader from "../Components/NavHeader";
import Comment from "../Components/Comment";

const Komunitas = () => {
  const [comments, setComments] = useState([
    {
      author: "Rina",
      content: "Halo, Apakah Anda memiliki pengalaman dalam mengadopsi kucing?",
      timestamp: "2 hours ago",
    },
    {
      author: "Reni",
      content:
        "Saya punya pengalaman mengadopsi kucing yang menyenangkan. Memberi rumah bagi kucing yang butuh sungguh memuaskan dan membuat saya bahagia.",
      timestamp: "1 hour ago",
    },
    {
      author: "Roni",
      content:
        "Apa yang membuat Anda memilih adopsi sebagai opsi untuk mendapatkan kucing?",
      timestamp: "30 minutes ago",
    },
    {
      author: "Rini",
      content:
        "Saya ingin mencoba adopsi kucing. Apa yang membuat Anda memilih adopsi sebagai opsi untuk mendapatkan kucing?",
      timestamp: "10 minutes ago",
    },
    {
      author: "Rini",
      content: "Apakah kamu suka kucing ini?",

      timestamp: "10 minutes ago",
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [newImage, setNewImage] = useState(null);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setNewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const newCommentObj = {
        author: "Current User",
        content: newComment,
        timestamp: "Just now",
        image: newImage,
      };
      setComments([newCommentObj, ...comments]);
      setNewComment("");
      setNewImage(null);
    }
  };

  return (
    <>
      <NavHeader
        nav="Komunitas"
        page="Beranda"
        pagenav1=">"
        page2="Detail Kucing"
      />
      <div className="max-w-4xl mx-auto py-10">
        <div className="space-y-4 ">
          {comments.map((comment, index) => (
            <Comment
              key={index}
              author={comment.author}
              content={comment.content}
              timestamp={comment.timestamp}
            />
          ))}
        </div>
      </div>

      {/* Comment Input Section */}
      <div className="flex items-center justify-center p-6 rounded-lg space-x-4  mb-6">
        <textarea
          className="flex h-24 w-3/6 p-4  border bg-greyLighter rounded-lg focus:outline-none focus:border-cyan"
          placeholder="Tuliskan komentar..."
          // value={newComment}
          // onChange={handleCommentChange}
        ></textarea>
        <div className="">
          {/* <label
            htmlFor="upload-photo"
            className="flex items-center cursor-pointer"
          > */}
          <div className="">
            {/* <input
              id="upload-photo"
              type="file"
              className="hidden" */}
            {/* // accept="image/*" // onChange={handleImageChange} */}
            {/* {newImage && (
              <img
                src={newImage}
                alt="Preview"
                className="w-10 h-10 object-cover rounded-full"
              />
            )} */}
            {/* </label> */}
            <button
              // onClick={handleAddComment}
              className="flex items-center justify-center px-4 w-24 h-24 bg-violet rounded-lg shadow  text-white font-bold font-Inter"
            >
              <img src={send} alt="post" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Komunitas;
