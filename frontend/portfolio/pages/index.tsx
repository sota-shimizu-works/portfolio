import Link from 'next/link'
import Layout from '@/components/Layout'
import KeyVisual from '@/components/KeyVisual'
import About from '@/components/About'
import MySkills from '@/components/MySkills'
import Works from '@/components/Works'

const IndexPage = () => (
  <Layout title="Home | Portfolio">
    <KeyVisual />
    <About />
    <MySkills />
    <Works />
  </Layout>
)

export default IndexPage
