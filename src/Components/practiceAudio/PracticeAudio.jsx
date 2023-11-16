const songs = [
  {
    name: "woh raat",
    song: new Audio("/assets/woh_raat.mp3"),
  },
];
function PracticeAudio() {
  function handlePlay() {
    console.log(songs[0].song);
    songs[0].song.play();
  }
  function handlePause() {
    songs[0].song.pause();
  }
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <button
        className="bg-green-400 px-4 py-3 rounded-full"
        onClick={handlePlay}
      >
        Play
      </button>

      <button
        className="bg-green-400 px-4 py-3 rounded-full"
        onClick={handlePause}
      >
        pause
      </button>
    </div>
  );
}

export default PracticeAudio;
