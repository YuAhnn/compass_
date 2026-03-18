import Hero from '@components/section/Hero'
import BentoGrid from '@components/section/BentoGrid'
import Divider from '@components/ui/Divider'
import AboutSection from '@components/section/AboutSection'
import Compass from '@components/ui/Compass'
// import Emoji from '@components/sections/Emoji'
import Banner from '@components/ui/Banner'
import Fly from '@components/ui/Fly'

export default function Landing() {
  return(
    <>
    <Fly/>
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