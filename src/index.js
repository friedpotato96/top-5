import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

// init
    const title = 'The Psychology of Money';
    const author = 'Morgan Housel';
    const img = 'https://m.media-amazon.com/images/I/81Dky+tD+pL._SY466_.jpg'

// javascript boi

const someFunc = (param1, param2) => {
    console.log(param1, param2);
};

someFunc('hello', 'world');


// objects

const firstBook = {
    title: '1. The Psychology of Money',
    author: 'Morgan Housel',
    img: 'https://m.media-amazon.com/images/I/81Dky+tD+pL._SY466_.jpg'
}

const secondBook = {
    title: '2. Too Good to Be True',
    author: 'Prajakta Koli',
    img: 'https://m.media-amazon.com/images/I/81pGO40uexL._SY466_.jpg'
}

const thirdBook = {
    title: '3. Atomic Habits',
    author: 'James Clear',
    img: 'https://m.media-amazon.com/images/I/81F90H7hnML._SY466_.jpg'
}

function BookList() {
    return (
        <section className="bookList">

        <Book
            author={firstBook.author}
            title={firstBook.title}
            img={firstBook.img}
        />
        <Book
            author={secondBook.author}
            title={secondBook.title}
            img={secondBook.img}
        />
        <Book
            author={thirdBook.author}
            title={thirdBook.title}
            img={thirdBook.img}
        />
        </section>

    )
}


const Book = (props) =>  {
    console.log(props);
    return (
        <article className="Book">
            <img src={props.img} alt={props.title} />
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
        </article>
    )
}







const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);
