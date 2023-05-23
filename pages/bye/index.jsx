export default function Bye({ data }) {
  console.log('NEXT_PUBLIC_ENV', process.env.NEXT_PUBLIC_TEST);
  console.log('WITHOUT_NEXT_PUBLIC_ENV', process.env.TEST);
  return (
    <div>
      <h1>BYE: {data.name}</h1>
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(`https://test-v0.vercel.app/api/hello`);
  const result = await response.json();

  return {
    props: {
      data: result,
    },
  };
};
