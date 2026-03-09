const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-between px-20 py-6">
        <div className="flex flex-col gap-2.5">
          <div className="font-medium text-xl">Company</div>
          <div className="text-gray-700">About Us</div>
          <div className="text-gray-700">Careers</div>
          <div className="text-gray-700">Blog</div>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="font-medium text-xl">Explore</div>
          <div className="text-gray-700">Restaurants</div>
          <div className="text-gray-700">Offers</div>
          <div className="text-gray-700">Cuisines</div>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="font-medium text-xl">Support</div>
          <div className="text-gray-700">Help Center</div>
          <div className="text-gray-700">Track Order</div>
          <div className="text-gray-700">FAQs</div>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="font-medium text-xl">Legal</div>
          <div className="text-gray-700">Privacy Policy</div>
          <div className="text-gray-700">Terms</div>
          <div className="text-gray-700">Refund Policy</div>
        </div>
      </div>
      <div className="flex justify-center pb-2 text-gray-500">© {new Date().getFullYear()} Cravely. All rights reserved.</div>
    </div>
  );
};

export default Footer;
