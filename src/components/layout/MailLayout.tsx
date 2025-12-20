import MailContent from "../mail/MailContent";
import DemoMap from "../map/DemoMap";

export default function MailLayout() {
  return (
    <>
      <div className="flex flex-row px-5 sm:px-5 md:px-20 lg:px-40 2xl:px-80 pt-15 pb-25 mt-15 bg-gray-50 gap-5">
        <div className="flex-1">
          <MailContent />
        </div>
        <div className="flex-1">
          <DemoMap />
        </div>
      </div>
    </>
  );
}
