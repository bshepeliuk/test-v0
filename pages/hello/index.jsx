export default function Hello({ data }) {
  return (
    <div>
      <h1>HELLO: {data.name}</h1>
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/hello');
  const result = await response.json();

  return {
    props: {
      data: result,
    },
  };
};
