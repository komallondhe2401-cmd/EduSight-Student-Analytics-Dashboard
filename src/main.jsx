import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import {LayoutDashboard,Users,GraduationCap,AlertTriangle,Search,Menu,Activity} from "lucide-react";
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,PieChart,Pie,Cell,LineChart,Line} from "recharts";
import "./styles.css";

const students=[
{id:1001,name:"Aarav Sharma",dept:"Computer",attendance:91,gpa:8.4,risk:"Low",stress:3},
{id:1002,name:"Isha Patel",dept:"Computer",attendance:72,gpa:7.1,risk:"Medium",stress:6},
{id:1003,name:"Rohan Mehta",dept:"IT",attendance:61,gpa:6.2,risk:"High",stress:8},
{id:1004,name:"Sneha Joshi",dept:"Computer",attendance:88,gpa:8.0,risk:"Low",stress:4},
{id:1005,name:"Vivek Shah",dept:"Mechanical",attendance:69,gpa:6.8,risk:"Medium",stress:7},
{id:1006,name:"Ananya Rao",dept:"IT",attendance:94,gpa:9.0,risk:"Low",stress:2},
{id:1007,name:"Kabir Singh",dept:"Civil",attendance:55,gpa:5.9,risk:"High",stress:9},
{id:1008,name:"Diya Nair",dept:"Computer",attendance:81,gpa:7.7,risk:"Low",stress:5}
];
const deptData=[{name:"Computer",value:4},{name:"IT",value:2},{name:"Mechanical",value:1},{name:"Civil",value:1}];
const trend=[{month:"Jan",gpa:6.9},{month:"Feb",gpa:7.1},{month:"Mar",gpa:7.2},{month:"Apr",gpa:7.5},{month:"May",gpa:7.7},{month:"Jun",gpa:7.9}];
const riskData=[{name:"Low",value:4},{name:"Medium",value:2},{name:"High",value:2}];

function App(){
 const [page,setPage]=useState("Overview"); const [q,setQ]=useState(""); const [dept,setDept]=useState("All");
 const filtered=students.filter(s=>(dept==="All"||s.dept===dept)&&s.name.toLowerCase().includes(q.toLowerCase()));
 return <div className="app">
  <aside><div className="brand"><Activity/> EduSight</div>
   {["Overview","Students","Risk Analysis","Performance"].map(x=><button className={page===x?"nav active":"nav"} onClick={()=>setPage(x)} key={x}>{x==="Overview"?<LayoutDashboard/>:x==="Students"?<Users/>:x==="Risk Analysis"?<AlertTriangle/>:<GraduationCap/>}{x}</button>)}
   <div className="sideNote"><b>Student Analytics</b><span>ML-powered academic insights</span></div>
  </aside>
  <main><header><button className="mobile"><Menu/></button><div><h1>{page}</h1><p>Monitor student performance and dropout risk</p></div><div className="headerTag">Live Dashboard</div></header>
   {page==="Overview"&&<Overview/>}
   {page==="Students"&&<Students filtered={filtered} q={q} setQ={setQ} dept={dept} setDept={setDept}/>}
   {page==="Risk Analysis"&&<Risk/>}
   {page==="Performance"&&<Performance/>}
  </main>
 </div>
}
function Cards(){return <div className="cards">{[
["Total Students","2,000","+8.2%","👥"],["Average GPA","7.52","+4.6%","🎓"],["At-Risk Students","18.4%","-2.1%","⚠️"],["Avg Attendance","82.7%","+3.8%","📊"]].map(([a,b,c,d])=><div className="card" key={a}><div className="cardTop"><span>{a}</span><b>{d}</b></div><strong>{b}</strong><small>{c} vs last semester</small></div>)}</div>}
function Overview(){return <><Cards/><div className="grid2"><section className="panel"><h2>GPA Trend</h2><ResponsiveContainer width="100%" height={250}><LineChart data={trend}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="month"/><YAxis domain={[6,9]}/><Tooltip/><Line type="monotone" dataKey="gpa" strokeWidth={3}/></LineChart></ResponsiveContainer></section><section className="panel"><h2>Dropout Risk Distribution</h2><ResponsiveContainer width="100%" height={250}><PieChart><Pie data={riskData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={85} label>{riskData.map((e,i)=><Cell key={i}/>)}</Pie><Tooltip/></PieChart></ResponsiveContainer><div className="legend">Low: 50% · Medium: 25% · High: 25%</div></section></div><section className="panel"><h2>Recent Students Requiring Attention</h2><StudentTable rows={students.filter(s=>s.risk==="High")}/></section></>}
function Students({filtered,q,setQ,dept,setDept}){return <section className="panel"><div className="toolbar"><div className="search"><Search/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search student..."/></div><select value={dept} onChange={e=>setDept(e.target.value)}><option>All</option><option>Computer</option><option>IT</option><option>Mechanical</option><option>Civil</option></select></div><StudentTable rows={filtered}/></section>}
function StudentTable({rows}){return <div className="tableWrap"><table><thead><tr><th>ID</th><th>Student</th><th>Department</th><th>Attendance</th><th>GPA</th><th>Risk</th></tr></thead><tbody>{rows.map(s=><tr key={s.id}><td>{s.id}</td><td><b>{s.name}</b></td><td>{s.dept}</td><td>{s.attendance}%</td><td>{s.gpa}</td><td><span className={"pill "+s.risk.toLowerCase()}>{s.risk}</span></td></tr>)}</tbody></table></div>}
function Risk(){return <><div className="alert"><AlertTriangle/><div><b>Risk model insight</b><p>Low attendance, high stress and lower academic performance are the strongest warning signals in this sample.</p></div></div><div className="grid2"><section className="panel"><h2>Risk by Student</h2><ResponsiveContainer width="100%" height={300}><BarChart data={students}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="name" hide/><YAxis/><Tooltip/><Bar dataKey="stress" name="Stress score"/></BarChart></ResponsiveContainer></section><section className="panel"><h2>Recommended Actions</h2><ul className="actions"><li>Contact students with high predicted risk.</li><li>Track attendance below 70% weekly.</li><li>Offer academic support when GPA falls below 6.5.</li><li>Monitor stress and workload indicators.</li></ul></section></div></>}
function Performance(){return <><Cards/><section className="panel"><h2>Department Distribution</h2><ResponsiveContainer width="100%" height={320}><BarChart data={deptData}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="name"/><YAxis/><Tooltip/><Bar dataKey="value" name="Students"/></BarChart></ResponsiveContainer></section></>}
createRoot(document.getElementById("root")).render(<App/>);