
import Card from './Card.jsx'




const cardData = [
    {image: '../assets/Student1.jpg', title: 'Sophia', description:'3rd year Electrical Enginerring student'},
    {image:'../assets/Student3.jpg' , title: 'Jhon', description: "2nd year Management Student"},
    {image: '../assets/Student2.jpg', title: 'Eva', description:"3rd year Nursing student "}

]
function CardList() {
    return (
      <div className="card-list">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    );
  }
  
  export default CardList;