interface SubtitleProps  {
  title: string;
}

export default function Subtitle({title}: SubtitleProps) {
  return(
    <h3 className="m-2 font-bold text-lg">{title}</h3>
  );
}