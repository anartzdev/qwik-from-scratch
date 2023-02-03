interface TitleProps {
  greetingText: string;
  name: string;
}
export const Title = (props: TitleProps) => {
  return (
    <div style="border:2px solid red; padding: 5px">
      <h1 style="color:blue;font-size:46px;">
        {props.greetingText} {props.name}
      </h1>
    </div> 
  );
};
