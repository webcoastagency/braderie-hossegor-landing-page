const i18n = {
  fr: {
    APP_NAME: "Braderie Hossegor",
    APP_DESCRIPTION: "Application mobile officielle de la Braderie d'Hossegor",
    APP_PRICE: "Gratuit",
    APP_KEYWORKDS: ["hossegor", "braderie", "app", "application", "mobile", "carte"],
  },
  en: {
    APP_NAME: "Big Sales Hossegor",
    APP_DESCRIPTION: "Official mobile application of Big Sales in Hossegor",
    APP_PRICE: "Free",
    APP_KEYWORKDS: ["hossegor", "big sales", "sales", "app", "application", "mobile", "map"],
  },
  es: {
    APP_NAME: "Venta Hossegor",
    APP_DESCRIPTION: "Aplicación móvil oficial de la Venta de Hossegor",
    APP_PRICE: "Gratis",
    APP_KEYWORKDS: ["hossegor", "venta", "app", "aplicación", "móvil", "mapa"],
  }
}

const selected_lang = process.env.LANGUAGE || "fr"
console.log("LANG", selected_lang)

module.exports = {
  selected_lang         : selected_lang,

  // App Info
  appstore_link         : "#",                                  // Enter App Store URL.
  playstore_link        : "#",                                  // Enter Google Play Store URL.
  google_analytics_ID   : "UA-150400134-1",                                        // Enter Google Analytics ID or ""
  presskit_download_link: "#",                                  // Enter a link to downloadable file or (e.g. public Dropbox link to a .zip file). 
  video_or_screenshot   : "screenshot",                                           // "screenshot" or "video"
  app_url               : "https://braderie-hossegor.app",                            // Domain of your website without path_prefix.
  path_prefix           : "/",                                                    // Prefixes all links. For cases when deployed to example.github.io/automatic-gatsbyjs-app-landing-page/.
  app_name              : i18n[selected_lang].APP_NAME,
  app_price             : i18n[selected_lang].APP_PRICE,
  app_description       : i18n[selected_lang].APP_DESCRIPTION,
  app_keywords          : i18n[selected_lang].APP_KEYWORKDS,
  app_store_img_name    : i18n[selected_lang].APP_STORE_IMG_NAME,
  play_store_img_name   : i18n[selected_lang].PLAY_STORE_IMG_NAME,

  // Site info
  site_name             : i18n[selected_lang].APP_DESCRIPTION,
  // Personal Info
  your_name              : "Web Coast Agency",
  your_link              : "https://webcoastagency.com",
  your_city              : "Bordeaux",
  email_address          : "contact@webcoastagency.com",
  linkedin_username      : "webcoastagency",
  facebook_username      : "webcoastagency",
  instagram_username     : "webcoastagency",
  twitter_username       : null,
  github_username        : "webcoastagency",
  youtube_username       : null,

  // Features List
  features               : [
    {
      title: "GitHub Pages GatsbyJS Starter",
      description:
        "Designed for GitHub Pages and Netlify. Fork. Edit site-config.js. Upload screenshot/video. Push to gh-pages branch. Voilà!",
      fontawesome_icon_name: "magic",
    },
    {
      title: "iPhone Device Preview",
      description:
        "Preview your app in the context of an iPhone device. Five different device colors included.",
      fontawesome_icon_name: "mobile",
    },
    {
      title: "Video Support",
      description:
        "Preview app video on the iPhone device simply by placing your video files in the videos folder.",
      fontawesome_icon_name: "play-circle",
    },
    {
      title: "Optimized Performance",
      description:
        "No need to worry about page performance or optimizing images and videos. Everything is already configured for the best performance possible!",
      fontawesome_icon_name: "sync",
    },
    {
      title: "Easy to Tweak",
      description:
        "Tweak accent color, images, icons and transparency via the site-config.js file. No HTML/CSS needed.",
      fontawesome_icon_name: "adjust",
    },
    {
      title: "Feature List",
      description:
        "Add features (like this one) to your site via the site-config.js file. No HTML/CSS needed.",
      fontawesome_icon_name: "star",
    },
    {
      title: "Deploy to Netlify",
      description: "Easily deploy your GatsbyJS landing page to Netlify.",
      fontawesome_icon_name: "arrow-alt-circle-down",
    },
    {
      title: "Social Links",
      description:
        "Easily add social media accounts and contact info in the footer via the site-config.js file. No HTML/CSS needed.",
      fontawesome_icon_name: "link",
    },
    {
      title: "FontAwesome Support",
      description:
        "Pick custom Font Awesome icons for the feature list via the site-config.js file. No HTML/CSS needed.",
      fontawesome_icon_name: "info-circle",
    },
  ],
  header_background             : "#ffffff",
  topbar_title_color            : "#28225A",
  cover_overlay_color_rgba      : "rgba(70, 123, 150, 0.6)",
  device_color                  : "white",                          // Set to "black", "blue", "coral", "white", or "yellow"
  body_background_color         : "ffffff",
  primary_text_color            : "#000",
  content_width                 : "1170px",
  font                          : `"Raleway"`,
  link_color                    : "#28225A",
  app_title_color               : "#ffffff",
  app_price_color               : "#ffffff",
  app_description_color         : "#ffffff",
  feature_title_color           : "#000000",
  feature_text_color            : "#666666",
  feature_icons_foreground_color: "#28225A",
  feature_icons_background_color: "#e6e6e6",
  social_icons_foreground_color : "#666666",
  social_icons_background_color : "#e6e6e6",
  footer_text_color             : "#666666",
}