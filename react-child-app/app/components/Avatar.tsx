interface avatarProps {
  name: string;
  avatarURL: string;
}

export function Avatar({ name, avatarURL }: avatarProps) {
  return (
    <>
      <div className="rounded-xl overflow-hidden hover:scale-105 group-hover:scale-105 transition-all">
        <img src={avatarURL} />
      </div>
      <div>
        <p className="font-medium">{name}</p>
      </div>
    </>
  );
}
