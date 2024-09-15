const Welcome = (prop) => {
  console.log(prop);
  return (
    <h1>
      {prop.data.userName}님 안녕하세요, 당신은 {prop.data.age}세구나.
    </h1>
  );
};

export default Welcome;
