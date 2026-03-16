import Hero from 'components/sections/Hero'
import BentoGrid from 'components/sections/BentoGrid'
import Divider from 'components/ui/Divider'
import AboutSection from 'components/sections/AboutSection'
import Compass from 'components/ui/Compass'
// import Emoji from 'components/sections/Emoji'
import Banner from 'components/ui/Banner'

export default function Landing() {
  return(
    <>
    <Banner/>
    <Hero
    title="Understand Your Mind"
    subtitle="and Emotions Better"
    description="Explore and reflect on your mental and emotional 
    well-being—private, self-guided, and educational space."
    button="Get Started"
    link="/assessment"
    />
    {/* <Emoji/> */}
    <Divider/>
    <BentoGrid/>
    <Divider/>
    <AboutSection/>
    <Divider/>
    <Compass/>
    <Hero
    title="Let's Start Your"
    subtitle="Wellness Journey"
    description="Come explore a safe space made for you well-being"
    button="Sign Up"
    link="/create-profile"  
    />
    </>
  )
}