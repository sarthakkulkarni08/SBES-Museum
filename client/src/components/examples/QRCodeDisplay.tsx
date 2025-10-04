import QRCodeDisplay from '../QRCodeDisplay'

export default function QRCodeDisplayExample() {
  return (
    <QRCodeDisplay
      value="https://museum.example.com/organism/1"
      organismName="Blue Morpho Butterfly"
    />
  )
}
