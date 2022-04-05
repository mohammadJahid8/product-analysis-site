import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <div className="qna-container">
                <h3>What is Context API?</h3>
                <p>Context API is a component structure which helps us to provide data to all of our component without props drilling.It made our data sharing more easy.The data of context API is declared globally,for that we can use the data in our required component through useContext hook.</p>
            </div>
            <div className="qna-container">
                <h3>What is Semantic elements?</h3>
                <p>Semantic elements are those that clearly describe what type of content they contain or what role that content plays in the page.This elements are more meaningful than html4 elements.Because, in html4 elements we need to use classes named header, main, nav, footer etc.. but semantic elements made it more easier.It provides us that specific elements like Nav,header,article,section,maimn,footer etc. </p>

            </div>
            <div className="qna-container">
                <h3>What is the difference between inline and inline-block?</h3>
                <p>Inline means the content flows against the layout of the page, it could possibly flow around other floated elements, but essentially it renders like text would. Block means the element renders like a div, on it's own line. Block you can specify a width and height and it always renders as a rectangle. Inline block allows you to combine the ability to contain the element's contents to a rectangle, but have its position against the layout of the page flow like an inline element would. Like its name suggests, it's an inline, block.</p>
            </div>
        </div>
    );
};

export default Blogs;