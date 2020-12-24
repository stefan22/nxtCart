import Link from 'next/link';
import './styles.scss';

export default function Contact() {
  return (
    <div className="contact">
      <h2 className="contact__title">
        Got questions? 
        <span className="colored">Contact us</span>
      </h2>
     
  
      <Link href="https://donpio.tech">
        <button className="contact__button">Contact Us</button>
      </Link>
      
    </div>
  )
}