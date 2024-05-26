import Card from "./components/Card";

function App() {
  return (
    <>
      <Card
        img="https://media.istockphoto.com/id/452794623/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5-%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%BC%D0%BE%D1%82%D0%BE%D1%86%D0%B8%D0%BA%D0%BB.jpg?s=1024x1024&w=is&k=20&c=wzJ8_EGZk0H7kTeh-4Qa6aG9ssEcp2wZOph4nXzEmOs="
        h="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        buttonlink={{
          text: "Go Somewhere",
          link: "https://americamotors.ru/catalog/all/motorcycles?type_id=4&status[0]=all",
        }}
      />
      <Card
        h="Special title treatment"
        text="With supporting text below as a natural lead-in additional content."
        buttonlink={{
          text: "Go Somewhere",
          link: "https://americamotors.ru/catalog/all/motorcycles?type_id=4&status[0]=all",
        }}
      />
    </>
  );
}

export default App;