import React from 'react';
import PropTypes from 'prop-types';

// jsx = javascript + html

// const foodILike = [
//   {
//     id: 1,
//     name: "Kimchi",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
//     rating: 5
//   },
//   {
//     id: 2,
//     name: "Samgyeopsal",
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
//     rating: 5
//   },
//   {
//     id: 3,
//     name: "Bibimbap",
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//     rating: 4.9
//   },
//   {
//     id: 4,
//     name: "Doncasu",
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
//     rating: 4.3
//   },
//   {
//     id: 5,
//     name: "Kimbap",
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
//     rating: 3.7
//   }
// ];

// props를 매개변수로 받아서 사용
// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h1>I like {name}.</h1>
//       <h3>{rating}/5.0</h3>
//       <img src={picture} alt={name}/>
//     </div>
//   )
// }

// component data Type 체크
// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number
// };

// function component : props 사용
// function App() {
//   return (
//     <div>
//       {foodILike.map(item => (
//         <Food key={item.id} name={item.name} picture={item.image} rating={item.rating} />
//       ))}
//     </div>
//   );
// }

// class component : state 사용 => 데이터가 변화될 때 유용
class App extends React.Component {
  state = {
    count: 0
  }

  // setState를 실행하면 자동으로 render를 실행하면서 값이 refresh됨
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  }

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  }

  render() {
    return (
      <div>
        <h1>Number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
