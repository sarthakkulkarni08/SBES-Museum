import QRScanner from '../QRScanner'

export default function QRScannerExample() {
  const handleScan = (result: string) => {
    console.log('QR Code scanned:', result)
  }
  
  return <QRScanner onScan={handleScan} />
}
