import OrganismDetail from '../OrganismDetail'
import butterflyImg from '@assets/generated_images/Blue_morpho_butterfly_specimen_b13e1e60.png'

export default function OrganismDetailExample() {
  return (
    <OrganismDetail
      commonName="Blue Morpho Butterfly"
      scientificName="Morpho menelaus"
      kingdom="Animalia"
      phylum="Arthropoda"
      class="Insecta"
      order="Lepidoptera"
      family="Nymphalidae"
      genus="Morpho"
      species="M. menelaus"
      morphology="Large butterfly with wingspan of 12-20 cm. Wings are iridescent blue on the dorsal side due to microscopic scales that reflect light. Ventral side is brown with eyespots for camouflage. Six legs, segmented body with three main parts."
      physiology="Cold-blooded ectotherm. Open circulatory system with hemolymph. Breathes through spiracles connected to tracheal system. Feeds on rotting fruit using proboscis. Complete metamorphosis lifecycle."
      habitat="Tropical rainforest canopy and forest edges. Prefers areas with abundant fruit trees and flowering plants."
      distribution="Native to Central and South America, including Brazil, Peru, and Colombia. Found in lowland and montane rainforests."
      imageUrl={butterflyImg}
      galleryImages={[butterflyImg, butterflyImg]}
    />
  )
}
