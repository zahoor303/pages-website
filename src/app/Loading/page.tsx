const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white mb-4"></div>
        <h2 className="text-2xl font-semibold text-white">Loading...</h2>
      </div>
    </div>
  );
};

export default Loading;
