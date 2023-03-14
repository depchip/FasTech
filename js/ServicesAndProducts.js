const services = [
  {
    serviceName: "Network Design & Implementation",
    serviceType: "IT Service",
    serviceImage: "../images/network_service.jpg",
    serviceDetails: "network.html",
  },
  {
    serviceName: "Cloud Computing Solutions",
    serviceType: "IT Service",
    serviceImage: "../images/cloud_service.jpg",
    serviceDetails: "cloud.html",
  },

  {
    serviceName: "Data center Solutions",
    serviceType: "IT Service",
    serviceImage: "../images/data_service.jpg",
    serviceDetails: "data.html",
  },
  {
    serviceName: "ECP Projects",
    serviceType: "Electrical Services",
    serviceImage: "../images/ecp_service.jpg",
    serviceDetails: "ecp.html",
  },

  {
    serviceName: "Camera Installation",
    serviceType: "Electrical Services",
    serviceImage: "../images/camera_service.png",
    serviceDetails: "camera.html",
  },
  {
    serviceName: "Solar Installation",
    serviceType: "Electrical Services",
    serviceImage: "../images/solar_service.jpg",
    serviceDetails: "solar.html",
  },
];

const products = [
  {
    productName: "CCTV Cameras",
    productDesc: "Eyes everywhere, security everywhere",
    productImage: "../images/camera_product.jpg",
  },
  {
    productName: "Solar Panels",
    productDesc: "Harnessing the power of the sun, for a sustainable future",
    productImage: "../images/solar_product.jpg",
  },
  {
    productName: "Invertor",
    productDesc: "Unlocking the power of energy efficiency",
    productImage: "../images/inverter_product.png",
  },
  {
    productName: "Breakers",
    productDesc: "Ensure electrical safety, save life save property",
    productImage: "../images/breaker_product.jpg",
  },
];

// SETTING UP SERVICES

const myDiv = document.querySelector("#services");
services.forEach((service) => {
  const list = document.createElement("li");

  const Cartdiv = document.createElement("div");
  Cartdiv.setAttribute("class", "project-card");

  const figure = document.createElement("figure");
  figure.setAttribute("class", "card-banner img-holder");
  figure.setAttribute("style", "--width: 416; --height: 429");

  const CartContent = document.createElement("div");
  CartContent.setAttribute("class", "card-content");

  const CartImage = document.createElement("img");
  CartImage.setAttribute("src", service.serviceImage);
  CartImage.setAttribute("width", "416");
  CartImage.setAttribute("height", "429");
  CartImage.setAttribute("loading", "lazy");
  CartImage.setAttribute("class", "img-cover");

  const serviceHeading = document.createElement("h3");
  serviceHeading.setAttribute("class", "h3");

  const serviceType = document.createElement("a");
  serviceType.setAttribute("class", "class-tag");
  serviceType.textContent = service.serviceType;

  const serviceName = document.createElement("a");
  serviceName.setAttribute("href", service.serviceDetails);
  serviceName.setAttribute("class", "card-title");
  serviceName.textContent = service.serviceName;

  serviceHeading.appendChild(serviceName);
  CartContent.appendChild(serviceHeading);
  CartContent.appendChild(serviceType);
  figure.appendChild(CartImage);
  Cartdiv.appendChild(figure);
  Cartdiv.appendChild(CartContent);

  list.appendChild(Cartdiv);
  myDiv.appendChild(list);
});

// SETTING UP PRODUCTS

const myDivtwo = document.querySelector("#product-list");
products.forEach((product) => {
  const list = document.createElement("li");
  const article = document.createElement("article");
  article.setAttribute("class", "product-item");

  const div = document.createElement("div");
  div.setAttribute("class", "product-image-container");

  const image = document.createElement("img");
  image.setAttribute("class", "project-image");
  image.setAttribute("src", product.productImage);

  const divInfo = document.createElement("div");
  divInfo.setAttribute("class", "product-info");

  const Heading = document.createElement("h2");
  Heading.textContent = product.productName;

  const description = document.createElement("p");
  description.textContent = product.productDesc;

  divInfo.appendChild(Heading);
  divInfo.appendChild(description);

  div.appendChild(image);
  div.appendChild(divInfo);
  article.appendChild(div);
  list.appendChild(article);
  myDivtwo.appendChild(list);

  console.log("end");
});

