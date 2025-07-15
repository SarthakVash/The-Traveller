import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // const res = await fetch(`http://localhost:4000/api/posts/${id}`);
        const res = await fetch(`https://the-traveller-backend.onrender.com/api/posts/${id}`);
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error("Failed to load post:", err);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) return <p className="text-center">Loading post...</p>;

  return (
    <div className="container my-5">
      {/* Title */}
      <h1>{post.title}</h1>

      {/* Cover Image */}
      <img src={post.image} alt={post.title} className="img-fluid my-3 rounded" />

      {/* Location */}
      {post.location && (
        <p><strong>📍 Location:</strong> {post.location}</p>
      )}

      {/* Distance & Difficulty */}
      {(post.distance || post.difficulty) && (
        <p>
          <strong>📏 Distance & Difficulty:</strong> {post.distance ? post.distance : '-'} {post.difficulty ? `| Difficulty: ${post.difficulty}` : ''}
        </p>
      )}

      {/* Best Time */}
      {post.bestTime && (
        <p><strong>🕒 Best Time to Go:</strong> {post.bestTime}</p>
      )}

      {/* What to Pack / Tips */}
      {post.tips && (
        <>
          <h4 className="mt-4">🧳 What to Pack / Tips</h4>
          <p>{post.tips}</p>
        </>
      )}

      {/* What to Expect */}
      {post.whatToExpect && (
        <>
          <h4 className="mt-4">🌄 What to Expect</h4>
          <p>{post.whatToExpect}</p>
        </>
      )}

      {/* How to Reach */}
      {post.locationGuide && (
        <>
          <h4 className="mt-4">🧭 How to Reach the Starting Point</h4>
          <p>{post.locationGuide}</p>
        </>
      )}

      {/* Main Content */}
      {post.content && (
        <>
          <h4 className="mt-4">Details</h4>
          <p>{post.content}</p>
        </>
      )}

      {/* Gallery Images */}
      {post.galleryImages && post.galleryImages.length > 0 && (
        <>
          <h4 className="mt-4">🖼 Gallery</h4>
          <div className="row">
            {post.galleryImages.map((img, i) => (
              <div key={i} className="col-md-4 mb-3">
                <img src={img} alt={`Gallery ${i}`} className="img-fluid rounded" />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
