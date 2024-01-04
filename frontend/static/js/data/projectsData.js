const projectsData = [
  {
    "id": 0,
    "title": "DayNotes",
    "type": "Solo-Project",
    "description": "A MERN full-stack date-based note taking platform that uses web sockets for seamless synchronization between browser tabs. Through Socket.io, the client-side website communicates with the back-end server built with Node.js and Express.js to save notes made with the Quill.js text editor to a MongoDB database. Users log in securely through cookie-based authentication sent through the Next.js and Express.js routes.",
    "builtWith": ["Node.js", "Express.js", "Socket.io", "React", "TypeScript", "MongoDB", "Quill.js", "Date-fns", "HTTP", "BCrypt", "TailwindCSS", "NextJS"],
    "projectLink": "https://daynotes-client.vercel.app",
    "githubLink": "https://github.com/bridgerbrown/daynotes",
    "date": "July 2023",
    "img": "/project-previews/daynotes-preview.webp",
    "featured": "true",
    "buttonsEnabled": "11" 
  },
  {
    "id": 1,
    "title": "PayCats (Venmo/Paypal Clone)",
    "type": "Solo-Project",
    "description": "A Venmo/Paypal clone with a database of cat users you can securely sign up, pay and request money from. Like Venmo, you can track your balance, make requests to users, and interact with the history of transactions. Each cat user has a different personality with unique possibilities of responses and comments to your requests!",
    "builtWith": ["TypeScript", "React", "Tailwind CSS", "NextJS", "Firestore database", "Firebase user authentication"],
    "projectLink": "https://paycats.vercel.app/",
    "githubLink": "https://github.com/bridgerbrown/paycats",
    "date": "April 2023",
    "img": "/project-previews/paycats-preview.webp",
    "featured": "true",
    "buttonsEnabled": "11"
  },
  {
    "id": 2,
    "title": "Python Web Scraper",
    "type": "Solo-Project",
    "description": "An HTML web scraper with a back-end built in Python which retrieves specified elements from any given website. The Flask backend server, which listens to the front-end, initiates a request to the website and utilizes the BeautifulSoup library to parse the HTML data. After processing the data with the Pandas library, it is transmitted in a parsed JSON format to the front-end to then be displayed.",
    "builtWith": ["Python", "Flask", "BeautifulSoup", "Requests", "Pandas", "React", "TypeScript", "NextJS", "TailwindCSS", "Render"],
    "projectLink": "https://web-scraper-python.vercel.app/",
    "githubLink": "https://github.com/bridgerbrown/web-scraper-python",
    "date": "September 2023",
    "img": "/project-previews/web-scraper-preview.webp",
    "featured": "false",
    "buttonsEnabled": "11"
  },
  {
    "id": 3,
    "title": "Ecommerce Paintings",
    "type": "Solo-Project",
    "description": "An eCommerce platform that fetches painting data from a public museum's RESTful API and uses it to showcase demo products for user interaction. The website includes features like real-time product stock updates from a Firestore database, shopping cart functionality, and basic user email authentication through Firebase.",
    "builtWith": ["React", "RESTful API", "NextJS", "HTML", "CSS", "Firestore database", "Firebase user authentication", "the public art database API of the Art Institute of Chicago"],
    "projectLink": "https://ecommerce-paintings.vercel.app",
    "githubLink": "https://github.com/bridgerbrown/ecommerce-paintings",
    "date": "January 2023",
    "img": "/project-previews/ecommerce-preview.webp",
    "featured": "true",
    "buttonsEnabled": "11"
  },
  {
    "id": 4,
    "title": "3D Spheres Scrolling Animation",
    "type": "Solo-Project",
    "description": "A 3D environment scrolling animation using a mars-themed sky texture and rotating reflective spheres, made using Three.js and WebGL.",
    "builtWith": ["Three.js", "WebGL", "React"],
    "projectLink": "https://mars-sphere-animation.vercel.app/",
    "githubLink": "https://github.com/bridgerbrown/mars-spheres-animation",
    "date": "April 2023",
    "img": "/project-previews/spheres-preview.webp",
    "featured": "false",
    "buttonsEnabled": "11"
  },
  {
    "id": 5,
    "title": "Quizzical Trivia Game",
    "type": "Solo-Project",
    "description": "A trivia question game with multiple categories and difficulties, this React app fetches data from the Open Trivia Database API. This project started out as a part of the Scrimba Front-End Developer Career Path but was fleshed out more on its own.",
    "builtWith": ["React", "NextJS"],
    "projectLink": "https://quiz-o8z5ipsoe-bridgerbrown.vercel.app/",
    "githubLink": "https://github.com/bridgerbrown/quiz-app-project",
    "date": "October 2022",
    "img": "/project-previews/quizzical-preview.webp",
    "featured": "false",
    "buttonsEnabled": "11"
  },
  {
    "id": 6,
    "title": "RicochetProductions.org",
    "type": "Freelance",
    "description": "A single page application utilizing React and TypeScript, this website was a freelance project built for the company Ricochet Productions. A multi-page version with more content is coming soon.",
    "builtWith": ["TypeScript", "React", "JavaScript", "TailwindCSS", "NextJS"],
    "projectLink": "https://www.ricochetproductions.org/",
    "githubLink": "https://github.com/bridgerbrown/ricochet-productions",
    "date": "May 2023",
    "img": "/project-previews/ricochet-productions-preview.webp",
    "featured": "false",
    "buttonsEnabled": "11"
  },
  {
    "id": 7,
    "title": "Martini Shot Podcast Website",
    "type": "Freelance",
    "description": "A website for the podcast Martini Shot with writer and TV producer Rob Long (Cheers, Sullivan & Son). This was one of my first website projects and was built using Wordpress, HTML, and CSS. In addition to managing the website, I am also the audio producer/editor and designed the Martini Shot logo.",
    "builtWith": ["JavaScript", "HTML", "CSS", "Wordpress"],
    "projectLink": "https://www.martinishotpodcast.com/",
    "githubLink": "",
    "date": "January 2022",
    "img": "/project-previews/martini-shot-preview.webp",
    "featured": "false",
    "buttonsEnabled": "00"
  }
]

export default projectsData;
