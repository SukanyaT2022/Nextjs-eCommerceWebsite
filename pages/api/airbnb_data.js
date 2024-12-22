// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      "hotels": [
        {
          "id": 1,
          "name": "Grand Plaza Hotel",
          "location": "Lahore, Pakistan",
          "pricePerNight": 120,
          "checkInTime": "2:00 PM",
          "checkOutTime": "11:00 AM",
          "availableRooms": 15,
          "amenities": ["Free WiFi", "Swimming Pool", "Gym", "Parking", "Restaurant"],
          "rating": 4.5,
          "reviews": [
            { "user": "Ali", "comment": "Excellent service and clean rooms.", "rating": 5 },
            { "user": "Sara", "comment": "Great location, but noisy at night.", "rating": 4 }
          ]
        },
        {
          "id": 2,
          "name": "Sunset Resort",
          "location": "Karachi, Pakistan",
          "pricePerNight": 180,
          "checkInTime": "3:00 PM",
          "checkOutTime": "12:00 PM",
          "availableRooms": 10,
          "amenities": ["Beachfront", "Spa", "Free Breakfast", "Bar", "Free Parking"],
          "rating": 4.7,
          "reviews": [
            { "user": "Omar", "comment": "Amazing beachfront view.", "rating": 5 },
            { "user": "Zara", "comment": "Expensive but worth it.", "rating": 4 }
          ]
        },
        {
          "id": 3,
          "name": "City Comfort Inn",
          "location": "Islamabad, Pakistan",
          "pricePerNight": 80,
          "checkInTime": "1:00 PM",
          "checkOutTime": "10:00 AM",
          "availableRooms": 20,
          "amenities": ["Free WiFi", "Air Conditioning", "Breakfast Buffet"],
          "rating": 4.2,
          "reviews": [
            { "user": "Ahmed", "comment": "Affordable and cozy.", "rating": 4 },
            { "user": "Nida", "comment": "Friendly staff, but rooms are small.", "rating": 3.5 }
          ]
        },
        {
          "id": 4,
          "name": "Luxury Stay Hotel",
          "location": "Multan, Pakistan",
          "pricePerNight": 200,
          "checkInTime": "4:00 PM",
          "checkOutTime": "1:00 PM",
          "availableRooms": 8,
          "amenities": ["Pool", "Gym", "Spa", "Valet Parking", "Restaurant"],
          "rating": 4.8,
          "reviews": [
            { "user": "Farah", "comment": "Top-notch service!", "rating": 5 },
            { "user": "Hassan", "comment": "Rooms are luxurious.", "rating": 4.5 }
          ]
        },
        {
          "id": 5,
          "name": "Budget Inn",
          "location": "Peshawar, Pakistan",
          "pricePerNight": 50,
          "checkInTime": "12:00 PM",
          "checkOutTime": "10:00 AM",
          "availableRooms": 30,
          "amenities": ["Free WiFi", "Parking"],
          "rating": 3.8,
          "reviews": [
            { "user": "Rizwan", "comment": "Good value for money.", "rating": 4 },
            { "user": "Ayesha", "comment": "Basic facilities but clean.", "rating": 3.5 }
          ]
        },
        {
          "id": 6,
          "name": "Mountain View Lodge",
          "location": "Hunza, Pakistan",
          "pricePerNight": 150,
          "checkInTime": "2:00 PM",
          "checkOutTime": "11:00 AM",
          "availableRooms": 12,
          "amenities": ["Mountain Views", "Restaurant", "Hiking Trails", "Free WiFi"],
          "rating": 4.6,
          "reviews": [
            { "user": "Junaid", "comment": "Beautiful views and peaceful.", "rating": 5 },
            { "user": "Kiran", "comment": "Great place for nature lovers.", "rating": 4 }
          ]
        },
        {
          "id": 7,
          "name": "Urban Stay",
          "location": "Lahore, Pakistan",
          "pricePerNight": 90,
          "checkInTime": "1:00 PM",
          "checkOutTime": "12:00 PM",
          "availableRooms": 25,
          "amenities": ["Free WiFi", "Air Conditioning", "Restaurant"],
          "rating": 4.3,
          "reviews": [
            { "user": "Asif", "comment": "Modern and clean.", "rating": 4 },
            { "user": "Nazia", "comment": "Convenient location.", "rating": 4.5 }
          ]
        },
        {
          "id": 8,
          "name": "Desert Rose Hotel",
          "location": "Bahawalpur, Pakistan",
          "pricePerNight": 110,
          "checkInTime": "3:00 PM",
          "checkOutTime": "11:00 AM",
          "availableRooms": 18,
          "amenities": ["Free Parking", "Air Conditioning", "Restaurant", "Free Breakfast"],
          "rating": 4.4,
          "reviews": [
            { "user": "Bilal", "comment": "Comfortable stay and great food.", "rating": 5 },
            { "user": "Mehwish", "comment": "Spacious rooms.", "rating": 4 }
          ]
        },
        {
          "id": 9,
          "name": "Heritage Inn",
          "location": "Quetta, Pakistan",
          "pricePerNight": 130,
          "checkInTime": "2:00 PM",
          "checkOutTime": "11:00 AM",
          "availableRooms": 10,
          "amenities": ["Free WiFi", "Parking", "Breakfast Buffet", "Cultural Tours"],
          "rating": 4.5,
          "reviews": [
            { "user": "Shahbaz", "comment": "Loved the cultural experience.", "rating": 5 },
            { "user": "Rabia", "comment": "Unique decor and great staff.", "rating": 4.5 }
          ]
        },
        {
          "id": 10,
          "name": "Blue Lagoon Hotel",
          "location": "Gwadar, Pakistan",
          "pricePerNight": 170,
          "checkInTime": "2:30 PM",
          "checkOutTime": "12:00 PM",
          "availableRooms": 7,
          "amenities": ["Beachfront", "Free Breakfast", "Swimming Pool", "Gym"],
          "rating": 4.7,
          "reviews": [
            { "user": "Usman", "comment": "Breathtaking ocean views.", "rating": 5 },
            { "user": "Huma", "comment": "Perfect for a relaxing vacation.", "rating": 4.5 }
          ]
        }
      ]
    }    
  );
}
