// Write your code here
import {useState} from 'react'
import './index.css'

const Welcome = () => {
  const [clicked, setClicked] = useState(false)

  const buttonEl = () => {
    setClicked(prevState => !prevState)
  }

  const Text = clicked ? 'Subscribed' : 'Subscribe'

  return (
    <div className="BgImg">
      <h1 className="headingEl">Welcome</h1>
      <p className="paragraphEl">Thank you!Happy Learning</p>
      <div>
        <button onClick={buttonEl} type="button">
          {Text}
        </button>
      </div>
    </div>
  )
}

export default Welcome
