function PracticeCard({
  image,
  title,
  level,
  lessons
}) {
  return (
    <div className="rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-[#aea584] transition-all duration-300 hover:-translate-y-2
    hover:shadow-2xl hover:border-[#aea584] transition-all duration-300 relative">

      <img
        src={image}
        alt={title}
        className="w-full aspect-[16/9] object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"/>

      <div className="p-6">

        <h3 className="text-xl font-serif">
          {title}
        </h3>

        <div className="flex gap-4 mt-3 text-gray-400 text-sm uppercase tracking-wider text-xs text-gray-400">
          <span>{level}</span>
          <span>•</span>
          <span>{lessons} Lessons</span>
        </div>

      </div>

    </div>
  );
}

export default PracticeCard;