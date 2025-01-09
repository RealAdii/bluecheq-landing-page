import { MapPin, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0000EE] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Use Cases */}
          {/* <div className="space-y-4">
            <h3 className="text-sm font-medium mb-6">Use Cases</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-white text-sm">Personal finances</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Lending</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Wealth</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Pay by bank</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Digital banking</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Business finances</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Crypto</a></li>
            </ul>
          </div> */}

          {/* Developers */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium mb-6">Developers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-white text-sm">Quickstart</a></li>
              <li><a href="https://docs.reclaimprotocol.org/" className="text-white hover:text-white text-sm">SDK documentation</a></li>
              <li><a href="https://github.com/reclaimprotocol" className="text-white hover:text-white text-sm">GitHub</a></li>
              <li><a href="https://demo.reclaimprotocol.org" className="text-white hover:text-white text-sm">Link Demo</a></li>
            </ul>
          </div>

          {/* About us */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium mb-6">About us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-white text-sm">Company</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Legal</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Contact</a></li>
              {/* <li><a href="#" className="text-white hover:text-white text-sm">Partners</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Press</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Safety</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Legal</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Why Plaid</a></li> */}
            </ul>
          </div>

          {/* Resources */}
          {/* <div className="space-y-4">
            <h3 className="text-sm font-medium mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-white text-sm">Pricing</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Global coverage</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Plaid Blog</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Industry resources</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Annual conference</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Customer stories</a></li>
            </ul>
          </div> */}

          {/* For consumers */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium mb-6">For consumers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-white text-sm">How it works</a></li>
              {/* <li><a href="#" className="text-white hover:text-white text-sm">Discover apps</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Trouble connecting?</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Portal</a></li>
              <li><a href="#" className="text-white hover:text-white text-sm">Delete my data</a></li> */}
              <li><a href="https://reclaimprotocol.notion.site/Privacy-Policy-Reclaim-Protocol-115275b816cb80ab94b8ca8616673658?pvs=4" className="text-white hover:text-white text-sm">Privacy Policy</a></li>
              <li><a href="https://reclaimprotocol.notion.site/Terms-of-Service-Reclaim-Protocol-13c275b816cb80b1a5ade76c6f2532dd?pvs=4" className="text-white hover:text-white text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">United States</span>
          </div>
          <div className="text-sm">© 2025 BlueCheq.</div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;