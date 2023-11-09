function Card() {
  return (
    <div className="bg-card p-4 rounded-md cursor-pointer">
      <div className="">
        <img src="/assets/drake.jpg" className=" rounded-lg" />
        {/* Button for play */}
      </div>

      <div className="mt-4">
        <p className="font-bold opacity-90">RapCaviar</p>
        <p className="mt-2 opacity-40">
          New music from Turbo and Gunna, NAV and...
        </p>
      </div>
    </div>
  );
}

export default Card;
