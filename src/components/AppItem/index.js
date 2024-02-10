// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="li-container">
      <img src={imageUrl} className="logo" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
