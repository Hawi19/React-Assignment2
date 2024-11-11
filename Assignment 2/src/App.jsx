import CardList from './CardList.jsx'
import './App.css'

function App() {
  const cardData = [
    {image: '../assets/Student1.jpg', title: 'Sophia', description:'3rd year Electrical Engineering student'},
    {image:'../assets/Student3.jpg' , title: 'Jhon', description: "2nd year Management Student"},
    {image: '../assets/Student2.jpg', title: 'Eva', description:"3rd year Nursing student "},
    {image: '../assets/Student4.jpg', title: 'James', description:"4rd year Economics student "},
    {image: '../assets/Student5.jpg', title: 'Olivia', description:"5th year Medicine student "},
    {image: '../assets/Student6.jpg', title: 'Noah', description:"3rd year Computer Science student "},
    {image: '../assets/Student7.jpg', title: 'Lucas', description:"5th year Dental medicine student "},
    {image: '../assets/Student8.jpg', title: 'Mia', description:"3rd year Accounting student "},


]
  return (
    <div className="app">
      <h1 className="app-title">Students Id Card Collection</h1>
      <CardList data={cardData }/>
    </div>

  )

}

export default App
