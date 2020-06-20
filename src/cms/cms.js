import CMS from "netlify-cms-app";

//import uploadcare from "netlify-cms-media-library-uploadcare";
//import cloudinary from "netlify-cms-media-library-cloudinary";

import HomePagePreview from "./preview-templates/HomePagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ArticlePreview from "./preview-templates/ArticlePreview";
import PricingPagePreview from "./preview-templates/PricingPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";

//CMS.registerMediaLibrary(uploadcare);
//CMS.registerMediaLibrary(cloudinary);

CMS.init();
CMS.registerPreviewStyle("/admin/editor.css");
CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("pricing", PricingPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
CMS.registerPreviewTemplate("blog", ArticlePreview);
