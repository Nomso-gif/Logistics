// I used a reusable component called CountUpNumber. I passed in a target, which is the number I want the count to stop at, and a duration, which defines how long the counting should take — for example, 1000ms means the count should complete in 1 second.

// I used the useEffect hook so that the counting starts automatically when the component mounts — like when the page loads or reloads.

// The count begins at 0, and I use parseInt() to convert the target to an integer, in case it's passed as a string — this ensures the math works correctly.

// I calculate the incrementTime as duration / end, which spreads the count evenly over the set time.

// Then, using setInterval, I update the number at each step. Once the start value becomes strictly equal to the end, I stop the interval using clearInterval() to prevent it from running forever.
<section
  className="relative min-h-[10px] bg-white bg-no-repeat bg-cover bg-center dark:bg-gray-900 py-12 px-6 md:px-12"
  style={{ backgroundImage: `url(${about1})` }}
>
  {/* Semi-transparent overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

  {/* Content should be positioned above the overlay */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 text-left">
    <h1 className="text-6xl font-bold mb-10 text-white font-Poetsen">
      About Nomso
      <br /> Logistics?
    </h1>
    <p className="text-gray-300 text-2xl mb-4 leading-relaxed">
      Reliable. Fast. Global.
    </p>
    <div>
      <a href="#services">
        <Button
          text="Get a Quote"
          className="bg-cyan-600 px-6 py-3 rounded-full hover:bg-cyan-700 font-semibold cursor-pointer"
        />
      </a>
    </div>
  </div>
</section>

