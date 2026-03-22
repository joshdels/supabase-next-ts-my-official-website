import Script from "next/script";

export default function Calendar() {
  return (
    <>
      <div
        className="calendly-inline-widget w-full h-screen"
        data-url="https://calendly.com/assistantgisjosh/utilty-mapping-consultation"
      />

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
