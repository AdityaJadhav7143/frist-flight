
import ReactDOM from 'react-dom/client';
import App from "./app";

const studentName = Math.random() ;

function AwesomeButton()
{
    return(
        <>
        <button>click here!</button>
        </>
    )
}

function userCard()
{
    return(
        <>
        <h3>hii i am user card</h3>
        <h4>i love java script</h4>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
              <h1>frist flight {studentName} ✈️ </h1>
              <h1>frist flight {70+73} ✈️ </h1>
              {AwesomeButton()}

              {userCard()} {userCard()}

              {App()}

           </>);


