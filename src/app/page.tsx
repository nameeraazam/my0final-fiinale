'use client';
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import "slick-carousel/slick/slick.css";
import Banner from "@/components/Banner";
import BannerBottom from "@/components/BannerBottom";
import Feature from "@/components/Feature";
import Mega from "@/components/Mega";
import AuthorCard from "@/components/AuthorCard";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";

export default function Home() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Simulating an API call to fetch the post
    const fetchPost = async () => {
      const response = await fetch("/api/post");  // Replace with your actual API endpoint
      const data = await response.json();
      setPost(data);
    };
    fetchPost();
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <BannerBottom />
      <Feature />
      <Mega />
      {/* Conditionally render BlogCard if post is available */}
      {post && <BlogCard post={post} />}
      <AuthorCard />
      <Footer />
    </>
  );
}
