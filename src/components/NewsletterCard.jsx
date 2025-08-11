import Button from "./Button";

const NewsletterCard = () => {
  return (
    <div
      className="
        bg-gray-200 shadow-md rounded-xl p-4 
        max-w-lg mx-auto text-center mt-13
        [@media(min-width:768px)_and_(max-width:1023px)]:max-w-2xl
    
      "
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Subscribe to our Newsletter
      </h2>
      <p className="text-gray-600 mb-4">
        Get the latest updates, exclusive offers, and logistics tips directly to your inbox.
      </p>
      <form className="flex flex-col sm:flex-row gap-3 items-center justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          required
        />
        <Button
          type="submit"
          text="Subscribe"
          className="bg-cyan-600 text-white px-6 py-2 rounded-md hover:bg-cyan-700 font-semibold"
        />
      </form>
    </div>
  );
};

export default NewsletterCard;
