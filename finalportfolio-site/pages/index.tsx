import Head from 'next/head'
import Image from 'next/image'
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from '../components/layout';
import Profile from "../components/profile";
export default function Home() {
  return (
   <Layout>
    <div className='text-purple-800 flex flex-col gap-6'>
      <Header/>
      <Profile/>
      <Footer/>
    </div>
    </Layout>
  )
}
