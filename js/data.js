// ============================================
// Iksafar Travel - Data File
// All website data stored here
// ============================================

const IKSafarData = {
    // Company Information
    company: {
        name: "Iksafar Travel",
        phone: "8882911056",
        email: "info@iksafar.travel",
        address: "B 1/6, Ganesh Nagar, Delhi 110045",
        established: "2015",
        description: "Authentic travel experiences across India. We create memorable journeys with passion and expertise.",
        social: {
            facebook: "https://facebook.com/iksafar",
            instagram: "https://instagram.com/iksafar",
            youtube: "https://youtube.com/iksafar",
            twitter: "https://twitter.com/iksafar"
        }
    },
    
    // All Travel Packages
    packages: [
        {
            id: 1,
            name: "Kashmir Great Lakes Trek",
            slug: "kashmir-great-lakes-trek",
            region: "North",
            duration: "7 Days",
            price: 24999,
            rating: 4.8,
            reviews: 128,
            image: "assets/images/packages/north/kashmir.jpg",
            gallery: [
                "assets/images/packages/north/kashmir-1.jpg",
                "assets/images/packages/north/kashmir-2.jpg",
                "assets/images/packages/north/kashmir-3.jpg"
            ],
            description: "Experience the pristine beauty of Kashmir's alpine lakes and meadows with this unforgettable trek.",
            longDescription: "The Kashmir Great Lakes Trek is one of the most spectacular treks in the Himalayas. You'll traverse through lush meadows, cross crystal-clear streams, and camp beside stunning alpine lakes. This trek offers a perfect blend of adventure and natural beauty.",
            inclusions: [
                "Accommodation in camps/hotels",
                "All meals (breakfast, lunch, dinner)",
                "Professional trekking guide",
                "Transport from Srinagar",
                "Trekking permits and fees",
                "First aid kit and emergency support"
            ],
            exclusions: [
                "Flights to/from Srinagar",
                "Personal travel insurance",
                "Personal expenses (snacks, drinks, souvenirs)",
                "Tips and gratuities",
                "Any additional activities not mentioned"
            ],
            itinerary: [
                { day: 1, title: "Arrival in Srinagar", description: "Check-in at houseboat on Dal Lake. Evening shikara ride." },
                { day: 2, title: "Drive to Sonamarg", description: "Drive to Sonamarg, start trek to Nichnai Pass." },
                { day: 3, title: "Trek to Vishansar Lake", description: "Trek through meadows to the beautiful Vishansar Lake." },
                { day: 4, title: "Trek to Kishansar Lake", description: "Cross Gadsar Pass, visit Kishansar Lake." },
                { day: 5, title: "Trek to Gadsar Lake", description: "Descend to the stunning Gadsar Lake with emerald waters." },
                { day: 6, title: "Trek to Gangabal Lake", description: "Trek to Gangabal Lake, one of the most sacred lakes." },
                { day: 7, title: "Return to Srinagar", description: "Trek back to Sonamarg, drive to Srinagar. Departure." }
            ],
            availableDates: [
                "2026-06-15",
                "2026-07-01",
                "2026-07-15",
                "2026-08-01",
                "2026-08-15"
            ],
            tags: ["Adventure", "Trekking", "Mountains", "Nature"],
            difficulty: "Moderate",
            groupSize: "8-12 people"
        },
        {
            id: 2,
            name: "Golden Triangle Tour",
            slug: "golden-triangle-tour",
            region: "North",
            duration: "5 Days",
            price: 18500,
            rating: 4.6,
            reviews: 95,
            image: "assets/images/packages/north/golden-triangle.jpg",
            description: "Explore Delhi, Agra & Jaipur - the heart of India's rich cultural heritage.",
            longDescription: "The Golden Triangle is India's most popular tourist circuit. This tour takes you through three iconic cities - Delhi, Agra, and Jaipur - each offering a unique blend of history, culture, and architecture.",
            inclusions: [
                "Hotel accommodation (3-star/4-star)",
                "Daily breakfast and dinner",
                "Professional English-speaking guide",
                "Air-conditioned transport",
                "Monument entry fees",
                "Rickshaw ride in Delhi"
            ],
            exclusions: [
                "International/domestic flights",
                "Personal expenses",
                "Tips and gratuities",
                "Travel insurance"
            ],
            itinerary: [
                { day: 1, title: "Delhi Sightseeing", description: "Visit Red Fort, Qutub Minar, India Gate, and Lotus Temple." },
                { day: 2, title: "Drive to Agra", description: "Visit Taj Mahal at sunset and Agra Fort." },
                { day: 3, title: "Drive to Jaipur", description: "Visit Fatehpur Sikri enroute to Jaipur." },
                { day: 4, title: "Jaipur City Tour", description: "Visit Amber Fort, City Palace, Jantar Mantar, Hawa Mahal." },
                { day: 5, title: "Return to Delhi", description: "Drive back to Delhi. Departure." }
            ],
            availableDates: [
                "2026-05-10",
                "2026-05-25",
                "2026-06-10",
                "2026-06-25"
            ],
            tags: ["Heritage", "Culture", "Family", "History"],
            difficulty: "Easy",
            groupSize: "2-15 people"
        },
        {
            id: 3,
            name: "Kerala Backwaters & Munnar",
            slug: "kerala-backwaters-munnar",
            region: "South",
            duration: "6 Days",
            price: 22500,
            rating: 4.9,
            reviews: 156,
            image: "assets/images/packages/south/kerala.jpg",
            description: "Houseboat cruise, tea gardens & tranquil backwaters of God's Own Country.",
            longDescription: "Experience the magic of Kerala - from the misty hills of Munnar to the serene backwaters of Alleppey. This package offers the perfect combination of nature, culture, and relaxation.",
            inclusions: [
                "Hotel accommodation",
                "Houseboat stay (1 night)",
                "All meals on houseboat",
                "Tea estate visit",
                "Professional guide",
                "Transport"
            ],
            exclusions: [
                "Flights",
                "Personal expenses",
                "Tips and gratuities"
            ],
            itinerary: [
                { day: 1, title: "Arrival in Kochi", description: "Explore Fort Kochi, Chinese fishing nets, and Jewish synagogue." },
                { day: 2, title: "Drive to Munnar", description: "Scenic drive to Munnar. Visit tea gardens." },
                { day: 3, title: "Munnar Sightseeing", description: "Visit Eravikulam National Park, Mattupetty Dam, and Echo Point." },
                { day: 4, title: "Drive to Alleppey", description: "Check-in to houseboat for backwater cruise." },
                { day: 5, title: "Backwater Cruise", description: "Sail through the backwaters, enjoy Kerala cuisine." },
                { day: 6, title: "Departure", description: "Drive to Kochi. Departure." }
            ],
            availableDates: [
                "2026-08-01",
                "2026-08-15",
                "2026-09-01",
                "2026-09-15"
            ],
            tags: ["Romance", "Nature", "Water", "Honeymoon"],
            difficulty: "Easy",
            groupSize: "2-12 people"
        },
        {
            id: 4,
            name: "Rajasthan Desert Safari",
            slug: "rajasthan-desert-safari",
            region: "West",
            duration: "6 Days",
            price: 19900,
            rating: 4.7,
            reviews: 112,
            image: "assets/images/packages/west/rajasthan.jpg",
            description: "Camel safaris, desert camps & royal forts of Rajasthan.",
            longDescription: "Step into the land of kings and experience the magic of the Thar Desert. This tour takes you through the golden cities of Jaisalmer and Jodhpur, with camel safaris and nights under the stars.",
            inclusions: [
                "Desert camp accommodation",
                "Camel safari",
                "All meals",
                "Professional guide",
                "Transport"
            ],
            exclusions: [
                "Flights",
                "Personal expenses",
                "Travel insurance"
            ],
            itinerary: [
                { day: 1, title: "Arrival in Jaisalmer", description: "Visit the Golden Fort and explore the old city." },
                { day: 2, title: "Jaisalmer Old City", description: "Explore Patwon ki Haveli and Salim Singh ki Haveli." },
                { day: 3, title: "Desert Safari", description: "Camel ride to desert camp, cultural evening." },
                { day: 4, title: "Drive to Jodhpur", description: "Visit Mehrangarh Fort and Jaswant Thada." },
                { day: 5, title: "Jodhpur Sightseeing", description: "Explore the blue city, clock tower, and local markets." },
                { day: 6, title: "Departure", description: "Departure from Jodhpur." }
            ],
            availableDates: [
                "2026-10-01",
                "2026-10-15",
                "2026-11-01",
                "2026-11-15"
            ],
            tags: ["Adventure", "Desert", "Heritage", "Culture"],
            difficulty: "Easy to Moderate",
            groupSize: "4-15 people"
        },
        {
            id: 5,
            name: "Sundarbans Wildlife Tour",
            slug: "sundarbans-wildlife-tour",
            region: "East",
            duration: "5 Days",
            price: 21200,
            rating: 4.5,
            reviews: 78,
            image: "assets/images/packages/east/sundarbans.jpg",
            description: "Mangrove forests, Royal Bengal tigers & river cruises.",
            longDescription: "Explore the largest mangrove forest in the world and the habitat of the Royal Bengal Tiger. This unique wildlife experience takes you deep into the heart of the Sundarbans.",
            inclusions: [
                "Boat safari",
                "Accommodation",
                "All meals",
                "Naturalist guide",
                "Transport"
            ],
            exclusions: [
                "Flights",
                "Personal expenses",
                "Travel insurance"
            ],
            itinerary: [
                { day: 1, title: "Arrival in Kolkata", description: "Kolkata city tour and cultural evening." },
                { day: 2, title: "Drive to Sundarbans", description: "Drive to Sundarbans, check-in to boat." },
                { day: 3, title: "Boat Safari", description: "Explore the mangrove forests and spot wildlife." },
                { day: 4, title: "Village Visit", description: "Visit local villages and experience their unique culture." },
                { day: 5, title: "Return to Kolkata", description: "Drive back to Kolkata. Departure." }
            ],
            availableDates: [
                "2026-12-01",
                "2026-12-15",
                "2027-01-01",
                "2027-01-15"
            ],
            tags: ["Wildlife", "Adventure", "Nature", "Unique"],
            difficulty: "Moderate",
            groupSize: "6-12 people"
        },
        {
            id: 6,
            name: "Tamil Nadu Temple Trail",
            slug: "tamil-nadu-temple-trail",
            region: "South",
            duration: "6 Days",
            price: 17800,
            rating: 4.4,
            reviews: 67,
            image: "assets/images/packages/south/tamilnadu.jpg",
            description: "Dravidian architecture, silk sarees & coastal temples.",
            longDescription: "Discover the rich temple heritage of Tamil Nadu, from the Shore Temple of Mahabalipuram to the majestic Meenakshi Temple of Madurai.",
            inclusions: [
                "Hotel accommodation",
                "Daily breakfast",
                "Professional guide",
                "Transport",
                "Temple entry fees"
            ],
            exclusions: [
                "Flights",
                "Personal expenses",
                "Tips and gratuities"
            ],
            itinerary: [
                { day: 1, title: "Chennai Arrival", description: "Explore Marina Beach and Kapaleeshwarar Temple." },
                { day: 2, title: "Mahabalipuram", description: "Visit Shore Temple, Pancha Rathas, and Arjuna's Penance." },
                { day: 3, title: "Pondicherry", description: "Explore the French Quarter and Auroville." },
                { day: 4, title: "Thanjavur", description: "Visit Brihadeeswarar Temple and Thanjavur Palace." },
                { day: 5, title: "Madurai", description: "Experience the Meenakshi Temple and Thirumalai Nayak Palace." },
                { day: 6, title: "Departure", description: "Drive to Madurai airport. Departure." }
            ],
            availableDates: [
                "2026-11-01",
                "2026-11-15",
                "2026-12-01",
                "2026-12-15"
            ],
            tags: ["Heritage", "Culture", "Temples", "History"],
            difficulty: "Easy",
            groupSize: "2-12 people"
        },
        {
            id: 7,
            name: "Meghalaya Living Root Bridges",
            slug: "meghalaya-living-root-bridges",
            region: "North East",
            duration: "7 Days",
            price: 26700,
            rating: 4.9,
            reviews: 89,
            image: "assets/images/packages/northeast/meghalaya.jpg",
            description: "Living root bridges, waterfalls & Khasi village life.",
            longDescription: "Experience the incredible living root bridges of Meghalaya, created by the Khasi tribes. This off-the-beaten-path adventure takes you through some of the most beautiful landscapes in India.",
            inclusions: [
                "Accommodation",
                "All meals",
                "Professional guide",
                "Transport",
                "Permits and fees"
            ],
            exclusions: [
                "Flights",
                "Personal expenses",
                "Travel insurance"
            ],
            itinerary: [
                { day: 1, title: "Guwahati Arrival", description: "Visit Kamakhya Temple and explore the city." },
                { day: 2, title: "Drive to Shillong", description: "Drive to Shillong, the 'Scotland of the East'." },
                { day: 3, title: "Cherrapunji", description: "Explore the wettest place on Earth, visit waterfalls." },
                { day: 4, title: "Living Root Bridge", description: "Trek to the famous double-decker living root bridge." },
                { day: 5, title: "Mawlynnong", description: "Visit Asia's cleanest village." },
                { day: 6, title: "Return to Guwahati", description: "Drive back to Guwahati, evening at leisure." },
                { day: 7, title: "Departure", description: "Departure from Guwahati." }
            ],
            availableDates: [
                "2026-09-01",
                "2026-09-15",
                "2026-10-01",
                "2026-10-15"
            ],
            tags: ["Adventure", "Nature", "Culture", "Unique"],
            difficulty: "Moderate to Difficult",
            groupSize: "4-10 people"
        },
        {
            id: 8,
            name: "Goa Beach & Party",
            slug: "goa-beach-party",
            region: "West",
            duration: "4 Days",
            price: 15900,
            rating: 4.3,
            reviews: 145,
            image: "assets/images/packages/west/goa.jpg",
            description: "Sun, sand, sea & nightlife - the perfect Goa getaway.",
            longDescription: "Experience the best of Goa - from sun-kissed beaches and water sports to vibrant nightlife and delicious seafood.",
            inclusions: [
                "Beach resort accommodation",
                "Daily breakfast",
                "Water sports activities",
                "Party tour",
                "Transport"
            ],
            exclusions: [
                "Flights",
                "Personal expenses",
                "Alcoholic drinks"
            ],
            itinerary: [
                { day: 1, title: "Arrival in Goa", description: "Check-in to beach resort. Explore the nearby beach." },
                { day: 2, title: "North Goa", description: "Visit Baga, Calangute, and Anjuna beaches. Water sports." },
                { day: 3, title: "South Goa", description: "Explore Palolem, Agonda beaches. Sunset cruise." },
                { day: 4, title: "Departure", description: "Leisure time. Departure from Goa." }
            ],
            availableDates: [
                "2026-08-01",
                "2026-08-15",
                "2026-09-01",
                "2026-09-15"
            ],
            tags: ["Beach", "Party", "Romance", "Water Sports"],
            difficulty: "Easy",
            groupSize: "2-20 people"
        },
        {
            id: 9,
            name: "Varanasi Spiritual Journey",
            slug: "varanasi-spiritual-journey",
            region: "North",
            duration: "3 Days",
            price: 12500,
            rating: 4.6,
            reviews: 73,
            image: "assets/images/packages/north/varanasi.jpg",
            description: "Spiritual journey to the oldest city with Ganga Aarti.",
            longDescription: "Experience the spiritual heart of India in Varanasi. Witness the mesmerizing Ganga Aarti, explore ancient temples, and take a boat ride on the sacred Ganges.",
            inclusions: [
                "Hotel accommodation",
                "Daily breakfast",
                "Boat ride on Ganges",
                "Professional guide",
                "Ganga Aarti experience"
            ],
            exclusions: [
                "Flights",
                "Personal expenses",
                "Tips and gratuities"
            ],
            itinerary: [
                { day: 1, title: "Arrival in Varanasi", description: "Visit Kashi Vishwanath Temple, explore the ghats." },
                { day: 2, title: "Ganga Aarti", description: "Morning boat ride on Ganges, evening Ganga Aarti." },
                { day: 3, title: "Sarnath", description: "Visit Sarnath - where Buddha gave his first sermon." }
            ],
            availableDates: [
                "2026-05-01",
                "2026-06-01",
                "2026-07-01",
                "2026-08-01"
            ],
            tags: ["Spiritual", "Culture", "Heritage", "Unique"],
            difficulty: "Easy",
            groupSize: "2-10 people"
        },
        {
            id: 10,
            name: "Darjeeling Toy Train Adventure",
            slug: "darjeeling-toy-train",
            region: "East",
            duration: "5 Days",
            price: 18900,
            rating: 4.7,
            reviews: 62,
            image: "assets/images/packages/east/darjeeling.jpg",
            description: "Toy train rides, tea gardens & Himalayan views.",
            longDescription: "Experience the charm of Darjeeling - from the famous toy train to lush tea gardens and spectacular views of the Himalayas.",
            inclusions: [
                "Hotel accommodation",
                "Toy train ticket",
                "Tea estate visit",
                "Professional guide",
                "Transport"
            ],
            exclusions: [
                "Flights",
                "Personal expenses",
                "Travel insurance"
            ],
            itinerary: [
                { day: 1, title: "Arrival at NJP", description: "Drive to Darjeeling, check-in to hotel." },
                { day: 2, title: "Toy Train Ride", description: "Experience the famous Darjeeling Himalayan Railway." },
                { day: 3, title: "Darjeeling Sightseeing", description: "Visit tea gardens, Ghoom Monastery, and Himalayan views." },
                { day: 4, title: "Tiger Hill", description: "Early morning visit to Tiger Hill for sunrise." },
                { day: 5, title: "Departure", description: "Drive to NJP for departure." }
            ],
            availableDates: [
                "2026-05-10",
                "2026-06-10",
                "2026-07-10",
                "2026-08-10"
            ],
            tags: ["Heritage", "Nature", "Mountains", "Unique"],
            difficulty: "Easy",
            groupSize: "2-12 people"
        }
    ],
    
    // All Destinations
    destinations: [
        { id: 1, name: "Kashmir", region: "North", image: "assets/images/destinations/kashmir.jpg", description: "Paradise on Earth", attractions: ["Dal Lake", "Gulmarg", "Pahalgam"] },
        { id: 2, name: "Kerala", region: "South", image: "assets/images/destinations/kerala.jpg", description: "God's Own Country", attractions: ["Backwaters", "Munnar", "Kochi"] },
        { id: 3, name: "Rajasthan", region: "West", image: "assets/images/destinations/rajasthan.jpg", description: "Land of Kings", attractions: ["Jaipur", "Jodhpur", "Udaipur"] },
        { id: 4, name: "Goa", region: "West", image: "assets/images/destinations/goa.jpg", description: "Beach Paradise", attractions: ["Baga Beach", "Old Goa", "Anjuna"] },
        { id: 5, name: "Himachal Pradesh", region: "North", image: "assets/images/destinations/himachal.jpg", description: "Land of Gods", attractions: ["Manali", "Shimla", "Dharamshala"] },
        { id: 6, name: "Tamil Nadu", region: "South", image: "assets/images/destinations/tamilnadu.jpg", description: "Temple State", attractions: ["Madurai", "Chennai", "Mahabalipuram"] },
        { id: 7, name: "Meghalaya", region: "North East", image: "assets/images/destinations/meghalaya.jpg", description: "Abode of Clouds", attractions: ["Shillong", "Cherrapunji", "Mawlynnong"] },
        { id: 8, name: "West Bengal", region: "East", image: "assets/images/destinations/westbengal.jpg", description: "Cultural Hub", attractions: ["Kolkata", "Darjeeling", "Sundarbans"] },
        { id: 9, name: "Uttarakhand", region: "North", image: "assets/images/destinations/uttarakhand.jpg", description: "Land of Char Dham", attractions: ["Rishikesh", "Haridwar", "Nainital"] },
        { id: 10, name: "Karnataka", region: "South", image: "assets/images/destinations/karnataka.jpg", description: "Heritage State", attractions: ["Bangalore", "Mysore", "Hampi"] }
    ],
    
    // Testimonials
    testimonials: [
        {
            id: 1,
            name: "Rahul Sharma",
            location: "Mumbai",
            rating: 5,
            text: "Amazing experience with Iksafar Travel! The Kashmir trek was perfectly organized. The guides were knowledgeable and the scenery was breathtaking.",
            image: "assets/images/testimonials/user1.jpg",
            date: "December 2025"
        },
        {
            id: 2,
            name: "Priya Patel",
            location: "Ahmedabad",
            rating: 5,
            text: "Golden Triangle tour was incredible. The guide was knowledgeable and friendly. Best travel agency I've ever used!",
            image: "assets/images/testimonials/user2.jpg",
            date: "November 2025"
        },
        {
            id: 3,
            name: "Amit Singh",
            location: "Bangalore",
            rating: 4,
            text: "Kerala backwaters package was amazing. Houseboat experience was unforgettable. Will definitely book again.",
            image: "assets/images/testimonials/user3.jpg",
            date: "October 2025"
        },
        {
            id: 4,
            name: "Sneha Reddy",
            location: "Hyderabad",
            rating: 5,
            text: "Our Meghalaya trip was perfectly planned. The living root bridges were magical. Thank you Iksafar for this wonderful experience!",
            image: "assets/images/testimonials/user4.jpg",
            date: "September 2025"
        },
        {
            id: 5,
            name: "Vikram Malhotra",
            location: "Delhi",
            rating: 5,
            text: "The Rajasthan desert safari was the highlight of our year. The camel ride, desert camp, and cultural evening were unforgettable.",
            image: "assets/images/testimonials/user5.jpg",
            date: "August 2025"
        }
    ],
    
    // Blog Posts
    blog: [
        {
            id: 1,
            title: "10 Best Places to Visit in North East India",
            category: "Destinations",
            date: "January 15, 2026",
            author: "Travel Expert",
            authorImage: "assets/images/blog/author1.jpg",
            image: "assets/images/blog/north-east.jpg",
            excerpt: "Discover the hidden gems of Northeast India - from living root bridges to breathtaking waterfalls and vibrant tribal culture.",
            content: "Full blog content here...",
            tags: ["North East", "Destinations", "Nature", "Culture"]
        },
        {
            id: 2,
            title: "Ultimate Guide to Trekking in Himalayas",
            category: "Adventure",
            date: "January 10, 2026",
            author: "Adventure Guru",
            authorImage: "assets/images/blog/author2.jpg",
            image: "assets/images/blog/himalayas.jpg",
            excerpt: "Everything you need to know before planning a Himalayan trek - from gear to safety tips.",
            content: "Full blog content here...",
            tags: ["Trekking", "Himalayas", "Adventure", "Guide"]
        },
        {
            id: 3,
            title: "South India's Hidden Beach Paradises",
            category: "Beach",
            date: "January 5, 2026",
            author: "Beach Lover",
            authorImage: "assets/images/blog/author3.jpg",
            image: "assets/images/blog/beach.jpg",
            excerpt: "Explore the lesser-known beaches of South India - away from the tourist crowds.",
            content: "Full blog content here...",
            tags: ["Beach", "South India", "Hidden Gems", "Travel"]
        },
        {
            id: 4,
            title: "Cultural Heritage of Rajasthan: A Journey Through Time",
            category: "Culture",
            date: "December 28, 2025",
            author: "Culture Explorer",
            authorImage: "assets/images/blog/author4.jpg",
            image: "assets/images/blog/rajasthan-culture.jpg",
            excerpt: "Dive deep into the rich cultural heritage of Rajasthan - from forts to folk music.",
            content: "Full blog content here...",
            tags: ["Rajasthan", "Culture", "Heritage", "History"]
        },
        {
            id: 5,
            title: "Street Food Tour: Must-Try Dishes Across India",
            category: "Food",
            date: "December 20, 2025",
            author: "Foodie Explorer",
            authorImage: "assets/images/blog/author5.jpg",
            image: "assets/images/blog/street-food.jpg",
            excerpt: "From Mumbai's vada pav to Kolkata's phuchka - explore the diverse street food of India.",
            content: "Full blog content here...",
            tags: ["Food", "Street Food", "Culture", "Travel"]
        }
    ],
    
    // FAQ
    faq: [
        {
            id: 1,
            category: "Booking",
            question: "How do I book a package?",
            answer: "You can book directly through our website using the booking form, or call us at 8882911056. Our team will assist you with the booking process."
        },
        {
            id: 2,
            category: "Pricing",
            question: "What is included in the package price?",
            answer: "Each package includes accommodation, meals, guide services, and transportation as mentioned in the inclusions section. Please check individual package pages for details."
        },
        {
            id: 3,
            category: "Customization",
            question: "Can I customize my package?",
            answer: "Yes! All packages can be customized based on your preferences and budget. Contact us to create your perfect itinerary."
        },
        {
            id: 4,
            category: "Insurance",
            question: "Is travel insurance included?",
            answer: "Travel insurance is not included in the package price. We strongly recommend purchasing travel insurance separately for your safety."
        },
        {
            id: 5,
            category: "Cancellation",
            question: "What is the cancellation policy?",
            answer: "Cancellation policies vary by package. Generally, cancellations made 30 days before departure get full refund, 15-30 days get 50% refund, and less than 15 days no refund."
        },
        {
            id: 6,
            category: "Discounts",
            question: "Do you offer group discounts?",
            answer: "Yes! We offer attractive discounts for groups of 10 or more. Contact us for a customized quote."
        },
        {
            id: 7,
            category: "Payment",
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, debit cards, UPI, bank transfers, and cash payments."
        },
        {
            id: 8,
            category: "Safety",
            question: "Is it safe to travel with Iksafar Travel?",
            answer: "Safety is our top priority. We work with verified partners, provide trained guides, and have 24/7 emergency support."
        }
    ],
    
    // Gallery Images
    gallery: [
        { id: 1, title: "Taj Mahal at Sunset", category: "Heritage", image: "assets/images/gallery/taj-mahal.jpg" },
        { id: 2, title: "Kerala Houseboat", category: "Nature", image: "assets/images/gallery/houseboat.jpg" },
        { id: 3, title: "Desert Safari", category: "Adventure", image: "assets/images/gallery/desert-safari.jpg" },
        { id: 4, title: "Himalayan Trek", category: "Adventure", image: "assets/images/gallery/trekking.jpg" },
        { id: 5, title: "Living Root Bridge", category: "Nature", image: "assets/images/gallery/root-bridge.jpg" },
        { id: 6, title: "Goa Beach", category: "Beach", image: "assets/images/gallery/goa-beach.jpg" },
        { id: 7, title: "Jaipur City Palace", category: "Heritage", image: "assets/images/gallery/jaipur.jpg" },
        { id: 8, title: "Sundarbans Tiger", category: "Wildlife", image: "assets/images/gallery/tiger.jpg" },
        { id: 9, title: "Munnar Tea Gardens", category: "Nature", image: "assets/images/gallery/munnar.jpg" },
        { id: 10, title: "Varanasi Ganga Aarti", category: "Culture", image: "assets/images/gallery/varanasi.jpg" }
    ],
    
    // Regions
    regions: [
        { id: "north", name: "North India", icon: "fa-mountain", count: 15, description: "Himalayan peaks, valleys & rich culture" },
        { id: "south", name: "South India", icon: "fa-palm-tree", count: 12, description: "Backwaters, beaches & temple architecture" },
        { id: "east", name: "East India", icon: "fa-tree", count: 8, description: "Mangrove forests, hills & tea gardens" },
        { id: "west", name: "West India", icon: "fa-camel", count: 10, description: "Deserts, beaches & royal heritage" },
        { id: "northeast", name: "North East", icon: "fa-cloud", count: 7, description: "Living root bridges, waterfalls & tribes" }
    ],
    
    // Helper Functions
    getPackageById: function(id) {
        return this.packages.find(pkg => pkg.id === id);
    },
    
    getPackageBySlug: function(slug) {
        return this.packages.find(pkg => pkg.slug === slug);
    },
    
    getPackagesByRegion: function(region) {
        return this.packages.filter(pkg => pkg.region.toLowerCase() === region.toLowerCase());
    },
    
    getFeaturedPackages: function(count = 6) {
        return this.packages.slice(0, count);
    },
    
    getPopularPackages: function(count = 4) {
        return this.packages.sort((a, b) => b.rating - a.rating).slice(0, count);
    },
    
    getCheapestPackages: function(count = 4) {
        return this.packages.sort((a, b) => a.price - b.price).slice(0, count);
    },
    
    searchPackages: function(query) {
        const q = query.toLowerCase().trim();
        if (!q) return [];
        
        return this.packages.filter(pkg => 
            pkg.name.toLowerCase().includes(q) ||
            pkg.description.toLowerCase().includes(q) ||
            pkg.region.toLowerCase().includes(q) ||
            pkg.tags.some(tag => tag.toLowerCase().includes(q)) ||
            pkg.duration.toLowerCase().includes(q)
        );
    },
    
    getDestinationsByRegion: function(region) {
        return this.destinations.filter(dest => dest.region.toLowerCase() === region.toLowerCase());
    },
    
    getBlogByCategory: function(category) {
        return this.blog.filter(post => post.category.toLowerCase() === category.toLowerCase());
    },
    
    getFaqByCategory: function(category) {
        return this.faq.filter(item => item.category.toLowerCase() === category.toLowerCase());
    },
    
    getGalleryByCategory: function(category) {
        return this.gallery.filter(item => item.category.toLowerCase() === category.toLowerCase());
    },
    
    // Get price range for filtering
    getPriceRange: function() {
        const prices = this.packages.map(pkg => pkg.price);
        return {
            min: Math.min(...prices),
            max: Math.max(...prices)
        };
    },
    
    // Get unique tags
    getAllTags: function() {
        const allTags = this.packages.flatMap(pkg => pkg.tags);
        return [...new Set(allTags)];
    }
};

// Make data available globally
window.IKSafarData = IKSafarData;

// Export for Node.js (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IKSafarData;
}