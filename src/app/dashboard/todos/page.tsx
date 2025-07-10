async function fetchAllData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return await res.json();
}

const TodosPage = async () => {
  const todos = await fetchAllData();
  return (
    <>
      <div className="text-4xl">I am a todosPage</div>
      <pre>{JSON.stringify(todos)}</pre>
    </>
  );
};

export default TodosPage;
