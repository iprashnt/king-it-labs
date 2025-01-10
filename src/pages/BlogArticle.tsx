// COMPONENTS
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import WrapperLayout from "../components/WrapperLayout";
import ArticleHeading from "../components/BlogArticle/ArticleHeading";
import ArticleContent from "../components/BlogArticle/ArticleContent";
import SimilarArticles from "../components/BlogArticle/SimilarArticles";
import Breadcrumb from "../components/BlogArticle/Breadcrumb";

const BlogArticle = () => {
    return (
        <Layout>
            <Navbar />
            <WrapperLayout>
                <Breadcrumb text1="Blogs" text2="5 Efficient Rules How to Organize Your Working Place" />
                <ArticleHeading />
                <ArticleContent />
                <SimilarArticles />
            </WrapperLayout>
            <Footer />
        </Layout>
    );
};

export default BlogArticle;
