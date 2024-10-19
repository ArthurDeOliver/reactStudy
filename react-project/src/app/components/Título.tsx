interface TituloPropsType {
  name?: string;
  text: string;
}

export function Título({ name, text }: TituloPropsType) {
  // console.log(name);
  return (
    <h1 className="text-5xl text-blue-100">
      {text} {name}
    </h1>
  );
}
