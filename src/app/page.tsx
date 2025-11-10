"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Bed, Calendar, Crown, Facebook, Gift, HelpCircle, Heart, Instagram, Leaf, MapPin, MessageCircle, Phone, Sparkles, Star, Trophy, Twitter, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="small"
      background="animatedAurora"
      cardStyle="glass-flat"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://pixabay.com/get/g7de26ebfd97a860090113b684f27bcfb3eec1093662bc5a5f9e13e7a9343c337449481212fbcbe837c52f1dbe7c513ca0b062a71f2c0a944bd4740caeae1b918_1280.jpg"
          logoAlt="Grandview Hotel"
          brandName="Grandview Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Grandview Hotel"
          description="Experience unparalleled luxury and exceptional service in the heart of the city"
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Amenities",
              href: "feature"
            }
          ]}
          imageSrc="https://pixabay.com/get/g8ca1c85a1200c80dd5b27ecb20803001184ddcff096f608c77579b472f1e0e7810e787ce2b80d401f88e435422dab8949d97666658241c4a831e74a4877a4423_1280.jpg"
          imageAlt="Grandview Hotel exterior view"
          showDimOverlay={false}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Where Luxury Meets Excellence"
          description="For over three decades, Grandview Hotel has been the epitome of refined hospitality, offering discerning guests an extraordinary blend of timeless elegance and modern sophistication."
          tag="Our Legacy"
          tagIcon={Crown}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Award-Winning Service",
              description: "Recognized internationally for our exceptional guest experience and attention to detail",
              icon: Award
            },
            {
              title: "Prime Location",
              description: "Situated in the city's most prestigious district with easy access to cultural attractions",
              icon: MapPin
            },
            {
              title: "Sustainable Luxury",
              description: "Committed to environmental responsibility while maintaining the highest standards",
              icon: Leaf
            }
          ]}
          imageSrc="https://pixabay.com/get/g43251e6ff5291ffd75162bf05fdcf51c3bbfe9896cf3b53f8cc2b820dbe3ede06345557573012fb9436f38ca08a89cade90b72b2bf4edb428eff5ac167f7371f_1280.jpg"
          imageAlt="Grandview Hotel elegant lobby"
          imagePosition="right"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Exceptional Amenities"
          description="Discover world-class facilities designed to exceed your expectations"
          tag="Luxury Services"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              id: "01",
              title: "Infinity Pool & Terrace",
              description: "Relax in our stunning rooftop infinity pool with panoramic city views and premium poolside service",
              imageSrc: "https://pixabay.com/get/g2f4e1eaccc878b71307923afc40d5063a41120f0fdcb4d472b1b0ae48ec5045b73d9d05a0bb13fb706945b97b0eacf47f25b4b888932a2e758ccdb90e1d0512a_1280.jpg",
              imageAlt: "Rooftop infinity pool"
            },
            {
              id: "02",
              title: "Serenity Spa & Wellness",
              description: "Rejuvenate your mind and body in our award-winning spa featuring holistic treatments and therapies",
              imageSrc: "https://pixabay.com/get/g884e2ce5c4b2979ab971c68ea1017eb96c1feaa6ae670fbd7c47cc1a01bbe8717cc26905b37ebd932f1cefa0092d1544a4c0ec106123ba70e645d484b6763bd0_1280.jpg",
              imageAlt: "Luxury spa treatment room"
            },
            {
              id: "03",
              title: "Michelin-Star Dining",
              description: "Savor culinary masterpieces crafted by renowned chefs using the finest local and international ingredients",
              imageSrc: "https://pixabay.com/get/g35c80eee5a72ce59651a3626818ed8f4a8a105643dafa110bf0b1610c0a87628f7a64623e832f79b106dab34acf6c79a15915fa23a291cb4f76cb2b8cc6cc005_1280.jpg",
              imageAlt: "Fine dining restaurant"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Luxury Accommodations"
          description="Choose from our collection of meticulously designed rooms and suites"
          tag="Premium Rooms"
          tagIcon={Bed}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          products={[
            {
              id: "premium-suite",
              name: "Presidential Suite",
              price: "$850/night",
              imageSrc: "https://pixabay.com/get/gcfce7f74ece5e536f19624fc32c3c1a071419ff4eed16dec3aa7b9e3af24f6a96371228dc1a0b95d2d808e379ad8db9a448ec15e159d8aaf98577367e0c29e23_1280.jpg",
              imageAlt: "Presidential suite interior"
            },
            {
              id: "deluxe-room",
              name: "Deluxe Room",
              price: "$450/night",
              imageSrc: "https://pixabay.com/get/g095482e3398d6e6c02c73930c4a9cdafbf730310e168c9550ed80883d0579f14cd4d1fef3f79b0f9ce43f6433deaafc77694c989269ded67bbb567f7159fa84b_1280.jpg",
              imageAlt: "Deluxe room interior"
            },
            {
              id: "ocean-view",
              name: "Ocean View Suite",
              price: "$650/night",
              imageSrc: "https://pixabay.com/get/g73b46e97fdeffc7655e7cc41d634c60543b7a3cf70fc5b1ce3fe7ddee08cc1d9926de5960e8d2b51ffa8c530c5fc84c529c0fd5ac9e3e2a3421cb7e1e8e3902a_1280.jpg",
              imageAlt: "Ocean view suite"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Experience Packages"
          description="Curated experiences designed to create unforgettable memories"
          tag="Special Offers"
          tagIcon={Gift}
          textboxLayout="default"
          animationType="blur-reveal"
          plans={[
            {
              id: "romantic",
              name: "Romantic Getaway",
              price: "$1,200",
              features: [
                "2 nights in Ocean View Suite",
                "Couples spa treatment",
                "Private dining experience",
                "Champagne welcome"
              ],
              buttons: [
                {
                  text: "Book Package",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ]
            },
            {
              id: "business",
              badge: "Most Popular",
              badgeIcon: Star,
              name: "Business Executive",
              price: "$850",
              features: [
                "3 nights in Premium Suite",
                "Executive lounge access",
                "Airport transfers",
                "Business center access"
              ],
              buttons: [
                {
                  text: "Book Package",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ]
            },
            {
              id: "family",
              name: "Family Retreat",
              price: "$1,500",
              features: [
                "4 nights in connecting rooms",
                "Kids club activities",
                "Family dining packages",
                "Pool and spa access"
              ],
              buttons: [
                {
                  text: "Book Package",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Excellence in Numbers"
          description="Discover what makes Grandview Hotel a world-class destination"
          tag="Our Achievements"
          tagIcon={Trophy}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          metrics={[
            {
              id: "1",
              value: "98%",
              title: "satisfaction",
              description: "Guest satisfaction rating based on international reviews",
              icon: Heart
            },
            {
              id: "2",
              value: "35+",
              title: "years",
              description: "Decades of exceptional hospitality and service excellence",
              icon: Calendar
            },
            {
              id: "3",
              value: "150+",
              title: "awards",
              description: "International recognition for luxury hospitality standards",
              icon: Award
            },
            {
              id: "4",
              value: "50K+",
              title: "guests",
              description: "Distinguished guests welcomed annually from around the world",
              icon: Users
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Guest Experiences"
          description="Hear from our valued guests about their unforgettable stays"
          tag="Testimonials"
          tagIcon={MessageCircle}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "CEO",
              company: "Tech Innovations Inc",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g6c3be0bd200c83417c19e153874ccf91c28df1a6eb7e54e6145459fda155661caa0a08d19348d7136c52851e0b5844a4be229036f0907fb394e31269e8edadea_1280.png",
              imageAlt: "Sarah Mitchell portrait"
            },
            {
              id: "2",
              name: "James Rodriguez",
              role: "Investment Director",
              company: "Capital Partners",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g4b021cb80c2d2b11eb64e559699a9a744186189bb39301858bdeb1c965dc3849ede5151b6d51c9e4137a7e85fca98643490af2d6bdec68416b4b60ff119e2a66_1280.jpg",
              imageAlt: "James Rodriguez portrait"
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Creative Director",
              company: "Design Studio",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gb7a116d8b69821d0d70b460ac24ab35bbbe4a8f725dd405f303f592d7cd6de1793d101b06bed565acbcd2a6f2a83b9bf32016f97367dd427dec37ea00643b3d5_1280.jpg",
              imageAlt: "Emma Thompson portrait"
            },
            {
              id: "4",
              name: "Michael Chen",
              role: "Entrepreneur",
              company: "Global Ventures",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g55aae8ec4cf1df9d83ede4f4021ee73b117ed9a487d26cfe8c81ca40ac0c0bf2ece9e9c7c6adbf94fda7c257f0e92f9e91b3a6cde1d92cea521bd3a235d22342_1280.jpg",
              imageAlt: "Michael Chen portrait"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay at Grandview Hotel"
          tag="Guest Information"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What are your check-in and check-out times?",
              content: "Check-in is available from 3:00 PM and check-out is until 12:00 PM. Early check-in and late check-out can be arranged upon request, subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary luxury airport transfers for all suite guests and paid transfer services for other room categories. Please contact our concierge to arrange your transportation."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "We offer three world-class dining venues: our Michelin-starred fine dining restaurant, casual poolside dining, and 24-hour room service featuring gourmet cuisine."
            },
            {
              id: "4",
              title: "Is there a spa and fitness center?",
              content: "Our award-winning Serenity Spa offers comprehensive wellness treatments, and our state-of-the-art fitness center is available 24/7 for all guests."
            },
            {
              id: "5",
              title: "What is your cancellation policy?",
              content: "Cancellations made 48 hours before arrival are free of charge. Cancellations made within 48 hours are subject to a one-night charge. Special packages may have different terms."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Book Your Luxury Experience"
          description="Contact our reservations team to secure your stay at Grandview Hotel and discover unparalleled hospitality."
          tagIcon={Phone}
          inputPlaceholder="Enter your email"
          buttonText="Request Booking"
          termsText="By requesting a booking, you agree to our Terms and Conditions. Our team will contact you within 24 hours."
          imageSrc="https://pixabay.com/get/g3bbb7facc5cceb5df508b25aa0425df22ab7b8d216fcddb927afe8aba9a4ca76acfb7aa46fb2fdd5c1d66f6dd01dfd8a414d19e1146f6fc5715b147ae95daa68_1280.jpg"
          imageAlt="Hotel concierge service"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Grandview Hotel"
          copyrightText="© 2025 Grandview Hotel. All rights reserved."
          columns={[
            {
              title: "Hotel",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Amenities",
                  href: "feature"
                },
                {
                  label: "Accommodations",
                  href: "product"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Spa & Wellness",
                  href: "feature"
                },
                {
                  label: "Dining",
                  href: "feature"
                },
                {
                  label: "Business Center",
                  href: "about"
                }
              ]
            },
            {
              title: "Policies",
              items: [
                {
                  label: "Privacy Policy",
                  href: "https://example.com/privacy"
                },
                {
                  label: "Terms of Service",
                  href: "https://example.com/terms"
                },
                {
                  label: "Cancellation",
                  href: "faq"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com/grandviewhotel",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/grandviewhotel",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/grandviewhotel",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}