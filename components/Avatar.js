function Avatar() {
  return (
    <img
      loading="lazy"
      className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
      src="/profile_pic.jpg"
      alt="prfl pic"
    />
  );
}

export default Avatar;
// rounded-full cursor-pointer transition duration-150 transform hover:scale-110
