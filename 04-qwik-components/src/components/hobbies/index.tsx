interface HobbiesProps {
  hobbies: string[];
}

export const Hobbies = (props: HobbiesProps) => {
  const hobbies = props.hobbies;
  return (
    <div style='border:4px solid green; padding: 5px'>
      <ul>
        {hobbies.map((value, index) => (
          <li>
            {index + 1} - {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
