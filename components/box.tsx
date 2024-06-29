function Box() {
  return (
    <div>
      {/* Boxes */}
      <div className="grid grid-cols-3 gap-20 ">
        <div className="border border-black bg-green-200 mt-14 p-28  h-10 items-center justify-center flex flex-col">
          <p>Lorem ipsum</p>
          <h1 className="text-7xl font-semibold">03</h1>
        </div>
        <div className="border border-black bg-pink-200 mt-14 p-28  h-10 items-center justify-center flex flex-col">
          <p>Lorem ipsum</p>
          <h1 className="text-7xl font-semibold">11</h1>
        </div>
        <div className="border border-black bg-orange-200 mt-14 p-28  h-10 items-center justify-center flex flex-col">
          <p>Lorem ipsum</p>
          <h1 className="text-7xl font-semibold">52</h1>
        </div>
      </div>
    </div>
  );
}

export default Box;
