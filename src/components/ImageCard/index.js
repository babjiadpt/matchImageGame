import './index.css'

const ImageCard = props => {
  const {imageItem, onClickImageMatch} = props

  const onClickImage = () => {
    onClickImageMatch(imageItem.thumbnailUrl)
  }

  return (
    <li className="list-item">
      <button type="button" className="image-button" onClick={onClickImage}>
        <img
          src={imageItem.thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default ImageCard
