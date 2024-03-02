# A Personalized Twitch Resources Recommendation Engine

## Overview

This project is a full-stack web application designed for users to search Twitch resources (streams/videos/clips) and get personalized recommendations. The project aims to enhance user experience by providing a rich and user-friendly interface, leveraging modern web technologies and recommendation algorithms.

## Technical Stack

- **Frontend:** **React** for frontend framework, **Ant Design** for UI components

- **Backend:** **Spring Boot** for RESTful API implementation, managed with Gradle

- **Database:** AWS RDS for storing user data and Twitch resources, primarily using **MySQL**

- **API:** Twitch API for real-time resources

- **Deployment:** **AWS EC2** for hosting the application backend

## Features

- User account management including login/logout and favorites collection. [Login/Logout Video Demo](https://youtu.be/yifo_BOlCtI)

- Search functionality for Twitch resources such as streams, videos, and clips. [Search Resources Video Demo](https://youtu.be/z4U5BlgOqfA)

- Personalized content recommendation based on user preferences. [Recommendation Video Demo: From Random Recommendation to League of Legends Focused Recommendation](https://youtu.be/fU_SjH2sdE0)

- Responsive web design for a seamless experience across different devices.

## Technical Highlights

### Recommendation Algorithm

- **Personalized for Users:** Tailors recommendations based on user behavior for logged-in users, and popular trends for guests, ensuring relevancy and engagement.

- **Content-Based Approach:** Analyzes Twitch content characteristics, delivering recommendations that match user preferences, enriched by real-time Twitch API data.

### Integration and Architecture

- **Real-time Twitch API:** Ensures content freshness and relevance, providing users with the latest Twitch resources.
- **Advanced User Authentication:** Utilizes Spring Security for robust login/logout functionalities, pivotal for personalizing content and securing user data.
- **Responsive Web Design:** Guarantees a uniform and high-quality user experience across all devices, using modern web development techniques.

- **Cloud-based Architecture:** Employs AWS EC2 for hosting and RDS for database management, facilitating scalable and reliable operations.

- **Efficient Data Management:** Leverages AWS RDS with MySQL, optimizing the storage and retrieval of user data and Twitch resources for swift recommendations.

- **Gradle for Build Management:** Utilizes Gradle for dependency management and build automation, enhancing the development workflow.

## Getting Started

### Prerequisites

- JDK 17 or later

- Node.js and npm

- MySQL

- AWS account for deployment

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Jiawei9904/twitch_recommendation_engine.git
```

2. Navigate to the project directory and install dependencies:

```bash
cd Twitch Frontend
npm install

cd ../Twitch Backend
// Setup Java project dependencies via your IDE or Maven/Gradle
```

3. Set up your MySQL database and update the application.properties file with your database credentials.

4. Run the backend server (ensure you're in the backend directory):

```bash
java -jar twitch-plus.jar
```

5. Start the frontend application:

```bash
cd ../Twitch Frontend
npm start
```

### Additional Notes

- **For Local Testing:** Remember to update the frontend's proxy settings to point to your local server.

- **Using Deployed EC2 Instance:** If you wish to test using the developer's already deployed EC2 instance, please contact the developer at the email provided in the Contact section for access and additional information.

## Acknowledgments

- Thanks to the Twitch API for providing a rich set of resources.

- Appreciation for Ant Design for their excellent UI components.

## Contact

For any queries or further information, please reach out to me at:

Email: jiaweiguo429@gmail.com
