# VideoFolio - Transform Your Resume into a Dynamic Video Portfolio

This README.md file provides a plan to build an application named VideoFolio that allows users to upload their Resume PDF file, parse it, and generate a dynamic video resume portfolio with the help of Google PALM (or ChatGPT) and other relevant technologies.

## Table of Contents

- [VideoFolio - Transform Your Resume into a Dynamic Video Portfolio](#videofolio---transform-your-resume-into-a-dynamic-video-portfolio)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Inspiration](#inspiration)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Getting Started](#getting-started)
  - [Application Workflow](#application-workflow)
  - [Future Enhancements](#future-enhancements)
  - [Contributing](#contributing)
  - [Code of Conduct](#code-of-conduct)
  - [License](#license)

## Introduction

VideoFolio is a groundbreaking application designed to address the challenges faced by job seekers, especially in the post-pandemic job market. With increased competition for job openings, standing out to recruiters has never been more critical. VideoFolio offers a creative solution by allowing users to transform their traditional resumes into engaging video resume portfolios that capture recruiters' attention. This project is currently bootstraped with Next 14.

## Inspiration

The inspiration behind VideoFolio is rooted in the challenging employment landscape created by the pandemic. Many individuals have faced job losses, leading to intensified competition for available job opportunities. VideoFolio was conceived as a tool to empower job seekers, enabling them to present their qualifications and experiences in a visually appealing and memorable way. By converting static resumes into dynamic video portfolios, VideoFolio equips users with a powerful means to differentiate themselves in the job market.

## Features

The application will have the following key features:

1. **Resume Upload:** Users can upload their Resume PDF files.

2. **Resume Parsing:** The application will parse the uploaded resume to extract key information, such as education, work experience, skills, and personal details.

3. **Question-Answering:** The server will ask questions based on predefined templates. For example, it will ask about the user's university, work experience, skills, etc.

4. **Generative AI:** The application will use Google PALM (or ChatGPT) to generate text-based answers to the questions.

5. **Image and Video Generation:** The answers generated by the AI will be used to create dynamic video clips with visual and text elements.

6. **Video Editing:** Users will have the option to customize their video portfolios by editing and rearranging video clips.

7. **Slideshow Creation:** Using FFmpeg or a similar tool, the application will compile the generated video clips into a seamless video presentation.

8. **Downloadable Video Portfolio:** Users will be able to download the final video resume portfolio in common video formats (e.g., MP4).

## Technologies

The following technologies and tools will be used to build the application:

- **Frontend:**

  - Next.js (React-based framework)
  - File upload component
  - User interface for answering questions and editing videos

- **Backend:**

  - Next.js API Server (for building the server)
  - Google PALM or ChatGPT API
  - Video editing libraries (e.g., FFmpeg)
  - Cloud-based video rendering services

- **Database:**

  - PostgreSQL (or another suitable relational database for user data storage)
  - Database for storing user information and generated video portfolios

- **Deployment and Hosting:**
  - Vercel (for hosting Next.js frontend and API server)
  - Satori (or alternative image generation service)
  - Docker (for containerization, optional)

## Getting Started

To run the application locally or deploy it, follow these general steps:

1. Clone the repository to your local machine.

2. Set up the Next.js frontend and Next.js API Server environments, installing necessary dependencies.

3. Configure the API keys for Google PALM or ChatGPT, video rendering services, and other services.

4. Run the application locally for development.

5. Deploy the application to Vercel for hosting.

## Application Workflow

Here is a simplified workflow of how the application will operate:

1. User uploads a resume PDF.

2. The backend parses the PDF to extract relevant information.

3. The server generates questions based on templates (e.g., "Which university did you study at?").

4. The user answers the questions through the frontend interface.

5. The answers are sent to Google PALM or ChatGPT for text generation.

6. The generated text is used to create dynamic video clips with visual and text elements.

7. Users can edit and customize the video clips to create a unique video portfolio.

8. The video clips are compiled into a seamless video presentation using FFmpeg or similar tools.

9. The user can download the final video resume portfolio.

## Future Enhancements

Some potential future enhancements for the VideoFolio application include:

- User authentication and accounts for storing previous video portfolios.
- Integration with social media and job posting platforms for direct video portfolio sharing.
- Advanced video editing features, including transitions and effects.
- Real-time collaboration for remote job seekers and employers.
- Support for additional document formats beyond PDF.

## Contributing

Contributions to this project are welcome. Please follow the [Contribution Guidelines](CONTRIBUTING.md) when making changes.

## Code of Conduct

Please review our [Code of Conduct](CODE_OF_CONDUCT.md) to understand the behavior we expect from all contributors and users of this project.

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE) - see the [LICENSE](LICENSE) file for details.
