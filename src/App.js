import React from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '홍길동',
    'birthday' : '961222',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '박지석',
    'birthday' : '901111',
    'gender' : '남자',
    'job' : '공무원'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '조인기',
    'birthday' : '831222',
    'gender' : '여자',
    'job' : '직장인'
  },
]
 

function App() {
  return (
    <div>
      {
        customers.map (c=> {
          return(
            <Customer 
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birth={c.birthday}
            gender={c.gender}
            job={c.job}
             />
          )
        })
      }
    </div>
  );
}

export default App;