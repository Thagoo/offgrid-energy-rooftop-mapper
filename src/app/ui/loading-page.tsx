export default function LoadingPage() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-hidden h-dvh w-screen flex justify-center items-center z-50">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-yellow-100" />
    </div>
  );
}
