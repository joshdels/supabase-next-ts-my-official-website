import DemoMap from "../map/DemoMap";

export default function Demo() {
  return (
    <>
      <div className="gap-10 mt-25">
        <h1 className="text-3xl font-bold">Want a Demo?</h1>
        <p className="mt-4 mb-5 text-gray-700 leading-relaxed">
          Browse, download, and upload your spatial data, and see it live on the map!
        </p>
        <DemoMap />
      </div>
    </>
  );
}
