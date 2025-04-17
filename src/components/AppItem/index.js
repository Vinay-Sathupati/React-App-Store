// Write your code here
import './index.css'

const AppItem = props => {
  const {apps} = props
  const {appName, imageUrl} = apps

  return (
    <li className="app-item-list">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
