import React from "react"


import './App.css'

const list = [
  ['The greatest glory in living lies not in never falling, but in rising every time we fall.',
    'Nelson Mandela'],
  ['The way to get started is to quit talking and begin doing.',
    'Walt Disney'],
  ["Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    "Steve Jobs"],
  ["If life were predictable it would cease to be life, and be without flavor.",
    "Eleanor Roosevelt"],
  ["If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    " Oprah Winfrey"],
  ["If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "James Cameron"],
  ["Life is what happens when you're busy making other plans.",
    "John Lennon"],
  ["Spread love everywhere you go. Let no one ever come to you without leaving happier.", "Mother Teresa"],
  ["When you reach the end of your rope, tie a knot in it and hang on.",
    "Franklin D. Roosevelt"],
  ["Always remember that you are absolutely unique.Just like everyone else.",
    "Margaret Mead"],
  ["Don't judge each day by the harvest you reap but by the seeds that you plant.",
    "Robert Louis Stevenson"],
  ["The future belongs to those who believe in the beauty of their dreams.",
    "Eleanor Roosevelt"],
  ["Tell me and I forget.Teach me and I remember.Involve me and I learn.",
    "Benjamin Franklin"],
  ["The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    "Helen Keller"],
  ["It is during our darkest moments that we must focus to see the light.",
    "Aristotle"],
  ["Whoever is happy will make others happy too.",
    "Anne Frank"]
]


function pickColor () {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
}

function changeQuote () {
  return Math.floor(Math.random() * 16)
}


function SonF (props) {
  //props is an object that store all parent's data
  console.log(props)

  function handleChange () {
    props.changeQuote()
  }

  function handleTweet () {
    props.makeTweet()
  }

  return (
    <div>
      <div className="card" id="quote-box">
        <blockquote className="blockquote mb-0">
          <span style={{ color: props.color }} id="text">
            <p>"{props.msg}"</p></span>
          <br />
          <footer className="blockquote-footer" id="author">{props.author}
          </footer>
        </blockquote>
        <br />
        <div className="row">
          <div className="col-9" >
            <button className="button"
              style={{ background: props.color }}
              onClick={handleChange}
              id="new-quote"> New Quote!</button>
          </div>
          <div className="col-3">
            <a type="button" className="button-sm float-right"
              style={{ background: props.color }}
              href={`https://twitter.com/intent/tweet?text=${props.msg}--${props.author} `} target="_top"
              id="tweet-quote">
              Tweet!</a>
          </div>
        </div>
      </div >
    </div >
  )
}





//root component
class App extends React.Component {
  state = {
    message: 'Life itself is the most wonderful fairy tale.',
    author: 'Hans Christian Andersen',
    color: '#0E6655'

  }

  makeChange = () => {
    console.log('Change happen!')
    const temp = pickColor()
    //.let newColor = "'" + temp + "'"
    console.log(temp)
    const quotePick = changeQuote()

    this.setState({
      message: list[quotePick][0],
      author: list[quotePick][1],
      color: temp
    })
  }

  makeTweet = () => {
    // href={`https://twitter.com/intent/tweet?text=${props.quoteText}--${props.quoteAuthor}`}>Tweet</a>

    const msg = this.state.message
    const author = this.state.author

    const url = "https://twitter.com/intent/tweet?text=" + msg + "--" + author
    window.open(url, "_blank")
  }
  render () {
    return (
      <>
        <div className="container-fluid min-vh-100 min-vw-100 d-flex flex-coloumn justify-content-center align-items-center ts-1000"
          style={{ background: this.state.color }}>
          <div className="box">
            <SonF
              msg={this.state.message}
              author={this.state.author}
              color={this.state.color}
              changeQuote={this.makeChange}
              makeTweet={this.makeTweet}
            />
          </div>
        </div>
      </>
    )
  }
}

export default App


