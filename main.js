//Navbar arkaplan değişimi için:

window.onscroll = function() {   
    const navbar = document.getElementById("navbar-container"); //navbarımı idsinden yakaladım
    
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");  // Sayfa 50 piksel veya daha fazla aşağı kaydırıldığında 'scrolled' sınıfı eklenicek
    } else {
        navbar.classList.remove("scrolled");
    }
};


//Hamburger Menu:

const navHamburger = document.querySelector(".nav-hamburger");
const btnToggleNavHamburger = document.querySelector(".btn-toggle-nav-hamburger");

btnToggleNavHamburger.addEventListener("click", handleToggleNavHamburger);

function handleToggleNavHamburger(e){
    navHamburger.classList.toggle("expanded");
}




//OUR CLASSES'ta butonların dersleri göstermesi için:

// Tüm class butonlarını seçelim
const buttons = document.querySelectorAll('.class-btn');
// Tüm ders içeriklerini seçelim
const classInfos = document.querySelectorAll('.class-info');

// Her butona event listener ekleyelim
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Öncelikle tüm dersleri gizleyelim
    classInfos.forEach(info => info.style.display = 'none');
    
    // Tıklanan butondaki data-class değerine göre ilgili dersi gösterelim
    const className = button.getAttribute('data-class');
    document.getElementById(className).style.display = 'flex'; // Flex yapısında olduğundan dolayı 'flex' dedik.

    // Tüm butonlardan ok işaretini kaldıralım
    buttons.forEach(btn => btn.classList.remove('active'));

    // Tıklanan butona 'active' sınıfını ekleyelim
    button.classList.add('active');
  });
});

//BMI Calculator

// Kilo ve boy giriş alanlarını yakaladık
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');

// Fotoğraf ve ok işaretini seçiyoz
const imageContainer = document.querySelector('.image-container');
const arrowUp = document.querySelector('.arrow-up');

// BMI hesaplama fonksiyonu
function calculateBMI() {
    const height = heightInput.value;
    const weight = weightInput.value;

    // Hem kilo hem de boy bilgisi varsa hesapla
    if (height && weight) {
        const heightInMeters = height / 100; // cm'yi metreye çeviriyoruz
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2); // BMI hesaplaması
        
        
         if (bmi < 18.5) {
            moveArrow('underweight'); // Ok işaretini zayıf pozisyona taşır
        } else if (bmi >= 18.5 && bmi <= 24.99) {
            moveArrow('normal'); // Ok işaretini normal pozisyona taşır
        } else if (bmi >= 25 && bmi <= 29.99) {
            moveArrow('overweight'); // Ok işaretini kilolu pozisyona taşır
        } else if (bmi >= 30 && bmi <= 35) {
            moveArrow('obese'); // Ok işaretini obez pozisyona taşır
        } else {
            moveArrow('extremely_obese'); // Ok işaretini aşırı obez pozisyona taşır
        }

    }   
}

// Ok işaretini BMI sonucuna göre konumlandırma fonksiyonum
function moveArrow(bmiCategory) {
    switch(bmiCategory) {
        case 'underweight':
            arrowUp.style.left = '15%'; // Zayıf durumda
            arrowUp.style.top = '100%'; // Alt konum
            break;
        case 'normal':
            arrowUp.style.left = '32%'; // Normal durumda
            arrowUp.style.top = '100%'; // Orta konum
            break;
        case 'overweight':
            arrowUp.style.left = '50%'; // Kilolu durumda
            arrowUp.style.top = '100%'; // Üst konum
            break;
        case 'obese':
            arrowUp.style.left = '67%'; // Obez durumda
            arrowUp.style.top = '100%'; // Alt konum
            break;
        case 'extremely_obese':
            arrowUp.style.left = '82%'; // Aşırı obez durumda
            arrowUp.style.top = '100%'; // Sağ ortada
            break;
    }
}

// Giriş alanlarında değişiklik olduğunda BMI hesaplamasını tetikliyoruz
heightInput.addEventListener('input', calculateBMI);
weightInput.addEventListener('input', calculateBMI);

