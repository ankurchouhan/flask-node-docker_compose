# 🚀 Flask + Node.js Docker Compose Deployment

This project demonstrates deploying a **Node.js (Express) Frontend** and a **Flask Backend** using **Docker Compose**.  
The frontend provides a form that sends data to the backend API, which processes and returns a JSON response.

---

## 🧩 Project Overview

This application consists of:
- 🖥️ **Frontend:** Built using **Node.js (Express)** — hosts a web form and communicates with the backend  
- 🧠 **Backend:** Built using **Flask (Python)** — processes incoming data and returns results  
- 🐳 **Docker Compose:** Connects both services in the same network for easy local orchestration  

---

## 📸 Screenshots

| Frontend | Backend API | Docker Containers |
|-----------|--------------|------------------|
| ![Frontend UI](images/Screenshot%202025-12-10%20231740.png) | ![API Response](images/Screenshot%202025-12-10%20231842.png) | ![Docker Containers Running](images/Screenshot%202025-12-10%20232404.png) |

---

### 🔧 More Interface Previews

| Form Submission | JSON Response | Logs | Network |
|------------------|----------------|------|----------|
| ![Form Submission](images/Screenshot%202025-12-10%20232420.png) | ![API JSON Response](images/Screenshot%202025-12-10%20232614.png) | ![Logs](images/Screenshot%202025-12-10%20232628.png) | ![Network Overview](images/Screenshot%202025-12-10%20232749.png) |

---

| Docker Compose Build | Containers Running |
|-----------------------|--------------------|
| ![Docker Compose Build](images/Screenshot%202025-12-10%20232809.png) | ![Containers Up](images/Screenshot%202025-12-10%20232829.png) |
| ![Final Setup](images/Screenshot%202025-12-10%20233421.png) |  |

---

## 🧱 Tech Stack

| Component | Technology |
|------------|-------------|
| Frontend | Node.js + Express |
| Backend | Flask (Python) |
| Containerization | Docker & Docker Compose |

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/ankurchouhan/flask-node-docker_compose.git
cd flask-node-docker_compose

# Build and start services
docker-compose up --build
