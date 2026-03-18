import Divider from "components/ui/Divider";
import {CircleAlert} from "lucide-react";

export default function Footer() {

  return (   
  <>
  <Divider/>
  <footer className="flex justify-center items-center w-full bg-base-100 rounded-2xl">
    <footer className="footer sm:footer-horizontal text-base-content p-10 flex justify-between max-w-4xl">
    <nav>
      <h6 className="footer-title">PLATFORM</h6>
      <a className="link link-hover">Articles</a>
      <a className="link link-hover">Assessments</a>
      <a className="link link-hover">Referral</a>
      <a className="link link-hover">Wellness</a>
    </nav>
    <nav>
      <h6 className="footer-title">RESOURCES</h6>
      <a className="link link-hover">Hotlines</a>
      <a className="link link-hover">Privacy</a>
      <a className="link link-hover">Terms</a>
      <a className="link link-hover">Disclaimer</a>
    </nav>
    <nav>
      <h6 className="footer-title">ABOUT</h6>
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Partnership</a>
    </nav>
  </footer>
  </footer>

    <div className="max-w-[820px] mx-auto">
      <Divider/>
    </div>

    <footer className="footer footer-center p-4 bg-base-100 text-base-content rounded-2xl">
      <aside className="text-xs">
        <img src="/logo.svg" alt="Logo" className="h-6 w-auto"/>
        <p>Copyright © 2025 - {new Date().getFullYear()} | All rights reserved</p>
        <p>For individuals 18 years old and above only</p>
      </aside>
    </footer>
    <div className="w-full max-w-4xl mx-auto pb-6 px-4 mt-4 text-center">
      <p className="text-xs text-neutral/70">
        <CircleAlert size={16} className="inline-block text-warning mr-2 mb-0.5" />
        Compass is for educational use only and not a substitute for professional mental health 
        advice or treatment. If in crisis, please contact a licensed professional or local hotline immediately.
      </p>
    </div>
  </>
  )
}