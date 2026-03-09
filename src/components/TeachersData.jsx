
import React, { useState } from "react";

/* ARRAYS (UNCHANGED) */

const management = [
{
name: "Smt.Katyayani Hegdekatte",
qualification: "M.A., B.Ed",
designation: "Principal"
},
{
name: "Sri. Veeresh Murari",
qualification: "M.Sc., M.Phil, M.L.I.Sc, B.Ed",
designation: "Manager"
},
{
name: "Smt. Kavya",
qualification: "M.Sc., B.Ed",
designation: "Vice Principal"
}
];

const teachingStaff = [
{id:1,name:"Smt. Tanuja",qualification:"M.A., B.Ed",designation:"TGT"},
{id:2,name:"Smt. Suma Purad",qualification:"M.A., B.Ed",designation:"TGT"},
{id:3,name:"Smt. Renuka",qualification:"M.Sc., B.Ed",designation:"TGT"},
{id:4,name:"Smt. Rajalakshmi",qualification:"M.A., B.Ed",designation:"TGT"},
{id:5,name:"Smt. Neelamma",qualification:"B.Com., B.Ed",designation:"TGT"},
{id:6,name:"Smt. Mamata Singh Thakur",qualification:"B.A., B.Ed",designation:"TGT"},
{id:7,name:"Sri. Ravindra",qualification:"M.A., B.Ed",designation:"TGT"},
{id:8,name:"Smt. Sumitramma",qualification:"B.A., B.Ed",designation:"TGT"},
{id:9,name:"Smt. Shambhavi Devi",qualification:"M.A., B.Ed",designation:"TGT"},
{id:10,name:"Smt. Varija T.V",qualification:"M.A., B.Ed",designation:"TGT"},
{id:11,name:"Smt. Laxmi",qualification:"M.A., B.Ed",designation:"TGT"},
{id:12,name:"Sri. Janardhana",qualification:"M.A., B.Ed",designation:"TGT"},
{id:13,name:"Sri. Vasant Kumar T",qualification:"B.Sc., B.Ed",designation:"TGT"},
{id:14,name:"Smt. Jyothi Lakshmi",qualification:"M.Sc., B.Ed",designation:"TGT"},
{id:15,name:"Smt. Shruthi K",qualification:"M.Sc., B.Ed",designation:"TGT"},
{id:16,name:"Smt. Mamatha",qualification:"M.Sc., M.Ed",designation:"TGT"},
{id:17,name:"Smt. Rachana Solanki",qualification:"M.Com., B.Ed",designation:"TGT"},
{id:18,name:"Smt. Rajeswari K",qualification:"M.Sc., B.Ed",designation:"TGT"},
{id:19,name:"Smt. Rajeshwari B",qualification:"B.A., B.Ed",designation:"TGT"},
{id:20,name:"Smt. Mangalagouri",qualification:"B.A., B.Ed",designation:"TGT"},

{id:21,name:"Smt. Vijayalaxmi Deshpande",qualification:"B.A., D.Ed",designation:"PRT"},
{id:22,name:"Smt. Lata",qualification:"B.A., D.Ed",designation:"PRT"},
{id:23,name:"Sri. Mohammed Salman Hyder",qualification:"D.CE, B.Com",designation:"PRT"},
{id:24,name:"Smt. Deepa Deshpande",qualification:"B.A., D.Ed",designation:"PRT"},

{id:25,name:"Sri. Amaresh G.S",qualification:"Diploma in Painting",designation:"Art & Craft"},
{id:26,name:"Sri. Ashok",qualification:"M.A. Fine Art",designation:"Art & Craft"},
{id:27,name:"Sri. Amaresh P",qualification:"MFA",designation:"Art & Craft"},

{id:28,name:"Miss Deepa",qualification:"B.Com., C.P.Ed (M.P.Ed)",designation:"P.T.I"},
{id:29,name:"Sri. Vajeer Miya",qualification:"B.A., B.P.Ed",designation:"P.T.I"},
{id:30,name:"Sri. Shekhrappa",qualification:"M.L.I.Sc",designation:"Librarian"},

{id:31,name:"Smt. Poornima K",qualification:"M.A., B.Ed",designation:"TGT"},
{id:32,name:"Smt. Prabhavathi",qualification:"B.A., B.Ed",designation:"TGT"},
{id:33,name:"Smt. Shivaranjini Y",qualification:"M.Sc., B.Ed",designation:"TGT"},
{id:34,name:"Sri. Lalappa",qualification:"M.A., B.Ed",designation:"TGT"},

{id:35,name:"Smt. Deepika Gowda",qualification:"MCA",designation:"ICT Teacher"},
{id:36,name:"Smt. Jyothi R E",qualification:"B.E (CS)",designation:"PRT"},
{id:37,name:"Smt. Akhila Kulkarni",qualification:"B.Sc, B.Ed",designation:"TGT"},
{id:38,name:"Smt. Eramma",qualification:"B.A, B.P.Ed",designation:"P.T.I"},
{id:39,name:"Sri. Zahid Hussain",qualification:"B.Sc (MA)",designation:"PRT"},
{id:40,name:"Smt. Radhika Bai",qualification:"M.A, B.Ed",designation:"TGT"},
{id:41,name:"Smt. Lakshmi Jukur",qualification:"M.Com",designation:"PRT"},
{id:42,name:"Miss K G Deepika",qualification:"M.Sc, B.Ed",designation:"TGT"},
{id:43,name:"Miss Marry Anantamma",qualification:"M.A",designation:"TGT"},
{id:44,name:"Smt. Gangamma",qualification:"M.A, B.Ed",designation:"TGT"},
{id:45,name:"Miss N Pooja",qualification:"M.Sc",designation:"PRT"},
{id:46,name:"Smt. Aliya Banu",qualification:"M.Sc",designation:"PRT"},
{id:47,name:"Miss Anitha",qualification:"BCA",designation:"PRT"},
{id:48,name:"Smt. Archana",qualification:"M.A, MBA, B.Ed",designation:"TGT"},
{id:49,name:"Smt. Eishwari Vidya",qualification:"B.Com, D.Ed",designation:"PRT"},
{id:50,name:"Smt. Mala",qualification:"B.A, D.Ed",designation:"PRT"},
{id:51,name:"Smt. Shruthi Manjunath",qualification:"BCA, B.A",designation:"PRT"},

{id:52,name:"Sri. Srinivas",qualification:"B.A, M.SW",designation:"Dance Teacher"},
{id:53,name:"Smt. Vidyavati C",qualification:"M.A Music",designation:"Music Teacher"},
{id:54,name:"Smt. B. Kavitha",qualification:"M.A Music",designation:"Music Teacher"},

{id:55,name:"Smt. Rashi Kapoor",qualification:"M.Sc",designation:"TGT"},
{id:56,name:"Sri. Syed Shahed Quadri",qualification:"M.Sc., B.Ed",designation:"TGT"},
{id:57,name:"Sri. Srinath Hiremath",qualification:"M.Sc, B.Ed",designation:"TGT"},
{id:58,name:"Sri. Anand Alur",qualification:"M.C.A, B.A (Sanskrit)",designation:"Sanskrit Teacher"}
];

