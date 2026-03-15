import Script from "next/script";

export default function Calendar() {
  return (
    <>
      <div
        className="calendly-inline-widget w-full h-250 sm:280 lg-240 xl:h-220"
        data-url="https://calendly.com/assistantgisjosh/30min-gis-consultation"
      />

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}