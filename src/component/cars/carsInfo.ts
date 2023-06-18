import { CarsInformation } from "src/type";

const allCarsInfo: CarsInformation = [
  {
    name: "Model Y",
    try: true,
    business: true,
    path: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop",
  },
  {
    name: "Model 3",
    try: true,
    business: true,
    path: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_2560,w_4096,c_fit,f_auto,q_auto:best/Homepage-Model-3-Desktop-LHD",
  },
  {
    name: "Model X",
    try: false,
    business: false,
    path: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD",
  },
  {
    name: "Model S",
    try: true,
    business: false,
    path: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/Model-S-homepage-desktop",
  },
];
export default allCarsInfo;
