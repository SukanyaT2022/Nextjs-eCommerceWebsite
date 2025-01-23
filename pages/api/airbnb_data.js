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
          ],
          "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "country": "Pakistan",
          "city": "Islamabad",
          "type": "beach_front"
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
          ],
          "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "type": "beach_front"
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
          ],
        "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "type": "family"
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
          ],
        "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "type": "amazing_view"
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
          ],
         "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "type": "family"
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
          ],
          "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "type": "amazing_view"
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
          ],
          "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "type": "family"
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
          ],
          "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "type": "amazing_view"
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
          ],
          "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "type": "family"
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
          ],
          "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "type": "beach_front"
        },
        {
          "id": 11,
          "name": "Pearl Vista Resort",
          "location": "Skardu, Pakistan",
          "pricePerNight": 160,
          "checkInTime": "3:00 PM",
          "checkOutTime": "12:00 PM",
          "availableRooms": 9,
          "amenities": ["Mountain Views", "Hiking Trails", "Free Breakfast", "Parking"],
          "rating": 4.8,
          "reviews": [
            { "user": "Tariq", "comment": "An unforgettable mountain retreat.", "rating": 5 },
            { "user": "Sameera", "comment": "Serene location and amazing food.", "rating": 4.5 }
          ],
          "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "type": "amazing_view"
        },
        {
          "id": 12,
          "name": "The Sapphire Inn",
          "location": "Murree, Pakistan",
          "pricePerNight": 140,
          "checkInTime": "2:00 PM",
          "checkOutTime": "11:00 AM",
          "availableRooms": 15,
          "amenities": ["Free WiFi", "Fireplace", "Restaurant", "Parking"],
          "rating": 4.6,
          "reviews": [
            { "user": "Haris", "comment": "Cosy and perfect for families.", "rating": 5 },
            { "user": "Faiza", "comment": "Great view of the hills.", "rating": 4.5 }
          ],
          "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "type": "family"
        },
        {
          "id": 13,
          "name": "Seaside Paradise",
          "location": "Kund Malir, Pakistan",
          "pricePerNight": 220,
          "checkInTime": "4:00 PM",
          "checkOutTime": "12:00 PM",
          "availableRooms": 5,
          "amenities": ["Beachfront", "Free Breakfast", "Outdoor Activities", "Parking"],
          "rating": 4.9,
          "reviews": [
            { "user": "Jamal", "comment": "Absolute beachfront paradise.", "rating": 5 },
            { "user": "Lubna", "comment": "Perfect for a weekend getaway.", "rating": 4.8 }
          ],
          "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "type": "beach_front"
        },
        {
          "id": 14,
          "name": "Green Valley Resort",
          "location": "Swat, Pakistan",
          "pricePerNight": 130,
          "checkInTime": "2:30 PM",
          "checkOutTime": "11:30 AM",
          "availableRooms": 20,
          "amenities": ["Free WiFi", "Hiking Trails", "Restaurant", "Spa"],
          "rating": 4.5,
          "reviews": [
            { "user": "Adeel", "comment": "Breathtaking valley views.", "rating": 5 },
            { "user": "Naveen", "comment": "Well-maintained and peaceful.", "rating": 4.5 }
          ],
          "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "type": "amazing_view"
        },
        {
          "id": 15,
          "name": "Ocean Pearl Hotel",
          "location": "Ormara, Pakistan",
          "pricePerNight": 190,
          "checkInTime": "3:00 PM",
          "checkOutTime": "12:00 PM",
          "availableRooms": 10,
          "amenities": ["Beachfront", "Swimming Pool", "Free Parking", "Restaurant"],
          "rating": 4.8,
          "reviews": [
            { "user": "Amir", "comment": "A hidden gem by the sea.", "rating": 5 },
            { "user": "Sabah", "comment": "Quiet and luxurious.", "rating": 4.7 }
          ],
          "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "type": "beach_front"
        },
        {
          "id": 16,
          "name": "The Alpine Lodge",
          "location": "Naran, Pakistan",
          "pricePerNight": 120,
          "checkInTime": "2:00 PM",
          "checkOutTime": "10:00 AM",
          "availableRooms": 18,
          "amenities": ["Mountain Views", "Free WiFi", "Restaurant", "Parking"],
          "rating": 4.7,
          "reviews": [
            { "user": "Waqar", "comment": "Amazing location and clean rooms.", "rating": 5 },
            { "user": "Hina", "comment": "Affordable and scenic.", "rating": 4.6 }
          ],
          "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "type": "amazing_view"
        },
        {
          "id": 17,
          "name": "Family Comfort Inn",
          "location": "Faisalabad, Pakistan",
          "pricePerNight": 75,
          "checkInTime": "12:00 PM",
          "checkOutTime": "10:00 AM",
          "availableRooms": 22,
          "amenities": ["Free WiFi", "Parking", "Restaurant"],
          "rating": 4.2,
          "reviews": [
            { "user": "Zeeshan", "comment": "Convenient and family-friendly.", "rating": 4 },
            { "user": "Sadia", "comment": "Good location and clean.", "rating": 4.3 }
          ],
          "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "type": "family"
        },
        {
          "id": 18,
          
          "name": "The Cliffside Retreat",
          "location": "Ziarat, Pakistan",
          "pricePerNight": 140,
          "checkInTime": "2:00 PM",
          "checkOutTime": "11:00 AM",
          "availableRooms": 12,
          "amenities": ["Mountain Views", "Free Breakfast", "Hiking Trails", "Restaurant"],
          "rating": 4.6,
          "reviews": [
            { "user": "Fahad", "comment": "A refreshing stay in the mountains.", "rating": 5 },
            { "user": "Sana", "comment": "Perfect for nature enthusiasts.", "rating": 4.5 }
          ],
          "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "type": "amazing_view"
        },
        {
          "id": 19,
          "name": "Lakeside Serenity",
          "location": "Saif-ul-Muluk, Pakistan",
          "pricePerNight": 180,
          "checkInTime": "3:00 PM",
          "checkOutTime": "11:30 AM",
          "availableRooms": 7,
          "amenities": ["Lake Views", "Boating", "Free Breakfast", "Parking"],
          "rating": 4.9,
          "reviews": [
            { "user": "Usama", "comment": "Mesmerizing views of the lake.", "rating": 5 },
            { "user": "Saira", "comment": "Calm and peaceful surroundings.", "rating": 4.9 }
          ],
          "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "type": "amazing_view"
        },
        {
          "id": 20,
          "name": "Sunrise Beach Resort",
          "location": "Pasni, Pakistan",
          "pricePerNight": 200,
          "checkInTime": "4:00 PM",
          "checkOutTime": "12:00 PM",
          "availableRooms": 6,
          "amenities": ["Beachfront", "Swimming Pool", "Restaurant", "Free WiFi"],
          "rating": 4.8,
          "reviews": [
            { "user": "Noman", "comment": "Ideal for a family getaway.", "rating": 5 },
            { "user": "Haleema", "comment": "Perfect sunrise views by the beach.", "rating": 4.8 }
          ],
          "image": "https://images.trvl-media.com/lodging/1000000/1000000/992200/992175/d4613274.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          "type": "beach_front"
        }        
      ]
    }
  );
}
