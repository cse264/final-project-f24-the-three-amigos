

# MyCloset Application

MyCloset is a web application designed to help users organize and manage their wardrobe. The app allows users to create outfits, categorize clothing items, and personalize their virtual closet. Free users get all the perks of MyCloset, but if you enroll in our monthy subscription you get access to different color closet background. Made by Ethan Lowey, Ian Werner, and Connor McDowell.

---

## Features
- **User Authentication:**
  - Secure login and registration system to save user data.
- **Organize Your Closet:**
  - Add, edit, and delete clothing items with categories like tops, bottoms, accessories, and more.
- **Create Outfits:**
  - Mix and match clothing items to create personalized outfits.
- **Database Integration:**
  - Store user data, clothing items, and outfits in a database for persistent storage.
- **Responsive Design:**
  - A user-friendly interface optimized for desktop 
- **REST API Integration:**
  - Fetch and display fashion inspiration from an external API.
- **Database**
  - We used mySQL as a database for this project, running a local instance. Connect to your local instance and set up two tables. One, my_closet_users, has columns user_id, username, and user_type. The other, closet_items, has columns user_id, item_id, item_name, item_type, image, and price. Put your credentials into an .env file and it should work.



---

## Tech Stack
### Frontend
- React.js with Material-UI for a sleek, modern UI design.
- CSS for custom styling.

### Backend
- Node.js with Express.js to build the REST API.
- PostgreSQL for storing user data and closet items.

### Tools
- **Figma**: For initial wireframes and UI/UX design.
- **Next.js**: For rendering frontend components.
