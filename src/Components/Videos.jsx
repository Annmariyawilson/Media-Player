import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";
import {
  getVideos,
  deleteVideo,
  getCategory,
  updateCategory,
} from "../Services/AllApis";

function Videos({ add }) {
    
  const [videos, setVideos] = useState([]);
  const [delResponse, setDelResponse] = useState("");

  useEffect(() => {
    getData();
  }, [add, delResponse]);

  const getData = async () => {
    const res = await getVideos();
    if (res.status === 200) {
      setVideos(res.data);
    } else {
      console.log("Fetch error:", res);
    }
  };

  const handleDelete = async (id, videoObj) => {
    try {
      const res = await deleteVideo(id);
      if (res.status === 200) {
        const catRes = await getCategory();
        if (catRes.status === 200) {
          const categories = catRes.data;
          for (let cat of categories) {
            const newVideos = cat.videos.filter(
              (v) => v.videoId !== videoObj.videoId
            );
            if (newVideos.length !== cat.videos.length) {
              await updateCategory(cat.id, { ...cat, videos: newVideos });
            }
          }
        }

        setDelResponse(id); // trigger re-render
      } else {
        console.log("Delete failed:", res);
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="border border-3 shadow p-5 mb-3">
      {videos.length > 0 ? (
        <Row>
          {videos.map((vid) => (
            <Col key={vid._id || vid.id || vid.videoId}>
              <VideoCard video={vid} deleteVideo={handleDelete} />
            </Col>
          ))}
        </Row>
      ) : (
        <h2 className="text-center text-danger">No Videos Available</h2>
      )}
    </div>
  );
}

export default Videos;
