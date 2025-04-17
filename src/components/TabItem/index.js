// Write your code here
import './index.css'

const TabItem = props => {
  const {tab, isActive, onChangeTab} = props
  const {displayText, tabId} = tab

  const onClickTab = () => {
    onChangeTab(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tabs-list">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
