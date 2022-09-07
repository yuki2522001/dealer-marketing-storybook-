import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import { lazy, Suspense, useContext, useEffect } from "react";

// components
const Banner = lazy(() => import("@components/common/Banner"));
const Navigation = lazy(() => import("@components/common/Navigation"));
const MainSection = lazy(() => import("@sections/MainSection"));
import { Loader } from "@components/common";

// common-types
import { Blog } from "@self-types/blog";

// constants
import { IMAGE } from "@constants/image";

// context
import { BlogContext } from "@context/BlogContext";

// layouts
import Layout from "@layouts/index";
import { BLOGS_URL } from "@constants/url";

interface HomeProps {
  blogs: Blog[];
  errorCode: string;
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await axios.get(BLOGS_URL);
    const blogs = res.data;
    return {
      props: {
        blogs: blogs,
        errorCode: "",
      },
    };
  } catch (errorCode) {
    return {
      props: {
        blogs: [],
        errorCode: errorCode,
      },
    };
  }
};

const Home: NextPage<HomeProps> = ({ blogs, errorCode }) => {
  const { handleUpdateBlogs } = useContext(BlogContext);
  const fetchDataBlog = async () => {
    const data = axios.get(BLOGS_URL);
    console.log("data", data);
  };
  useEffect(() => {
    fetchDataBlog();
    handleUpdateBlogs(errorCode, blogs);
  }, []);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Navigation />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Banner
          url={IMAGE.url}
          text="Expert Automotive Knowledge at Your Fingertips"
        />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <MainSection />
      </Suspense>
    </Layout>
  );
};

export default Home;
