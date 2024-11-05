import covid from './covid.svg'
import heart from './lungs.svg'
import suppliment from './suppliment.svg'
import mental_health from './mental_health.svg'

import { SiTicktick } from "react-icons/si";


export const abouts = [
  {
    id: 1,
    count: "24/7",
    facility: "Online Support",
  },
  {
    id: 2,
    count: "100+",
    facility: "Doctors",
  },
  {
    id: 3,
    count: "1M+",
    facility: "Active Patients",
  },
];

export const specialists = [
  {
    id: 1,
    icon: covid,
    speciality: "Covid-19 Test",
    desc: "Trained to administer accurate and reliable testing for the detection of the SARS-CoV-2 virus.",
  },
  {
    id: 2,
    icon: heart,
    speciality: "Heart Lungs",
    desc: "Dedicated to diagnosing and managing conditions related to the cardiovascular and respiratory systems.",
  },
  {
    id: 3,
    icon: suppliment,
    speciality: "Suppliment",
    desc: "Provides expert advice on selecting and using dietary supplements to support your health and wellness goals.",
  },
  {
    id: 4,
    icon: mental_health,
    speciality: "mental health",
    desc: " committed to supporting emotional and psychological well-being with expertise in a range of mental health conditions.",
  },
];


export const chooseUs = [
    'Skilled specialists in health, wellness, and more, offering personalized care.',
    'Custom plans designed to meet your unique needs.',
    'Reliable, experienced professionals you can count on.',
    'We focus on your overall well-being, not just symptoms.',
    'Access to the latest treatments and technologies for optimal results.'
]