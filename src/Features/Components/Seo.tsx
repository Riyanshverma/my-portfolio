import { Helmet } from "react-helmet-async";
import { type SeoProp } from "@/Types/types";

const Seo = ({ title, description, path = "/", image = "https://res.cloudinary.com/cloudywork/image/upload/w_1200,h_630,c_fill,g_auto/v1769270261/yodo_ezlexy.png" }: SeoProp) => {
  const url = `https://riyansh-portfolio-five.vercel.app${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
