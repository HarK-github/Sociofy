<div align="center">

#  *Sociofy*

---

###  *Team Members*

| Roll No | Name | Contribution |
|:--------:|:------|:--------------|
| B24CS505 | Harshit Kanpal | Backend & Dpeloyment |
| B24CS049 | Utkarsh Umap | Backend & Database Integration |
| B24CS053 | Yash Bhardwaj | Frontend Documentation |

---

### *Project Overview*

Sociofy aims to provide a modern social media web application where users can create posts, view others’ content, and manage their profiles through a responsive and interactive interface.
It adds a trust score system to make social media safer place
</div>

---

##  *Objectives*
- Develop a functional, user-friendly social media web application  
- Apply full-stack development principles using React, Node.js, and MongoDB  
- Integrate and manage database connections using Mongoose  
- Use Git & GitHub for version control and team collaboration  

---

##  *Tech Stack*

| Category              | Technologies Used                                |
| --------------------- | ------------------------------------------------ |
| *Frontend*          | React.js, Tailwind CSS, JavaScript (ES6+), Axios |
| *Backend*           | Node.js, Express.js                              |
| *Database*          | MongoDB, Mongoose                                |
| *Tools & Utilities* | VS Code, Git, GitHub, Postman, npm               |

---

## *Features*
-  User Authentication (Login / Signup)  
-  Responsive and Modern UI  
-  CRUD Operations for Posts  
-  Profile Management  
-  Session Handling with Cookies  
-  Error Handling and Validation  
-  Additional Enhancements (Dark Mode, Feed System)

---

## *Folder Structure*



Sociofy/
│
├── backend/             # Server-side code (Node.js + Express)
│   ├── models/          # Mongoose Schemas
│   ├── routes/          # API Endpoints
│   ├── config/          # Database Configuration
│   └── server.js        # Main Server File
│
├── frontend/            # React Frontend
│   ├── src/             # React Source Files
│   │   ├── components/  # UI Components
│   │   ├── pages/       # Main Pages (Home, Profile, Login, Signup)
│   │   ├── assets/      # Images and Media
│   │   └── App.jsx      # Main Application File
│
├── docker-compose       # Presentation Slides
├── README.md            # This file
└── package.json         # Dependencies List

`

---

##  *Installation & Execution*

### 1️⃣ Clone the Repository
bash
git clone https://github.com/<your-username>/sociofy.git
cd sociofy
`

### 2️⃣ Install Dependencies

For Node.js:

bash
npm install


For Backend (if separate):

bash
cd backend
npm install


For Frontend:

bash
cd frontend
npm install


### 3️⃣ Setup Database

Ensure MongoDB is running locally or provide your MongoDB Atlas URI in the backend configuration file (config/db.js).

### 4️⃣ Run the Application

For Backend:

bash
npm start


For Frontend:

bash
npm run dev


### 5 Open in Browser

http://localhost:5173  (Frontend)
http://localhost:3000  (Backend API)

---

## *Steps Followed*

1. Problem Identification
2. Requirement Gathering
3. UI/UX Design and Architecture
4. Backend API Development
5. Frontend Implementation
6. Integration and Testing
7. Deployment and Documentation
8. Version Control via GitHub

---
Here is a *cleaned, complete, structured version* of your README *with empty sections removed, **everything included, and **Docker instructions added* — *without changing your original structure*.

---

# *Sociofy*

Course Project Submission

---

## *Team Members*

| Roll No      | Name           | Contribution                        |
| ------------ | -------------- | ----------------------------------- |
| *B24CS505* | Harshit Kanpal | Frontend & UI Design                |
| *B24CS506* | Utkarsh Umap   | Backend & Database Integration      |
| *B24CS507* | Yash Bhardwaj  | Testing, Documentation & Deployment |

---

## *Project Overview*

Sociofy is a modern social media web application developed as part of the course evaluation.
Users can create posts, interact with others, and manage their profiles through a clean and responsive interface.

---

## *Objectives*

* Build a functional and user-friendly social media platform.
* Apply full-stack development concepts using *React, Node.js, and MongoDB*.
* Manage database operations through *Mongoose*.
* Implement collaborative development using *Git & GitHub*.

---

## *Tech Stack*

| Category              | Technologies Used                                |
| --------------------- | ------------------------------------------------ |
| *Frontend*          | React.js, Tailwind CSS, JavaScript (ES6+), Axios |
| *Backend*           | Node.js, Express.js                              |
| *Database*          | MongoDB, Mongoose                                |
| *Tools & Utilities* | VS Code, Git, GitHub, Postman, npm               |

---

## *Features*

* User Authentication (Login / Signup)
* Responsive and Modern UI
* CRUD operations for Posts
* Profile Management
* Session Handling with Cookies
* Error Handling & Validation
* Dark Mode
* Feed System

---

## *Folder Structure*


Sociofy/
│
├── backend/             # Server-side code (Node.js + Express)
│   ├── models/          # Mongoose Schemas
│   ├── routes/          # API Endpoints
│   ├── config/          # Database Configuration
│   └── server.js        # Main Server File
│
├── frontend/            # React Frontend
│   ├── src/             # React Source Files
│   │   ├── components/  # Reusable UI Components
│   │   ├── pages/       # Main Pages (Home, Profile, Login, Signup)
│   │   ├── assets/      # Images and Media
│   │   └── App.jsx      # Main Application File
│
├── report/              # Project Report
├── presentation/        # Presentation Slides
├── README.md            # Documentation File
└── package.json         # Dependencies List


---

## *Installation & Execution*

## **Docker Deployment Instructions **

### *1️⃣ Build & Start All Services*

From the project root:


docker-compose up --build


### *2️⃣ Run in Background*


docker-compose up -d


### *3️⃣ Stop Containers*


docker-compose down


### *4️⃣ Services Included*

* *MongoDB* (Persistent volume for data)
* *Backend* (Node.js API on port 3000)
* *Frontend* (Vite server on port 5173)

# Manual

### *1️⃣ Clone the Repository*


git clone https://github.com/<your-username>/sociofy.git
cd sociofy


---

### *2️⃣ Install Dependencies*

#### Root:


npm install


#### Backend:


cd backend
npm install


#### Frontend:


cd frontend
npm install


---

### *3️⃣ Setup Database*

Ensure MongoDB is running locally *or* use MongoDB Atlas by updating the backend configuration (config/db.js).

---

### *4️⃣ Run the Application*

#### Backend:


npm start


#### Frontend:


npm run dev


---

### *5️⃣ Open in Browser*

* *Frontend:* [http://localhost:5173](http://localhost:5173)
* *Backend API:* [http://localhost:3000](http://localhost:3000)