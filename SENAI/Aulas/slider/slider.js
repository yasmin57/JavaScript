// Constantes

const $next = document.getElementById("next");
const $prev = document.getElementById("prev");

//Faz o array das imagens
const loadImages = () => {
    const arrImg = [];
    for(let i = 1; i <= 10; i++){
        arrImg.push(`./img/imagem (${i}).jpg`);
    }
    return arrImg
}

const insertSlide = (arr, $el) => {
    // map - retorna um novo array ~com os indices <img src='${img}
    // .join - faz com que cada indice seja separado por espaço e juntado em uma string
    const htmlImg = arr.map(img =>`<img class="images" src='${img}' >`).join(" ");


    const $container = document.getElementById("container");
    const $containerImages = document.createElement("div"); //Cria uma div
    $containerImages.id = "containerImages"; //coloca um id na div
    $containerImages.innerHTML = htmlImg;
    $container.insertBefore($containerImages, $el); //cria antes do next/el
}

const next = () => {
    const $img = document.querySelectorAll(".images");
    let marginLeft = $img[0].style.marginLeft.replace("vw", "");
    const max = (50 * ($img.length-1))*-1;
    marginLeft = marginLeft == max ? 0: marginLeft - 50; 
    $img[0].style.marginLeft = `${ marginLeft}vw`;
}

const prev = () => {
    const $img = document.querySelectorAll(".images");
    const max = (50 * ($img.length-1))*-1;

    let marginLeft = parseInt($img[0].style.marginLeft.replace("vw", ""));
    marginLeft += marginLeft == 0 ? max : 50;
    
    $img[0].style.marginLeft = `${ marginLeft}vw`;
  
}

insertSlide(loadImages(), $next);

$next.addEventListener("click", next);
$prev.addEventListener("click", prev);

