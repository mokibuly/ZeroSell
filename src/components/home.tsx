import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  ChevronDown,
  Bell,
  MessageSquare,
  User,
  Plus,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";
import CategoryNavigation from "./CategoryNavigation";
import ProductListingCard from "./ProductListingCard";

const Home = () => {
  // Mock data for featured listings
  const featuredListings = [
    {
      id: "1",
      title: "iPhone 13 Pro Max - Excellent Condition",
      price: 65000,
      location: "Mumbai, Maharashtra",
      postedDate: "2 days ago",
      imageUrl:
        "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400&q=80",
    },
    {
      id: "2",
      title: "Royal Enfield Classic 350 - 2020 Model",
      price: 145000,
      location: "Delhi, Delhi",
      postedDate: "1 week ago",
      imageUrl:
        "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=400&q=80",
    },
    {
      id: "3",
      title: "Sofa Set - 3+1+1 - Almost New",
      price: 25000,
      location: "Bangalore, Karnataka",
      postedDate: "3 days ago",
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    },
    {
      id: "4",
      title: "Sony PlayStation 5 with 2 Controllers",
      price: 42000,
      location: "Hyderabad, Telangana",
      postedDate: "Today",
      imageUrl:
        "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&q=80",
    },
    {
      id: "5",
      title: 'MacBook Pro 16" 2021 - M1 Pro',
      price: 175000,
      location: "Pune, Maharashtra",
      postedDate: "5 days ago",
      imageUrl:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
    },
    {
      id: "6",
      title: 'Samsung 55" 4K Smart TV',
      price: 48000,
      location: "Chennai, Tamil Nadu",
      postedDate: "1 day ago",
      imageUrl:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80",
    },
    {
      id: "7",
      title: "Hero Splendor Plus - 2019",
      price: 55000,
      location: "Kolkata, West Bengal",
      postedDate: "2 weeks ago",
      imageUrl:
        "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=400&q=80",
    },
    {
      id: "8",
      title: "Study Table with Chair",
      price: 8500,
      location: "Ahmedabad, Gujarat",
      postedDate: "4 days ago",
      imageUrl:
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&q=80",
    },
  ];

  // Mock price range state
  const [priceRange, setPriceRange] = React.useState<number[]>([0, 200000]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-primary">
              ZeroSell
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 mx-6 relative">
              <div className="flex w-full max-w-3xl">
                <Input
                  placeholder="Find Cars, Mobile Phones and more..."
                  className="rounded-r-none border-r-0"
                />
                <Button variant="default" className="rounded-l-none">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden md:flex items-center">
                <Bell className="h-5 w-5 mr-1" />
                <span>Notifications</span>
              </Button>

              <Button variant="ghost" className="hidden md:flex items-center">
                <MessageSquare className="h-5 w-5 mr-1" />
                <span>Messages</span>
              </Button>

              <Button variant="ghost" className="flex items-center">
                <User className="h-5 w-5 mr-1" />
                <span className="hidden md:inline">Login/Signup</span>
              </Button>

              <Button className="bg-primary hover:bg-primary/90 text-white flex items-center">
                <Plus className="h-4 w-4 mr-1" />
                <span className="hidden md:inline">Post Ad</span>
                <span className="md:hidden">Post</span>
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-3">
            <div className="flex w-full">
              <Input
                placeholder="Find Cars, Mobile Phones and more..."
                className="rounded-r-none border-r-0"
              />
              <Button variant="default" className="rounded-l-none">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <section className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <CategoryNavigation />
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Filters */}
        <section className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-sm font-medium mb-2">Location</h3>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                <Select defaultValue="all-india">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-india">All India</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-sm font-medium mb-2">Price Range</h3>
              <div className="px-2">
                <Slider
                  defaultValue={[0, 200000]}
                  max={200000}
                  step={1000}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="my-4"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>₹{priceRange[0].toLocaleString()}</span>
                  <span>₹{priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="flex-none">
              <Button className="w-full md:w-auto">Apply Filters</Button>
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Featured Listings</h2>
            <Button variant="outline" className="text-sm">
              View All <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredListings.map((listing) => (
              <ProductListingCard
                key={listing.id}
                id={listing.id}
                title={listing.title}
                price={listing.price}
                location={listing.location}
                postedDate={listing.postedDate}
                imageUrl={listing.imageUrl}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-10 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">ZeroSell</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    ZeroSell People
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Help</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    Safety Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    Posting Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-primary">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div className="mt-6">
                <h4 className="font-medium mb-2">Download our App</h4>
                <div className="flex space-x-2">
                  <a href="#" className="block">
                    <img
                      src="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=120&q=80"
                      alt="App Store"
                      className="h-10"
                    />
                  </a>
                  <a href="#" className="block">
                    <img
                      src="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=120&q=80"
                      alt="Google Play"
                      className="h-10"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} ZeroSell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
