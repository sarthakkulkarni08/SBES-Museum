import OrganismCard from '../OrganismCard'
import butterflyImg from '@assets/generated_images/Blue_morpho_butterfly_specimen_b13e1e60.png'

export default function OrganismCardExample() {
  return (
    <OrganismCard
      id="1"
      commonName="Blue Morpho Butterfly"
      scientificName="Morpho menelaus"
      kingdom="Animalia"
      imageUrl={butterflyImg}
    />
  )
}
