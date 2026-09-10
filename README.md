# 🎓 EduSight – Student Analytics Dashboard

**EduSight** is a responsive student analytics dashboard built with **React JS** that provides an interactive interface for monitoring student performance, attendance, GPA trends, and dropout-risk indicators.

The project is designed to demonstrate practical frontend development, data visualization, dashboard design, filtering, and component-based development using React.

---

## 📌 Project Overview

Educational institutions often have large amounts of student data such as:

* Academic performance
* Attendance
* GPA
* Stress levels
* Department
* Dropout-risk indicators

Analyzing this information manually can make it difficult to identify students who may require additional academic support.

EduSight provides a centralized dashboard where student-related information can be visualized through interactive charts, KPI cards, tables, filters, and risk indicators.

The current version uses sample data and provides the frontend foundation for connecting a machine-learning prediction API in the future.


![alt text](<Screenshot 2026-09-10 155122.png>)


![alt text](<Screenshot 2026-09-10 155142.png>)
---

## ✨ Features

### 📊 Dashboard Overview

The main dashboard provides:

* Total number of students
* Average GPA
* At-risk student percentage
* Average attendance
* GPA trend visualization
* Dropout-risk distribution
* Students requiring attention

### 👨‍🎓 Student Management

The Students section provides:

* Student listing
* Student ID
* Student name
* Department
* Attendance
* GPA
* Risk level
* Search functionality
* Department filtering

### ⚠️ Risk Analysis

The Risk Analysis section provides:

* Student risk indicators
* Stress-level visualization
* Risk-based insights
* Recommended intervention actions

![alt text](<Screenshot 2026-09-10 195642.png>)


### 📈 Performance Analytics

The Performance section provides:

* Academic KPI cards
* Department-wise student distribution
* Interactive charts

![alt text](<Screenshot 2026-09-10 195050.png>)


### 📱 Responsive Design

The dashboard is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile screens

---

## 🛠️ Technologies Used

### Frontend

* **React JS**
* **JavaScript**
* **HTML5**
* **CSS3**

### Development Tools

* **Vite**
* **VS Code**
* **npm**

### Libraries

* **Recharts** – Interactive data visualization
* **Lucide React** – UI icons

---

## 🏗️ Project Structure

```text
student_analytics_react/
│
├── src/
│   ├── main.jsx
│   └── styles.css
│
├── index.html
├── package.json
├── README.md
└── node_modules/
```

### Important Files

**`src/main.jsx`**

Contains:

* React application
* Dashboard components
* Student data
* Charts
* Navigation
* Search and filtering functionality
* Risk analysis

**`src/styles.css`**

Contains:

* Dashboard layout
* Sidebar
* Cards
* Tables
* Charts layout
* Responsive design
* Mobile styling

**`package.json`**

Contains:

* Project dependencies
* Development scripts
* React configuration

---

# 📊 Dashboard Modules

## 1. Overview

The Overview page displays the most important student statistics in one place.

Example KPIs:

```text
Total Students       2,000
Average GPA          7.52
At-Risk Students     18.4%
Avg Attendance       82.7%
```

It also includes:

* GPA trend chart
* Dropout-risk distribution
* Students requiring attention

---

## 2. Students

The Students page provides a searchable and filterable student table.

Users can:

* Search students by name
* Filter students by department
* View attendance
* View GPA
* View risk category

Risk categories include:

* Low
* Medium
* High

---

## 3. Risk Analysis

The Risk Analysis page helps identify students who may require intervention.

The dashboard considers indicators such as:

* Attendance
* GPA
* Stress level
* Risk category

The page also provides recommended actions such as:

* Contacting high-risk students
* Monitoring attendance
* Providing academic support
* Monitoring student workload and stress indicators

---

## 4. Performance

The Performance page provides additional academic insights and department-level analysis.

Interactive charts make it easier to understand student distribution and performance patterns.

---

# 🤖 Future Machine Learning Integration

The frontend is designed so that it can later be connected to a Python machine-learning backend.

A possible architecture is:

```text
React JS Dashboard
        │
        │ HTTP / REST API
        ▼
   FastAPI / Flask
        │
        ▼
Machine Learning Model
        │
        ▼
Student Risk Prediction
```

The backend could receive student information such as:

```text
Stress Level
Anxiety Score
Depression Score
Sleep Hours
Burnout Score
Academic Performance
Financial Stress
Family Expectation
Social Support
```

The ML model could then return:

```text
Predicted Risk
Risk Percentage
Risk Category
Recommendations
```

These results could be displayed dynamically inside the React dashboard.

---

# 🔮 Future Improvements

The project can be extended with:

* [ ] FastAPI backend
* [ ] Scikit-Learn prediction API
* [ ] Real student dataset
* [ ] Login and authentication
* [ ] Admin dashboard
* [ ] Student profile pages
* [ ] Real-time API data
* [ ] Advanced filtering
* [ ] CSV/Excel upload
* [ ] Export reports as PDF
* [ ] Dark mode
* [ ] ML-based dropout prediction
* [ ] Personalized student recommendations

---

# 🎯 Learning Outcomes

This project demonstrates practical knowledge of:

* React component development
* React state management
* JavaScript
* Responsive web design
* Dashboard development
* Data visualization
* Chart integration
* Search and filtering
* UI/UX design
* Frontend project structure
* Vite development workflow
* Preparing a frontend for ML API integration

---


