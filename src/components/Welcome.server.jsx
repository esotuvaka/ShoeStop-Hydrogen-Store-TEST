/**
 * A server component that displays the content on the homepage of the Hydrogen app
 * Essentially the Hero Area
 */
export default function Welcome() {
  return (
    <>
      <div
        id="Welcome"
        className="left-0 -mt-40  flex h-screen w-full items-center justify-between  sm:px-4 xl:ml-24"
      >
        <div className="xl:-ml-24">
          <h1 className="mt-12 font-['Poppins'] text-6xl font-extrabold text-white hover:cursor-default md:text-9xl">
            Discover
          </h1>
          <p className="mb-5 w-1/2 text-3xl  text-white lg:w-full">
            The new way to shop for shoes
          </p>
        </div>
      </div>
    </>
  );
}