const nonTeachingStaff = [
{
id: 1,
name: "Sri. Purushotham Kallurkar",
qualification: "B.Com",
designation: "Clerk"
},
{
id: 2,
name: "Smt. Archana",
qualification: "M.Com",
designation: "Clerk"
},
{
id: 3,
name: "Miss. Basamma",
qualification: "M.Com",
designation: "Clerk"
},
{
id: 4,
name: "Sri. Ravi",
qualification: "Supporting Staff",
designation: "Attender"
},
{
id: 5,
name: "Sri. Sharath Kumar",
qualification: "Supporting Staff",
designation: "Attender"
},
{
id: 6,
name: "Smt. Lakshmi.A",
qualification: "Supporting Staff",
designation: "Aaya"
},
{
id: 7,
name: "Smt. Sujatha",
qualification: "Supporting Staff",
designation: "Aaya"
},
{
id: 8,
name: "Smt. Lakshmi",
qualification: "Supporting Staff",
designation: "Aaya"
},
{
id: 9,
name: "Smt. Nagamma",
qualification: "Supporting Staff",
designation: "Aaya"
},
{
id: 10,
name: "Smt. Saraswati",
qualification: "Supporting Staff",
designation: "Aaya"
},
{
id: 11,
name: "Smt. Aarathi",
qualification: "Supporting Staff",
designation: "Aaya"
},
{
id: 12,
name: "Smt. Sujata. M",
qualification: "Supporting Staff",
designation: "Aaya"
},
{
id: 13,
name: "Smt. Urkundamma",
qualification: "Supporting Staff",
designation: "Aaya"
},
{
id: 14,
name: "Smt. Jyoti",
qualification: "Supporting Staff",
designation: "Aaya"
}
];

