# Store_It

Store_It is a web application built using Next.js that allows users to securely upload, manage, and share their files. It was created to solve the problem of managing personal or organizational files efficiently and includes features such as file categorization, sharing, and storage usage tracking.

## Tech Stack

- **Frontend**: Next.js, React
- **Backend**: Node.js, Appwrite
- **Database**: Appwrite Database
- **Others**: TailwindCSS, Radix UI, Recharts, Zustand, TypeScript

## Features

- **File Upload**: Upload files with a size limit of 50MB.
- **File Management**: Categorize files into documents, images, media, and others.
- **Sharing**: Share files with other users via email.
- **Storage Tracking**: View storage usage and remaining space.
- **Sorting and Searching**: Sort files by name, size, or date and search for specific files.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Installation Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/drave-coding/store_up
   cd store_it
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the following variables:
     ```
     NEXT_PUBLIC_APPWRITE_ENDPOINT=<Appwrite Endpoint>
     NEXT_PUBLIC_APPWRITE_PROJECT=<Appwrite Project ID>
     NEXT_PUBLIC_APPWRITE_DATABASE=<Appwrite Database ID>
     NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=<Files Collection ID>
     NEXT_PUBLIC_APPWRITE_BUCKET=<Bucket ID>
     NEXT_APPWRITE_SECRET=<Appwrite Secret Key>
     ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage Instructions

1. **Sign In**: Log in to your account to access the dashboard.
2. **Upload Files**: Use the "Upload" button to add files to your storage.
3. **Manage Files**: View, rename, delete, or share files from the dashboard.
4. **Track Usage**: Check your storage usage and remaining space in the dashboard.

## Folder Structure

```
store_it/
├── app/                # Next.js app directory
│   ├── (root)/         # Main application pages
│   ├── (auth)/         # Authentication-related pages
│   └── globals.css     # Global styles
├── components/         # Reusable UI components
├── constants/          # Application constants
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and Appwrite configurations
├── public/             # Static assets
├── styles/             # Additional styles
├── types/              # TypeScript type definitions
├── .env.local          # Environment variables (not included in the repo)
└── README.md           # Project documentation
```

## Demo

- **Live Demo**: [https://store-it.vercel.app](https://store-up-nine.vercel.app)
- **Screenshots**:
  ![Landing Page Screenshot](https://github.com/user-attachments/assets/ef1e07fa-5730-46c6-a241-2d4ef106db94)
  ![Dashboard](https://github.com/user-attachments/assets/02d46bc6-ebd7-4ca9-bf4b-762d3ce45048)

  

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
