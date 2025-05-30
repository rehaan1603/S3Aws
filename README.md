# S3Aws – Static Website Hosting on AWS S3

This project demonstrates how to host a static website using Amazon S3 with a basic HTML file.

## 🌐 Live Demo

http://rehaansbucket.s3-website.eu-north-1.amazonaws.com

## 🛠️ Tools Used

- AWS S3 (Simple Storage Service)
- HTML5 & CSS3
- AWS Management Console

## 📁 Project Structure
```bash
S3Aws/
├── index.html
├── error.html (optional)
└── README.md
```

## 🌐 Live Demo

Once deployed, your website will be accessible at:  
http://your-bucket-name.s3-website-your-region.amazonaws.com

## 🛠️ Tools Used

- AWS S3 (Simple Storage Service)
- HTML5 & CSS3
- AWS Management Console

## 🚀 How to Deploy

### 1. Create a New S3 Bucket

- Go to AWS Console → S3 → Create Bucket
- Enter a unique bucket name
- Choose a region
- Uncheck "Block all public access"
- Acknowledge the warning and create the bucket

### 2. Upload Website Files

- Upload index.html (and error.html if you have one)

### 3. Set Bucket Policy for Public Access

- Go to the Permissions tab → Edit Bucket Policy
- Paste the following (replace your-bucket-name with your actual bucket name):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```
### 4. Enable Static Website Hosting

- Go to the Properties tab → Scroll to Static website hosting
- Click Edit → Enable
- Set:
  - Index document: index.html
  - Error document (optional): error.html
- Click Save changes

### 5. Access Your Website

- Go to the Static website hosting section again
- Copy the "Bucket website endpoint" URL(http://rehaansbucket.s3-website.eu-north-1.amazonaws.com)
- Open it in your browser — your static website is now live! 🎉


