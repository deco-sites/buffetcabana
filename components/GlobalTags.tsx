import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      {/* Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={asset("/favicon-32x32.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={asset("/favicon-16x16.png")}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={asset("/favicon-32x32.png")}
      />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />

      <style
        dangerouslySetInnerHTML={{
          __html: /* CSS */ `       
          @font-face {
            font-family: "Montserrat";
            font-display: swap;
            src: url(${
            asset(
              "/fonts/montserrat/Montserrat-Regular.ttf",
            )
          }) format("truetype");
            font-weight: 400;
            font-style: normal;
          }
          
          @font-face {
            font-family: "Montserrat";
            font-display: swap;
            src: url(${
            asset(
              "/fonts/montserrat/Montserrat-Light.ttf",
            )
          }) format("truetype");
            font-weight: 300;
            font-style: normal;
          }
          
          @font-face {
            font-family: "Montserrat";
            font-display: swap;
            src: url(${
            asset(
              "/fonts/montserrat/Montserrat-LightItalic.ttf",
            )
          }) format("truetype");
            font-weight: 300;
            font-style: italic;
          }

          @font-face {
            font-family: "Montserrat";
            font-display: swap;
            src: url(${
            asset(
              "/fonts/montserrat/Montserrat-Medium.ttf",
            )
          }) format("truetype");
            font-weight: 500;
            font-style: normal;
          }
          
          @font-face {
            font-family: "Montserrat";
            font-display: swap;
            src: url(${
            asset(
              "/fonts/montserrat/Montserrat-SemiBold.ttf",
            )
          }) format("truetype");
            font-weight: 600;
            font-style: normal;
          }

          @font-face {
            font-family: "Montserrat";
            font-display: swap;
            src: url(${
            asset(
              "/fonts/montserrat/Montserrat-Bold.ttf",
            )
          }) format("truetype");
            font-weight: 700;
            font-style: normal;
          }
          `,
        }}
      />
    </Head>
  );
}

export default GlobalTags;
