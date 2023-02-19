const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imageGallery = document.querySelector(".gallery");
imageGallery.classList.add("list");
let markup = "";

images.forEach((image) => {
  image.width = 1260;
  image.height = 750;

  let galleryItem = document.createElement("li");
  let galleryImage = document.createElement("img");
  
  galleryImage.setAttribute("src", image.url);
  galleryImage.setAttribute("alt", image.alt);
  galleryImage.setAttribute("width", image.width);
  galleryImage.setAttribute("height", image.height);  

  markup += `<${galleryItem.localName}><${galleryImage.localName} src="${galleryImage.src}" alt="${galleryImage.alt}" width="${galleryImage.width}" height="${galleryImage.height}"/></${galleryItem.localName}>`; 
});
imageGallery.insertAdjacentHTML("afterbegin", markup);
