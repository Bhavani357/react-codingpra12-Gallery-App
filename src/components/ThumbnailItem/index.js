import './index.css'

const ThumbnailItem = props => {
  const {thumbNailDetails, onImageChange, isActive} = props

  const toggleClassName = isActive ? 'button' : 'buttonOpacity'

  const {
    id,

    thumbnailUrl,

    thumbnailAltText,
  } = thumbNailDetails

  const onChangeImage = () => {
    onImageChange(id)
  }

  return (
    <li className="li-element">
      <button type="button" onClick={onChangeImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={toggleClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
