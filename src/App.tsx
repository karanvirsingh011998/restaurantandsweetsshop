import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import Navbar from './components/Navbar';
import MenuItem from './components/MenuItem';
import TestimonialCard from './components/TestimonialCard';

function App() {
  const menuItems = [
    {
      name: 'Gulab Jamun',
      description: 'Soft, sweet dumplings soaked in aromatic sugar syrup',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800',
      price: '₹150',
    },
    {
      name: 'Butter Chicken',
      description: 'Tender chicken in rich, creamy tomato sauce',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800',
      price: '₹350',
    },
    {
      name: 'Rasmalai',
      description: 'Soft cottage cheese dumplings in sweet, creamy milk',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800',
      price: '₹200',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      rating: 5,
      comment: 'The sweets here are absolutely divine! The Gulab Jamun melts in your mouth.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Rahul Verma',
      rating: 5,
      comment: 'Best North Indian cuisine in the city. The Butter Chicken is outstanding!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Anjali Patel',
      rating: 4,
      comment: 'Amazing variety of sweets and excellent service. A must-visit!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section id="home" className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80&w=2000"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Delighting Taste Buds Since 1975
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Experience the authentic flavors of India
          </p>
          {/* <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors flex items-center mx-auto">
            Order Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button> */}
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000"
                alt="Restaurant"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">A Legacy of Taste</h3>
              <p className="text-gray-600 mb-6">
                Since 1975, Sweets and Restaurant has been serving authentic Indian sweets and 
                delicacies to our cherished customers. What started as a small sweet shop has grown 
                into one of the city's most beloved culinary destinations.
              </p>
              <p className="text-gray-600">
                Our commitment to quality ingredients, traditional recipes, and exceptional service 
                has made us a household name. Every dish we serve carries the warmth of Indian 
                hospitality and the rich heritage of our culinary traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Items</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-orange-600 mr-3" />
                  <p>182/56, Industrial Area Phase 1, Chandigarh, 160002</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-orange-600 mr-3" />
                  <p>+91 84373 33427</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-orange-600 mr-3" />
                  <p>karanvir011998@gmail.com</p>
                </div>
              </div>
              <div className="mt-8 flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-orange-600">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-600">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-600">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Sweets</h4>
              <p className="text-sm">
                Bringing the authentic taste of Indian cuisine to your plate since 1975.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-orange-500">Home</a></li>
                <li><a href="#about" className="hover:text-orange-500">About</a></li>
                <li><a href="#menu" className="hover:text-orange-500">Menu</a></li>
                <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Opening Hours</h4>
              <ul className="space-y-2">
                <li>Monday - Friday: 9:00 AM - 10:00 PM</li>
                <li>Saturday - Sunday: 10:00 AM - 11:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Sweets. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;