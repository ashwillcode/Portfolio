import { Daisy } from './Daisy';
import { HOBBY_TAGS } from '../../data/story';

export function MarqueeTicker() {
  const items = [...HOBBY_TAGS, ...HOBBY_TAGS, ...HOBBY_TAGS];
  return (
    <div className="h-14 bg-blush overflow-hidden flex items-center">
      <div className="marquee-inner flex items-center">
        {items.map((tag, i) => (
          <span key={i} className="font-oswald font-medium flex items-center gap-3 text-sage text-base uppercase tracking-widest px-4 whitespace-nowrap">
            {tag}
            <Daisy color="#FFFCE7" />
          </span>
        ))}
      </div>
    </div>
  );
}
