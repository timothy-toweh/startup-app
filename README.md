# 🌱 GreenRoute CloudOps – DevOps Pitch Page

## 🌐 Live Demo  
**[http://3.86.200.129/](http://3.86.200.129/)**

## 📸 Screenshot  
![Rendered Page](./screenshot.png)

---

## 🧩 Project Overview

**GreenRoute CloudOps** is a cloud-native pitch page that showcases how **AI, DevOps**, and **sustainable logistics** can intersect.

Built with **Node.js** and styled using **TailwindCSS**, it features a responsive UI and a functional contact form that logs user-submitted messages.

Visitors can:
- Learn about the vision and background of **Timothy Oluwatoba Toweh**
- Discover skills and projects
- Submit messages via the web form

---

## 🚀 Deployment Process

 🔧 1. Cloud Server Setup
- **Platform:** Amazon EC2 (Ubuntu 22.04)  
- **Accessed via SSH:**
  ```bash
  ssh -i "key-example.pem" ubuntu@3.86.200.129
Installed essential tools:

bash

sudo apt update
sudo apt install nodejs npm nginx
sudo npm install -g pm2

🛠️ 2. Application Setup
Created a project directory: startup-app

Developed index.js to:

Serve static HTML from the /public folder

Handle POST /contact form submissions

Log messages to messages.log

Designed a clean UI using Tailwind via CDN in public/index.html

Example route:

js

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  const log = `[${new Date().toISOString()}] Name: ${name}, Email: ${email}\nMessage: ${message}\n\n`;
  fs.appendFileSync('messages.log', log);
  res.send('Message received!');
});


🌐 3. Web Server Configuration (Nginx)
Configured Nginx to reverse proxy traffic from port 80 to Node.js (port 3000).

Snippet from /etc/nginx/sites-enabled/default:

nginx

server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
Reloaded Nginx:

bash

sudo systemctl restart nginx


⚙️ 4. Running the App with PM2
Used PM2 to manage the Node.js process:

bash

pm2 start index.js --name index
pm2 save


📥 5. Contact Form Functionality
HTML form submits a POST request to /contact

Server logs messages both to:

Console (viewable with pm2 logs index)

messages.log on disk

Example message:

yaml

[2025-06-15T12:03:45Z] Name: John Doe, Email: john@example.com
Message: Hello! Great pitch.


✨ Author
Timothy Oluwatoba Toweh
Junior Cloud Engineer
Passionate about cloud infrastructure, green technology, and intelligent logistics systems.