export default function StaffPage(){

const [popupType,setPopupType] = useState(null);

return (

<section className="py-16 bg-gray-50">
<div className="max-w-6xl mx-auto px-6">

{/* MANAGEMENT */}

<h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
Teachers Details
</h2>

<div className="grid md:grid-cols-3 gap-6 mb-12">

{management.map((person,index)=>(
<div key={index} className="bg-white p-6 rounded-xl shadow text-center">

<div className="w-20 h-20 mx-auto rounded-full bg-indigo-100 flex items-center justify-center text-2xl mb-4">
<img  className="w-full h-full object-cover" src="https://www.creativefabrica.com/wp-content/uploads/2022/06/02/Client-employee-business-man-icon-Graphics-31597820-1.jpg" alt="" />
</div>

<h3 className="font-semibold text-lg">{person.name}</h3>

<p className="text-gray-500 text-sm">{person.qualification}</p>

<p className="text-indigo-600 text-sm font-medium">
{person.designation}
</p>

<button
onClick={()=>setSelectedStaff(person)}
className="mt-3 bg-indigo-600 text-white px-4 py-1 rounded text-sm"
>
View Details
</button>

</div>
))}

</div>

{/* BUTTONS */}

<div className="flex justify-center gap-6 mb-10">

<button
onClick={()=>setPopupType("teaching")}
className="px-6 py-3 bg-indigo-600 text-white rounded-lg"
>
Teaching Staff
</button>

<button
onClick={()=>setPopupType("nonteaching")}
className="px-6 py-3 bg-gray-700 text-white rounded-lg"
>
Non Teaching Staff
</button>

</div>

{/* TEACHING STAFF */}


{popupType && (

<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

<div className="bg-white rounded-xl shadow-lg w-[900px] h-[80vh] flex flex-col relative">

{/* HEADER (FIXED) */}
<div className="flex justify-between items-center p-6 border-b">

<h2 className="text-2xl font-bold">

{popupType === "teaching"
? "Teaching Staff"
: "Non Teaching Staff"}

</h2>

<button
onClick={()=>setPopupType(null)}
className="text-xl font-bold"
>
✕
</button>

</div>

{/* SCROLLABLE CONTENT */}
<div className="overflow-y-auto p-6 flex-1">

<div className="grid md:grid-cols-2 gap-4">

{(popupType === "teaching"
? teachingStaff
: nonTeachingStaff
).map((staff,index)=>(

<div
key={index}
className="bg-gray-50 border rounded-lg p-4 flex gap-4"
>

<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
<img className="w-full h-full object-cover" src="https://www.creativefabrica.com/wp-content/uploads/2022/06/02/Client-employee-business-man-icon-Graphics-31597820-1.jpg" alt="" />
</div>

<div>

<h3 className="font-semibold">
{staff.name}
</h3>

<p className="text-sm text-gray-500">
{staff.qualification}
</p>

<p className="text-indigo-600 text-sm">
{staff.designation}
</p>

</div>

</div>

))}

</div>

</div>

</div>

</div>

)}
{/* NON TEACHING STAFF */}



</div>

{/* POPUP MODAL */}


</section>

);
}

