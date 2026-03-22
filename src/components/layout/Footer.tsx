import Calendar from "@/src/features/home/Calendar";
import CalendarInfo from "@/src/features/home/contact/CalendarInfo";

export default function Footer() {
  return (
    <div
      id="footer-section"
      className="flex flex-col px-5 md:px-20 2xl:px-40 pb-10 pt-16 bg-gray-100 border-t border-gray-200 min-h-screen"
    >
      <div className="flex-1 flex flex-col lg:flex-row items-center gap-12 justify-center h-screen">
        <CalendarInfo />
        <Calendar />
      </div>

      <div className="mt-auto text-center text-sm text-gray-500 py-10">
        © 2026 JoshDels. Making Geospatial Simple, Usable and Impactful.
      </div>
    </div>
  );
}
