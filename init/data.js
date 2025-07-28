const mongoose = require("mongoose");
const OWNER_ID = new mongoose.Types.ObjectId("60dd454d1e92bc001cfecd1b");

const sampleListings = [
  {
    title: "Heritage Rajasthani Haveli Stay",
    description:
      "Experience royal heritage in this 200-year-old restored haveli. Enjoy traditional Rajasthani hospitality, authentic local cuisine, and stunning architecture with intricate frescoes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Jaipur",
    country: "India",
    category: "house",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Himalayan Village Homestay",
    description:
      "Stay with a local family in this serene mountain village. Experience authentic Himachali culture while enjoying breathtaking views of snow-capped peaks and terraced fields.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Manali",
    country: "India",
    category: "cottage",
    geometry: { type: "Point", coordinates: [77.1892, 32.2396] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Organic Farm Stay in Kerala",
    description:
      "Immerse yourself in sustainable living at this organic spice farm. Learn about permaculture, enjoy farm-to-table meals, and participate in daily farming activities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Munnar",
    country: "India",
    category: "house",
    geometry: { type: "Point", coordinates: [77.0873, 10.0889] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Floating Houseboat on Dal Lake",
    description:
      "Experience the magic of Kashmir in this traditional shikhara houseboat. Wake up to mountain reflections and enjoy authentic Kashmiri cuisine prepared by local chefs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Srinagar",
    country: "India",
    category: "house",
    geometry: { type: "Point", coordinates: [74.7973, 34.0837] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Beachside Bamboo Hut in Goa",
    description:
      "Unwind in this eco-friendly bamboo hut just steps from the beach. Experience sustainable tourism while enjoying fresh seafood and stunning sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Arambol",
    country: "India",
    category: "beach house",
    geometry: { type: "Point", coordinates: [73.7060, 15.6869] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Desert Camp Under the Stars",
    description:
      "Sleep under a blanket of stars in this luxury desert camp. Enjoy camel safaris, folk performances, and authentic Rajasthani cuisine around a bonfire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Jaisalmer",
    country: "India",
    category: "cottage",
    geometry: { type: "Point", coordinates: [70.9083, 26.9157] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Tea Garden Bungalow in Darjeeling",
    description:
      "Stay in a colonial-era tea planter's bungalow surrounded by rolling tea gardens. Learn about tea processing and enjoy the famous Darjeeling brew.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Darjeeling",
    country: "India",
    category: "bungalow",
    geometry: { type: "Point", coordinates: [88.2663, 27.0410] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Riverside Cottage in Rishikesh",
    description:
      "Find inner peace at this riverside cottage perfect for yoga and meditation retreats. Experience spiritual Rishikesh with daily yoga sessions and Ganga aarti.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Rishikesh",
    country: "India",
    category: "cottage",
    geometry: { type: "Point", coordinates: [78.2676, 30.0869] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Backwater Village Stay in Kerala",
    description:
      "Experience authentic Kerala village life in this traditional home surrounded by coconut palms and backwaters. Enjoy home-cooked meals and local fishing expeditions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Alleppey",
    country: "India",
    category: "cottage",
    geometry: { type: "Point", coordinates: [76.3388, 9.4981] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Hilltop Monastery Guesthouse",
    description:
      "Stay in a peaceful Buddhist monastery guesthouse with panoramic mountain views. Participate in meditation sessions and learn about Tibetan culture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Dharamshala",
    country: "India",
    category: "house",
    geometry: { type: "Point", coordinates: [76.3209, 32.2190] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Artist's Studio Loft in Udaipur",
    description:
      "Stay in a local artist's colorful studio overlooking Lake Pichola. Participate in art workshops and explore the city's vibrant cultural heritage.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Udaipur",
    country: "India",
    category: "apartment",
    geometry: { type: "Point", coordinates: [73.7125, 24.5854] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Wildlife Safari Lodge in Jim Corbett",
    description:
      "Experience wildlife up close in this eco-lodge bordering the national park. Enjoy guided safaris, bird watching, and conservation talks with naturalists.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Jim Corbett",
    country: "India",
    category: "house",
    geometry: { type: "Point", coordinates: [78.9629, 29.5319] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Tribal Village Cultural Stay",
    description:
      "Immerse yourself in indigenous culture at this tribal village homestay. Learn traditional crafts, participate in folk dances, and support community tourism.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Bastar",
    country: "India",
    category: "cottage",
    geometry: { type: "Point", coordinates: [81.9381, 19.2183] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Colonial Bungalow in Hill Station",
    description:
      "Step back in time in this beautifully preserved British-era bungalow. Enjoy cool mountain air, vintage furnishings, and stunning valley views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Ooty",
    country: "India",
    category: "bungalow",
    geometry: { type: "Point", coordinates: [76.6950, 11.4064] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Spice Plantation Villa in Coorg",
    description:
      "Wake up to the aroma of fresh coffee and cardamom in this plantation villa. Learn about spice cultivation and enjoy guided nature walks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Coorg",
    country: "India",
    category: "villa",
    geometry: { type: "Point", coordinates: [75.9064, 12.3375] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Fisherman's Cottage by the Sea",
    description:
      "Experience coastal life in this traditional fisherman's cottage. Join morning fishing trips, learn to cook fresh catch, and enjoy stunning sunrise views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Gokarna",
    country: "India",
    category: "beach house",
    geometry: { type: "Point", coordinates: [74.3197, 14.5492] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Yoga Ashram Retreat Center",
    description:
      "Find spiritual awakening at this serene ashram nestled in the Sahyadri mountains. Daily yoga, meditation, and Ayurvedic treatments included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Pune",
    country: "India",
    category: "house",
    geometry: { type: "Point", coordinates: [73.8567, 18.5204] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Royal Tent in Palace Grounds",
    description:
      "Live like maharaja in this luxury tent setup within palace grounds. Experience royal treatment with elephant rides, cultural performances, and gourmet dining.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Jodhpur",
    country: "India",
    category: "villa",
    geometry: { type: "Point", coordinates: [73.0243, 26.2389] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Salt Marsh Village Stay",
    description:
      "Experience the unique ecosystem of the Rann of Kutch in this village homestay. Witness the white salt desert, local handicrafts, and vibrant folk culture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2300,
    location: "Rann of Kutch",
    country: "India",
    category: "cottage",
    geometry: { type: "Point", coordinates: [69.1593, 23.7337] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Bamboo Treehouse in Meghalaya",
    description:
      "Sleep among the clouds in this eco-friendly bamboo treehouse. Experience the living root bridges and witness some of the highest rainfall on Earth.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Cherrapunji",
    country: "India",
    category: "cottage",
    geometry: { type: "Point", coordinates: [91.7362, 25.3000] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Lake Island Cottage in Kashmir",
    description:
      "Stay on a private island in this secluded cottage surrounded by pristine mountain lakes. Perfect for digital detox and nature photography.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Pahalgam",
    country: "India",
    category: "cottage",
    geometry: { type: "Point", coordinates: [75.2094, 34.0173] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Pottery Village Artisan Home",
    description:
      "Learn the ancient art of pottery in this traditional artisan village. Stay with master potters and create your own ceramic masterpieces.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Khurja",
    country: "India",
    category: "house",
    geometry: { type: "Point", coordinates: [77.8553, 28.2551] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Vintage Train Car Stay",
    description:
      "Experience nostalgia in this converted vintage train car turned luxury accommodation. Enjoy the romance of rail travel while staying stationary in scenic hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3300,
    location: "Shimla",
    country: "India",
    category: "chalet",
    geometry: { type: "Point", coordinates: [77.1734, 31.1048] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Lighthouse Keeper's Quarters",
    description:
      "Stay in this historic lighthouse keeper's quarters perched on dramatic cliffs. Enjoy panoramic ocean views and learn about maritime history.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Kanya Kumari",
    country: "India",
    category: "house",
    geometry: { type: "Point", coordinates: [77.5385, 8.0883] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Silk Weaver's Heritage Home",
    description:
      "Discover the art of silk weaving in this traditional weaver's home. Watch master craftsmen at work and learn about India's textile heritage.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Varanasi",
    country: "India",
    category: "house",
    geometry: { type: "Point", coordinates: [83.0037, 25.3176] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Floating Solar Hut in Sundarbans",
    description:
      "Experience sustainable living in this solar-powered floating hut in the mangrove forests. Perfect for eco-tourists and wildlife enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Sundarbans",
    country: "India",
    category: "cottage",
    geometry: { type: "Point", coordinates: [88.4337, 21.9497] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Cave Temple Meditation Retreat",
    description:
      "Find inner peace in this ancient cave temple converted into a meditation retreat. Experience spiritual awakening in these thousand-year-old sacred spaces.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Ajanta",
    country: "India",
    category: "house",
    geometry: { type: "Point", coordinates: [75.7033, 20.5520] },
    owner: OWNER_ID,
    reviews: [],
  },
  {
    title: "Camel Herder's Desert Camp",
    description:
      "Live like nomads with local camel herders in the heart of the Thar Desert. Experience traditional desert life with camel milk, folk songs, and star gazing.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Bikaner",
    country: "India",
    category: "cottage",
    geometry: { type: "Point", coordinates: [73.3119, 28.0229] },
    owner: OWNER_ID,
    reviews: [],
  },
];

module.exports = { data: sampleListings };