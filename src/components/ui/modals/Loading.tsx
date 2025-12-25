export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-md">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-10 w-10 rounded-full border-4 border-gray-300 border-t-gray-800 animate-spin" />

        {/* Text */}
        <p className="text-sm text-gray-600 tracking-wide">
          Loading<span className="animate-pulse">…</span>
        </p>
      </div>
    </div>
  );
}
