import './index.css'

const TabItem = props => {
  const {tabItem, isActive, clickActiveTab} = props
  const {tabId, displayText} = tabItem
  const ClassName = isActive ? 'activeTab tab-item' : 'tab-item'

  const onClickTab = () => {
    clickActiveTab(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" className={`${ClassName} `} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
