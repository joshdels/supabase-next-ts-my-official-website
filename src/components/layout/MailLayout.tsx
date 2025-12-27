import MailContent from "../../features/mail/MailContent";
import DemoMap from "@/src/features/map/MailMap";

export default function MailLayout() {
  return (
    <>
      <div className="flex flex-col xl:flex-row px-5 sm:px-5 md:px-20 lg:px-20 2xl:px-40 pt-10 pb-14 mt-15 bg-gray-50 gap-10">
        <div className="flex-1">
          <DemoMap />
        </div>
        <div className="flex-1">
          <MailContent />
        </div>
      </div>
    </>
  );
}
  